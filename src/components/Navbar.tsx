import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "advantages", label: "Advantages" },
  { id: "industries", label: "Industries" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track active section
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 150) current = s.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

 // return (
 //    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-background/60 backdrop-blur-md"} border-b border-border/50`}>
 //      <div className="container mx-auto px-4 md:px-6">
 //        <div className="flex items-center justify-between h-16 md:h-20">
 //          <Link to="/" className="flex items-center gap-2">
 //            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
 //              <span className="text-white font-display font-bold text-lg">T</span>
 //            </div>
 //            <span className="font-display font-bold text-lg md:text-xl tracking-tight">
 //              TRIVEDA<span className="gradient-text ml-1">TECHNOLOGIES</span>
 //            </span>
 //          </Link>
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg shadow-sm"
            : "bg-background/60 backdrop-blur-md"
        } border-b border-border/50`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://preview--trivedatech.lovable.app/assets/triveda-logo-BnyGbIwr.jpg"
                alt="TriVeda Technologies Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
  

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  activeSection === s.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {s.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} size="sm" className="gradient-bg border-0 text-white hover:opacity-90 ml-2">
              Get in Touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-border/50 pt-4 animate-fade-in">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`block w-full text-left text-sm font-medium px-3 py-2 rounded-lg ${
                  activeSection === s.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} size="sm" className="gradient-bg border-0 text-white w-full mt-2">
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
