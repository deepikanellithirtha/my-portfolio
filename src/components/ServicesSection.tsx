"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Monitor, Smartphone, Database, Cloud, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building robust and scalable applications using Java and other technologies to meet your business requirements.",
      delay: "delay-[0ms]"
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Creating responsive, user-friendly interfaces with HTML and CSS that provide an excellent user experience.",
      delay: "delay-[100ms]"
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Developing feature-rich Android applications with Java and XML, integrated with Firebase for backend services.",
      delay: "delay-[200ms]"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing, implementing, and optimizing databases with MySQL to ensure efficient data storage and retrieval.",
      delay: "delay-[300ms]"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Deploying and managing scalable cloud infrastructure and services to ensure high availability and performance.",
      delay: "delay-[400ms]"
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description: "Providing expert advice on software architecture, technology stack selection, and implementation strategies.",
      delay: "delay-[500ms]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Animation */}
        <div className="text-left mb-16 animate-in fade-in slide-in-from-left-10 duration-500 ease-out">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative inline-block group tracking-tighter">
            Services
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-black uppercase tracking-widest text-sm">
            Specialized solutions I offer to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative bg-white/40 backdrop-blur-md border-white/20 shadow-xl transition-all duration-300 rounded-[32px] overflow-hidden
              hover:-translate-y-3 hover:shadow-purple-500/20 hover:bg-white/60
              animate-in fade-in zoom-in-95 fill-mode-both ${service.delay} duration-500 ease-out`}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:rotate-12 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-black transition-colors duration-300 group-hover:text-white" />
                </div>
                <CardTitle className="text-black text-xl font-black tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black/70 text-sm font-bold leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action Section with ZOOM IN/OUT Pulse */}
        <div className="animate-pulse-subtle">
          <div className="bg-black rounded-[40px] p-10 md:p-16 text-left relative overflow-hidden group shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">
                Need a custom solution?
              </h3>
              <p className="text-white/70 mb-10 max-w-2xl text-lg font-bold">
                Have a unique project in mind? Let&apos;s discuss how I can help bring your vision to life with tailored software solutions.
              </p>
              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-black hover:bg-[#a78bfa] hover:text-white font-black px-10 py-8 rounded-2xl transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 text-lg"
              >
                Get Started Now
              </Button>
            </div>
            
            {/* Animated background blobs */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;