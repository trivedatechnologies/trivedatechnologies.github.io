import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">T</span>
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight">
              TRIVEDA<span className="gradient-text ml-1">TECHNOLOGIES</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="gradient-bg border-0 text-white hover:opacity-90">
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
          <div className="md:hidden pb-4 space-y-3 border-t border-border/50 pt-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </button>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="gradient-bg border-0 text-white w-full">
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
