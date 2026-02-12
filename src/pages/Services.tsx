import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceCategories } from "@/data/services";
import type { SubService } from "@/data/services";
import { ChevronDown, ChevronUp } from "lucide-react";

const Services = () => {
  const [expandedCat, setExpandedCat] = useState<number | null>(null);
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null);

  const toggleCat = (idx: number) => {
    setActiveSubService(null);
    setExpandedCat((prev) => (prev === idx ? null : idx));
  };

  const openSubService = (sub: SubService) => {
    setActiveSubService(sub);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-dark pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From strategy to execution — we provide end-to-end technology and digital transformation services.
            </p>
          </div>
        </section>

        {/* Service Cards Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {serviceCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => toggleCat(idx)}
                  className={`w-full text-left group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    expandedCat === idx
                      ? "border-primary/30 bg-primary/5 shadow-lg"
                      : "border-border/50 bg-card hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    {expandedCat === idx ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <h2 className="font-display font-semibold text-lg mb-2">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                </button>
              ))}
            </div>

            {/* Expanded Sub-Services Panel */}
            {expandedCat !== null && !activeSubService && (
              <div className="max-w-6xl mx-auto mt-10 p-8 md:p-10 rounded-3xl border border-border/50 bg-card shadow-sm animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  {(() => {
                    const CatIcon = serviceCategories[expandedCat].icon;
                    return (
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <CatIcon className="w-5 h-5 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="font-display text-2xl font-bold">
                      {serviceCategories[expandedCat].title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Click any sub-service to explore in detail
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {serviceCategories[expandedCat].items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => openSubService(item)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-background hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-200 text-left"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Service Detail View */}
            {activeSubService && (
              <div className="max-w-4xl mx-auto mt-10 p-8 md:p-12 rounded-3xl border border-border/50 bg-card shadow-sm">
                <ServiceDetail
                  service={activeSubService}
                  onBack={() => setActiveSubService(null)}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
