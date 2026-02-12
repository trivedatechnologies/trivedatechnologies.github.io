import { Link } from "react-router-dom";
import {
  Monitor,
  Layers,
  BrainCircuit,
  Megaphone,
  Gift,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Technology & Digital Solutions",
    desc: "Custom software, web & mobile apps, cloud migration, and enterprise-grade integrations.",
  },
  {
    icon: Layers,
    title: "End-to-End Project Implementation",
    desc: "From requirement gathering to go-live — agile execution, vendor management, and managed services.",
  },
  {
    icon: BrainCircuit,
    title: "AI, Data & Advanced Analytics",
    desc: "Machine learning, predictive analytics, BI dashboards, chatbots, and intelligent automation.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    desc: "Performance marketing, SEO, social media, content strategy, and conversion optimization.",
  },
  {
    icon: Gift,
    title: "Rewards, Loyalty & Engagement",
    desc: "Loyalty programs, gamification, referral platforms, and CRM-integrated engagement solutions.",
  },
  {
    icon: Heart,
    title: "Customer Experience Transformation",
    desc: "Journey mapping, CX strategy, omnichannel design, personalization, and retention management.",
  },
];

const ServicesOverview = () => (
  <section id="services" className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-4 md:px-6">
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
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
        >
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesOverview;
