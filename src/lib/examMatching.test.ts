import { describe, expect, it } from "vitest";
import {
  buildIcsCalendar,
  buildSurnameKey,
  displayCourseCode,
  filterCoursesByLastName,
  matchesSurnameRange,
} from "@/lib/examMatching";
import type { ExamRow } from "@/lib/examTypes";

describe("buildSurnameKey", () => {
  it("uppercases and trims the last name", () => {
    expect(buildSurnameKey("  geiss ")).toBe("GEISS");
  });

  it("appends the first initial when provided", () => {
    expect(buildSurnameKey("Geiss", "d")).toBe("GEISS,D");
  });
});

describe("matchesSurnameRange — real split-surname cases from dataW25.xlsx", () => {
  // "CHAL - GEISS,D" / "GEISS,M - KARA"
  it("no initial defaults to the earlier block", () => {
    const key = buildSurnameKey("Geiss");
    expect(matchesSurnameRange("CHAL - GEISS,D", key)).toBe(true);
    expect(matchesSurnameRange("GEISS,M - KARA", key)).toBe(false);
  });

  it("initial D matches the first block exactly", () => {
    const key = buildSurnameKey("Geiss", "D");
    expect(matchesSurnameRange("CHAL - GEISS,D", key)).toBe(true);
    expect(matchesSurnameRange("GEISS,M - KARA", key)).toBe(false);
  });

  it("initial M matches the second block", () => {
    const key = buildSurnameKey("Geiss", "M");
    expect(matchesSurnameRange("CHAL - GEISS,D", key)).toBe(false);
    expect(matchesSurnameRange("GEISS,M - KARA", key)).toBe(true);
  });

  // "PER - WU,A" / "WU,H - Z"
  it("Wu split by initial A vs H", () => {
    expect(matchesSurnameRange("PER - WU,A", buildSurnameKey("Wu", "A"))).toBe(true);
    expect(matchesSurnameRange("WU,H - Z", buildSurnameKey("Wu", "A"))).toBe(false);
    expect(matchesSurnameRange("PER - WU,A", buildSurnameKey("Wu", "H"))).toBe(false);
    expect(matchesSurnameRange("WU,H - Z", buildSurnameKey("Wu", "H"))).toBe(true);
  });

  it("unrestricted range matches everyone", () => {
    expect(matchesSurnameRange("A - Z", buildSurnameKey("Anyone"))).toBe(true);
  });

  it("missing/malformed range matches everyone (matches original tool's leniency)", () => {
    expect(matchesSurnameRange(null, buildSurnameKey("Anyone"))).toBe(true);
    expect(matchesSurnameRange("", buildSurnameKey("Anyone"))).toBe(true);
    expect(matchesSurnameRange("A", buildSurnameKey("Anyone"))).toBe(true);
  });
});

describe("filterCoursesByLastName", () => {
  const exams: ExamRow[] = [
    {
      course: "APS105H1S",
      courseTitle: "Computer Fundamentals",
      date: "2025-04-15",
      time: "14:00:00",
      location: "GB-144",
      surnameRange: "A - CHAH",
    },
    {
      course: "APS105H1S",
      courseTitle: "Computer Fundamentals",
      date: "2025-04-15",
      time: "14:00:00",
      location: "GB-150",
      surnameRange: "CHAL - GEISS,D",
    },
    {
      course: "APS105H1S",
      courseTitle: "Computer Fundamentals",
      date: "2025-04-15",
      time: "14:00:00",
      location: "MY-030",
      surnameRange: "GEISS,M - KARA",
    },
  ];

  it("returns only the row matching the student's room", () => {
    const result = filterCoursesByLastName(exams, "Geiss", "M");
    expect(result).toHaveLength(1);
    expect(result[0].location).toBe("MY-030");
  });
});

describe("displayCourseCode", () => {
  it("drops the trailing 3-character section suffix", () => {
    expect(displayCourseCode("AER302H1S")).toBe("AER302");
  });
});

describe("buildIcsCalendar", () => {
  const generatedAt = new Date("2025-03-01T00:00:00Z");

  it("produces a well-formed VCALENDAR with escaped, CRLF-terminated content", () => {
    const exams: ExamRow[] = [
      {
        course: "APS420H1S",
        courseTitle: "Technology, Engineering and Global Development",
        date: "2025-04-25",
        time: "14:00:00",
        location: "MY-315",
        surnameRange: "A - Z",
      },
    ];

    const ics = buildIcsCalendar(exams, "Smith", generatedAt);

    expect(ics.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
    expect(ics.endsWith("END:VCALENDAR\r\n")).toBe(true);
    // Comma in the course title must be escaped per RFC 5545.
    expect(ics).toContain("Technology\\, Engineering and Global Development");
    // Location hyphen is stripped, matching the original tool.
    expect(ics).toContain("LOCATION:MY315");
    expect(ics).toContain("UID:APS420H1S-20250425-140000@yiyixu.com");
    expect(ics).toContain("DTSTAMP:20250301T000000Z");
  });

  it("folds long lines to <=75 octets with a space-prefixed continuation", () => {
    const exams: ExamRow[] = [
      {
        course: "MSE120H1S",
        courseTitle: "Materials Engineering, Processing, and Application",
        date: "2025-04-20",
        time: "09:00:00",
        location: "BA-1000",
        surnameRange: "A - Z",
      },
    ];

    const ics = buildIcsCalendar(exams, "Smith", generatedAt);
    const rawLines = ics.split("\r\n");
    const descriptionStart = rawLines.findIndex((line) => line.startsWith("DESCRIPTION:"));

    expect(descriptionStart).toBeGreaterThanOrEqual(0);
    // The DESCRIPTION content line is long enough to require folding, so the
    // very next physical line should be a continuation (a single leading
    // space), and every folded chunk must be <=75 octets.
    expect(rawLines[descriptionStart + 1].startsWith(" ")).toBe(true);
    for (const line of rawLines) {
      expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75);
    }
  });

  it("converts EDT (April, UTC-4) wall time to correct UTC", () => {
    const exams: ExamRow[] = [
      {
        course: "AER302H1S",
        courseTitle: "Aircraft Flight",
        date: "2025-04-17",
        time: "14:00:00",
        location: "BA-2185",
        surnameRange: "A - Z",
      },
    ];
    const ics = buildIcsCalendar(exams, "Smith", generatedAt);
    // 14:00 EDT (UTC-4) => 18:00 UTC
    expect(ics).toContain("DTSTART:20250417T180000Z");
    // +2h30m duration => 20:30 UTC
    expect(ics).toContain("DTEND:20250417T203000Z");
  });

  it("converts EST (December, UTC-5) wall time to correct UTC — DST fixture, not real term data", () => {
    const exams: ExamRow[] = [
      {
        course: "TST100H1F",
        courseTitle: "Fixture Course",
        date: "2025-12-10",
        time: "09:00:00",
        location: "XX-100",
        surnameRange: "A - Z",
      },
    ];
    const ics = buildIcsCalendar(exams, "Smith", generatedAt);
    // 09:00 EST (UTC-5) => 14:00 UTC
    expect(ics).toContain("DTSTART:20251210T140000Z");
  });
});
