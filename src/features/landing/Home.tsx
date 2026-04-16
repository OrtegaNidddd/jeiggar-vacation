import { lazy, Suspense } from "react";
import Hero from "./components/Hero";

const TravelCategories = lazy(() => import("./components/TravelCategories"));
const FeaturedTrips = lazy(() => import("./components/FeaturedTrips"));
const Carousel = lazy(() => import("./components/Carousel"));
const CTA = lazy(() => import("./components/CTA"));

function SectionFallback() {
  return <div className="h-56 w-full animate-pulse rounded-2xl bg-white/60" />;
}

export default function Home() {
  return (
    <div data-aos="fade-up" className="p-4">
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <FeaturedTrips />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TravelCategories />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTA />
      </Suspense>
    </div>
  );
}   