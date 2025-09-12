import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Which AI models do you evaluate, and how do you ensure reliability?",
      answer: "We evaluate OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity and Grok. We run a statistically valid number of simulations in order to maximise accuracy."
    },
    {
      id: "item-2", 
      question: "How are you different from other solutions?",
      answer: "Other vendors operate in the 'Generative Engine Optimisation' space, aka GEO. They offer solutions which estimate visibility in AI answers but ignore things like how an AI model reasons about a brand, and audience simulations. We are also not a generalist SEO service because we are specialists in how AI reasons about brands and the strategic implications for your business."
    }    
  ];

  useEffect(() => {
    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let script = document.querySelector('script[data-faq-schema="true"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-faq-schema", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqStructuredData);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[data-faq-schema="true"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Common questions about our services
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left text-lg md:text-xl font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export { FAQSection };