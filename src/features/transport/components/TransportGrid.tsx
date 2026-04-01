import type { TransportItem } from "@/domain/types/Transport";
import { TransportCard } from "./TransportCard";

type TransportGridProps = {
  items: TransportItem[];
};

export const TransportGrid = ({ items }: TransportGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            Opciones para una movilidad más cómoda
          </h2>

          <p className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Le ayudamos a organizar diferentes alternativas de transporte para
            que su desplazamiento durante el viaje sea más práctico, flexible y
            acorde con sus necesidades.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <TransportCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};