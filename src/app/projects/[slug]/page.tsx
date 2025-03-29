import { projectData } from "@/lib/projectData";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";
import { ProjectDetail } from "./ProjectDetail";

export const dynamic = "force-static"; // 👈 THIS IS THE MISSING PIECE

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <MainNav />
      <main className="min-h-screen bg-black pt-16 pb-20">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
