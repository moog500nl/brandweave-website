import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  canonicalUrl,
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper function to update or create link tags
    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic meta tags
    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph tags
    updateMeta("og:title", ogTitle || title, true);
    updateMeta("og:description", ogDescription || description, true);
    updateMeta("og:type", ogType, true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    updateMeta("og:url", window.location.href, true);

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", ogTitle || title);
    updateMeta("twitter:description", ogDescription || description);
    if (ogImage) updateMeta("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      updateLink("canonical", canonicalUrl);
    }

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until a new page sets different values
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonicalUrl, structuredData]);

  return null;
};