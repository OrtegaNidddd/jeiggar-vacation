import { plansPageMock } from "@/mocks/plans.mock";
import PlansHero from "./components/PlansHero";
import PlansTrending from "./components/PlansTrending";
import PlansCardsGrid from "./components/PlansCardsGrid";
import PlansBenefits from "./components/PlansBenefits";
import PlansFinalCTA from "./components/PlansFinalCTA";

export default function Plans() {
    const { hero, trending, cards, benefits, finalCta } = plansPageMock;

    return (
        <section className="px-4 pb-12 pt-10 md:pt-14">
            <div className="mx-auto max-w-6xl space-y-14">
                <PlansHero content={hero} />
                <PlansTrending content={trending} />
                <PlansCardsGrid cards={cards} />
                <PlansBenefits content={benefits} />
                <PlansFinalCTA content={finalCta} />
            </div>
        </section>
    );
}