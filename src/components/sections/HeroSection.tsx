"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden pt-12">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          // src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1932&auto=format&fit=crop"
          src="/images/hero2.png"
          alt="Hero background"
          fill
          priority
          crossOrigin="anonymous"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-3"
        >
          Yiyi Xu
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-zinc-300 mb-8"
        >
          Robotics + AI @ University of Toronto
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#projects">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
              View Projects <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          
          <Link href="#contact">
            <Button variant="outline" className="text-black border-white/20 hover:bg-white/10 rounded-full px-6">
              Contact me <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-zinc-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-zinc-500 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
