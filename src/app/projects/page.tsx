"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projectData, getProjectUrl, type ProjectSlug } from "@/lib/projectData";

// Convert projectData object to array with slugs
const allProjects = Object.entries(projectData).map(([slug, data]) => ({
  id: slug,
  ...data,
  link: getProjectUrl(slug as ProjectSlug),
}));

export default function ProjectsPage() {
  return (
    <>
      <MainNav />
      <ScrollArea className="min-h-screen">
        <main className="bg-black pt-16 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/"
                scroll={false}
                className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Project Gallery
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore my collection of projects spanning web development, robotics, and more.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${project.color} rounded-2xl overflow-hidden`}
                  >
                    <Link href={project.link}>
                      <div className="p-6 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/70 mb-4">{project.description}</p>
                        
                        <div className="relative h-48 mt-auto overflow-hidden rounded-lg">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            crossOrigin="anonymous"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>

                        <div className="mt-4 flex items-center">
                          <span className="text-white font-medium">View Details</span>
                          <ChevronRight className="h-4 w-4 text-white ml-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </ScrollArea>
      <Footer />
    </>
  );
} 