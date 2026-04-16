import type { ProceduresBenefitItem } from "@/domain/types/procedures.types";
import { ShieldCheck } from "lucide-react";

type ProceduresBenefitCardProps = {
  item: ProceduresBenefitItem;
};

export const ProceduresBenefitCard = ({
  item,
}: ProceduresBenefitCardProps) => {
  const { title, description } = item;

  return (
    <article data-aos="zoom-in" className="group flex h-full flex-col rounded-[20px] border border-(--border) bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--primary) hover:shadow-lg">
      <div className="mb-4 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--primary-50)">
          <ShieldCheck className="h-5 w-5 text-(--primary)" />
        </div>
      </div>

      <h3 className="text-center text-xl font-semibold text-(--text)">
        {title}
      </h3>

      <p className="mt-3 text-left text-sm leading-7 text-(--text-muted)">
        {description}
      </p>
    </article>
  );
};