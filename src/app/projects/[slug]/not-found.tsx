import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <h1 className="rise text-3xl font-medium">404</h1>
      <p
        className="rise mt-4 text-[color:var(--muted)]"
        style={{ animationDelay: "100ms" }}
      >
        No such project.
      </p>
      <p className="rise mt-8 font-sans text-sm" style={{ animationDelay: "200ms" }}>
        <Link href="/projects" className="quiet-link text-[color:var(--muted)]">
          ← projects
        </Link>
      </p>
    </main>
  );
}
