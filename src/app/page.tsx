import Image from "next/image";
import { projectData, rankedSlugs } from "@/lib/projectData";
import { ProjectList } from "@/components/ProjectList";
import { CopyEmail } from "@/components/CopyEmail";

const email = "xuyiyi0516@gmail.com";

// TODO(yiyi): fill in the four empty dates — rows render fine without them,
// but the column looks half-empty until they're set.
const experience = [
  {
    org: "General Motors",
    href: "https://www.gm.com/",
    icon: "/images/organizations/gm.png",
    role: "Software Engineer Intern",
    date: "Fall 2026",
  },
  {
    org: "Learning Systems & Robotics Lab",
    href: "https://www.ce.cit.tum.de/lsy/home/",
    icon: "/images/organizations/lsy.png",
    role: "Summer Research Student",
    date: "Summer 2026",
  },
  {
    org: "Bosda International",
    href: "https://bosda.com/",
    icon: "/images/organizations/bosda.png",
    role: "Software Engineer Intern",
    date: "Summer 2025",
  },
  {
    org: "PwC",
    href: "https://www.pwc.com/",
    icon: "/images/organizations/pwc.png",
    role: "AI & Data Consulting Intern",
    date: "Summer 2024",
  },
];

const links = [
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
          <p className="mt-0.5 flex items-center gap-1.5 font-sans text-sm text-[color:var(--faint)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3.5 w-3.5 flex-none"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Toronto, Ontario, Canada
          </p>
        </div>
      </header>

      <div
        className="rise mt-10 space-y-4 text-[17px] leading-relaxed"
        style={{ animationDelay: "100ms" }}
      >
        <p>
          I&apos;m a student at the{" "}
          <a
            href="https://www.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-org"
          >
            <Image
              src="/images/organizations/uoft.svg"
              alt=""
              aria-hidden="true"
              width={76}
              height={178}
              className="inline-org-mark"
            />
            <span className="quiet-link">University of Toronto</span>
          </a>{" "}
          studying{" "}
          <a
            href="https://engsci.utoronto.ca/program/what-is-engsci/"
            target="_blank"
            rel="noopener noreferrer"
            className="quiet-link"
          >
            Engineering Science
          </a>
          , majoring in Robotics Engineering and minoring in Artificial
          Intelligence. Right now I&apos;m in Munich working on LLMs and drone
          swarms.
        </p>
        <p>
          Outside of that: poker, volleyball, the NBA, F1, and DJing.
        </p>
      </div>

      <section className="rise mt-14" style={{ animationDelay: "200ms" }}>
        <h2 className="section-label mb-4">Experience</h2>
        <ul className="experience-list">
          {experience.map((item) => {
            const org = (
              <>
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="org-mark"
                  />
                ) : (
                  <span className="org-mark" aria-hidden="true" />
                )}
                <span className={item.href ? "quiet-link" : undefined}>
                  {item.org}
                </span>
              </>
            );

            return (
              <li key={item.org} className="experience-row">
                <span className="experience-org">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="org-link"
                    >
                      {org}
                    </a>
                  ) : (
                    <span className="org-link">{org}</span>
                  )}
                </span>
                <span className="experience-role text-[color:var(--muted)]">
                  {item.role}
                </span>
                <span className="experience-date font-sans text-sm text-[color:var(--faint)]">
                  {item.date}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="rise mt-14" style={{ animationDelay: "300ms" }}>
        <h2 className="section-label mb-4">Projects</h2>
        <ProjectList projects={projects} initial={5} />
      </section>


      <footer
        className="rise mt-16 border-t border-[color:var(--rule)] pt-6"
        style={{ animationDelay: "400ms" }}
      >
        <p className="font-sans text-sm text-[color:var(--muted)]">
          <CopyEmail email={email} />
          {links.map((link) => (
            <span key={link.label}>
              {" · "}
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
