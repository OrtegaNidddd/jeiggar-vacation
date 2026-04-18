import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import type { ImageCardProps } from "@/domain/types/Cards";

export default function ImageCard({
  title,
  description,
  image,
  badge,
  meta = [],
  cta,
  to,
}: ImageCardProps) {
  return (
    <article className="block group">
      <div className="rounded-lg border border-border overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg bg-(--bg) h-full flex flex-col">

        {/* Image area */}
        <div className="relative w-full h-48 bg-(--bg-muted) overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-border"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          )}

          {/* Badge */}
          {badge && (
            <span className="absolute top-3 left-3 bg-(--primary) text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Title */}
            <Link to={to} className="hover:text-primary transition-colors">
              <h3 className="text-base font-semibold text-(--text) leading-snug mb-3">
                  {title}
              </h3>
            </Link>

            {/* Meta items */}
            {meta.length > 0 && (
                <div className="flex items-center gap-4 text-xs text-(--text-muted) mb-3">
                {meta.map(({ icon: Icon, label }, i) => (
                    <span key={i} className="flex items-center gap-1">
                    {Icon && <Icon className="w-3.5 h-3.5" aria-hidden />}
                    {label}
                    </span>
                ))}
                </div>
            )}

            {/* Description */}
            {description && (
                <p className="text-sm text-(--text-muted) leading-relaxed mb-4">
                {description}
                </p>
            )}
          </div>

          {/* CTA */}
          {cta && (
            <div className="border-t border-border pt-4">
              <Button to={to} variant={cta.variant} className="w-full">
                {cta.label}
              </Button>
            </div>
          )}

        </div>
      </div>
    </article>
  );
}