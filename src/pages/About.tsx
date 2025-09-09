import { Navbar } from "@/components/ui/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Story Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h1>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We founded Brandweave to analyse how generative AI portrays and recommends brands.
                </p>
                
                <p>
                  AI has generated an immense amount of hype since the launch of ChatGPT3 to the general public in November 22. Both of us are avid tinkerers and we became a little obsessed with this new technology. As it took off, we started using it more and more in our daily lives.
                </p>
                
                <p>
                  It quickly struck us how useful it was in helping us research products that we were considering buying. As the technology evolved to a point where the best AI models can match or even outperform human experts at certain tasks, it was clear that this technology was starting to have profound implications.
                </p>
                
                <p>
                  But the more CMOs and brand leaders we spoke to, it wasn't clear to them what these models were telling consumers about their brands, why and what to do about it.
                </p>
                
                <p>
                  A new expertise domain of Generative Engine Optimisation (GEO) or also sometimes known as Answer Engine Optimisation (AEO) has sprung up. It aims to measure how visible a brand is in the output of a generative AI model. An important metric for sure, but we as the reasoning capabilities of generative AI models continue to advance at a scarily fast rate, we think brands should be more interested in how these models reason about their brands when consumers are using generative AI to carry out research or even purchase on their behalf.
                </p>
                
                <p>
                  Because if we are heading towards a future, where consumers are mostly relying on generative AI to make their purchases, GEO/AEO is no longer about optimising your website content to become visible, it will demand a fully integrated approach including marketing & sales, customer experience, product and pricing.
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
                        alt="Marenco Kemp"
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
                        alt="Andy Bibby"
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
    </div>
  );
};

export default About;