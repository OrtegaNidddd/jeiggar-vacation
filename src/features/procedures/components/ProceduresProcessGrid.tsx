import type { ProceduresProcessItem } from "@/domain/types/procedures.types";
import { ProceduresProcessCard } from "./ProceduresProcessCard";

type ProceduresProcessGridProps = {
  items: ProceduresProcessItem[];
};

export const ProceduresProcessGrid = ({
  items,
}: ProceduresProcessGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            ¿Cómo funciona el proceso?
          </h2>
          <p className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Organizamos cada etapa del trámite para que usted entienda el
            proceso y prepare su documentación con mayor seguridad.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ProceduresProcessCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};