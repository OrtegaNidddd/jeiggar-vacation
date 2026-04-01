import Button from "@/components/ui/Button";
import type { PlanCardContent } from "@/domain/types/Plans";
import {
  PLAN_INFO_TEMPLATE,
  WHATSAPP_NUMBER,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";

type PlansCardsGridProps = {
  cards: PlanCardContent[];
};

export default function PlansCardsGrid({ cards }: PlansCardsGridProps) {
  function handlePlanInfoClick(plan: PlanCardContent) {
    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      template: PLAN_INFO_TEMPLATE,
      values: {
        planTitle: plan.title,
        planCategory: plan.category,
      },
    });
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((plan) => (
        <article
          key={plan.title}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={plan.image}
              alt={plan.imageAlt}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-4 p-5">
            <h3 className="text-3xl font-bold leading-none text-slate-900">{plan.title}</h3>
            <p className="text-sm leading-6 text-slate-500">{plan.description}</p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                {plan.category}
              </span>

              <Button
                type="button"
                onClick={() => handlePlanInfoClick(plan)}
                className="px-4 py-2"
              >
                {plan.cta.label}
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
