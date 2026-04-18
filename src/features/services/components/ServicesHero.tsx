import HeroCard from "@/components/common/HeroCard";
import type { ServicesHeroContent } from "@/domain/types/Services";
import { getPublicStorageUrl } from "@/lib/storage";

type ServicesHeroProps = {
  content: ServicesHeroContent;
};

export const ServicesHero = ({ content }: ServicesHeroProps) => {
  const { badge, title, highlightedWord, description } = content;
  const heroImageUrl = getPublicStorageUrl("global-network.webp", "services");

  return (
    <section className="border-b border-border bg-(--bg)">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-0 md:py-10">
        <HeroCard
          imageSrc={heroImageUrl}
          imageAlt="Servicios turísticos"
          imageProps={{ loading: "lazy" }}
          overlayClassName="bg-linear-to-r from-black/70 via-black/45 to-black/20"
          badgeClassName="backdrop-blur-sm"
          badge={badge}
          title={
            <>
              {title} <span className="text-(--primary-300)">{highlightedWord}</span>
            </>
          }
          description={description}
        />
      </div>
    </section>
  );
};