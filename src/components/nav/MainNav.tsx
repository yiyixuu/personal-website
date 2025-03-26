"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4 md:px-6">
        {/* Logo - Apple-like */}
        <Link href="/" className="text-white">
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
                      d="M16 8C17.6569 8 19 6.65685 19 5C19 3.34315 17.6569 2 16 2C14.3431 2 13 3.34315 13 5C13 6.65685 14.3431 8 16 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.1556 11.5555C20.6667 10.0667 18.9 9.2 16.9778 9.15555C14.8333 9.17777 13.2 10.1667 12.1889 10.1667C11.1333 10.1667 9.82222 9.2 8.07778 9.24444C5.74444 9.31111 3.56667 10.6667 2.38889 12.8C-0.0444444 17.1111 1.79999 23.5555 4.13333 27.1111C5.29999 28.8444 6.67778 30.8 8.51111 30.7333C10.2778 30.6667 10.9778 29.6 13.1333 29.6C15.2889 29.6 15.9333 30.7333 17.7778 30.7C19.6667 30.6667 20.8889 28.9111 22.0222 27.1667C23.3889 25.1444 23.9556 23.1667 24 23.0444C23.9556 23 20.2 21.6 20.1778 17.3444C20.1556 13.7778 23.1556 12.1111 23.2889 12.0444C21.6333 9.64444 19.0333 9.33333 18.0889 9.26666C16.1556 9.11111 14.3444 10.3778 13.3 10.3778C12.2111 10.3778 10.7222 9.28889 9.03333 9.28889"
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
