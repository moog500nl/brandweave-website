import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./animated-hero").then(module => ({ default: module.Hero })));

export function LazyHero() {
  return (
    <Suspense fallback={
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-16 lg:py-32 items-center justify-center flex-col">
            <div className="h-32 bg-muted animate-pulse rounded-lg w-full max-w-2xl"></div>
            <div className="h-6 bg-muted animate-pulse rounded w-3/4 max-w-xl"></div>
            <div className="h-40 bg-muted animate-pulse rounded w-48"></div>
          </div>
        </div>
      </div>
    }>
      <Hero />
    </Suspense>
  );
}