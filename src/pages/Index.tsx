import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About />
      <ServicesOverview />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Index;
