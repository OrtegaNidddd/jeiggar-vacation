import type { ConnectivityHeroContent } from "@/domain/types/Connectivity";
import heroImage from "@/assets/images/services/serviciosturisticos.jpg";

type ConnectivityHeroProps = {
  content: ConnectivityHeroContent;
};

export const ConnectivityHero = ({ content }: ConnectivityHeroProps) => {
  const { badge, title, description } = content;

  return (
    <section className="border-b border-(--border) bg-(--bg)">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src={heroImage}
            alt="Conectividad internacional"
            className="h-[400px] w-full object-cover md:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 py-10 md:px-12">
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                {badge}
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-none tracking-tight text-white md:text-7xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};