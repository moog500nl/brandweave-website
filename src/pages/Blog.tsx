import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const blogPosts = [
  {
    id: 4,
    title: "Can 5 AI Deep Research Models Agree on the Best VPN?",
    excerpt: "How does an AI model decide which product is 'best'? We analyze how five different AI models research and recommend VPN services.",
    category: "AI", 
    date: "2025-09-09",
    image: "/lovable-uploads/529dca25-ad0d-40b8-987f-e0e8b09c56bd.png",
    slug: "ai-vpn-research-verdict"
  },
  {
    id: 1,
    title: "Amazon's Agent Bet: The Future of AI-Powered Commerce",
    excerpt: "How Amazon is revolutionizing e-commerce through intelligent AI agents that understand customer intent and deliver personalized shopping experiences.",
    category: "AI",
    date: "2024-01-15",
    image: "/lovable-uploads/28e9b654-0e33-40ae-a0d7-c285832b7bec.png",
    slug: "amazons-agent-bet"
  },
  {
    id: 2,
    title: "Newsletter Strategy: Building Brand Authority in 2024",
    excerpt: "Essential strategies for creating newsletters that engage audiences and drive meaningful connections with your brand in today's digital landscape.",
    category: "Newsletter",
    date: "2024-01-10",
    image: "/lovable-uploads/2c23a529-dea1-4545-b023-fca22c6908aa.png",
    slug: "newsletter-strategy-2024"
  },
  {
    id: 3,
    title: "The Rise of Generative AI in Content Marketing",
    excerpt: "Exploring how generative AI is transforming content creation and what marketers need to know to stay ahead of the curve.",
    category: "AI",
    date: "2024-01-05",
    image: "/lovable-uploads/529dca25-ad0d-40b8-987f-e0e8b09c56bd.png",
    slug: "generative-ai-content-marketing"
  }
];

const categories = ["All", "AI", "Newsletter"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Brandweave Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Insights, strategies, and innovations in AI-powered brand engagement and digital marketing.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-brand-primary hover:bg-brand-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-brand-accent/20 text-brand-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-brand-primary hover:text-brand-primary/80">
                      Read More →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}