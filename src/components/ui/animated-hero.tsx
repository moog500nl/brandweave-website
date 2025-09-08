import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import googleLogo from "@/assets/google-logo.png";
import openaiLogo from "@/assets/openai-logo.png";
import anthropicLogo from "@/assets/anthropic-logo.png";
import perplexityLogo from "@/assets/perplexity-logo.png";
import grokLogo from "@/assets/grok-logo.png";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["recommend", "choose", "pick", "suggest", "select"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-muted-foreground">Will AI</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-rotating-text"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-muted-foreground">your brand?</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              We are independent advisors helping CMOs understand and shape how AI perceives, compares and recommend
              their brands.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <Badge variant="outline" className="h-11 px-8 text-sm font-medium">
              Independent
            </Badge>
            <Badge variant="outline" className="h-11 px-8 text-sm font-medium">
              Evidence-led
            </Badge>
            <Badge variant="outline" className="h-11 px-8 text-sm font-medium">
              Strategic
            </Badge>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              Request a Diagnostic <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                "37 percent of consumers already use AI to assist with shopping, and 53 percent use it to research products."
              </p>
            </blockquote>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <img src={googleLogo} alt="Google" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={openaiLogo} alt="OpenAI" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={anthropicLogo} alt="Anthropic" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={perplexityLogo} alt="Perplexity" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={grokLogo} alt="Grok" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };