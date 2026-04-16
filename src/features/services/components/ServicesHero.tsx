import type { ServicesHeroContent } from "@/domain/types/Services";
import { placeImages } from "@/mocks/shared/place-images.mock";

type ServicesHeroProps = {
  content: ServicesHeroContent;
};

export const ServicesHero = ({ content }: ServicesHeroProps) => {
  const { badge, title, highlightedWord, description } = content;

  return (
    <section className="border-b border-(--border) bg-(--bg)">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src={placeImages.heroImages.services.mainHero}
            alt="Servicios turísticos"
            className="h-105 w-full object-cover md:h-130"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 py-10 md:px-12">
              <span data-aos="fade-down" className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                {badge}
              </span>

              <h1 data-aos="fade-down" data-aos-delay={100} className="mt-6 text-5xl font-extrabold leading-none tracking-tight text-white md:text-7xl">
                {title} <span className="text-(--primary-300)">{highlightedWord}</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay={160} className="mt-6 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};