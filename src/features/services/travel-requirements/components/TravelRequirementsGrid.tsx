import type { TravelRequirementItem } from "@/domain/types/TravelRequirements";
import { TravelRequirementCard } from "./TravelRequirementCard";

type TravelRequirementsGridProps = {
  items: TravelRequirementItem[];
};

export const TravelRequirementsGrid = ({
  items,
}: TravelRequirementsGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-right" className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            Aspectos esenciales a revisar
          </h2>

          <p data-aos="fade-left" data-aos-delay={100} className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Organizamos los requisitos más frecuentes para que identifique con
            mayor facilidad la documentación y condiciones que pueden aplicar a
            su viaje.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 90}>
              <TravelRequirementCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};