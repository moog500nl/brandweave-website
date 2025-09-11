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
    },
    {
      id: "item-3",
      question: "What insights do major research firms provide about AI shopping behavior?",
      answer: "According to <a href='https://www.adyen.com/knowledge-hub/retail-report' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Adyen's 2025 Retail Report</a>, 37% of consumers already use AI to assist with shopping, and 53% of those use it to research products. <a href='https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-age-of-ai-how-artificial-intelligence-is-transforming-business' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>McKinsey research</a> shows AI is fundamentally changing how consumers discover and evaluate brands."
    },
    {
      id: "item-4",
      question: "How do AI models like ChatGPT and Google Bard impact brand visibility?",
      answer: "AI language models are becoming primary search interfaces for consumers. <a href='https://openai.com/chatgpt' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>ChatGPT</a> and <a href='https://bard.google.com' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Google Bard</a> don't just provide information - they make recommendations and comparisons that directly influence purchase decisions. Understanding how these systems perceive your brand is crucial for future marketing success."
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