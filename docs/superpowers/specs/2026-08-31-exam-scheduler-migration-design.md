# Exam Calendar Export Tool: Migration from Streamlit to yiyixu.com/exams

## Background

The "SKULE Exam Calendar Export Tool" currently lives as a standalone Python/Streamlit
app (repo: `examscheduler`, deployed at `skule-exams.streamlit.app`). It lets a UofT
Engineering student enter their last name, pick their courses, and download an `.ics`
calendar file of their final exams, with room assignment resolved by a per-course
surname range (since large courses split exams across multiple rooms alphabetically).

Source data comes from a manually-exported Excel file from the Registrar's Power BI
report, re-uploaded to the repo each term.

This spec covers migrating the tool into the `personal-website` Next.js repo as a
native page at `/exams`, replacing the external Streamlit link on the `/projects/exam-cal`
entry.

## Goals

- Tool runs natively on `yiyixu.com/exams`, no external Streamlit dependency.
- Visual style matches the rest of the site (Tailwind, minimal, `rise` animations,
  `quiet-link`, muted palette, same page shell as `/projects`).
- Fix the known surname-range matching bug (see below).
- Improve UX: searchable course picker, inline validation, mobile-friendly layout.
- Per-term data updates stay a manual, low-effort step (run a script, commit a JSON
  file) — no admin UI, no server, no database.

## Non-goals

- No multi-term switcher UI. Data model should not preclude adding more terms later,
  but no UI work for it now.
- No automated scraping of the Registrar's Power BI report. Data source stays a
  manually-exported Excel file.
- No server/API routes. `personal-website` builds with `output: 'export'` (fully
  static); everything must run client-side in the browser.
- The old `examscheduler` repo and Streamlit deployment are not modified. They become
  historical/archived once `/exams` is live.

## Architecture

All new work happens in the `personal-website` repo.

```
src/app/exams/page.tsx          — route + metadata (server component)
src/app/exams/ExamScheduler.tsx — 'use client' interactive form
src/lib/examData/w25.json       — this term's exam data (checked into git)
src/lib/examTypes.ts            — TS types for exam rows + the data file shape
src/lib/examMatching.ts         — pure functions: course filtering, surname-range
                                   matching, ICS string builder (no React/DOM deps)
scripts/convert-exam-xlsx.mjs   — Node script (xlsx npm package) that converts the
                                   Registrar Excel export into examData/<term>.json
```

`page.tsx` follows the same pattern as `src/app/projects/page.tsx`: a server component
exporting `metadata`, rendering the client component. `ExamScheduler.tsx` holds all
interactive state (last name, optional first initial, selected courses) and triggers
a client-side `Blob` download for the generated `.ics` file — no server round trip,
unlike the Streamlit version's temp-file trick (which only existed because Streamlit
runs server-side).

## Data pipeline

Each term, run:

```bash
node scripts/convert-exam-xlsx.mjs <path-to-xlsx> <term-slug>
```

This reads the same columns the Excel export already has (Course, Course Title, Date,
Time, Location, Surname Range, etc.) and writes `src/lib/examData/<term-slug>.json`.

**Footer rows.** The Registrar's export has trailing summary/filter-note rows with no
course data (e.g. a "Applied filters: ..." row) — the original Python code drops these
with `.iloc[:-2]`. The conversion script must drop any row missing a `Course` or `Date`
value (more robust than a fixed row-count slice, since the footer size isn't guaranteed
stable across exports).

**Excel date/time parsing.** Use the `xlsx` (SheetJS) npm package with `cellDates: true`
when reading the workbook so date cells parse as JS `Date` objects instead of raw day
serials. The `Time` column is a time-only cell (Excel stores it as a fractional-day
serial even with `cellDates: true` giving a `Date` anchored to 1899-12-30) — extract
hours/minutes/seconds from that `Date` object's UTC fields (not local fields, to avoid
the reader machine's timezone leaking in) rather than trying to parse a display string.

