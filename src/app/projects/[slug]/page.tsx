import { projectData, type ProjectSlug } from "@/lib/projectData";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";
import { ProjectDetail } from "./ProjectDetail";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: { [key: string]: string | string[] | undefined }
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
  return (
    <>
      <MainNav />
      <main className="min-h-screen bg-black pt-16 pb-20">
        <ProjectDetail project={{
          ...project,
          collaborators: project.collaborators?.map(c => ({
            name: c.name,
            link: c.link || '' // Ensure link is always a string
          }))
        }} />
      </main>
      <Footer />
    </>
  );
}
