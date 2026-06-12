import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    imageUrl: string;
    technologies: string[];
    role?: string;
    link?: string;
    linkText?: string;
    collaborators?: {
      name: string;
      link?: string;
    }[];
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 md:py-24">
      <nav className="rise font-sans text-sm">
        <Link href="/" className="quiet-link text-[color:var(--muted)]">
          ← home
        </Link>
      </nav>

      <header className="rise mt-10" style={{ animationDelay: "100ms" }}>
        <h1 className="text-3xl font-medium">{project.title}</h1>
        <p className="mt-2 text-lg text-[color:var(--muted)]">
          {project.description}
        </p>
      </header>

      <div
        className="rise mt-6 space-y-1 font-sans text-sm text-[color:var(--muted)]"
        style={{ animationDelay: "200ms" }}
      >
        {project.collaborators && project.collaborators.length > 0 && (
          <p>
            With —{" "}
            {project.collaborators.map((c, i) => (
              <span key={c.name}>
                {i > 0 && ", "}
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quiet-link"
                  >
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </span>
            ))}
          </p>
        )}
        {project.technologies.length > 0 && (
          <p>Built with — {project.technologies.join(", ")}</p>
        )}
        {project.link && project.linkText && (
          <p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              {project.linkText} ↗
            </a>
          </p>
        )}
      </div>

      {project.imageUrl && (
        <div className="rise mt-8" style={{ animationDelay: "300ms" }}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1280}
            height={720}
            className="w-full rounded border border-[color:var(--rule)]"
          />
        </div>
      )}

      {project.fullDescription && (
        <article
          className="rise mt-10 text-[17px] leading-relaxed"
          style={{ animationDelay: "400ms" }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ children }) => <p className="mb-5">{children}</p>,
              ul: ({ children }) => (
                <ul className="mb-5 ml-5 list-disc space-y-1.5">{children}</ul>
              ),
              h1: ({ children }) => (
                <h1 className="mb-4 mt-10 text-2xl font-medium">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mb-4 mt-10 text-xl font-medium">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-3 mt-8 text-lg font-medium">{children}</h3>
              ),
              strong: ({ children }) => (
                <strong className="font-medium">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  {...(href?.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="quiet-link"
                >
                  {children}
                </a>
              ),
              iframe: ({ node, className, ...props }) => (
                <span className="mb-5 block aspect-video">
                  <iframe
                    className="h-full w-full rounded border border-[color:var(--rule)]"
                    {...props}
                    allowFullScreen
                  />
                </span>
              ),
              img: ({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={typeof src === "string" ? src : undefined}
                  alt={alt ?? ""}
                  className="mb-5 w-full rounded border border-[color:var(--rule)]"
                />
              ),
            }}
          >
            {project.fullDescription}
          </ReactMarkdown>
        </article>
      )}
    </main>
  );
}
