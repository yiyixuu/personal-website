"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    imageUrl: string;
    technologies: string[];
    role?: string;
    link?: string;
    color: string;
    linkText?: string;
    collaborators?: {
      name: string;
      link?: string;
    }[];
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
              
              <div className="relative h-[300px] md:h-[700px] rounded-xl overflow-hidden my-8">
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
                  {project.fullDescription && (
                    <div className="text-zinc-300">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          p: ({children}) => {
                            // Check if the paragraph contains only images
                            const containsOnlyImages = React.Children.toArray(children).every(
                              child => React.isValidElement(child) && child.type === 'img'
                            );

                            if (containsOnlyImages) {
                              return (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                  {children}
                                </div>
                              );
                            }

                            return (
                              <p className="text-zinc-300 leading-relaxed mb-6">{children}</p>
                            );
                          },
                          ul: ({children}) => (
                            <ul className="list-disc list-outside ml-6 mb-6 space-y-2">{children}</ul>
                          ),
                          li: ({children}) => (
                            <li className="text-zinc-300">{children}</li>
                          ),
                          h1: ({children}) => (
                            <h1 className="text-3xl font-bold text-white mb-8 mt-12">{children}</h1>
                          ),
                          h2: ({children}) => (
                            <h2 className="text-2xl font-bold text-white mb-6 mt-10">{children}</h2>
                          ),
                          h3: ({children}) => (
                            <h3 className="text-1xl font-bold text-white mb-4 mt-8">{children}</h3>
                          ),
                          strong: ({children}) => (
                            <strong className="text-white font-semibold">{children}</strong>
                          ),
                          a: ({href, children}) => (
                            <a 
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline transition-colors"
                            >
                              {children}
                            </a>
                          ),
                          iframe: ({node, ...props}) => (
                            <div className="aspect-video mb-6">
                              <iframe
                                className="w-full h-full rounded-lg"
                                {...props}
                                allowFullScreen
                              />
                            </div>
                          ),
                          img: ({src, alt, className}) => (
                            <img 
                              src={src} 
                              alt={alt} 
                              className={`${className} w-full`}
                            />
                          ),
                        }}
                      >
                        {project.fullDescription}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>

                <div className="bg-black/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    {project.role && (
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400">Role</h4>
                        <p className="text-white">{project.role}</p>
                      </div>
                    )}
                    {project.collaborators && project.collaborators.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400">Collaborators</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.collaborators.map((collaborator) => (
                            collaborator.link ? (
                              <a
                                key={collaborator.name}
                                href={collaborator.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-black/30 rounded-full text-sm text-blue-400 
                                  hover:text-white hover:bg-blue-600 hover:scale-105 
                                  transition-all duration-200 underline underline-offset-2"
                              >
                                {collaborator.name}
                              </a>
                            ) : (
                              <span
                                key={collaborator.name}
                                className="px-3 py-1 bg-black/30 rounded-full text-sm text-white"
                              >
                                {collaborator.name}
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
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
                    )}
                    {project.link && project.linkText && (
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400 mb-2">Project Link</h4>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
                        >
                          {project.linkText}
                          <ExternalLink className="ml-2 h-4 w-4" />
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