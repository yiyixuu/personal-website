import type { ExamRow } from "@/lib/examTypes";

const EXAM_DURATION_MINUTES = 150; // 2h30m, matching the original tool's assumption
const EXAM_TIMEZONE = "America/Toronto";

/**
 * Builds the sort key used to test a student against a surname range.
 * Matches the Registrar's own boundary encoding ("SURNAME" or
 * "SURNAME,INITIALS"), so comparing keys with plain string comparison
 * composes correctly for ranges split by first initial (e.g.
 * "CHAL - GEISS,D" / "GEISS,M - KARA") instead of needing a special case.
 *
 * `firstInitial` is clamped to 2 characters — the longest initial seen in
 * real Registrar boundary data (e.g. "LEE,JE" / "LEE,JO") — so a caller that
 * accidentally passes a full first name doesn't build a key so long it fails
 * to fall inside any real range.
 */
export function buildSurnameKey(lastName: string, firstInitial?: string): string {
  const surname = lastName.trim().toUpperCase();
  const initial = firstInitial?.trim().toUpperCase().slice(0, 2);
  return initial ? `${surname},${initial}` : surname;
}

/**
 * Tests whether `key` (from buildSurnameKey) falls within a Registrar
 * surname range like "A - Z" or "GEISS,M - KARA". Ranges that aren't a
 * recognizable "X - Y" pair are treated as unrestricted, matching the
 * original tool's behavior for missing/malformed range data.
 */
export function matchesSurnameRange(range: string | null | undefined, key: string): boolean {
  const trimmed = range?.trim();
  if (!trimmed || !trimmed.includes(" - ")) return true;

  const [startRaw, endRaw] = trimmed.split(" - ");
  const start = startRaw.trim().toUpperCase();
  const end = endRaw.trim().toUpperCase();
  return start <= key && key <= end;
}

/**
 * Filters an already course-selected list of exam rows down to the ones
 * whose surname range covers this student.
 */
export function filterCoursesByLastName(
  exams: ExamRow[],
  lastName: string,
  firstInitial?: string,
): ExamRow[] {
  const key = buildSurnameKey(lastName, firstInitial);
  return exams.filter((exam) => matchesSurnameRange(exam.surnameRange, key));
}

/**
 * Drops the trailing 3-character section suffix from a course code for
 * display (e.g. "AER302H1S" -> "AER302"), matching the original tool's
 * course-picker labels. The full code is still used for matching.
 */
export function displayCourseCode(course: string): string {
  return course.length > 3 ? course.slice(0, -3) : course;
}

function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

const utf8Encoder = new TextEncoder();

/** Folds a single unfolded ICS content line to <=75 octets per RFC 5545. */
function foldLine(line: string): string {
  if (utf8Encoder.encode(line).length <= 75) return line;

  const chunks: string[] = [];
  let chunk = "";
  let chunkBytes = 0;

  for (const char of line) {
    const charBytes = utf8Encoder.encode(char).length;
    // The first chunk gets the full 75 octets; continuation chunks lose 1
    // octet to their mandatory leading space.
    const limit = chunks.length === 0 ? 75 : 74;
    if (chunkBytes + charBytes > limit && chunk.length > 0) {
      chunks.push(chunk);
      chunk = "";
      chunkBytes = 0;
    }
    chunk += char;
    chunkBytes += charBytes;
  }
  if (chunk.length > 0) chunks.push(chunk);

  return chunks.join("\r\n ");
}

/**
 * Converts a wall-clock date/time in `timeZone` to a UTC epoch (ms).
 *
 * Approach: treat the wall-clock value as if it were already UTC to get an
 * approximate instant, ask Intl for that zone's UTC offset at that instant,
 * then apply the correction. This two-step approach is safe for exam times
 * because they're never within an hour of a DST transition.
 */
function zonedTimeToUtcMs(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timeZone: string,
): number {
  const approxUtcMs = Date.UTC(year, month - 1, day, hour, minute, second);

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "longOffset",
  }).formatToParts(new Date(approxUtcMs));

  const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
  const match = offsetPart.match(/GMT([+-]\d{2}):?(\d{2})?/);
  const offsetMinutes = match
    ? parseInt(match[1], 10) * 60 + (match[1].startsWith("-") ? -1 : 1) * parseInt(match[2] ?? "0", 10)
    : 0;

  return approxUtcMs - offsetMinutes * 60_000;
}

function toIcsUtcString(epochMs: number): string {
  const d = new Date(epochMs);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

/**
 * Builds a full RFC 5545 .ics calendar string for the given exam rows.
 */
export function buildIcsCalendar(
  exams: ExamRow[],
  lastName: string,
  generatedAt: Date = new Date(),
): string {
  const dtstamp = toIcsUtcString(generatedAt.getTime());

  const lines: string[] = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//yiyixu.com//Exam Calendar Export Tool//EN", "CALSCALE:GREGORIAN"];

  for (const exam of exams) {
    const [year, month, day] = exam.date.split("-").map(Number);
    const [hour, minute, second] = exam.time.split(":").map(Number);
    const startMs = zonedTimeToUtcMs(year, month, day, hour, minute, second, EXAM_TIMEZONE);
    const endMs = startMs + EXAM_DURATION_MINUTES * 60_000;

    const uid = `${exam.course}-${exam.date.replace(/-/g, "")}-${exam.time.replace(/:/g, "")}@yiyixu.com`;
    const location = exam.location.replace(/-/g, "");

    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART:${toIcsUtcString(startMs)}`,
      `DTEND:${toIcsUtcString(endMs)}`,
      `SUMMARY:${escapeIcsText(`${exam.course} Final Exam`)}`,
      `LOCATION:${escapeIcsText(location || "Location not specified")}`,
      `DESCRIPTION:${escapeIcsText(`${exam.courseTitle}\nSurname Range: ${exam.surnameRange}`)}`,
      "END:VEVENT",
    );
  }

  lines.push("END:VCALENDAR");

  return lines.map(foldLine).join("\r\n") + "\r\n";
}
