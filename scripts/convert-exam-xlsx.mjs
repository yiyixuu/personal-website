// Converts a Registrar exam-schedule Excel export into the JSON format
// src/app/exams consumes. Run once per term:
//
//   node scripts/convert-exam-xlsx.mjs <path-to-xlsx> <term-slug> <term-label> [lastPulled-iso]
//
// Example:
//   node scripts/convert-exam-xlsx.mjs ~/Downloads/dataW25.xlsx w25 "Winter 2025"
//
// If lastPulled-iso is omitted, the current time is used.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import XLSX from "xlsx";

const [xlsxPath, termSlug, termLabel, lastPulledArg] = process.argv.slice(2);

if (!xlsxPath || !termSlug || !termLabel) {
  console.error(
    "Usage: node scripts/convert-exam-xlsx.mjs <path-to-xlsx> <term-slug> <term-label> [lastPulled-iso]",
  );
  process.exit(1);
}

const workbook = XLSX.readFile(resolve(xlsxPath), { cellDates: true });
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });

function formatDate(dateValue) {
  // cellDates:true gives a JS Date anchored at the cell's stored day; read
  // its UTC fields so the reading machine's local timezone can't shift the
  // calendar day.
  const y = dateValue.getUTCFullYear();
  const m = String(dateValue.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dateValue.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatTime(timeValue) {
  // Excel stores time-only cells as a fraction of a day. When the cell has
  // an explicit date/time number format, cellDates:true turns it into a
  // Date anchored at 1899-12-30 whose UTC hours/minutes/seconds are the
  // wall-clock time we want. When the cell has no such format (the case in
  // this Registrar export), it comes through as the raw fractional number
  // instead, so compute the same fields directly from that fraction.
  let totalSeconds;
  if (timeValue instanceof Date) {
    totalSeconds =
      timeValue.getUTCHours() * 3600 +
      timeValue.getUTCMinutes() * 60 +
      timeValue.getUTCSeconds();
  } else {
    totalSeconds = Math.round(timeValue * 86400);
  }
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const exams = [];
let skippedRows = 0;
for (const row of rows) {
  const course = row["Course"];
  const date = row["Date"];
  // Drop footer/filter-note rows (e.g. "Applied filters: ...") that carry
  // no usable date, instead of assuming a fixed number of trailing rows.
  if (!date || !(date instanceof Date)) {
    // A row with no Course at all is an expected blank/footer row; a row
    // that DOES have a Course but no valid Date is unexpected (either the
    // known "Applied filters: ..." footer note, or genuinely malformed
    // data) — flag it so a broken export doesn't silently lose rows.
    if (course) {
      console.warn(`Skipping row with Course="${course}" but no valid Date.`);
    }
    skippedRows++;
    continue;
  }

  const time = row["Time"];
  let timeStr;
  if (time instanceof Date || typeof time === "number") {
    timeStr = formatTime(time);
  } else {
    console.warn(
      `Course "${course}" on ${formatDate(date)} has an unrecognized Time value (${JSON.stringify(time)}); defaulting to 00:00:00 — check this exam's time manually.`,
    );
    timeStr = "00:00:00";
  }

  exams.push({
    course: String(course).trim(),
    courseTitle: row["Course Title"] ? String(row["Course Title"]).trim() : "",
    date: formatDate(date),
    time: timeStr,
    location: row["Location"] ? String(row["Location"]).trim() : "",
    surnameRange: row["Surname Range"] ? String(row["Surname Range"]).trim() : "A - Z",
  });
}

if (exams.length === 0) {
  console.error("No exam rows found — check the input file and column names.");
  process.exit(1);
}

if (skippedRows > 0) {
  console.log(`Skipped ${skippedRows} row(s) with no valid Date (see warnings above for any that looked like real data).`);
}

const data = {
  term: termSlug,
  label: termLabel,
  lastPulled: lastPulledArg ?? new Date().toISOString(),
  exams,
};

const outPath = resolve(
  import.meta.dirname,
  "..",
  "src",
  "lib",
  "examData",
  `${termSlug}.json`,
);
writeFileSync(outPath, JSON.stringify(data, null, 2) + "\n");
console.log(`Wrote ${exams.length} exams to ${outPath}`);
