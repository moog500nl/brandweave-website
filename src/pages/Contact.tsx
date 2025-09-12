import { Navbar } from "@/components/ui/navbar";
import { useEffect } from "react";
import { SEOHead } from "@/components/ui/seo-head";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Info } from "lucide-react";
const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const tallyScript = document.createElement('script');
    tallyScript.src = 'https://tally.so/widgets/embed.js';
    tallyScript.async = true;
    document.head.appendChild(tallyScript);

    // Load Cal.com embed script
    const calScript = document.createElement('script');
    calScript.type = 'text/javascript';
    calScript.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "brandweave-60-minute-meeting", {origin:"https://app.cal.com"});
      Cal.ns["brandweave-60-minute-meeting"]("floatingButton", {"calLink":"brandweave/brandweave-60-minute-meeting","config":{"layout":"month_view"},"buttonText":"Find a Time to Chat","buttonColor":"#fca311","buttonTextColor":"#14213d"}); 
      Cal.ns["brandweave-60-minute-meeting"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(calScript);

    return () => {
      // Cleanup scripts on unmount
      if (document.head.contains(tallyScript)) {
        document.head.removeChild(tallyScript);
      }
      if (document.head.contains(calScript)) {
        document.head.removeChild(calScript);
      }
    };
  }, []);
  return <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Brandweave - Get AI Brand Intelligence Insights"
        description="Contact the Brandweave team to learn how generative AI portrays your brand. Get expert consultation on AI brand optimization and strategy."
        keywords="contact brandweave, AI brand consultation, brand analysis, generative AI insights, brand strategy"
        canonicalUrl="https://lovable.dev/contact"
        ogImage="https://lovable.dev/lovable-uploads/28e9b654-0e33-40ae-a0d7-c285832b7bec.png"
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
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with the Brandweave team to learn how generative AI portrays your brand
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe data-tally-src="https://tally.so/embed/3xogVJ?alignLeft=1&transparentBackground=1&dynamicHeight=1" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0} title="Contact form" className="min-h-[600px]" />
            </div>

            {/* Navigation Links */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Info className="w-4 h-4 mr-2" />
                    Learn About Us
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Read Our Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Contact;