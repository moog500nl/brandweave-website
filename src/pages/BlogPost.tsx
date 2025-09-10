import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SEOHead } from '@/components/ui/seo-head';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

const blogPosts = {
  "amazons-agent-bet": {
    title: "Amazon's Agent Bet: The Future of AI-Powered Commerce",
    category: "AI",
    date: "2025-09-10",
    lastModified: "2025-09-10",
    readTime: "5 min read",
    image: "/lovable-uploads/ac0aa3ee-4704-4074-9116-1be75a942703.png",
    content: `
      <h2>The Dawn of Intelligent Commerce</h2>
      <p>Amazon's latest venture into AI agents represents a paradigm shift in how we think about e-commerce. These sophisticated systems are designed to understand customer intent at a deeper level than ever before, creating personalised shopping experiences that feel almost telepathic.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "The future of commerce isn't just about selling products; it's about understanding customers so well that we can anticipate their needs before they even express them."
      </blockquote>
      
      <h2>How AI Agents Are Revolutionising Customer Experience</h2>
      <p>These AI agents operate on multiple levels simultaneously. They analyse browsing patterns, purchase history, seasonal trends, and even external factors like weather or local events to create a comprehensive understanding of what customers might need.</p>
      
      <p>The technology goes beyond simple recommendation algorithms. These agents can engage in natural language conversations, understand context and nuance, and even handle complex customer service scenarios without human intervention.</p>
      
      <h2>The Technical Architecture Behind the Magic</h2>
      <p>Amazon's AI agents are built on a foundation of machine learning models that have been trained on vast datasets of customer interactions. The system uses natural language processing to understand customer queries and intent recognition to determine the best course of action.</p>
      
      <p>What makes these agents particularly powerful is their ability to learn and adapt in real-time. Every interaction helps refine their understanding, making them more effective with each customer engagement.</p>
      
      <h2>Implications for the Future of Retail</h2>
      <p>This technology has far-reaching implications beyond Amazon's ecosystem. As AI agents become more sophisticated, we can expect to see similar implementations across various industries, from healthcare to financial services.</p>
      
      <p>The key to success will be balancing automation with human touch, ensuring that whilst AI handles routine tasks efficiently, complex emotional or creative decisions remain in human hands.</p>
      
      <h2>Preparing for an AI-Driven Commerce Future</h2>
      <p>For businesses looking to compete in this new landscape, the message is clear: invest in AI capabilities now or risk being left behind. The companies that successfully integrate AI agents into their customer experience will have a significant competitive advantage.</p>
      
      <p>However, it's crucial to remember that technology is only as good as the strategy behind it. The most successful implementations will be those that use AI to enhance human capabilities rather than replace them entirely.</p>
    `
  }
};

const SocialShareButton = ({ platform, url, title }: { platform: string; url: string; title: string }) => {
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className="hover:bg-brand-accent/10 hover:border-brand-accent"
    >
      <a href={shareUrls[platform as keyof typeof shareUrls]} target="_blank" rel="noopener noreferrer">
        {platform === 'linkedin' && 'LinkedIn'}
        {platform === 'twitter' && 'X'}
        {platform === 'facebook' && 'Facebook'}
      </a>
    </Button>
  );
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-brand-primary hover:bg-brand-primary/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | Brandweave Blog`}
        description={`Expert insights on ${post.title}. Learn how AI is changing consumer behavior and brand perception in the digital age.`}
        keywords={`${post.category.toLowerCase()}, AI commerce, brand analysis, consumer behavior, generative AI`}
        ogTitle={post.title}
        ogDescription={`Expert insights on ${post.title}`}
        ogImage={`https://lovable.dev${post.image}`}
        ogType="article"
        canonicalUrl={`https://lovable.dev/blog/${slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "image": `https://lovable.dev${post.image}`,
          "author": {
            "@type": "Organization",
            "name": "Brandweave"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Brandweave",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lovable.dev/lovable-uploads/bdcaf875-19cf-4b58-8463-5bb642d174b3.png"
            }
          },
          "datePublished": post.date,
          "dateModified": post.lastModified || post.date,
          "articleSection": post.category,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://lovable.dev/blog/${slug}`
          }
        }}
      />
      <Navbar />
      <BreadcrumbNav items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title }
      ]} />
      <div className="pt-8">
        {/* Back to Blog */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/blog">
            <Button variant="ghost" className="text-brand-primary hover:text-brand-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Hero Image and Title */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <Badge variant="secondary" className="bg-brand-accent/20 text-brand-primary">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                Published: {new Date(post.date).toLocaleDateString()}
              </div>
              {post.lastModified && post.lastModified !== post.date && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  Updated: {new Date(post.lastModified).toLocaleDateString()}
                </div>
              )}
              {post.readTime && (
                <div className="text-sm text-muted-foreground">
                  {post.readTime}
                </div>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="[&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-brand-primary [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:leading-relaxed [&>blockquote]:bg-brand-accent/5 [&>blockquote]:p-4 [&>blockquote]:rounded-lg [&>blockquote]:my-6"
                />
                
                {/* Related Articles */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">Related Articles</h3>
                  <div className="grid gap-4">
                    <Link to="/blog" className="group block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-brand-primary group-hover:underline mb-2">
                        Explore More AI & Brand Intelligence Insights
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Discover our latest research on how AI is transforming brand perception and consumer behavior.
                      </p>
                    </Link>
                    <Link to="/contact" className="group block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-brand-primary group-hover:underline mb-2">
                        Get Your Brand AI Diagnostic
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Request a comprehensive analysis of how AI models perceive and recommend your brand.
                      </p>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-lg">
              <Share2 className="w-5 h-5 text-brand-primary" />
              <span className="font-medium text-brand-primary">Share this article:</span>
              <div className="flex gap-2">
                <SocialShareButton platform="linkedin" url={currentUrl} title={post.title} />
                <SocialShareButton platform="twitter" url={currentUrl} title={post.title} />
                <SocialShareButton platform="facebook" url={currentUrl} title={post.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}