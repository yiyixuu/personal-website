"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypingAnimation } from "@/components/animations/TypingAnimation";
import { FileText } from "lucide-react";

export function AboutSection() {
  const nameSequence = ["Yiyi Xu", "徐义一"];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/headshot.jpeg"
              alt="Profile picture of Yiyi Xu"
              fill
              className="object-cover object scale-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hey, I'm <span className="text-blue-400"><TypingAnimation words={nameSequence} /></span> 👋
            </h3>

            <div className="flex items-center gap-2 text-zinc-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Toronto, ON
            </div>

            <div className="space-y-4 text-zinc-300">
              <p>
                I'm currently a student at the University of Toronto, studying <a href="https://engsci.utoronto.ca/program/what-is-engsci/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Engineering Science</a>. I'm majoring in Robotics Engineering and minoring in Artificial Intelligence.
              </p>

              <p>
                In my spare time, I like playing poker and volleyball, watching the NBA and F1, and recently I've been learning how to DJ.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Experiences</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>Software Engineer Intern @ Bosda</li>
                  <li>AI & Data Consulting Intern @ PwC</li>
                  <li>Head of Strategy & Robotics Software Engineer @ FRC Team 610</li>
                  <li>Project Lead @ St George Capital (Quant Finance Design Team)</li>
                  <li>8+ Years Programming Experience</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Skills</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>Python, C, Java, JavaScript, TypeScript</li>
                  <li>Fusion 360, Solidworks, OnShape</li>
                  <li>SQL, MATLAB, R</li>
                  <li>MS Office Suite (PowerPoint, Excel, Word)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full 
                  hover:bg-blue-700 transition-colors"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
