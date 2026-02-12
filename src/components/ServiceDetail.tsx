import { ArrowLeft, CheckCircle } from "lucide-react";
import type { SubService } from "@/data/services";

interface ServiceDetailProps {
  service: SubService;
  onBack: () => void;
}

const ServiceDetail = ({ service, onBack }: ServiceDetailProps) => (
  <div className="animate-fade-in">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors mb-8"
    >
      <ArrowLeft className="w-4 h-4" /> Back to sub-services
    </button>

    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
        <service.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-bold">{service.name}</h3>
    </div>

    {/* Summary */}
    <div className="p-6 rounded-2xl gradient-bg-subtle border border-primary/10 mb-8">
      <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-2">
        Executive Summary
      </h4>
      <p className="text-foreground/80 leading-relaxed">{service.summary}</p>
    </div>

    {/* Description */}
    <div className="mb-10">
      <h4 className="font-display font-semibold text-lg mb-3">Description</h4>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>

    {/* Process */}
    <div>
      <h4 className="font-display font-semibold text-lg mb-6">Our Approach</h4>
      <div className="space-y-4">
        {service.process.map((step, i) => (
          <div
            key={step.title}
            className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0 text-white font-display font-bold text-sm">
              {i + 1}
            </div>
            <div>
              <h5 className="font-display font-semibold mb-1">{step.title}</h5>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServiceDetail;
