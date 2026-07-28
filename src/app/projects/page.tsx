import Link from "next/link";
import { projectData, getProjectUrl, rankedSlugs } from "@/lib/projectData";

export const metadata = {
  // The root layout appends "· Yiyi Xu".
  title: "Projects",
  description: "Things Yiyi Xu has built",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "Projects · Yiyi Xu",
    description: "Things Yiyi Xu has built",
    url: "/projects/",
    type: "website",
  },
};

export default function ProjectsPage() {
  const projects = rankedSlugs.map(
    (slug) => [slug, projectData[slug]] as const,
  );

  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <nav className="rise font-sans text-sm">
        <Link href="/" className="quiet-link text-[color:var(--muted)]">
          ← home
        </Link>
      </nav>

      <h1
        className="rise mt-10 text-3xl font-medium"
        style={{ animationDelay: "100ms" }}
      >
        Projects
      </h1>

      <ul className="mt-8 space-y-1.5">
        {projects.map(([slug, project], i) => (
          <li
            key={slug}
            className="rise project-row"
            style={{ animationDelay: `${160 + i * 40}ms` }}
          >
            <Link href={getProjectUrl(slug)} className="quiet-link">
              {project.title}
            </Link>{" "}
            <span className="text-[color:var(--muted)]">
              <span className="project-dash" aria-hidden="true" />
              {project.description}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
