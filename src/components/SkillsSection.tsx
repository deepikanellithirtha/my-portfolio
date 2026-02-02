"use client";
import { Award, BarChart3, Code, Database, Monitor, Zap } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Java", percentage: 90, delay: "delay-[0ms]" },
    { name: "SQL/MySQL", percentage: 85, delay: "delay-[50ms]" },
    { name: "HTML/CSS", percentage: 85, delay: "delay-[100ms]" },
    { name: "Python", percentage: 80, delay: "delay-[150ms]" },
    { name: "Web Design", percentage: 75, delay: "delay-[200ms]" },
    { name: "Firebase", percentage: 70, delay: "delay-[250ms]" }
  ];

  const coreCompetencies = [
    {
      icon: Code,
      title: "Java Development",
      description: "Proficient in building robust Java applications with strong OOP principles.",
      delay: "delay-[0ms]"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experience with MySQL, database design and SQL query optimization.",
      delay: "delay-[100ms]"
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Creating responsive interfaces with HTML and CSS.",
      delay: "delay-[200ms]"
    },
    {
      icon: BarChart3,
      title: "Salesforce Basics",
      description: "Experience with Apex, Lightning Web Components and Flow development.",
      delay: "delay-[300ms]"
    },
    {
      icon: Zap,
      title: "Power BI",
      description: "Creating interactive dashboards and data visualizations for business insights.",
      delay: "delay-[400ms]"
    }
  ];

  const certifications = [
    {
      title: "Java Programming",
      provider: "Infosys Springboard",
      description: "Completed comprehensive Java programming course covering core concepts.",
      url: "https://drive.google.com/drive/folders/18n-wvRsa-QBrQvBiA8Ex6XEDO9IWiBEl",
      delay: "delay-[0ms]"
    },
    {
      title: "Web Design",
      provider: "Coursera",
      description: "Certificate in responsive web design principles and modern CSS.",
      url: "https://drive.google.com/drive/folders/1qt9yqJeFaPrWTWAtMtRLCFyZZl3S91AF",
      delay: "delay-[100ms]"
    },
    {
      title: "Google Data Analytics",
      provider: "Google",
      description: "Professional certificate in data analytics and visualization.",
      url: "https://drive.google.com/drive/folders/1QembozFCcuvF2D4HjlX4mr2nnnlU83qe",
      delay: "delay-[200ms]"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-20 animate-in fade-in slide-in-from-left-10 duration-500 ease-out">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative inline-block group tracking-tighter">
            My Skills
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm">
            Technologies and tools I work with
          </p>
        </div>

        {/* Technical Proficiency Bars */}
        <div className="mb-24">
          <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.3em] mb-12 flex items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="w-12 h-[2px] bg-black/20 mr-4"></span>
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {technicalSkills.map((skill, index) => (
              <div key={index} className={`group animate-in fade-in slide-in-from-bottom-10 duration-500 fill-mode-both ${skill.delay}`}>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-black font-black text-xl tracking-tight group-hover:translate-x-3 transition-transform duration-200">{skill.name}</span>
                  <span className="text-black/40 font-black text-xs uppercase tracking-tighter">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-black/5 rounded-full h-4 overflow-hidden border border-white/40 shadow-inner p-[2px]">
                  <div 
                    className="bg-black h-full rounded-full transition-all duration-700 delay-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies Cards */}
        <div className="mb-24">
          <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.3em] mb-12 flex items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="w-12 h-[2px] bg-black/20 mr-4"></span>
            Core Competencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index} 
                className={`p-10 group cursor-default bg-white/30 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl transition-all duration-300 
                hover:-translate-y-4 hover:bg-white/70 hover:shadow-purple-600/30
                animate-in fade-in zoom-in-95 fill-mode-both ${competency.delay} duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                <div className="mb-8 w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-200">
                  <competency.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-black text-2xl font-black mb-4 tracking-tight leading-tight group-hover:text-purple-800 transition-colors">{competency.title}</h4>
                <p className="text-black/60 text-base leading-relaxed font-bold">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Cards */}
        <div className="pb-12">
          <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.3em] mb-12 flex items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="w-12 h-[2px] bg-black/20 mr-4"></span>
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`bg-white/40 backdrop-blur-md p-10 cursor-pointer group transition-all duration-300 border border-white/20 rounded-[40px] shadow-xl 
                hover:-translate-y-4 hover:bg-white hover:shadow-black/20
                animate-in fade-in slide-in-from-bottom-16 fill-mode-both ${cert.delay} duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                onClick={() => window.open(cert.url, '_blank')}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-5 bg-black/5 rounded-2xl group-hover:bg-black transition-all duration-300">
                    <Award className="w-8 h-8 text-black group-hover:text-white group-hover:scale-125 transition-all duration-200" />
                  </div>
                </div>
                <h4 className="text-black text-xl font-black group-hover:text-purple-700 transition-all leading-tight mb-3 tracking-tight">{cert.title}</h4>
                <p className="text-black/40 font-black text-[10px] mb-4 uppercase tracking-[0.2em]">{cert.provider}</p>
                <p className="text-black/60 text-sm font-bold leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;