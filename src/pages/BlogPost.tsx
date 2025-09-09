import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const blogPosts = {
  "amazons-agent-bet": {
    title: "Amazon's Agent Bet: The Future of AI-Powered Commerce",
    category: "AI",
    date: "2024-01-15",
    image: "/lovable-uploads/28e9b654-0e33-40ae-a0d7-c285832b7bec.png",
    content: `
      <h2>The Dawn of Intelligent Commerce</h2>
      <p>Amazon's latest venture into AI agents represents a paradigm shift in how we think about e-commerce. These sophisticated systems are designed to understand customer intent at a deeper level than ever before, creating personalized shopping experiences that feel almost telepathic.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "The future of commerce isn't just about selling products; it's about understanding customers so well that we can anticipate their needs before they even express them."
      </blockquote>
      
      <h2>How AI Agents Are Revolutionizing Customer Experience</h2>
      <p>These AI agents operate on multiple levels simultaneously. They analyze browsing patterns, purchase history, seasonal trends, and even external factors like weather or local events to create a comprehensive understanding of what customers might need.</p>
      
      <p>The technology goes beyond simple recommendation algorithms. These agents can engage in natural language conversations, understand context and nuance, and even handle complex customer service scenarios without human intervention.</p>
      
      <h2>The Technical Architecture Behind the Magic</h2>
      <p>Amazon's AI agents are built on a foundation of machine learning models that have been trained on vast datasets of customer interactions. The system uses natural language processing to understand customer queries and intent recognition to determine the best course of action.</p>
      
      <p>What makes these agents particularly powerful is their ability to learn and adapt in real-time. Every interaction helps refine their understanding, making them more effective with each customer engagement.</p>
      
      <h2>Implications for the Future of Retail</h2>
      <p>This technology has far-reaching implications beyond Amazon's ecosystem. As AI agents become more sophisticated, we can expect to see similar implementations across various industries, from healthcare to financial services.</p>
      
      <p>The key to success will be balancing automation with human touch, ensuring that while AI handles routine tasks efficiently, complex emotional or creative decisions remain in human hands.</p>
      
      <h2>Preparing for an AI-Driven Commerce Future</h2>
      <p>For businesses looking to compete in this new landscape, the message is clear: invest in AI capabilities now or risk being left behind. The companies that successfully integrate AI agents into their customer experience will have a significant competitive advantage.</p>
      
      <p>However, it's crucial to remember that technology is only as good as the strategy behind it. The most successful implementations will be those that use AI to enhance human capabilities rather than replace them entirely.</p>
    `
  },
  "newsletter-strategy-2024": {
    title: "Newsletter Strategy: Building Brand Authority in 2024",
    category: "Newsletter",
    date: "2024-01-10",
    image: "/lovable-uploads/2c23a529-dea1-4545-b023-fca22c6908aa.png",
    content: `
      <h2>The Renaissance of Email Marketing</h2>
      <p>In an era dominated by social media algorithms and fleeting attention spans, newsletters have emerged as a powerful tool for building direct, meaningful relationships with audiences. They offer something that social platforms can't: unfiltered access to your audience's inbox.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "A well-crafted newsletter isn't just a marketing tool; it's a bridge that connects your brand's expertise with your audience's curiosity."
      </blockquote>
      
      <h2>Crafting Content That Resonates</h2>
      <p>The most successful newsletters of 2024 share common characteristics: they provide genuine value, maintain consistency, and speak to their audience in an authentic voice. They're not just promotional vehicles but sources of insight and inspiration.</p>
      
      <p>Consider your newsletter as a curated experience. Every piece of content should serve a purpose, whether it's educating, entertaining, or inspiring action. The best newsletters feel like a conversation with a knowledgeable friend rather than a corporate broadcast.</p>
      
      <h2>Building Your Subscriber Base Strategically</h2>
      <p>Growing a newsletter audience requires more than just a signup form on your website. It demands a comprehensive strategy that includes lead magnets, social proof, and clear value propositions.</p>
      
      <p>Successful brands are leveraging partnerships, guest appearances on podcasts, and strategic content collaborations to expand their reach. The key is to provide immediate value upon signup and then consistently deliver on that promise.</p>
      
      <h2>The Power of Segmentation and Personalization</h2>
      <p>Modern newsletter success relies heavily on understanding your audience segments and tailoring content accordingly. This doesn't mean creating entirely different newsletters, but rather customizing elements based on subscriber preferences and behavior.</p>
      
      <p>Use data to understand which content performs best with different segments, and don't be afraid to experiment with timing, frequency, and format. The goal is to create an experience that feels personally relevant to each subscriber.</p>
      
      <h2>Measuring Success Beyond Open Rates</h2>
      <p>While open rates remain important, the most successful newsletter strategies focus on engagement metrics that matter: click-through rates, time spent reading, forward rates, and ultimately, conversion to desired actions.</p>
      
      <p>Track how newsletter content influences broader business goals. Are subscribers more likely to make purchases? Do they stay customers longer? These insights help justify newsletter investment and guide future strategy.</p>
      
      <h2>Looking Ahead: The Future of Newsletter Marketing</h2>
      <p>As we move through 2024, expect to see more integration between newsletters and other marketing channels, increased use of AI for personalization, and a continued emphasis on community building through email.</p>
      
      <p>The brands that will succeed are those that view newsletters not as a one-way communication tool, but as the foundation for building lasting relationships with their audience.</p>
    `
  },
  "generative-ai-content-marketing": {
    title: "The Rise of Generative AI in Content Marketing",
    category: "AI",
    date: "2024-01-05",
    image: "/lovable-uploads/529dca25-ad0d-40b8-987f-e0e8b09c56bd.png",
    content: `
      <h2>A New Era of Content Creation</h2>
      <p>Generative AI has fundamentally altered the content marketing landscape, offering unprecedented capabilities for creating, optimizing, and personalizing content at scale. What once required teams of writers and designers can now be accomplished with sophisticated AI tools and strategic human oversight.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "The question isn't whether AI will change content marketing, but how quickly marketers can adapt to harness its transformative power while maintaining authenticity."
      </blockquote>
      
      <h2>Understanding the Capabilities and Limitations</h2>
      <p>Generative AI excels at producing large volumes of content quickly, analyzing data patterns to inform content strategy, and personalizing messaging for different audience segments. However, it still requires human creativity for strategic direction, brand voice consistency, and emotional resonance.</p>
      
      <p>The most successful implementations combine AI efficiency with human insight. AI handles the heavy lifting of research, first drafts, and optimization, while humans provide strategy, creativity, and the final editorial touch that ensures content truly connects with audiences.</p>
      
      <h2>Practical Applications in Modern Marketing</h2>
      <p>Forward-thinking marketers are using generative AI for blog post ideation, social media content creation, email personalization, and even video script writing. The technology is particularly powerful for A/B testing different approaches and rapidly iterating based on performance data.</p>
      
      <p>One of the most compelling applications is dynamic content creation that adapts to individual user preferences and behaviors. This level of personalization was previously impossible at scale but is now becoming the standard expectation.</p>
      
      <h2>Maintaining Authenticity in an AI-Driven World</h2>
      <p>As AI-generated content becomes more prevalent, authenticity becomes a key differentiator. Audiences are becoming more sophisticated at detecting generic, templated content, making human insight and brand personality more valuable than ever.</p>
      
      <p>The goal should be to use AI as a powerful assistant that amplifies human creativity rather than replacing it. The most successful content will combine AI efficiency with genuine human perspective and experience.</p>
      
      <h2>Building an AI-Enhanced Content Strategy</h2>
      <p>Implementing generative AI in content marketing requires careful planning and gradual integration. Start with lower-risk applications like research and ideation, then gradually expand to content creation and optimization as your team becomes more comfortable with the technology.</p>
      
      <p>Invest in training your team to work effectively with AI tools. The marketers who thrive in this new environment will be those who can seamlessly blend AI capabilities with human strategy and creativity.</p>
      
      <h2>The Road Ahead</h2>
      <p>As generative AI continues to evolve, we can expect even more sophisticated applications in content marketing. The key to success will be staying informed about new capabilities while maintaining focus on what truly matters: creating content that serves your audience and drives business results.</p>
      
      <p>The future belongs to marketers who can harness AI's power while preserving the human elements that make content meaningful and persuasive.</p>
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
      <Navbar />
      <div className="pt-16">
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
              />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-brand-accent/20 text-brand-primary">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
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