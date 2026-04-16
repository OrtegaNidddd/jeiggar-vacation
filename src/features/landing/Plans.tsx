import { lazy, Suspense } from "react";
import { plansPageMock } from "@/mocks/landing";

const PlansHero = lazy(() => import("./components/PlansHero"));
const PlansTrending = lazy(() => import("./components/PlansTrending"));
const PlansCardsGrid = lazy(() => import("./components/PlansCardsGrid"));
const PlansBenefits = lazy(() => import("./components/PlansBenefits"));
const PlansFinalCTA = lazy(() => import("./components/PlansFinalCTA"));

function SectionFallback() {
    return <div className="h-56 w-full animate-pulse rounded-3xl bg-white/60" />;
}

export default function Plans() {
    const { hero, trending, cards, benefits, finalCta } = plansPageMock;

    return (
        <section data-aos="fade-up" className="px-4 pb-12 pt-10 md:pt-14">
            <div className="mx-auto max-w-6xl space-y-14">
                <Suspense fallback={<SectionFallback />}>
                    <PlansHero content={hero} />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <PlansTrending content={trending} />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <PlansCardsGrid cards={cards} />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <PlansBenefits content={benefits} />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <PlansFinalCTA content={finalCta} />
                </Suspense>
            </div>
        </section>
    );
}