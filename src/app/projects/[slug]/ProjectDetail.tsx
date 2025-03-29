"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
    technologies: string[];
    role: string;
    duration: string;
    link: string;
    color: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <ScrollArea className="min-h-screen">
      <main className="min-h-screen bg-black pt-16 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className={`${project.color} rounded-2xl overflow-hidden p-8 md:p-12`}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden my-8">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                  <p className="text-zinc-300 mb-6">{project.fullDescription}</p>
                </div>

                <div className="bg-black/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400">Role</h4>
                      <p className="text-white">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400">Duration</h4>
                      <p className="text-white">{project.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-black/30 rounded-full text-sm text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400">Project Link</h4>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View Repository
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </ScrollArea>
  );
} 