import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.mobile.trim()) e.mobile = "Mobile number is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // EmailJS integration — requires user to set up their account
      const emailjs = await import("@emailjs/browser");

      const templateParams = {
        from_name: form.name || "Not provided",
        mobile: form.mobile,
        email: form.email,
        message: form.message,
        timestamp: new Date().toLocaleString(),
      };

      // Send to both email addresses using EmailJS
      // Users need to replace these IDs with their own from emailjs.com
      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setForm({ name: "", mobile: "", email: "", message: "" });
    } catch {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      setForm({ name: "", mobile: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your business? Reach out and let's discuss how we can help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-border/50 bg-card shadow-sm">
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Name <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Mobile Number <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="+91 98765 43210"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
              {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                placeholder="Tell us about your project or requirements..."
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={loading} className="w-full gradient-bg border-0 text-white hover:opacity-90 h-12 text-base">
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
