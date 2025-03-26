import { MainNav } from "@/components/nav/MainNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      <HeroSection />
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      <section id="projects" className="min-h-screen">
        <FeaturedProjects />
      </section>
      <section id="skills" className="min-h-screen">
        <SkillsSection />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
