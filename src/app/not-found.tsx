import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <h1 className="rise text-3xl font-medium">404</h1>
      <p
        className="rise mt-4 text-[color:var(--muted)]"
        style={{ animationDelay: "100ms" }}
      >
        There&apos;s nothing here.
      </p>
      <p className="rise mt-8 font-sans text-sm" style={{ animationDelay: "200ms" }}>
        <Link href="/" className="quiet-link text-[color:var(--muted)]">
          ← home
        </Link>
      </p>
    </main>
  );
}
