import { Hero } from "@/components/ui/animated-hero";
import { Navbar } from "@/components/ui/navbar";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <div className="mt-5">
          <FAQSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
