"use client";

import { motion } from "framer-motion";
import { Code, Database, Terminal, Layout, Cpu, Wrench, FileText, Globe, Settings } from "lucide-react";

const skills = [
  {
    id: 1,
    name: "Core Programming",
    description: "Python, Jupyter Notebook, Java, C, MATLAB, R Studio",
    icon: Code,
    colorClass: "bg-blue-900/20 text-blue-500"
  },
  {
    id: 2,
    name: "Data & Analytics",
    description: "SQL, Pandas, Matplotlib, Numpy, Streamlit",
    icon: Database,
    colorClass: "bg-purple-900/20 text-purple-500"
  },
  {
    id: 3,
    name: "Web Development",
    description: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Shadcn UI",
    icon: Globe,
    colorClass: "bg-green-900/20 text-green-500"
  },
  {
    id: 4,
    name: "Mobile Development",
    description: "React Native, Expo Go",
    icon: Terminal,
    colorClass: "bg-amber-900/20 text-amber-500"
  },
  {
    id: 5,
    name: "DevOps & Tools",
    description: "Git, GitHub, Bash, Supabase, RESTful APIs",
    icon: Settings,
    colorClass: "bg-rose-900/20 text-rose-500"
  },
  {
    id: 6,
    name: "Hardware & Systems",
    description: "SystemVerilog, RISC-V, Circuit Design",
    icon: Cpu,
    colorClass: "bg-indigo-900/20 text-indigo-500"
  },
  {
    id: 7,
    name: "CAD & Design",
    description: "Autodesk Fusion 360, SolidWorks, OnShape",
    icon: Layout,
    colorClass: "bg-teal-900/20 text-teal-500"
  },
  {
    id: 8,
    name: "Documentation",
    description: "LaTeX, Technical Writing, Documentation",
    icon: FileText,
    colorClass: "bg-cyan-900/20 text-cyan-500"
  },
  {
    id: 9,
    name: "Productivity Tools",
    description: "MS Office Suite (Word, Excel, PowerPoint, Teams, PowerBI), Google Suite",
    icon: Wrench,
    colorClass: "bg-zinc-900/20 text-zinc-500"
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
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and development expertise
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
