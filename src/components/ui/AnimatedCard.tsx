import type { AnimatedCardProps } from "@/domain/types/Cards";

export default function AnimatedCard({
  title,
  description,
  icon: Icon,
  centerText = false,
}: AnimatedCardProps) {
  return (
    <div
      className="rounded-lg border border-border p-6 hover:bg-(--bg-muted) shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-primary"
    >
      {/* Icono + titulo */}
      <div className="text-center">

        {Icon && (
          <Icon
            className="w-7 h-7 mx-auto mb-4 text-(--primary)"
            aria-hidden={true}
          />
        )}

        <h3 className="text-lg font-semibold text-(--text)">
          {title}
        </h3>

      </div>

      {/* Descripción */}
      <p className={`mt-4 text-sm text-(--text-muted) leading-6 ${centerText ? 'text-center' : 'text-justify'}`}>
        {description}
      </p>

    </div>
  );
}
