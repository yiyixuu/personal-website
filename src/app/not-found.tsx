"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MainNav } from "@/components/nav/MainNav";
import { Footer } from "@/components/footer/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-zinc-400 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button className="bg-white text-black hover:bg-zinc-200 rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
