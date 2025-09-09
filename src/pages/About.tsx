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
                  But the more CMOs and brand leaders we spoke to, it wasn't clear to them what these models were telling consumers about their brands and why and what to do about it.
                </p>
                
                <p>
                  A new expertise domain of Generative Engine Optimisation (GEO) or also sometimes known as Answer Engine Optimisation (AEO) has sprung up. It aims to measure how visible a brand is in the output of a generative AI model. An important metric for sure, but we as the reasoning capabilities of generative AI models continue to advance at a scarily fast rate, we think brands should be more interested in how these models reason about their brands when consumers are using generative AI to carry out research or even purchase on their behalf.
                </p>
                
                <p>
                  Because if we are heading towards a future, where consumers are mostly relying on generative AI to make their purchases, GEO/AEO is no longer about optimising your website content to become visible, it will demand a fully integrated approach including marketing & sales, customer experience, product and pricing.
                </p>
              </div>
            </section>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;