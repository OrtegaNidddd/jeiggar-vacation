import Button from "@/components/ui/Button";
import type { PlansHeroContent } from "@/domain/types/Plans";

type PlansHeroProps = {
  content: PlansHeroContent;
};

export default function PlansHero({ content }: PlansHeroProps) {
  return (
    <div data-aos="fade-down" className="relative overflow-hidden rounded-3xl shadow-md">
      <img
        src={content.image}
        alt={content.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 12, 27, 0.88) 0%, rgba(2, 12, 27, 0.7) 45%, rgba(2, 12, 27, 0.35) 72%, rgba(2, 12, 27, 0.08) 100%)",
        }}
      />

      <div className="relative max-w-2xl px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16">
        <span data-aos="fade-down" className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
          {content.badge}
        </span>
        <h1 data-aos="fade-down" data-aos-delay={100} className="mt-5 text-4xl font-bold leading-[1.08] text-white md:text-6xl">
          {content.titleLineOne}
          <br />
          {content.titleLineTwo}
        </h1>
        <p data-aos="fade-up" data-aos-delay={160} className="mt-5 max-w-xl text-base leading-7 text-slate-100 md:text-xl md:leading-8">
          {content.description}
        </p>

        <Button
          to={content.primaryButton.to}
          variant="primary"
          className="mt-6 inline-flex h-12 items-center justify-center self-start px-8"
          data-aos="fade-up"
          data-aos-delay={220}
        >
          {content.primaryButton.label}
        </Button>
      </div>
    </div>
  );
}
