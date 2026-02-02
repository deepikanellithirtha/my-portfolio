"use client";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, MapPin, GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Animation: Fast Slide from Left */}
        <div className="text-left mb-16 animate-in fade-in slide-in-from-left-10 duration-500 ease-out">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative group inline-block tracking-tighter">
            About Me
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text Content with Staggered Slide */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150 fill-mode-both">
            <div className="prose prose-slate">
              <p className="text-black leading-relaxed text-xl font-bold tracking-tight">
                A passionate Computer Science and Engineering graduate with a strong academic foundation and hands-on experience in Java development. 
              </p>
              <p className="text-black/70 leading-relaxed text-lg mt-4 font-bold">
                Specialized in application deployment, server configuration, and technical support, with experience in SSL and domain setup, Oracle Database, and JBoss environments. Known for resolving production issues efficiently and ensuring stable, secure systems while continuously learning new technologies. 
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" download="Deepika_Resume.pdf">
                <Button className="bg-black hover:bg-purple-900 text-white px-8 py-7 rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 text-lg font-black shadow-purple-500/20">
                  <Download className="mr-2 h-6 w-6 animate-bounce" /> Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Info Card */}
          <div className="animate-in fade-in zoom-in-95 duration-700 delay-300 fill-mode-both">
            <div className="p-10 bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group rounded-[40px] hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
              
              <div className="space-y-8 relative z-10">
                {/* Location Item */}
                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-black/10 rounded-2xl text-black group-hover/item:bg-black group-hover/item:text-white group-hover/item:rotate-12 transition-all duration-300">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-black/40 text-xs uppercase tracking-[0.2em] font-black">Location</span>
                    <p className="text-black font-black text-xl tracking-tight">Mangalore, Karnataka</p>
                  </div>
                </div>

                {/* Degree Item */}
                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-black/10 rounded-2xl text-black group-hover/item:bg-black group-hover/item:text-white group-hover/item:-rotate-12 transition-all duration-300">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-black/40 text-xs uppercase tracking-[0.2em] font-black">Degree</span>
                    <p className="text-black font-black text-xl tracking-tight">B.E. Computer Science</p>
                  </div>
                </div>

                {/* CGPA Item */}
                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-black/10 rounded-2xl text-black group-hover/item:bg-black group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300 animate-pulse-slow">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-black/40 text-xs uppercase tracking-[0.2em] font-black">Academic Excellence</span>
                    <p className="text-black font-black text-3xl tracking-tighter">9.33 <span className="text-lg text-black/40">/ 10 CGPA</span></p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-6 pt-8 border-t border-black/10">
                  <a href="https://github.com/deepikanellithirtha" target="_blank" className="p-4 bg-black/5 rounded-2xl hover:bg-black hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/deepika-nellithirtha" target="_blank" className="p-4 bg-black/5 rounded-2xl hover:bg-black hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;