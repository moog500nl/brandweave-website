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
      answer: "Other vendors operate in the Generative Engine Optimisation space. They offer solutions which estimate visibility in AI answers but ignore things like how an AI model reasons about a brand, and audience simulations."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Common questions about our AI brand evaluation services
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left text-lg md:text-xl font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export { FAQSection };