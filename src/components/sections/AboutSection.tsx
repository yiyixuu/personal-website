"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              alt="Profile"
              fill
              crossOrigin="anonymous"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Hello, I'm <span className="text-blue-400">Your Name</span></h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites.
              </p>

              <p>
                With expertise in modern frameworks and a strong foundation in design principles, I create seamless digital experiences that push the boundaries of what's possible on the web.
              </p>

              <p>
                My approach combines technical precision with creative problem-solving, ensuring that each project not only looks stunning but also performs flawlessly.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Skills</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>React & Next.js</li>
                  <li>UI/UX Design</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Experience</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>5+ Years Development</li>
                  <li>20+ Projects Completed</li>
                  <li>3+ Years Design Work</li>
                  <li>Client-Focused Approach</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
