"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4 md:px-6">
        {/* Logo - Custom YX */}
        <Link href="/" className="text-white">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-zinc-950 border-zinc-800">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-white" onClick={() => setIsOpen(false)}>
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
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium text-white py-2 border-b border-zinc-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
