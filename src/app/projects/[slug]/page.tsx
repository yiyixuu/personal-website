import { projectData, type ProjectSlug } from "@/lib/projectData";
import { ProjectDetail } from "./ProjectDetail";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;

  if (!Object.keys(projectData).includes(slug)) {
    return { title: "Project Not Found" };
  }

  const project = projectData[slug as ProjectSlug];
  // Trailing slash to match `trailingSlash: true` in next.config.
  const url = `/projects/${slug}/`;
  // Fall back to the site card when a project has no image of its own.
  const image = project.imageUrl || "/og.png";

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} · Yiyi Xu`,
      description: project.description,
      url,
      type: "article",
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Yiyi Xu`,
      description: project.description,
      images: [image],
    },
  };
}

export default async function ProjectPage(props: Props) {
  const { slug } = await props.params;

  if (!Object.keys(projectData).includes(slug)) {
    notFound();
  }

  const project = projectData[slug as ProjectSlug];
  return <ProjectDetail project={project} />;
}
