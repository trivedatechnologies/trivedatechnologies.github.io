import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-white/10 py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-display font-bold">T</span>
            </div>
            <span className="font-display font-bold text-white tracking-tight">
              TRIVEDA TECHNOLOGIES
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Engineering intelligent digital ecosystems for forward-thinking organizations worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-white/40 hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="block text-sm text-white/40 hover:text-white transition-colors">Services</Link>
            
            <div className="flex items-center gap-2 text-sm text-white/20 opacity-50 cursor-not-allowed">
              <Linkedin className="w-4 h-4" /> LinkedIn
            <div> 
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="mailto:sales@trivedatechnologies.com" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> sales@trivedatechnologies.com
            </a>
            <a href="mailto:sales@trivedatechnologies.in" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> sales@trivedatechnologies.in
            </a>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Phone className="w-4 h-4" /> +91 XXXXX XXXXX
            </div>
            <div className="flex items-start gap-2 text-sm text-white/40">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Company address placeholder
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} Triveda Technologies. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
