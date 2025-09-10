import { Navbar } from "@/components/ui/navbar";
import { useEffect } from "react";
import { SEOHead } from "@/components/ui/seo-head";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Brandweave - Get AI Brand Intelligence Insights"
        description="Contact the Brandweave team to learn how generative AI portrays your brand. Get expert consultation on AI brand optimization and strategy."
        keywords="contact brandweave, AI brand consultation, brand analysis, generative AI insights, brand strategy"
        canonicalUrl="https://lovable.dev/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Brandweave",
          "description": "Get in touch with Brandweave for AI brand intelligence insights"
        }}
      />
      <Navbar />
      <BreadcrumbNav />
      <div className="pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe data-tally-src="https://tally.so/embed/3xogVJ?alignLeft=1&transparentBackground=1&dynamicHeight=1" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0} title="Contact form" className="min-h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;