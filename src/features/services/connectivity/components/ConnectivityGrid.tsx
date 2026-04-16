import type {
  ConnectivityGridContent,
  ConnectivityItem,
} from "@/domain/types/Connectivity";
import { ConnectivityCard } from "./ConnectivityCard";

type ConnectivityGridProps = {
  content: ConnectivityGridContent;
  items: ConnectivityItem[];
};

export const ConnectivityGrid = ({ content, items }: ConnectivityGridProps) => {
  const { title, description } = content;

  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-aos="fade-right" className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            {title}
          </h2>

          <p data-aos="fade-left" data-aos-delay={100} className="mt-4 text-base leading-8 text-(--text-muted) md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 90}>
              <ConnectivityCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};