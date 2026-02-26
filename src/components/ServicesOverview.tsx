import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ServicesOverview = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const location = useLocation();
  const ref = useScrollReveal();

  // Auto-expand first service if navigated with hash #services-expand
  useEffect(() => {
    if (location.hash === "#services-expand") {
      setExpandedIdx(0);
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const toggle = (idx: number) =>
    setExpandedIdx((prev) => (prev === idx ? null : idx));

  return (
    <section id="services" className="py-24 md:py-32 section-dark">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that drive growth, efficiency, and innovation across industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceCategories.map((s, idx) => (
            <div key={s.title}>
              <button
                onClick={() => toggle(idx)}
                className={`w-full text-left group p-8 rounded-2xl border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${
                  expandedIdx === idx
                    ? "border-primary/30 bg-white/10 shadow-lg shadow-primary/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  {expandedIdx === idx ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/40" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </button>

              {expandedIdx === idx && (
                <div className="mt-3 p-6 rounded-2xl border border-white/10 bg-white/[0.03] animate-fade-in">
                  <div className="grid grid-cols-1 gap-2">
                    {s.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-white/70">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            View All Services in Detail <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
