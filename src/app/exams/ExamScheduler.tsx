"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import examTermData from "@/lib/examData/w25.json";
import { buildIcsCalendar, displayCourseCode, filterCoursesByLastName } from "@/lib/examMatching";
import type { ExamTermData } from "@/lib/examTypes";

const termData = examTermData as ExamTermData;

type CourseOption = {
  course: string;
  label: string;
};

function formatLastPulled(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Toronto",
  });
}

function formatExamDateTime(date: string, time: string): string {
  // No timeZone option: we want to display the wall-clock exam time as-is
  // (it's already America/Toronto local time), not convert it to whatever
  // zone the visitor's browser happens to be in.
  const dateTime = new Date(`${date}T${time}`);
  const datePart = dateTime.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timePart = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${datePart} · ${timePart}`;
}

export function ExamScheduler() {
  const [lastName, setLastName] = useState("");
  const [firstInitial, setFirstInitial] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const courseOptions = useMemo<CourseOption[]>(() => {
    const seen = new Map<string, CourseOption>();
    for (const exam of termData.exams) {
      if (!seen.has(exam.course)) {
        seen.set(exam.course, {
          course: exam.course,
          label: `${displayCourseCode(exam.course)} — ${exam.courseTitle}`,
        });
      }
    }
    return Array.from(seen.values()).sort((a, b) => a.course.localeCompare(b.course));
  }, []);

  const filteredOptions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return courseOptions
      .filter((option) => !selectedCourses.has(option.course))
      .filter((option) => option.label.toLowerCase().includes(query))
      .slice(0, 8);
  }, [search, courseOptions, selectedCourses]);

  const selectedOptions = courseOptions.filter((option) => selectedCourses.has(option.course));

  const trimmedLastName = lastName.trim();
  const hasInputs = trimmedLastName.length > 0 && selectedCourses.size > 0;

  const previewExams = useMemo(() => {
    if (!hasInputs) return [];
    const examsForSelectedCourses = termData.exams.filter((exam) =>
      selectedCourses.has(exam.course),
    );
    return filterCoursesByLastName(
      examsForSelectedCourses,
      trimmedLastName,
      firstInitial.trim() || undefined,
    ).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  }, [hasInputs, trimmedLastName, firstInitial, selectedCourses]);

  const unmatchedCourses = useMemo(() => {
    if (!hasInputs) return [];
    const matchedCourses = new Set(previewExams.map((exam) => exam.course));
    return selectedOptions.filter((option) => !matchedCourses.has(option.course));
  }, [hasInputs, previewExams, selectedOptions]);

  function addCourse(course: string) {
    setSelectedCourses((prev) => new Set(prev).add(course));
    setSearch("");
  }

  function removeCourse(course: string) {
    setSelectedCourses((prev) => {
      const next = new Set(prev);
      next.delete(course);
      return next;
    });
  }

  function handleGenerate() {
    setError(null);

    if (!trimmedLastName || selectedCourses.size === 0) {
      setError("Please enter your last name and select at least one course.");
      return;
    }

    if (previewExams.length === 0) {
      setError(
        "No exam rooms matched your surname for the selected courses. Double-check your last name, or try adding your first initial.",
      );
      return;
    }

    const ics = buildIcsCalendar(previewExams, trimmedLastName);
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${trimmedLastName.toLowerCase()}_final_exams_${termData.term.toLowerCase()}.ics`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <nav className="rise font-sans text-sm">
        <Link href="/" className="quiet-link text-[color:var(--muted)]">
          ← home
        </Link>
      </nav>

      <h1 className="rise mt-10 text-3xl font-medium" style={{ animationDelay: "100ms" }}>
        Exam Calendar Export Tool
      </h1>

      <p
        className="rise mt-6 text-sm leading-relaxed text-[color:var(--muted)]"
        style={{ animationDelay: "160ms" }}
      >
        This tool provides exam schedules based on the latest pulled data. It might
        not function correctly for last names right on a room-split boundary. Please
        always cross-check with the{" "}
        <a
          href="https://app.powerbi.com/groups/me/reports/b497d2ec-e0c4-425d-811e-0fe79b28d68d/ReportSection?experience=power-bi"
          className="quiet-link"
          target="_blank"
          rel="noreferrer"
        >
          official registrar page
        </a>{" "}
        to ensure accuracy. I am not liable for your missed exams!
      </p>

      <p
        className="rise mt-3 font-sans text-xs text-[color:var(--faint)]"
        style={{ animationDelay: "200ms" }}
      >
        Last data pulled: {formatLastPulled(termData.lastPulled)} · {termData.label}
      </p>

      <div className="rise mt-10 space-y-6" style={{ animationDelay: "240ms" }}>
        <div className="flex gap-4">
          <label className="flex-1 font-sans text-sm">
            <span className="mb-1.5 block text-[color:var(--muted)]">Last name</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="e.g. Xu"
              className="w-full border-b border-[color:var(--rule)] bg-transparent py-2 font-serif text-base outline-none focus:border-[color:var(--ink)]"
            />
          </label>
          <label className="w-28 font-sans text-sm">
            <span className="mb-1.5 block text-[color:var(--muted)]">
              First initial
            </span>
            <input
              type="text"
              value={firstInitial}
              onChange={(e) => setFirstInitial(e.target.value)}
              placeholder="optional"
              maxLength={2}
              className="w-full border-b border-[color:var(--rule)] bg-transparent py-2 font-serif text-base outline-none focus:border-[color:var(--ink)]"
            />
          </label>
        </div>
        <p className="-mt-3 font-sans text-xs text-[color:var(--faint)]">
          Only needed if your surname is split across two exam rooms for a course.
        </p>

        <div className="relative font-sans text-sm">
          <span className="mb-1.5 block text-[color:var(--muted)]">
            Select courses to export
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by course code or title…"
            className="w-full border-b border-[color:var(--rule)] bg-transparent py-2 font-serif text-base outline-none focus:border-[color:var(--ink)]"
          />
          {filteredOptions.length > 0 && (
            <ul className="absolute z-10 mt-1 max-h-64 w-full overflow-y-auto border border-[color:var(--rule)] bg-[color:var(--paper)] shadow-sm">
              {filteredOptions.map((option) => (
                <li key={option.course}>
                  <button
                    type="button"
                    onClick={() => addCourse(option.course)}
                    className="block w-full px-3 py-2 text-left hover:bg-[color:var(--rule)]"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedOptions.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <li
                key={option.course}
                className="flex items-center gap-2 border border-[color:var(--rule)] px-3 py-1 font-sans text-xs"
              >
                {option.label}
                <button
                  type="button"
                  onClick={() => removeCourse(option.course)}
                  aria-label={`Remove ${option.label}`}
                  className="text-[color:var(--muted)] hover:text-[color:var(--ink)]"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {selectedCourses.size > 0 && (
          <div className="font-sans text-sm">
            <span className="mb-1.5 block text-[color:var(--muted)]">
              Your exam schedule preview
            </span>
            {!trimmedLastName ? (
              <p className="text-xs text-[color:var(--faint)]">
                Enter your last name above to preview your exam schedule.
              </p>
            ) : previewExams.length > 0 ? (
              <ul className="divide-y divide-[color:var(--rule)] border border-[color:var(--rule)]">
                {previewExams.map((exam) => (
                  <li key={`${exam.course}-${exam.date}-${exam.time}`} className="px-3 py-2">
                    <div>
                      {displayCourseCode(exam.course)} — {exam.courseTitle}
                    </div>
                    <div className="text-xs text-[color:var(--muted)]">
                      {formatExamDateTime(exam.date, exam.time)} · {exam.location}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-[color:var(--faint)]">
                No exam rooms matched your surname for the selected courses yet.
              </p>
            )}
            {previewExams.length > 0 && unmatchedCourses.length > 0 && (
              <p className="mt-2 text-xs text-red-600">
                No matching exam room found for:{" "}
                {unmatchedCourses.map((option) => option.label).join(", ")}.
              </p>
            )}
          </div>
        )}

        {error && <p className="font-sans text-sm text-red-600">{error}</p>}

        <button
          type="button"
          onClick={handleGenerate}
          disabled={!trimmedLastName || selectedCourses.size === 0 || previewExams.length === 0}
          className="quiet-link font-sans text-sm text-[color:var(--ink)] disabled:cursor-not-allowed disabled:text-[color:var(--faint)] disabled:no-underline"
        >
          Download calendar file →
        </button>
      </div>

      <p className="rise mt-16 text-center font-sans text-xs text-[color:var(--faint)]" style={{ animationDelay: "280ms" }}>
        Made by Yiyi Xu, NΨ 2T7 😎
      </p>
    </main>
  );
}
