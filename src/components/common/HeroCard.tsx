import type { CSSProperties, ImgHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroCardProps = {
  imageSrc: string;
  imageAlt: string;
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  rootClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  badgeAos?: string;
  titleAos?: string;
  descriptionAos?: string;
  actionsAos?: string;
  badgeAosDelay?: number | string;
  titleAosDelay?: number | string;
  descriptionAosDelay?: number | string;
  actionsAosDelay?: number | string;
  imageProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className">;
};

export default function HeroCard({
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  actions,
  rootClassName,
  imageClassName,
  contentClassName,
  badgeClassName,
  titleClassName,
  descriptionClassName,
  overlayClassName,
  overlayStyle,
  badgeAos = "fade-down",
  titleAos = "fade-down",
  descriptionAos = "fade-up",
  actionsAos = "fade-up",
  badgeAosDelay,
  titleAosDelay = 100,
  descriptionAosDelay = 160,
  actionsAosDelay = 220,
  imageProps,
}: HeroCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-105 items-center overflow-hidden rounded-3xl md:min-h-130",
        rootClassName,
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
        {...imageProps}
      />

      <div
        aria-hidden="true"
        className={cn("absolute inset-0", overlayClassName)}
        style={overlayStyle}
      />

      <div className="absolute inset-0 flex items-center">
        <div className={cn("relative z-10 w-full max-w-2xl px-6 py-12 sm:px-10 md:px-12 md:py-14", contentClassName)}>
          <span
            data-aos={badgeAos}
            data-aos-delay={badgeAosDelay}
            className={cn(
              "inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white",
              badgeClassName,
            )}
          >
            {badge}
          </span>

          <h1
            data-aos={titleAos}
            data-aos-delay={titleAosDelay}
            className={cn("mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl", titleClassName)}
          >
            {title}
          </h1>

          <p
            data-aos={descriptionAos}
            data-aos-delay={descriptionAosDelay}
            className={cn("mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg md:leading-8", descriptionClassName)}
          >
            {description}
          </p>

          {actions ? (
            <div data-aos={actionsAos} data-aos-delay={actionsAosDelay} className="mt-6">
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
