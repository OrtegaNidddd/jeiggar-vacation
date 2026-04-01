import type { ConnectivityItem } from "@/domain/types/Connectivity";
import { ConnectivityCard } from "./ConnectivityCard";

type ConnectivityGridProps = {
  items: ConnectivityItem[];
};

export const ConnectivityGrid = ({ items }: ConnectivityGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            Planes disponibles por destino
          </h2>

          <p className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            Seleccione la opción que mejor se ajuste a su destino y duración de
            viaje. Contamos con alternativas flexibles para una experiencia de
            conexión más cómoda y continua.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ConnectivityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};