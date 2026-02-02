"use client"; // <--- ADD THIS LINE AT THE VERY TOP

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      
      <footer className="py-10 bg-slate-50 border-t border-gray-100 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} DEEPIKA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}