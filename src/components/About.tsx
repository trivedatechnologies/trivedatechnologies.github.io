import { Target, Lightbulb, Shield } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    desc: "Delivering measurable outcomes with data-driven strategies and meticulous execution.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Leveraging cutting-edge technologies to create transformative digital experiences.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "Building lasting partnerships through transparency, reliability, and enterprise-grade security.",
  },
];

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          About Us
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Transforming Businesses Through <span className="gradient-text">Digital Excellence</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Triveda Technologies is a modern technology and digital transformation company
          specializing in enterprise-grade software solutions, AI-driven automation, and
          scalable cloud infrastructures. We help organizations transform digitally with
          innovation, precision, and strategic execution — from concept to deployment and beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="text-center p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5">
              <p.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
