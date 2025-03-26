"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
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
];

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${project.color} rounded-2xl overflow-hidden`}
            >
              <Link href={project.link}>
                <div className="p-6 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-6">{project.description}</p>
                  </div>

                  <div className="relative h-60 md:h-80 mt-auto overflow-hidden rounded-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      crossOrigin="anonymous"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 flex items-center">
                    <span className="text-white font-medium">Learn more</span>
                    <ChevronRight className="h-4 w-4 text-white ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
