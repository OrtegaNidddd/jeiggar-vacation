import Button from "@/components/ui/Button";
import HeroCard from "@/components/common/HeroCard";
import type { PlansHeroContent } from "@/domain/types/Plans";
import { getPublicStorageUrl } from "@/lib/storage";

type PlansHeroProps = {
  content: PlansHeroContent;
};

export default function PlansHero({ content }: PlansHeroProps) {
  return (
    <HeroCard
      imageSrc={getPublicStorageUrl(content.image)}
      imageAlt={content.imageAlt}
      imageProps={{ loading: "lazy" }}
      rootClassName="shadow-md"
      overlayStyle={{
        background:
          "linear-gradient(90deg, rgba(2, 12, 27, 0.88) 0%, rgba(2, 12, 27, 0.7) 45%, rgba(2, 12, 27, 0.35) 72%, rgba(2, 12, 27, 0.08) 100%)",
      }}
      badgeClassName="border-white/35 bg-white/15"
      descriptionClassName="text-slate-100"
      badge={content.badge}
      title={
        <>
          {content.titleLineOne}
          <br />
          {content.titleLineTwo}
        </>
      }
      description={content.description}
      actions={
        <Button
          to={content.primaryButton.to}
          variant="primary"
          className="inline-flex h-12 items-center justify-center self-start px-8"
        >
          {content.primaryButton.label}
        </Button>
      }
    />
  );
}
