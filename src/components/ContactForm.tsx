import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.mobile.trim()) e.mobile = "Mobile number is required.";
    else if (!/^\+?[\d\s-]{7,15}$/.test(form.mobile.trim())) e.mobile = "Enter a valid mobile number.";
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5e1db0ec-496b-4db2-bd57-6ef11cc7b16c",
          subject: "New Website Inquiry - Triveda Technologies",
          from_name: "Triveda Technologies Website",
          name: `${form.firstName} ${form.lastName}`,
          mobile: form.mobile,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting Triveda Technologies. Our team will contact you shortly.",
        });
        setForm({ firstName: "", lastName: "", mobile: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const fieldClass = "text-sm font-medium mb-1.5 block";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your business? Reach out at{" "}
              <a href="mailto:sales@trivedatechnologies.in" className="text-primary font-semibold hover:underline">
                sales@trivedatechnologies.in
              </a>{" "}
              or call{" "}
              <a href="tel:+919973243422" className="text-primary font-semibold hover:underline">
                +91 9973243422
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-border/50 bg-card shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={fieldClass}>First Name <span className="text-destructive">*</span></label>
                <Input placeholder="First name" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
                {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className={fieldClass}>Last Name <span className="text-destructive">*</span></label>
                <Input placeholder="Last name" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
                {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className={fieldClass}>Mobile Number <span className="text-destructive">*</span></label>
              <Input placeholder="+91 99732 43422" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
              {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label className={fieldClass}>Email <span className="text-destructive">*</span></label>
              <Input type="email" placeholder="you@company.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className={fieldClass}>Comment / Requirement <span className="text-destructive">*</span></label>
              <Textarea placeholder="Tell us about your project or requirements..." rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={loading} className="w-full gradient-bg border-0 text-white hover:opacity-90 h-12 text-base">
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending...</>
              ) : (
                <><Send className="w-4 h-4 mr-2" /> Send Message</>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
