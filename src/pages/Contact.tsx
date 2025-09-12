import { Navbar } from "@/components/ui/navbar";
import { useEffect } from "react";
import { SEOHead } from "@/components/ui/seo-head";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Info } from "lucide-react";

// Declare window.calendar for TypeScript
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}
const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const tallyScript = document.createElement('script');
    tallyScript.src = 'https://tally.so/widgets/embed.js';
    tallyScript.async = true;
    document.head.appendChild(tallyScript);

    // Load Google Calendar scheduling CSS
    const calendarCSS = document.createElement('link');
    calendarCSS.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    calendarCSS.rel = 'stylesheet';
    document.head.appendChild(calendarCSS);

    // Load Google Calendar scheduling script
    const calendarScript = document.createElement('script');
    calendarScript.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    calendarScript.async = true;
    document.head.appendChild(calendarScript);

    return () => {
      // Cleanup scripts on unmount
      if (document.head.contains(tallyScript)) {
        document.head.removeChild(tallyScript);
      }
      if (document.head.contains(calendarCSS)) {
        document.head.removeChild(calendarCSS);
      }
      if (document.head.contains(calendarScript)) {
        document.head.removeChild(calendarScript);
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

            {/* Google Calendar Appointment Scheduling */}
            <div className="mt-8 text-center">
              <div 
                id="calendar-button-target"
                ref={(el) => {
                  if (el) {
                    // Initialize calendar button when scripts are loaded
                    const initCalendar = () => {
                      if (window.calendar?.schedulingButton) {
                        window.calendar.schedulingButton.load({
                          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0iKkSKzVcPSXEq31BwiyrbG7-kpBvr9PE3qihKy_W0zh576aBTEt8biXdVHvmVVW5gvkF2hOoJ?gv=true',
                          color: '#EF6C00',
                          label: 'Book an appointment',
                          target: el,
                        });
                      }
                    };

                    // Try to initialize immediately if already loaded
                    if (window.calendar?.schedulingButton) {
                      initCalendar();
                    } else {
                      // Wait for window load event
                      window.addEventListener('load', initCalendar);
                      // Also try with a timeout as fallback
                      setTimeout(initCalendar, 2000);
                    }
                  }
                }}
              />
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