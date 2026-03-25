import type { PlansBenefitsSectionContent } from "@/domain/types/Plans";

type PlansBenefitsProps = {
  content: PlansBenefitsSectionContent;
};

export default function PlansBenefits({ content }: PlansBenefitsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-5 py-10 shadow-sm sm:px-8 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{content.title}</h2>
        <p className="mt-3 text-sm text-slate-500 md:text-base">{content.description}</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {content.items.map(({ title, description, icon: Icon }) => (
          <article key={title} className="text-center">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
