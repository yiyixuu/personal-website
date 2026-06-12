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
  return {
    title: project.title,
    description: project.description,
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
