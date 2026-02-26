import { GraduationCap, ShieldCheck, Zap, Users, Clock, Lock, X } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  {
    icon: GraduationCap,
    title: "IIM & IIT Alumni Leadership",
    short: "Guided by leaders from India's most prestigious institutions.",
    detail: "Our founding team and senior leadership comprises graduates from IIMs and IITs, bringing world-class strategic thinking, technical depth, and a culture of excellence to every engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First Approach",
    short: "Enterprise-grade standards across every deliverable.",
    detail: "We follow rigorous quality assurance methodologies including automated testing, peer code reviews, continuous integration, and adherence to ISO/CMMI-level process frameworks.",
  },
  {
    icon: Zap,
    title: "Startup Agility",
    short: "Move fast without sacrificing quality or governance.",
    detail: "Our lean, cross-functional teams operate with the speed and adaptability of a startup while maintaining the governance, documentation, and compliance standards enterprises demand.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    short: "Your success metrics are our KPIs.",
    detail: "We embed ourselves in your business context, aligning every sprint, design decision, and architecture choice to measurable business outcomes and stakeholder satisfaction.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    short: "On-time, on-budget, every single time.",
    detail: "With Agile sprints, milestone-based tracking, and proactive risk management, we maintain a 98%+ on-time delivery rate across all engagements.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    short: "Security baked in from day one.",
    detail: "We implement OWASP-compliant security practices, data encryption, role-based access controls, and regular vulnerability assessments across all solutions.",
  },
];

const WhyChoose = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="advantages" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Why TriVeda
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">TriVeda Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A partnership built on expertise, agility, and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, idx) => (
            <button
              key={r.title}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="group text-left p-6 rounded-2xl border border-border/50 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {openIdx === idx ? r.detail : r.short}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
