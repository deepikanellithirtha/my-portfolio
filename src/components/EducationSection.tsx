"use client";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Mangalore Institute of Technology & Engineering",
      duration: "2020 - 2024",
      description: "Achieved a strong CGPA of 9.33, focusing on software development, database management, and web technologies.",
      delay: "delay-[0ms]"
    },
    {
      degree: "Senior Secondary",
      institution: "St. Joseph's PU College, Bajpe",
      duration: "2019 - 2020",
      description: "Completed with 87.33%, with a focus on science and mathematics.",
      delay: "delay-[150ms]"
    },
    {
      degree: "SSLC",
      institution: "Mukthi Prakash High School, Neerude",
      duration: "2017 - 2018",
      description: "Graduated with 93.12%, establishing a strong academic foundation.",
      delay: "delay-[300ms]"
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Fast Entrance */}
        <div className="text-left mb-20 animate-in fade-in slide-in-from-left-10 duration-700">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative inline-block group tracking-tighter">
            Education
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm italic">
            My academic background
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Subtle Vertical Line */}
          <div className="absolute left-0 md:left-[41px] top-0 bottom-0 w-px bg-black/10 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative pl-0 md:pl-24 animate-in fade-in slide-in-from-bottom-10 fill-mode-both ${edu.delay} duration-700 group`}
              >
                {/* Academic Icon Block */}
                <div className="absolute left-0 md:left-0 top-0 z-10 hidden md:flex items-center justify-center">
                  <div className="w-[84px] h-[84px] bg-black rounded-3xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-purple-900 border-4 border-white/20">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-[40px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/50 relative overflow-hidden">
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter leading-tight group-hover:text-purple-900 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-black font-bold text-lg opacity-70 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {edu.institution}
                      </p>
                    </div>
                    
                    {/* Snappy Date Badge */}
                    <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-2xl text-xs font-black tracking-widest uppercase shadow-lg self-start transition-transform group-hover:scale-110 group-hover:-rotate-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      {edu.duration}
                    </div>
                  </div>

                  {/* Description - Strict Black Text */}
                  <div className="relative pl-6 border-l-2 border-black/10">
                    <p className="text-black font-bold text-lg leading-relaxed italic opacity-80">
                      &quot;{edu.description}&quot;
                    </p>
                  </div>

                  {/* High-Momentum Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-black group-hover:w-full transition-all duration-700 rounded-tr-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;