"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea"; 
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { handleContactForm } from "@/app/actions";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    try {
      const result = await handleContactForm(formData);
      if (result?.success) {
        setStatus("success");
        formElement.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "deepikanellithirtha@gmail.com",
      link: "mailto:deepikanellithirtha@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "7204887492",
      link: "tel:+917204887492" 
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Nellithirtha, Karnataka, India",
      link: "https://maps.app.goo.gl/wvUndutAXZfm7hAy6?g_st=aw" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] min-h-[80vh] flex items-center relative overflow-hidden">
      
      <div className="container mx-auto px-6 w-full relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-2 relative group inline-block tracking-tighter">
            Get In Touch
            <div className="w-16 h-2 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/60 text-lg mt-4 font-bold uppercase tracking-widest text-sm">Let&apos;s build something great together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.3em] mb-8 flex items-center">
                <span className="w-8 h-[2px] bg-black/20 mr-4"></span>
                Direct Channels
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="flex items-center gap-6 group">
                    {/* Replaced custom float with Tailwind's bounce for stability */}
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gray-900">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-black/40 text-[10px] uppercase tracking-widest mb-1">{info.title}</h4>
                      <p className="text-black font-black text-lg">
                        {info.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.3em] mb-8 flex items-center">
                <span className="w-8 h-[2px] bg-black/20 mr-4"></span>
                Social Links
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, url: "https://linkedin.com/in/deepika-nellithirtha" },
                  { icon: Github, url: "https://github.com/deepikanellithirtha" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url} 
                    target="_blank" 
                    className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 shadow-xl hover:-translate-y-2 group"
                  >
                    <social.icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="p-10 bg-white/30 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[48px]">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-black tracking-tighter">Send a Message</h3>
              <p className="text-black/50 font-bold text-sm mt-2">I&apos;ll get back to you within 24 hours.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                  className="bg-white/50 border-none h-16 rounded-2xl focus:bg-white text-black font-bold placeholder:text-black/30 px-6 ring-1 ring-black/5 focus:ring-2 focus:ring-black" 
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="bg-white/50 border-none h-16 rounded-2xl focus:bg-white text-black font-bold placeholder:text-black/30 px-6 ring-1 ring-black/5 focus:ring-2 focus:ring-black" 
                />
                <Textarea 
                  name="message" 
                  placeholder="How can I help you?" 
                  rows={5} 
                  required 
                  className="bg-white/50 border-none rounded-3xl focus:bg-white text-black font-bold placeholder:text-black/30 p-6 ring-1 ring-black/5 focus:ring-2 focus:ring-black resize-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className={`w-full h-16 font-black text-lg rounded-full transition-all shadow-2xl flex items-center justify-center gap-3 ${
                  status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-black hover:bg-gray-900 text-white hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? "Sending..." : status === 'success' ? "Message Sent!" : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;