"use client";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "Abhimo Technologies Pvt. Ltd",
      duration: "Jan 2025 - Present",
      description: "Developing Java-based applications, managing SQL databases, handling cloud server deployment and maintenance, and communicating with clients to deliver technical solutions.",
      delay: "delay-[0ms]"
    },
    {
      position: "Software Development Intern",
      company: "A1 Logics",
      duration: "Aug - Sep 2023",
      description: "Worked on software development lifecycle using C#, gaining hands-on experience in development methodologies and practical coding skills.",
      delay: "delay-[150ms]"
    },
    {
      position: "Salesforce Developer Intern",
      company: "Smart Internz",
      duration: "Apr - Jun 2023",
      description: "Gained experience with basic Apex programming, Lightning Web Components, and Salesforce flow development.",
      delay: "delay-[300ms]"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Animation */}
        <div className="text-left mb-20 animate-in fade-in slide-in-from-left-10 duration-500 ease-out">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative inline-block group tracking-tighter">
            Experience
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm">
            Professional journey and career milestones
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-[41px] top-0 bottom-0 w-1 bg-black/10 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative pl-0 md:pl-24 animate-in fade-in slide-in-from-bottom-20 fill-mode-both ${exp.delay} duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group`}
              >
                {/* High-Momentum Icon Box */}
                <div className="absolute left-0 md:left-0 top-0 z-10 hidden md:flex items-center justify-center">
                  <div className="w-[84px] h-[84px] bg-black rounded-[28px] flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-purple-500/50 border-4 border-[#a78bfa]">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[40px] shadow-2xl transition-all duration-300 
                  hover:-translate-y-2 hover:bg-white/70 hover:shadow-purple-500/30 relative overflow-hidden">
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter leading-tight group-hover:text-purple-900 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-purple-900 font-black uppercase text-xs tracking-widest">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase shadow-lg self-start group-hover:scale-105 transition-transform">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex gap-4">
                      <div className="mt-1.5 hidden sm:block">
                        <CheckCircle2 className="w-5 h-5 text-black" />
                      </div>
                      <p className="text-black/80 font-bold text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Momentum Accent Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-black group-hover:w-1/2 transition-all duration-500 rounded-t-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;