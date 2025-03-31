"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectData, getProjectUrl, ProjectSlug } from "@/lib/projectData";

const projects = Object.entries(projectData)
  .filter(([_, data]) => data.featured)
  .map(([slug, data]) => ({
    id: slug,
    ...data,
    link: getProjectUrl(slug as ProjectSlug),
  }));

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
            >
              View Project Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            View All Projects
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
