"use client";

import Link from "next/link";
import { projectData, getProjectUrl, ProjectSlug } from "@/lib/projectData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-zinc-800/40 text-zinc-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/#skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Projects</h3>
            <ul className="space-y-2 text-sm">
              {Object.entries(projectData)
                .filter(([_, data]) => data.featured)
                .map(([slug, data]) => (
                  <li key={slug}>
                    <Link href={getProjectUrl(slug as ProjectSlug)} className="hover:text-white transition-colors">
                      {data.title}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  View All Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/yiyixuu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/yiyi-xuu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/yiyixuu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>xuyiyi0516@gmail.com</li>
              <li>+1 (647) 918-5596</li>
              <li>Toronto, ON</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/40 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-white mr-2">
              <svg
                className="h-5 w-5"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10.663 23.158 L 7.782 23.158 L 7.782 17.133 L 2.538 8.842 L 5.927 8.842 L 9.296 14.506 L 12.597 8.842 L 15.927 8.842 L 10.663 17.152 L 10.663 23.158 Z  M 19.374 23.158 L 15.907 23.158 L 20.8 15.688 L 16.366 8.842 L 19.745 8.842 L 22.616 13.441 L 25.429 8.842 L 28.778 8.842 L 24.325 15.795 L 29.218 23.158 L 25.731 23.158 L 22.558 18.207 L 19.374 23.158 Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <p className="text-xs">© {currentYear} Yiyi Xu. All rights reserved.</p>
          </div>

          {/* <div className="flex text-xs">
            <Link href="/privacy" className="mr-6 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
