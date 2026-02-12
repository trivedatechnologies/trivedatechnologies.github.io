import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-black text-[12vw] md:text-[10vw] tracking-widest text-white/[0.03] uppercase">
          TRIVEDA
        </span>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-sm text-white/70">Engineering the Future of Digital</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-white">Engineering Intelligent</span>
            <br />
            <span className="gradient-text">Digital Ecosystems</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            A premium technology consulting and digital transformation partner delivering
            AI-driven, scalable, and enterprise-ready solutions for forward-thinking organizations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-bg border-0 text-white hover:opacity-90 px-8 h-12 text-base">
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white px-8 h-12 text-base"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
