import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Trigger expand via hash
        window.history.replaceState(null, "", "/#services-expand");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    } else {
      navigate("/#services-expand");
    }
  };

  // Animated particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-black text-[12vw] md:text-[10vw] tracking-widest text-white/[0.03] uppercase">
          TRIVEDA
        </span>
      </div>

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
            <span className="gradient-text">Digital Transformation</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Enterprise Software · AI Solutions · Cloud Systems · Secure Scalability
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToServices} size="lg" className="gradient-bg border-0 text-white hover:opacity-90 px-8 h-12 text-base">
              Explore Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white px-8 h-12 text-base"
            >
              Get Consultation
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
