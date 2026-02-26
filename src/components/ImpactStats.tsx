import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, active]);

  return count;
}

const StatCard = ({ stat, active }: { stat: typeof stats[0]; active: boolean }) => {
  const count = useCountUp(stat.value, active);
  return (
    <div className="text-center p-6">
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-white/60 text-sm font-medium">{stat.label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 section-dark border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
