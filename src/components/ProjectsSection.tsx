"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const projects = [
    {
      title: "Breast Tumor Segmentation and Classification",
      date: "Sep 2023 - Apr 2024",
      image: "/breast-tumor-project.jpg",
      technologies: ["Image Processing", "AI", "U-Net architecture"],
      description: "Accurate breast tumor segmentation and classification for early diagnosis using ultrasound images.",
      fullDescription: "This advanced medical imaging project utilizes deep learning techniques with U-Net architecture to automatically detect and classify breast tumors from ultrasound scans with high precision.",
      projectLink: "https://drive.google.com/drive/folders/17-8CkUkLbGpJGnAUTcvO1tfVXWGNK4Jo",
      delay: "delay-[0ms]"
    },
    {
      title: "Food Delivery Application",
      date: "Sep 2021 - Jan 2022",
      image: "/food-delivery-app.jpg",
      technologies: ["Java", "XML", "Firebase"],
      description: "Android-based app allowing users to order food from partner restaurants with real-time tracking.",
      fullDescription: "A full-stack Android application featuring real-time menu browsing, secure checkout, and live order status tracking powered by Firebase integration.",
      projectLink: "https://github.com/deepikanellithirtha/Food-Delivery",
      delay: "delay-[100ms]"
    },
    {
      title: "Employee Management System",
      date: "Mar 2022 - Jun 2022",
      image: "/employee-management-project.jpg",
      technologies: ["Java", "MySQL", "JDBC"],
      description: "Desktop application to manage employees records, attendance, and performance.",
      fullDescription: "Designed to efficiently handle student and staff-related information, this desktop application uses JDBC for seamless MySQL database communication and secure record management.",
      projectLink: "https://github.com/deepikanellithirtha/Employee-Management-System",
      delay: "delay-[200ms]"
    },
    {
      title: "Fuel Delivery Application",
      date: "Jan 2023 - Feb 2023",
      image: "/fuel-delivery-project.jpg",
      technologies: ["Java", "XML", "Firebase"],
      description: "Fuel delivery app enabling convenient online ordering with real-time delivery tracking.",
      fullDescription: "A unique Android-based mobile solution that allows users to order fuel on-demand and track the delivery vehicle directly to their location using real-time GPS coordinates.",
      projectLink: "https://github.com/deepikanellithirtha/Fuel-Delivery",
      delay: "delay-[300ms]"
    }
  ];

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) newExpanded.delete(index);
    else newExpanded.add(index);
    setExpandedProjects(newExpanded);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header Animation */}
          <div className="text-left mb-16 animate-in fade-in slide-in-from-left-10 duration-500 ease-out">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative inline-block group tracking-tighter">
              My Projects
              <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
            </h2>
            <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm">
              Featured work & technical implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-none shadow-2xl transition-all duration-300 group bg-white/40 backdrop-blur-md flex flex-col rounded-[40px]
                hover:-translate-y-4 hover:shadow-purple-600/20 hover:bg-white/60
                animate-in fade-in slide-in-from-bottom-16 fill-mode-both ${project.delay} duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                {/* Image Hover Zoom */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-black/80 backdrop-blur-md p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-purple-900 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-4 py-1 bg-black/5 text-black text-[10px] font-black rounded-full border border-black/5 uppercase tracking-widest group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="min-h-[100px]">
                    <p className="text-black/70 leading-relaxed mb-8 font-bold text-sm">
                      {expandedProjects.has(index) ? project.fullDescription : project.description}
                    </p>
                  </div>

                  {/* Actions Area */}
                  <div className="mt-auto pt-8 flex justify-between items-center border-t border-black/10">
                    <button 
                      onClick={() => toggleExpanded(index)} 
                      className="flex items-center gap-1 text-black hover:text-purple-800 text-xs font-black uppercase tracking-widest transition-colors"
                    >
                      {expandedProjects.has(index) ? (
                        <>Read Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Read More <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                    
                    <Button 
                      className="bg-black hover:bg-purple-900 text-white font-black px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
                      onClick={() => window.open(project.projectLink, '_blank')}
                    >
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}