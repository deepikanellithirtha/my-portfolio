"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use a ref to track the last hash to prevent infinite update loops
  const lastHash = useRef("");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Background Opacity
      setScrolled(window.scrollY > 50);

      // 2. Active Section Detection
      const sections = navLinks.map(link => link.id);
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      let current = "home";

      if (isAtBottom) {
        current = "contact";
      } else {
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Trigger when section is in top 30% of screen
            if (rect.top <= window.innerHeight * 0.3) {
              current = id;
            }
          }
        }
      }

      // 3. Update state only if changed
      if (current !== activeSection) {
        setActiveSection(current);
        
        // Only update history if the hash is actually different to avoid Router errors
        if (lastHash.current !== `#${current}`) {
          lastHash.current = `#${current}`;
          window.history.replaceState(null, "", `#${current}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Including activeSection here is safe now with the lastHash guard

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || isMenuOpen ? "bg-white/80 backdrop-blur-lg shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-black">
          DEEPIKA<span className="text-black/40"></span>
        </a>
        
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative pb-1 ${
                activeSection === link.id ? "text-black" : "text-black/50 hover:text-black"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )}
            </a>
          ))}
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 py-8 px-6 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-black uppercase tracking-widest py-2 border-b border-black/5 ${
                activeSection === link.id ? "text-black" : "text-black/40"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;