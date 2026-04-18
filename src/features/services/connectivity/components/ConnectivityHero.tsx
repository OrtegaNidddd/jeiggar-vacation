import HeroCard from "@/components/common/HeroCard";
import type { ConnectivityHeroContent } from "@/domain/types/Connectivity";
import { getPublicStorageUrl } from "@/lib/storage";

type ConnectivityHeroProps = {
  content: ConnectivityHeroContent;
};

export const ConnectivityHero = ({ content }: ConnectivityHeroProps) => {
  const { badge, title, description, image, alt } = content;
  const imageUrl = getPublicStorageUrl(image, "services");

  return (
    <section className="border-b border-border bg-(--bg)">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-0 md:py-10">
        <HeroCard
          imageSrc={imageUrl}
          imageAlt={alt}
          imageProps={{ loading: "lazy" }}
          overlayClassName="bg-linear-to-r from-black/70 via-black/45 to-black/20"
          badgeClassName="backdrop-blur-sm"
          badge={badge}
          title={title}
          description={description}
        />
      </div>
    </section>
  );
};