**Location field.** The original tool strips hyphens from the location string
(`"BA-2185"` → `"BA2185"`) before writing it into the exam description — this looks
intentional (likely for matching UofT's room-locator app format) and is preserved:
the conversion script stores `location` with the hyphen intact (`"BA-2185"`, matching
the source data), and `buildIcsCalendar` strips the hyphen when writing the ICS
`LOCATION` field, matching current behavior.

Output shape:

```json
{
  "term": "W25",
  "label": "Winter 2025",
  "lastPulled": "2025-02-26T16:49:59-05:00",
  "exams": [
    {
      "course": "AER302H1S",
      "courseTitle": "Aircraft Flight",
      "date": "2025-04-17",
      "time": "14:00:00",
      "location": "BA-2185",
      "surnameRange": "A - Z"
    }
  ]
}
```

The page's "last data pulled" banner reads `lastPulled` directly from this file — no
more manually editing a markdown string each term. Committing the new JSON is the only
step required to roll over to a new term's data.

`examMatching.ts` and `ExamScheduler.tsx` read the JSON via a static import (bundled at
build time, consistent with `output: 'export'`).

## Surname-range matching fix

Inspecting the real data (`dataW25.xlsx`), surname ranges like `"CHAL - GEISS,D"` /
`"GEISS,M - KARA"` show the Registrar splits a shared truncated surname by first
initial when a straight alphabetical range would otherwise put too many students in
one room. The current Streamlit code handles this with a fragile fallback
(`last_name.upper().startswith(end_surname.strip().upper()[0])`) that doesn't
correctly reconstruct the intended split.

Fix: split each range on `" - "` (space-hyphen-space, not a bare `-`, since a bare
split would misparse a boundary that happens to contain a real hyphenated surname —
not present in current data, but not worth risking). Parse each boundary into a
`(surnamePrefix, initials | null)` pair, and
build the same shape from user input (last name + an optional first-initial field).
Compare using a single sort key `SURNAME` or `SURNAME,INITIALS` with plain string
comparison — this is exactly the encoding the Registrar's own ranges use, so it
composes correctly instead of special-casing the tie-break.

The first-initial field is optional in the UI, with a hint like "add this if your
surname is split across two exam rooms." Omitting it defaults to matching the
alphabetically-earlier block when a surname is split (same ambiguity the current tool
has, but the common non-split case is now handled correctly and rigorously instead of
via a heuristic string prefix hack).

`examMatching.ts` exports pure, unit-testable functions:
- `buildSurnameKey(lastName: string, firstInitial?: string): string`
- `matchesSurnameRange(range: string, key: string): boolean`
- `filterCoursesByLastName(exams, lastName, firstInitial?)`
- `buildIcsCalendar(exams, lastName): string` — hand-built ICS `VCALENDAR`/`VEVENT`
  string (no `ics` npm dependency needed). Requirements per RFC 5545, all of which the
  original Python `ics` library handled automatically and must be reproduced by hand
  here:
  - Escape `,`, `;`, and `\` in TEXT properties (`SUMMARY`, `DESCRIPTION`, `LOCATION`)
    as `\,` `\;` `\\`. Not hypothetical — several real course titles in `dataW25.xlsx`
    contain commas (e.g. "Technology, Engineering and Global Development").
  - CRLF (`\r\n`) line endings, with long lines folded at 75 octets (a continuation
    line starts with a single space).
  - Each `VEVENT` includes a `UID` (e.g. `<course>-<date>-<time>@yiyixu.com`, unique
    per exam) and a `DTSTAMP` (calendar generation time, UTC), both required by
    RFC 5545 and expected by real calendar apps even though the original tool omitted
    them without apparent issue.

  Exam start times are in `America/Toronto`, converted to correct UTC using the
  browser's `Intl` API (`Intl.DateTimeFormat` with `timeZoneName: 'longOffset'`, a
  real, broadly-supported API returning a part like `"GMT-04:00"`) so DST is handled
  without a timezone-database dependency. Algorithm: construct a `Date` via
  `Date.UTC(...)` treating the exam's wall-clock date/time as if it were already UTC,
  query `Intl.DateTimeFormat` for the UTC offset at that approximate instant, parse
  the `"GMT±HH:MM"` string into a sign/hours/minutes offset, then subtract that offset
  from the UTC-treated instant to get the true UTC time. This two-step approach is
  safe here because exam times are never within an hour of a DST transition. Exam
  duration remains fixed at 2h30m, matching the current tool's assumption.

## UI/UX

Page shell matches `/projects`: `max-w-[42rem]` container, `rise` fade-in animation,
`← home`-style back link, muted-gray palette, same typography.

Form flow (single term, no switcher):
1. Last name input, optional first-initial input (small, inline, clearly optional)
2. Type-ahead/searchable course picker — filters by course code or title as you type
   (replaces the Streamlit plain multiselect). Displayed course codes drop the
   trailing 3-character section suffix for readability (`"AER302H1S"` → `"AER302"`),
   matching the original tool's display formatting; the full code is still used
   internally for matching.
3. "Generate calendar" button — disabled until last name is non-empty and at least
   one course is selected; inline validation messages instead of a generic top-level
   error banner
4. On generate: filter matching exam rows client-side, build the `.ics` string, and
   trigger a `Blob` download named `<lastname>_final_exams_<term>.ics`
5. Same disclaimer text and link to the official Registrar Power BI report, same
   "Made by Yiyi Xu" footer

Mobile-friendly layout (the Streamlit version is not). No dark/light theme switch
beyond whatever the rest of the site already does.

## Project listing update

`src/lib/projectData.ts`, `exam-cal` entry:
- `link`: `"/exams/"` (was the Streamlit URL)
- `linkText`: unchanged (`"Try it out!"`)
- `technologies`: `["Next.js", "TypeScript"]` (was `["Python", "Streamlit", "Pandas", "ics"]`)
- `fullDescription`: keep the origin story and the Dean-of-Engineering feedback
  anecdote; add a line noting it now runs natively on the site instead of via
  Streamlit.

## Testing

The repo currently has no test runner configured. Add `vitest` as a dev dependency
and a `"test": "vitest run"` script in `package.json`.

- Unit tests for `examMatching.ts`: surname-key building, range matching (including
  the split-surname cases found in the real `dataW25.xlsx` data — `CHAL - GEISS,D` /
  `GEISS,M - KARA` and `PER - WU,A` / `WU,H - Z`), ICS text escaping (a title
  containing a comma), and ICS UTC conversion. Every exam in `dataW25.xlsx` falls in
  April 2025 (EDT), so there's no real-data DST boundary to test against — the DST
  case (verifying an EST-period exam and an EDT-period exam both convert to the
  correct UTC time) uses synthetic fixture dates, not `w25.json`.
- Manual verification in a browser: run the dev server, exercise the full flow
  (search courses, generate and download an `.ics` file, open it in a calendar app),
  check mobile viewport layout.

## Open items explicitly deferred

- Multi-term switcher UI.
- Any change to the manual Excel-export data source workflow.
- Any change to the `examscheduler` repo itself (left as historical archive).
