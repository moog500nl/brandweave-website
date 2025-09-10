import { LazyHero } from "@/components/ui/lazy-hero";
import { Navbar } from "@/components/ui/navbar";
import { LazyFAQSection } from "@/components/ui/lazy-faq";
import { SEOHead } from "@/components/ui/seo-head";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Brandweave - AI Brand Intelligence & Generative Engine Optimization"
        description="Discover how generative AI portrays your brand. Get insights into AI model recommendations and optimize your brand presence for the future of AI-powered commerce."
        keywords="AI brand intelligence, generative engine optimization, GEO, AEO, brand analysis, AI recommendations, brand visibility, generative AI"
        canonicalUrl="https://lovable.dev/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Brandweave",
          "description": "AI Brand Intelligence & Generative Engine Optimization platform",
          "url": "https://lovable.dev",
          "logo": "https://lovable.dev/lovable-uploads/bdcaf875-19cf-4b58-8463-5bb642d174b3.png",
          "founders": [
            {
              "@type": "Person",
              "name": "Marenco Kemp"
            },
            {
              "@type": "Person", 
              "name": "Andy Bibby"
            }
          ]
        }}
      />
      <Navbar />
      <div className="pt-16">
        <LazyHero />
        <div className="mt-5 pb-20">
          <LazyFAQSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
