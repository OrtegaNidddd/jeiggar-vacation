import type { WhyChooseItem } from "@/domain/types/Services";

type WhyChooseCardProps = {
  item: WhyChooseItem;
};

export const WhyChooseCard = ({ item }: WhyChooseCardProps) => {
  const { image, alt, title, description } = item;

  return (
    <article data-aos="zoom-in" className="group flex h-full flex-col">
      <div className="overflow-hidden rounded-[20px] border border-(--border) bg-white shadow-sm">
        <img
          src={image}
          alt={alt}
          className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pt-5 text-center">
        <h3 className="text-2xl font-semibold text-(--text)">{title}</h3>
        <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-(--text-muted)">
          {description}
        </p>
      </div>
    </article>
  );
};