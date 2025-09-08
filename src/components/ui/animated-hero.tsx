import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Shield, BarChart, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
          <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            <img 
              src="/lovable-uploads/2c23a529-dea1-4545-b023-fca22c6908aa.png" 
              alt="Google" 
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
            <img 
              src="/lovable-uploads/e41de528-2ee7-4d47-9936-4c53102581b7.png" 
              alt="OpenAI" 
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
            <img 
              src="/lovable-uploads/575ac639-bfc3-44b1-9446-9e02c7dca054.png" 
              alt="Anthropic" 
              className="h-10 opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
            <img 
              src="/lovable-uploads/98bc0703-c6b1-4744-8096-c10f2d75d42b.png" 
              alt="Perplexity" 
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
            <img 
              src="/lovable-uploads/7225d0a5-ceac-438f-a6e3-8acdb41fb8fc.png" 
              alt="Grok" 
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
          
          <div className="mt-32 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              Independent insight for AI brand recommendation
            </h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center mb-16">
              Brandweave gives CMOs an evidence led view of how AI systems perceive, compare, and recommend brands. We reveal blind spots, show where competitors are winning preference, and unpack the reasoning behind AI decisions, then translate findings into board level priorities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Badge variant="outline" className="h-auto p-6 flex items-start gap-4 text-left">
                <Shield className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Independent insight, not tied to SEO, media, or platform agendas
                </div>
              </Badge>
              
              <Badge variant="outline" className="h-auto p-6 flex items-start gap-4 text-left">
                <BarChart className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Evidence led analysis of AI reasoning, perception, and comparisons using proprietary research
                </div>
              </Badge>
              
              <Badge variant="outline" className="h-auto p-6 flex items-start gap-4 text-left">
                <Users className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Customer behaviour focus across journeys and preference formation
                </div>
              </Badge>
              
              <Badge variant="outline" className="h-auto p-6 flex items-start gap-4 text-left">
                <TrendingUp className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  Actionable strategy with board ready recommendations
                </div>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };