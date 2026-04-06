import type { WhyChooseServicesContent } from "@/domain/types/Services";
import { WhyChooseCard } from "./WhyChooseCard";

type WhyChooseServicesProps = {
  content: WhyChooseServicesContent;
};

export const WhyChooseServices = ({ content }: WhyChooseServicesProps) => {
  const { title, subtitle, items } = content;

  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-(--text) md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-(--text-muted) md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <WhyChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};