import { Navbar } from "@/components/ui/navbar";
import { useEffect } from "react";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe 
                data-tally-src="https://tally.so/embed/3xogVJ?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Contact form"
                className="min-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;