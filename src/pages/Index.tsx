import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import ImpactStats from "@/components/ImpactStats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About />
      <ServicesOverview />
      <WhyChoose />
      <ImpactStats />
      <Industries />
      <ContactForm />
    </main>
    <Footer />
    <FloatingElements />
  </div>
);

export default Index;
