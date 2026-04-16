import type { ProceduresBenefitItem } from "@/domain/types/procedures.types";
import { ProceduresBenefitCard } from "./ProceduresBenefitCard";

type ProceduresBenefitsGridProps = {
  items: ProceduresBenefitItem[];
};

export const ProceduresBenefitsGrid = ({
  items,
}: ProceduresBenefitsGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-right" className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            ¿Por qué elegir nuestra asesoría?
          </h2>
          <p data-aos="fade-left" data-aos-delay={100} className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Le ofrecemos una orientación organizada, cercana y enfocada en que
            cada trámite se prepare con mayor claridad y confianza.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
              <ProceduresBenefitCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};