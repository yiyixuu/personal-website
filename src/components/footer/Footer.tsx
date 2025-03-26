"use client";

import Link from "next/link";

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
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Projects</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects/project-one" className="hover:text-white transition-colors">Project One</Link></li>
              <li><Link href="/projects/project-two" className="hover:text-white transition-colors">Project Two</Link></li>
              <li><Link href="/projects/project-three" className="hover:text-white transition-colors">Project Three</Link></li>
              <li><Link href="/projects/project-four" className="hover:text-white transition-colors">Project Four</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>yourname@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
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
                  d="M16 8C17.6569 8 19 6.65685 19 5C19 3.34315 17.6569 2 16 2C14.3431 2 13 3.34315 13 5C13 6.65685 14.3431 8 16 8Z"
                  fill="currentColor"
                />
                <path
                  d="M22.1556 11.5555C20.6667 10.0667 18.9 9.2 16.9778 9.15555C14.8333 9.17777 13.2 10.1667 12.1889 10.1667C11.1333 10.1667 9.82222 9.2 8.07778 9.24444C5.74444 9.31111 3.56667 10.6667 2.38889 12.8C-0.0444444 17.1111 1.79999 23.5555 4.13333 27.1111C5.29999 28.8444 6.67778 30.8 8.51111 30.7333C10.2778 30.6667 10.9778 29.6 13.1333 29.6C15.2889 29.6 15.9333 30.7333 17.7778 30.7C19.6667 30.6667 20.8889 28.9111 22.0222 27.1667C23.3889 25.1444 23.9556 23.1667 24 23.0444C23.9556 23 20.2 21.6 20.1778 17.3444C20.1556 13.7778 23.1556 12.1111 23.2889 12.0444C21.6333 9.64444 19.0333 9.33333 18.0889 9.26666C16.1556 9.11111 14.3444 10.3778 13.3 10.3778C12.2111 10.3778 10.7222 9.28889 9.03333 9.28889"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <p className="text-xs">© {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div className="flex text-xs">
            <Link href="/privacy" className="mr-6 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
