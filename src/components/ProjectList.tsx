"use client";

import { useState } from "react";
import Link from "next/link";

type Item = {
  slug: string;
  title: string;
  description: string;
};

export function ProjectList({
  projects,
  initial = 5,
  baseDelay = 240,
}: {
  projects: Item[];
  initial?: number;
  baseDelay?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, initial);
  const remaining = projects.length - initial;

  return (
    <>
      <ul className="space-y-1.5">
        {visible.map((p, i) => (
          <li
            key={p.slug}
            className="rise project-row"
            style={{
              animationDelay: `${
                i < initial ? baseDelay + i * 40 : (i - initial) * 40
              }ms`,
            }}
          >
            <Link href={`/projects/${p.slug}`} className="quiet-link">
              {p.title}
            </Link>{" "}
            <span className="text-[color:var(--muted)]">
              <span className="project-dash" aria-hidden="true" />
              {p.description}
            </span>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="quiet-link mt-4 font-sans text-sm text-[color:var(--muted)]"
        >
          {expanded ? "collapse" : `view more (${remaining})`}
        </button>
      )}
    </>
  );
}
