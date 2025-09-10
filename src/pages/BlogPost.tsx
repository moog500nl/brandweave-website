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
    title: "When the algorithm goes shopping for you",
    category: "AI",
    date: "2025-09-10",
    lastModified: "2025-09-10",
    readTime: "8 min read",
    image: "/lovable-uploads/ac0aa3ee-4704-4074-9116-1be75a942703.png",
    content: `
      <p>Amazon's latest foray into agentic artificial intelligence is turning the act of shopping into an act of delegation. A cluster of releases, from Lens Live visual search to the Buy for Me purchasing agent and Nova Act in the browser, points to a future in which consumers set objectives, then watch software do the legwork. In the short run this will smooth out the lumps in online retail. In the long run it could reshape how brands are discovered, interpreted and chosen by machines acting on our behalf.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "There will also be agents that routinely do things for you outside of work, from shopping to travel to daily chores and tasks." (About Amazon)
      </blockquote>
      
      <h2>From search to specification</h2>
      <p>The newest features are a study in removing friction. Lens Live lets iPhone users point a camera at something, then see instant matches in a swipeable carousel, complete with summaries and suggested questions via Amazon's AI shopping assistant, Rufus. Customers can even add items to their basket without leaving the camera view. Tens of millions have access on iOS, with a wider US rollout to come. This shifts behaviour from typing keywords to specifying an outcome, then skimming machine‑prepared options.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "Lens Live instantly scans products and shows real‑time matches in a swipeable carousel." (About Amazon)
      </blockquote>
      
      <p>Rufus itself has spread across the store since 2024, answering product questions and folding in information from across the web. It is the conversational front end to Amazon's catalogue, increasingly present at the moment of consideration. A newer audio feature, Hear the highlights, reads out concise, AI‑generated summaries of products, which speeds skimming further. Together these tools reduce the cognitive tax of comparison shopping.</p>
      
      <h2>The agent completes the checkout</h2>
      <p>The bolder step is Buy for Me. If Amazon does not sell a product, the app can now complete a purchase on a brand's own website, passing encrypted delivery and payment details on the shopper's behalf and tracking the order back in Amazon. The experience runs on Bedrock and uses models such as Amazon Nova and Anthropic's Claude to stitch the journey together. The result is a softer boundary between marketplaces and brand sites, with fewer reasons for shoppers to leave the Amazon environment.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "This new feature uses agentic AI to help customers seamlessly purchase from other brands within the familiar Amazon Shopping app." (About Amazon)
      </blockquote>
      
      <p>Agentic capability is also moving into the browser. Nova Act, a model released as a research preview in March, can search the web, make purchases and follow detailed instructions, and it is already powering parts of Alexa Plus. The promise is a general‑purpose shopper that remembers context, executes steps and avoids common traps, for example ignoring extended warranty upsells.</p>
      
      <blockquote style="border-left: 4px solid hsl(var(--brand-accent)); padding-left: 1rem; margin: 2rem 0; font-style: italic; color: hsl(var(--brand-primary));">
        "Nova Act can carry out web searches, make purchases, or answer questions about what is on the screen." (The Verge)
      </blockquote>
      
      <h2>What this does to consumers</h2>
      <p>Three shifts stand out.</p>
      
      <p><strong>1. Delegation over discovery.</strong> As agents pre‑filter options and summarise trade‑offs, many customers will accept a shortlist rather than trawl pages of results. The centre of gravity moves from browsing to briefing. AI Shopping Guides and review highlights already condition this habit by compressing research into digestible chunks.</p>
      
      <p><strong>2. Always‑on serendipity.</strong> Interests, an AI feature that watches for new items matching a shopper's prompts and notifies them when stock or deals appear, turns latent intent into a drip feed of micro‑recommendations. That could raise purchase frequency and shorten the path from desire to checkout.</p>
      
      <p><strong>3. Zero‑context purchases.</strong> Camera‑led discovery and one‑tap carts make impulse buys easier. The trade‑off is that choices are shaped by whatever the lens, the model and the merchant want you to see, not by a wide‑angle browse. Tech publications have already noted the risk to those prone to spur‑of‑the‑moment spending.</p>
      
      <h2>The agent becomes the shelf</h2>
      <p>For brands, the implications are starker. In a world of conversational and autonomous shopping, the ranking that matters lives inside an agent's head. That ranking is calculated from structured data, reliability and fit to a shopper's constraints, not from glossy homepage takeovers. AWS's summer announcements about AgentCore, a marketplace for AI agents and a heavier push into agentic tooling, hint at how quickly these pipes will spread across retail and advertising technology.</p>
      
      <p>Expect four longer term effects.</p>
      
      <p><strong>1) Brand equity is compressed into machine‑readable signals.</strong> Agents reward clarity. Precise attributes, verified claims, transparent policies and clean feeds will outrank vibe. Product titles and bullet points become training data. Review highlights, fit insights and audio summaries turn messy sentiment into structured cues that models can weigh. The brands that translate their promise into unambiguous, checkable facts will be selected more often.</p>
      
      <p><strong>2) Retail media goes conversational, then ambient.</strong> Business Insider reports internal forecasts that Rufus could throw off hundreds of millions in operating profit via a downstream impact metric, and notes tests of ad placements inside Rufus. As more selection happens in chat, sponsorships will feel more like mid‑conversation nudges than banner slots. The skill will be to influence prompts without breaking trust.</p>
      
      <p><strong>3) Distribution moats shift from shelf space to execution guarantees.</strong> Buy for Me collapses the distance between Amazon search and brand checkout. That increases exposure for brands outside the marketplace, but it also imposes an agent's standard on payment, fulfilment and customer service. Brands that cannot meet those standards, for example slow delivery promises or fuzzy returns, will fall down the agent's list.</p>
      
      <p><strong>4) The locus of loyalty moves.</strong> If the assistant gets it right most of the time, consumers may feel loyal to the agent rather than to a particular brand or retailer. This is reinforced as Amazon reorganises around agentic AI across Alexa and AWS, making the assistant more capable and more present across contexts.</p>
      
      <h2>How agents will perceive and pick brands</h2>
      <p>Agents will score brands on four axes.</p>
      
      <p>• <strong>Factual adequacy.</strong> Claims that can be corroborated, for example energy ratings, certifications, material composition, win. Vague superlatives lose. Review‑derived summaries and guides give the model the evidence it needs.</p>
      
      <p>• <strong>Personal fit.</strong> Inventory, size, budget and previous preferences are weighted per user. Lens Live and Interests expand the signals agents can read, from what the camera sees to the prompts a shopper saves.</p>
      
      <p>• <strong>Operational risk.</strong> Delivery speed, return friction and defect rates lower the risk score. Where the agent is completing the order, as with Buy for Me, it will tend to prefer predictable partners.</p>
      
      <p>• <strong>Commercial context.</strong> Sponsored suggestions will exist inside these agents, but the house will be careful. Amazon knows that a pushy agent loses trust, and trust is the flywheel. Still, brands should expect an auction of conversational moments.</p>
      
      <h2>New playbooks for brands</h2>
      <p>If agents are the new shelf, brands must become machine‑friendly.</p>
      
      <p><strong>1. Ship a product knowledge graph.</strong> Provide exhaustive, verified attributes, from allergens to plug types, in the formats Amazon and partners request. Treat every claim as something an LLM will cross‑check, not a flourish for humans.</p>
      
      <p><strong>2. Optimise for agent prompts, not just keywords.</strong> Monitor which natural language questions trigger your category's guides and Rufus answers, then align copy and imagery to those intents. Prepare responses to the why this over that question that an agent will paraphrase.</p>
      
      <p><strong>3. Engineer operational promises.</strong> Tighten fulfilment SLAs, streamline returns and expose stock, delivery windows and warranty terms through live feeds. Agents punish uncertainty.</p>
      
      <p><strong>4. Design for camera‑first discovery.</strong> Make packaging and products recognisable at a glance. Ensure visual matches return your SKUs, not lookalikes. Lens‑friendly content is a moat.</p>
      
      <p><strong>5. Advertise inside conversations, sparingly.</strong> Test sponsored suggestions that clarify trade‑offs rather than shout. Measure lift in agent‑driven sessions, not only in search results. Internal targets at Amazon suggest the company will keep leaning into monetisation of agent surfaces.</p>
      
      <p><strong>6. Build brand memory outside the agent.</strong> If loyalty shifts to the assistant, brands must invest in communities, owned channels and experiences that lodge preferences before the prompt is ever written.</p>
      
      <h2>The policy and trust ledger</h2>
      <p>Agentic shopping raises familiar, and thorny, questions. How clearly will ads be labelled inside a conversational flow. What recourse will sellers have when a model's summary mischaracterises their product. How will Amazon balance neutrality with the temptation to steer. The company is talking up safety and transparency in its retail agent work and is building governance into its enterprise agent stack, but rules, and watchdogs, will follow the money.</p>
      
      <p>The direction of travel is plain. Shopping is becoming a background process, guided by objectives and executed by software. Brands will court not only human shoppers, but the assistants that serve them. Those assistants will favour facts over flourish, reliability over romance. The brands that adapt their signals to satisfy a tireless, literal‑minded buyer will be the ones an algorithm keeps choosing.</p>
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
        title="When the Algorithm Goes Shopping for You | Amazon AI Agent Analysis"
        description="Amazon's agentic AI is transforming e-commerce. From Lens Live visual search to Buy for Me purchasing agents, discover how AI agents are reshaping consumer behavior and brand strategies in 2025."
        keywords="Amazon AI agents, agentic AI, Buy for Me, Lens Live, Rufus AI, Nova Act, AI commerce, machine learning shopping, automated purchasing, consumer behavior AI, brand optimization AI, retail automation, generative AI shopping"
        ogTitle="When the Algorithm Goes Shopping for You - Amazon's AI Revolution"
        ogDescription="How Amazon's AI agents like Rufus, Buy for Me, and Nova Act are transforming shopping into delegation. Essential insights for brands adapting to algorithm-driven commerce."
        ogImage={`https://lovable.dev${post.image}`}
        ogType="article"
        canonicalUrl={`https://lovable.dev/blog/${slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "alternativeHeadline": "Amazon's Agentic AI Revolution in E-commerce",
          "image": {
            "@type": "ImageObject",
            "url": `https://lovable.dev${post.image}`,
            "width": 1200,
            "height": 630,
            "caption": "Amazon's AI shopping agents transforming e-commerce"
          },
          "author": {
            "@type": "Organization",
            "name": "Brandweave",
            "url": "https://lovable.dev"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Brandweave",
            "url": "https://lovable.dev",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lovable.dev/lovable-uploads/bdcaf875-19cf-4b58-8463-5bb642d174b3.png",
              "width": 400,
              "height": 60
            }
          },
          "datePublished": post.date,
          "dateModified": post.lastModified || post.date,
          "articleSection": "AI Technology",
          "articleBody": "Amazon's agentic AI transforms shopping through Lens Live, Buy for Me agents, and Nova Act browser automation, reshaping brand discovery and consumer behavior.",
          "wordCount": 2500,
          "timeRequired": "PT8M",
          "about": [
            {
              "@type": "Thing",
              "name": "Artificial Intelligence",
              "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
            },
            {
              "@type": "Thing", 
              "name": "E-commerce",
              "sameAs": "https://en.wikipedia.org/wiki/E-commerce"
            },
            {
              "@type": "Organization",
              "name": "Amazon",
              "sameAs": "https://en.wikipedia.org/wiki/Amazon_(company)"
            }
          ],
          "mentions": [
            {
              "@type": "SoftwareApplication",
              "name": "Amazon Rufus",
              "applicationCategory": "AI Shopping Assistant"
            },
            {
              "@type": "SoftwareApplication", 
              "name": "Buy for Me",
              "applicationCategory": "AI Purchasing Agent"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Lens Live", 
              "applicationCategory": "Visual Search"
            }
          ],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://lovable.dev/blog/${slug}`
          },
          "isPartOf": {
            "@type": "Blog",
            "name": "Brandweave Blog",
            "url": "https://lovable.dev/blog"
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
                alt="Amazon's AI agents including Rufus shopping assistant and Buy for Me purchasing technology transforming e-commerce through agentic artificial intelligence"
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