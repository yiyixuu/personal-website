import { projectData, type ProjectSlug } from "@/lib/projectData";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";
import { ProjectDetail } from "./ProjectDetail";
import { notFound } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Collaborator = {
  name: string;
  link?: string;
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
    <div className="h-screen flex flex-col">
      <MainNav />
      <ScrollArea className="flex-1">
        <main className="bg-black pt-16 pb-20">
          <ProjectDetail project={{
            ...project,
            collaborators: project.collaborators?.map((c: Collaborator) => ({
              name: c.name,
              link: c.link || ''
            }))
          }} />
          <Footer />
        </main>
      </ScrollArea>
    </div>
  );
}
