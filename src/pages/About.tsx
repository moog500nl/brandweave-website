import { Navbar } from "@/components/ui/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Mission
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  We are dedicated to empowering businesses with innovative solutions that drive growth, 
                  enhance efficiency, and create lasting value. Our commitment is to deliver exceptional 
                  results through cutting-edge technology, strategic insights, and personalized service 
                  that exceeds expectations.
                </p>
              </div>
            </section>

            {/* Founders Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Our Founders
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Marenco */}
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-64 h-80 bg-card rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/lovable-uploads/da4b09c1-1b6b-48ef-b1ac-bdecc5a5802b.png" 
                        alt="Marenco - Co-Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Marenco</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A visionary leader with extensive experience in business strategy and innovation. 
                    Marenco brings a wealth of knowledge in driving organizational growth and 
                    fostering strategic partnerships that create meaningful impact.
                  </p>
                </div>

                {/* Andy */}
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-64 h-80 bg-card rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/lovable-uploads/3ef6bda3-c1f9-4c0b-ae5a-eab14e63dc31.png" 
                        alt="Andy - Co-Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Andy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A technology expert and innovative problem-solver with a passion for creating 
                    solutions that transform businesses. Andy's technical expertise and strategic 
                    mindset drive the development of cutting-edge products and services.
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