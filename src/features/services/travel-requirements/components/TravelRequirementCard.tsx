import type { TravelRequirementItem } from "@/domain/types/TravelRequirements";
import { getPublicStorageUrl } from "@/lib/storage";

type TravelRequirementCardProps = {
  item: TravelRequirementItem;
};

export const TravelRequirementCard = ({
  item,
}: TravelRequirementCardProps) => {
  const { title, image, alt, description } = item;
  const imageUrl = getPublicStorageUrl(image, "services");

  return (
    <article data-aos="zoom-in" className="group flex h-full flex-col rounded-[20px] border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg">
      <div className="overflow-hidden rounded-[16px]">
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          className="h-45 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-xl font-semibold text-(--text)">
        {title}
      </h3>

      <p className="mt-3 text-left text-sm leading-7 text-(--text-muted)">
        {description}
      </p>
    </article>
  );
};