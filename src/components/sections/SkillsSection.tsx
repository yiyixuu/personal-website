"use client";

import { motion } from "framer-motion";
import { Code, Figma, Globe, BarChart, Cpu, Palette } from "lucide-react";

const skills = [
  {
    id: 1,
    name: "Front-End Development",
    description: "Building responsive and performant user interfaces with React, Next.js and TypeScript.",
    icon: Code,
    colorClass: "bg-blue-900/20 text-blue-500"
  },
  {
    id: 2,
    name: "UI/UX Design",
    description: "Creating intuitive and visually appealing designs that enhance user experience.",
    icon: Figma,
    colorClass: "bg-purple-900/20 text-purple-500"
  },
  {
    id: 3,
    name: "Web Performance",
    description: "Optimizing websites for speed, accessibility, and SEO to deliver the best user experience.",
    icon: Globe,
    colorClass: "bg-green-900/20 text-green-500"
  },
  {
    id: 4,
    name: "Data Visualization",
    description: "Translating complex data into clear, interactive visual representations.",
    icon: BarChart,
    colorClass: "bg-amber-900/20 text-amber-500"
  },
  {
    id: 5,
    name: "Technical Architecture",
    description: "Designing scalable and maintainable software architecture for complex applications.",
    icon: Cpu,
    colorClass: "bg-rose-900/20 text-rose-500"
  },
  {
    id: 6,
    name: "Creative Direction",
    description: "Guiding the visual identity and creative elements of digital products.",
    icon: Palette,
    colorClass: "bg-indigo-900/20 text-indigo-500"
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and creative abilities that power my development work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/70 transition-colors"
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${skill.colorClass}`}>
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-zinc-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
