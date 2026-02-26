import { useState } from "react";
import { Landmark, ShoppingCart, HeartPulse, GraduationCap, Factory, Plane, ChevronRight, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const industries = [
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "Digital banking, risk analytics, regulatory compliance, and fintech platforms.",
    detail: {
      challenges: ["Legacy core banking modernization", "Real-time fraud detection at scale", "Regulatory compliance (PCI-DSS, SOX, GDPR)"],
      solutions: ["AI-powered risk scoring engines", "Cloud-native payment platforms", "Automated compliance reporting dashboards"],
      techStack: ["Python / TensorFlow", "AWS / Azure", "Kafka / Spark", "React / Node.js"],
    },
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    desc: "Omnichannel commerce, inventory intelligence, and personalized customer journeys.",
    detail: {
      challenges: ["Unified omnichannel experience", "Dynamic pricing & demand forecasting", "Cart abandonment reduction"],
      solutions: ["Headless commerce platforms", "AI recommendation engines", "Real-time inventory optimization"],
      techStack: ["Next.js / React", "Elasticsearch", "Shopify / Magento APIs", "ML pipelines"],
    },
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    desc: "EHR systems, telemedicine, clinical analytics, and HIPAA-compliant solutions.",
    detail: {
      challenges: ["HIPAA/HITECH compliance", "Interoperability across systems (HL7/FHIR)", "Patient data privacy & security"],
      solutions: ["Telemedicine platforms", "Clinical decision support systems", "Secure data lakes for research analytics"],
      techStack: ["FHIR / HL7", "Azure Health", "Python / R", "React Native"],
    },
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    desc: "LMS platforms, adaptive learning, virtual classrooms, and student analytics.",
    detail: {
      challenges: ["Engagement in remote learning", "Personalized learning paths", "Scalable content delivery"],
      solutions: ["AI-adaptive learning engines", "Virtual classroom infrastructure", "Student performance analytics"],
      techStack: ["WebRTC / Zoom SDK", "React / Flutter", "PostgreSQL", "AWS / GCP"],
    },
  },
  {
    icon: Factory,
    name: "Manufacturing & Logistics",
    desc: "IoT-driven operations, supply chain optimization, and predictive maintenance.",
    detail: {
      challenges: ["Supply chain visibility", "Equipment downtime reduction", "Quality control automation"],
      solutions: ["IoT sensor networks with real-time dashboards", "Predictive maintenance ML models", "Digital twin simulations"],
      techStack: ["IoT Hub / AWS IoT", "Python / TensorFlow", "Power BI", "Kubernetes"],
    },
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Booking engines, revenue management, and AI-powered guest experiences.",
    detail: {
      challenges: ["Dynamic pricing optimization", "Personalized guest experiences", "Multi-channel booking management"],
      solutions: ["AI revenue management systems", "Chatbot concierge services", "Unified reservation platforms"],
      techStack: ["Node.js / Python", "React / Next.js", "Redis / MongoDB", "NLP / GPT APIs"],
    },
  },
];

const Industries = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="industries" className="py-24 md:py-32 section-dark">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Industries
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Domain expertise across sectors that demand digital excellence. Click any industry to explore our approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, idx) => (
            <button
              key={ind.name}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className={`text-left p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 group ${
                expandedIdx === idx
                  ? "border-primary/30 bg-white/10 shadow-lg shadow-primary/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <ChevronRight className={`w-4 h-4 text-white/30 transition-transform duration-300 ${expandedIdx === idx ? "rotate-90 text-primary" : ""}`} />
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{ind.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{ind.desc}</p>
            </button>
          ))}
        </div>

        {/* Expanded detail panel */}
        {expandedIdx !== null && (
          <div className="max-w-6xl mx-auto mt-8 p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {(() => {
                  const Ic = industries[expandedIdx].icon;
                  return (
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <Ic className="w-5 h-5 text-white" />
                    </div>
                  );
                })()}
                <h3 className="font-display text-xl font-bold text-white">{industries[expandedIdx].name}</h3>
              </div>
              <button onClick={() => setExpandedIdx(null)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Challenges Solved</h4>
                <ul className="space-y-2">
                  {industries[expandedIdx].detail.challenges.map((c) => (
                    <li key={c} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Solutions</h4>
                <ul className="space-y-2">
                  {industries[expandedIdx].detail.solutions.map((s) => (
                    <li key={s} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {industries[expandedIdx].detail.techStack.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Industries;
