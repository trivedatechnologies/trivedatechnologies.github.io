import { Landmark, ShoppingCart, HeartPulse, GraduationCap, Factory, Plane } from "lucide-react";

const industries = [
  { icon: Landmark, name: "Financial Services", desc: "Digital banking, risk analytics, regulatory compliance, and fintech platforms." },
  { icon: ShoppingCart, name: "Retail & E-commerce", desc: "Omnichannel commerce, inventory intelligence, and personalized customer journeys." },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", desc: "EHR systems, telemedicine, clinical analytics, and HIPAA-compliant solutions." },
  { icon: GraduationCap, name: "Education & EdTech", desc: "LMS platforms, adaptive learning, virtual classrooms, and student analytics." },
  { icon: Factory, name: "Manufacturing & Logistics", desc: "IoT-driven operations, supply chain optimization, and predictive maintenance." },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking engines, revenue management, and AI-powered guest experiences." },
];

const Industries = () => (
  <section className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Industries
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Industries <span className="gradient-text">We Serve</span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          Domain expertise across sectors that demand digital excellence.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-6xl mx-auto">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="flex-none w-72 snap-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
              <ind.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display font-semibold text-white text-lg mb-2">{ind.name}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{ind.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
