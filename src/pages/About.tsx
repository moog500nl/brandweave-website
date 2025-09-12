import { Navbar } from "@/components/ui/navbar";
import { SEOHead } from "@/components/ui/seo-head";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/ui/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Brandweave - AI Brand Intelligence Founders & Story"
        description="Meet the founders of Brandweave: Marenco Kemp (ex-Google, Microsoft) and Andy Bibby (ex-Razorfish, Microsoft) who created the future of AI brand analysis."
        keywords="about brandweave, founders, marenco kemp, andy bibby, AI brand intelligence, company story, leadership team"
        canonicalUrl="https://lovable.dev/about"
        ogImage="https://lovable.dev/lovable-uploads/28e9b654-0e33-40ae-a0d7-c285832b7bec.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Brandweave",
          "description": "Learn about Brandweave's mission to analyze how generative AI portrays brands",
          "mainEntity": {
            "@type": "Organization",
            "name": "Brandweave",
            "founder": [
              {
                "@type": "Person",
                "name": "Marenco Kemp",
                "description": "Co-founder with over two decades of leadership experience at Google and Microsoft"
              },
              {
                "@type": "Person",
                "name": "Andy Bibby", 
                "description": "Co-founder with expertise in digital marketing and advertising at Razorfish and Microsoft"
              }
            ]
          }
        }}
      />
      <Navbar />
      <BreadcrumbNav />
      <div className="pt-8">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Story Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h1>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  When ChatGPT launched, we, like many, became obsessed. As avid tinkerers, we saw it evolving into a powerful tool for product research, with profound implications for brands. But the more CMOs we spoke to, the clearer it became that they didn't understand what these models were telling consumers about their brands, or why.
                </p>
                
                <p>
                  The market's initial answer has been Generative Engine Optimisation (GEO) or Answer Engine Optimisation (AEO), which focuses on measuring brand visibility in AI outputs. This is an important metric, but it is fundamentally limited.
                </p>
                
                <p>
                  At Brandweave, we believe focusing only on visibility is shortsighted. The real challenge is understanding the AI's reasoning. As these models advance, they don't just list names; they analyse, compare, and recommend. That's why we deliberately look past GEO to analyse how an AI portrays a brand's reputation, quality, and value. This requires a fully integrated view of marketing, customer experience, and product; an approach essential for a future where AI agents will make purchases on consumers' behalf.
                </p>
              </div>
            </section>

            {/* Founders Section */}
            <section>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Marenco */}
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-64 h-80 bg-card rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/lovable-uploads/da4b09c1-1b6b-48ef-b1ac-bdecc5a5802b.png" 
                        alt="Marenco Kemp - Co-founder of Brandweave, former Google and Microsoft executive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Marenco Kemp</h3>
                  <a 
                    href="https://www.linkedin.com/in/marencokemp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-4 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    With over two decades of leadership experience forged at technology giants like Google and Microsoft, Marenco has a proven track record in analytics and product development. At Microsoft Advertising, he built the company's first analytics function outside of the US, and while at YouTube, his machine learning analytics work was recognised with the prestigious annual Platinum Award. He lives in Amsterdam with his wife, daughter, and two whippets.
                  </p>
                </div>

                {/* Andy */}
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-64 h-80 bg-card rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/lovable-uploads/3ef6bda3-c1f9-4c0b-ae5a-eab14e63dc31.png" 
                        alt="Andy Bibby - Co-founder of Brandweave, former Razorfish and Microsoft Advertising executive"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Andy Bibby</h3>
                  <a 
                    href="https://www.linkedin.com/in/anbibby/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-4 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    A seasoned expert in digital marketing and advertising, Andy has a proven track record of leadership at top-tier organisations like Razorfish (Publicis) and Microsoft Advertising. His ability to merge technical knowledge with commercial strategy culminated in him leading the global WPP relationship for Microsoft. Grounded by his training as a technologist, Andy brings a uniquely analytical and strategic approach to his work. He is a keen cyclist and resides just outside London.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;