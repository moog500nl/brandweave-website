import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SEOHead } from '@/components/ui/seo-head';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { Footer } from '@/components/ui/footer';

const blogPosts = [
  {
    id: 1,
    title: "When the algorithm goes shopping for you",
    excerpt: "Amazon's latest foray into agentic artificial intelligence is turning the act of shopping into an act of delegation. A cluster of releases points to a future where consumers set objectives, then watch software do the legwork.",
    category: "AI",
    date: "2024-01-15",
    image: "/lovable-uploads/ac0aa3ee-4704-4074-9116-1be75a942703.png",
    slug: "amazons-agent-bet"
  }
];

const categories = ["All", "AI"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Brandweave Blog - AI & Consumer Behavior Insights"
        description="Expert insights on how AI is changing consumer behavior, brand perception, and the future of AI-powered commerce. Latest articles on generative engine optimization."
        keywords="AI blog, consumer behavior, brand perception, generative AI, AI commerce, marketing insights, GEO, AEO"
        canonicalUrl="https://lovable.dev/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Brandweave Blog",
          "description": "Insights into how AI is changing consumer behaviour",
          "url": "https://lovable.dev/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Brandweave"
          }
        }}
      />
      <Navbar />
      <BreadcrumbNav />
      <div className="pt-8">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Brandweave Blog</h1>
            <p className="text-xl md:text-2xl text-brand-secondary/90 max-w-3xl mx-auto">
              Insights into how AI is changing consumer behaviour.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    "bg-brand-primary hover:bg-brand-primary/90" : 
                    "hover:bg-brand-accent/10 hover:border-brand-accent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-brand-accent/20 text-brand-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-brand-primary mb-3 line-clamp-2 group-hover:text-brand-primary/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={`/blog/${post.slug}`} className="w-full">
                    <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-brand-primary mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search terms or category filter.
              </p>
              <Button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                variant="outline"
                className="hover:bg-brand-accent/10 hover:border-brand-accent"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}