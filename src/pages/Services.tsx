import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Monitor,
  Layers,
  BrainCircuit,
  Megaphone,
  Gift,
  Heart,
  Compass,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Plug,
  Building,
  Rocket,
  ClipboardList,
  Map,
  GitBranch,
  Users,
  CheckCircle,
  Wrench,
  Zap,
  Brain,
  BarChart3,
  LineChart,
  Database,
  Bot,
  MessageSquare,
  Eye,
  Search,
  Share2,
  Palette,
  TrendingUp,
  Target,
  Star,
  Gamepad2,
  ArrowLeftRight,
  Handshake,
  Route,
  Settings,
  LayoutGrid,
  UserCheck,
  Sparkles,
  AudioLines,
  Repeat,
  Briefcase,
  Lightbulb,
  PieChart,
  Cpu,
  Cog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: { icon: LucideIcon; name: string }[];
}

const categories: ServiceCategory[] = [
  {
    icon: Monitor,
    title: "Technology & Digital Solutions",
    desc: "Foundational technology services powering your digital infrastructure.",
    items: [
      { icon: Code, name: "Custom Software Development" },
      { icon: Globe, name: "Web Application Development" },
      { icon: Smartphone, name: "Mobile App Development" },
      { icon: Cloud, name: "Cloud Solutions & Migration" },
      { icon: Plug, name: "API Development & Integration" },
      { icon: Building, name: "Enterprise Application Development" },
      { icon: Rocket, name: "SaaS Product Development" },
    ],
  },
  {
    icon: Layers,
    title: "End-to-End Project Implementation",
    desc: "Full lifecycle project execution from concept to post-deployment support.",
    items: [
      { icon: ClipboardList, name: "Requirement Gathering & Solution Design" },
      { icon: Map, name: "Project Planning & Roadmapping" },
      { icon: GitBranch, name: "Agile & Waterfall Execution" },
      { icon: Users, name: "Vendor & Stakeholder Management" },
      { icon: CheckCircle, name: "Go-Live & Post-Implementation Support" },
      { icon: Wrench, name: "Managed Services & AMC" },
      { icon: Zap, name: "Digital Transformation Programs" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI, Data & Advanced Analytics",
    desc: "Unlock business value through intelligent automation and data-driven insights.",
    items: [
      { icon: Brain, name: "AI & Machine Learning Solutions" },
      { icon: BarChart3, name: "Predictive Analytics & Forecasting" },
      { icon: LineChart, name: "Business Intelligence Dashboards" },
      { icon: Database, name: "Data Engineering & Warehousing" },
      { icon: Cpu, name: "AI-Powered Automation (RPA)" },
      { icon: Bot, name: "Chatbots & Conversational AI" },
      { icon: MessageSquare, name: "Recommendation Engines" },
      { icon: Eye, name: "Computer Vision & NLP Solutions" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth Solutions",
    desc: "Revenue-focused marketing strategies and performance optimization.",
    items: [
      { icon: Target, name: "Performance Marketing (Google, Meta, LinkedIn)" },
      { icon: Search, name: "Search Engine Optimization (SEO)" },
      { icon: Share2, name: "Social Media Marketing" },
      { icon: Zap, name: "Marketing Automation" },
      { icon: Palette, name: "Content Strategy & Branding" },
      { icon: TrendingUp, name: "Conversion Rate Optimization (CRO)" },
      { icon: PieChart, name: "Funnel & Growth Analytics" },
    ],
  },
  {
    icon: Gift,
    title: "Rewards, Loyalty & Engagement Platforms",
    desc: "Build lasting customer relationships through innovative engagement solutions.",
    items: [
      { icon: Star, name: "Loyalty Program Design & Strategy" },
      { icon: Gift, name: "Rewards & Incentive Platforms" },
      { icon: Heart, name: "Customer Engagement Solutions" },
      { icon: Gamepad2, name: "Gamification Systems" },
      { icon: ArrowLeftRight, name: "Referral & Cashback Programs" },
      { icon: Handshake, name: "Partner & Channel Loyalty Solutions" },
      { icon: Plug, name: "CRM & Loyalty Integration" },
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience Transformation",
    desc: "Design and optimize every touchpoint of the customer journey.",
    items: [
      { icon: Route, name: "Customer Journey Mapping" },
      { icon: Compass, name: "CX Strategy & Consulting" },
      { icon: LayoutGrid, name: "Omnichannel Experience Design" },
      { icon: Settings, name: "CRM Implementation & Optimization" },
      { icon: UserCheck, name: "Personalization & Customer Insights" },
      { icon: AudioLines, name: "Experience Analytics & Voice of Customer" },
      { icon: Repeat, name: "Retention & Lifecycle Management" },
    ],
  },
  {
    icon: Compass,
    title: "Consulting & Strategy",
    desc: "Strategic advisory services for enterprises and high-growth startups.",
    items: [
      { icon: Briefcase, name: "Digital & Technology Consulting" },
      { icon: Lightbulb, name: "Product Strategy & GTM Advisory" },
      { icon: BarChart3, name: "Data & Analytics Consulting" },
      { icon: Sparkles, name: "Martech & Adtech Consulting" },
      { icon: Cog, name: "Process Optimization & Automation" },
      { icon: Rocket, name: "Startup & Enterprise Advisory" },
    ],
  },
];

const Services = () => (
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

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          {categories.map((cat, idx) => (
            <div key={cat.title} className={`${idx % 2 === 1 ? "gradient-bg-subtle rounded-3xl p-8 md:p-12" : ""}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{cat.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{cat.desc}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
