"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const allProjects = [
  {
    id: 1,
    title: "Project One",
    description: "A showcase of modern web development.",
    imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=870&auto=format&fit=crop",
    link: "/projects/project-one",
    color: "bg-indigo-950"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Pushing design boundaries with innovation.",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    link: "/projects/project-two",
    color: "bg-zinc-900"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Seamless user experiences through code.",
    imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=962&auto=format&fit=crop",
    link: "/projects/project-three",
    color: "bg-blue-950"
  },
  {
    id: 4,
    title: "Project Four",
    description: "Innovative solutions for modern problems.",
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop",
    link: "/projects/project-four",
    color: "bg-gray-900"
  }
  // Add more projects here
];

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