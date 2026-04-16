import type { ProceduresCountryItem } from "@/domain/types/procedures.types";
import { ProceduresCountryCard } from "./ProceduresCountryCard";

type ProceduresCountriesGridProps = {
  items: ProceduresCountryItem[];
};

export const ProceduresCountriesGrid = ({
  items,
}: ProceduresCountriesGridProps) => {
  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-right" className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            Destinos frecuentes de asesoría
          </h2>
          <p data-aos="fade-left" data-aos-delay={100} className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Brindamos orientación para trámites migratorios y documentales en
            destinos de alta demanda, con acompañamiento ajustado a los
            requisitos vigentes de cada país.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
              <ProceduresCountryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};