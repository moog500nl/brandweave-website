import { Hero } from "@/components/ui/animated-hero";
import { Navbar } from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
    </div>
  );
};

export default Index;
