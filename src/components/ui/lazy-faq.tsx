import { lazy, Suspense } from "react";

const FAQSection = lazy(() => import("./faq-section").then(module => ({ default: module.FAQSection })));

export function LazyFAQSection() {
  return (
    <Suspense fallback={
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 bg-muted animate-pulse rounded w-96 mx-auto mb-4"></div>
          <div className="h-6 bg-muted animate-pulse rounded w-64 mx-auto"></div>
        </div>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="h-6 bg-muted animate-pulse rounded w-full mb-2"></div>
              <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    }>
      <FAQSection />
    </Suspense>
  );
}