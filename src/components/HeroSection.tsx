"use client";
import { useEffect, useState } from "react";
import { Code2, Palette, Database, Cloud, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const skills = [
    {
      role: "Java Developer",
      tagline: "Building robust, scalable backend architectures.",
      icon: <Code2 className="w-6 h-6 text-black" />,
      accent: "bg-amber-400"
    },
    {
      role: "Web Designer",
      tagline: "Creating intuitive and responsive user experiences.",
      icon: <Palette className="w-6 h-6 text-black" />,
      accent: "bg-cyan-400"
    },
    {
      role: "SQL Enthusiast",
      tagline: "Optimizing data flow and relational management.",
      icon: <Database className="w-6 h-6 text-black" />,
      accent: "bg-emerald-400"
    },
    {
      role: "Cloud Computing",
      tagline: "Deploying scalable infrastructure and services.",
      icon: <Cloud className="w-6 h-6 text-black" />,
      accent: "bg-violet-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] relative overflow-hidden flex items-center pt-20">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="text-left space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black text-white text-[10px] font-black uppercase tracking-[0.3em]">
              Portfolio 2026
            </div>
            
            <h1 className="text-7xl lg:text-9xl font-black text-black tracking-tighter leading-none">
              Deepika
            </h1>

            <div className="h-28 flex flex-col justify-center">
              <div key={currentTitle} className="animate-in slide-in-from-bottom-2 fade-in duration-300">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${skills[currentTitle].accent} flex items-center justify-center shadow-lg transition-colors`}>
                    {skills[currentTitle].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-black italic leading-tight">
                      {skills[currentTitle].role}
                    </h2>
                    <p className="text-black/60 font-bold text-sm tracking-wide">
                      {skills[currentTitle].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-black/80 font-medium leading-relaxed text-xl border-l-4 border-black pl-6">
              "Architecting robust software solutions with a focus on clean code, 
              scalable cloud infrastructure, and seamless user experiences."
            </p>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-black transition-all hover:bg-gray-900 hover:gap-6 active:scale-95 shadow-2xl"
            >
              Explore My Work <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT: Straight & Elegant Floating Frame */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Animated Glow: Pulsing behind the straight photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-400/20 rounded-full blur-[120px] animate-pulse"></div>
          
          {/* Main Floating Container */}
          <div className="relative z-10 animate-float">
            {/* The Frame: Perfectly straight, no tilt */}
            <div className="w-[320px] h-[420px] md:w-[400px] md:h-[520px] bg-white p-4 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-[30px] overflow-hidden group">
                <img 
                  src="https://i.postimg.cc/4xvTJ808/Deepika-Photo.jpg" 
                  alt="Deepika" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Availability Badge */}
            <div className="absolute -bottom-6 -right-6 p-5 bg-black text-white rounded-[28px] shadow-2xl border-4 border-[#f3f4ff]">
               <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Available 2026</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;