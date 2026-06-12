import Image from "next/image";
import { projectData, rankedSlugs } from "@/lib/projectData";
import { ProjectList } from "@/components/ProjectList";

const experience = [
  { role: "Incoming Software Engineer Intern", org: "GM" },
  {
    role: "Summer Research Student",
    org: "Learning Systems & Robotics Lab, TUM",
  },
  { role: "Simulation Engineer", org: "aUToronto" },
  { role: "Software Engineer Intern", org: "Bosda" },
  { role: "AI & Data Consulting Intern", org: "PwC" },
  { role: "Head of Strategy & Robotics Software Engineer", org: "FRC Team 610" },
];

const links = [
  { label: "email", href: "mailto:xuyiyi0516@gmail.com" },
  { label: "github", href: "https://github.com/yiyixuu" },
  { label: "linkedin", href: "https://www.linkedin.com/in/yiyi-xuu/" },
];

export default function Home() {
  const projects = rankedSlugs.map((slug) => ({
    slug,
    title: projectData[slug].title,
    description: projectData[slug].description,
  }));

  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <header className="rise flex items-center gap-5">
        <Image
          src="/images/headshot.jpeg"
          alt="Yiyi Xu"
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-medium">
            Yiyi Xu <span className="font-normal text-[color:var(--faint)]">· 徐义一</span>
          </h1>
          <p className="text-[color:var(--muted)]">
            Robotics + AI @ University of Toronto
          </p>
        </div>
      </header>

      <div
        className="rise mt-10 space-y-4 text-[17px] leading-relaxed"
        style={{ animationDelay: "100ms" }}
      >
        <p>
          I&apos;m a student at the University of Toronto studying{" "}
          <a
            href="https://engsci.utoronto.ca/program/what-is-engsci/"
            target="_blank"
            rel="noopener noreferrer"
            className="quiet-link"
          >
            Engineering Science
          </a>
          , majoring in Robotics Engineering and minoring in Artificial
          Intelligence. This summer I&apos;m in Munich working on LLMs and drone
          swarms at the Learning Systems &amp; Robotics Lab at TUM, and this fall
          I&apos;m joining GM as a software engineering intern.
        </p>
        <p>
          Outside of that: poker, volleyball, the NBA, F1, and DJing.
        </p>
      </div>

      <section className="rise mt-14" style={{ animationDelay: "200ms" }}>
        <h2 className="section-label mb-4">Projects</h2>
        <ProjectList projects={projects} initial={5} />
      </section>

      <section className="rise mt-14" style={{ animationDelay: "300ms" }}>
        <h2 className="section-label mb-4">Experience</h2>
        <ul className="space-y-1.5">
          {experience.map((item) => (
            <li key={item.org}>
              {item.role}{" "}
              <span className="text-[color:var(--muted)]">· {item.org}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer
        className="rise mt-16 border-t border-[color:var(--rule)] pt-6"
        style={{ animationDelay: "400ms" }}
      >
        <p className="font-sans text-sm text-[color:var(--muted)]">
          {links.map((link, i) => (
            <span key={link.label}>
              {i > 0 && " · "}
              <a
                href={link.href}
                className="quiet-link"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </footer>
    </main>
  );
}
