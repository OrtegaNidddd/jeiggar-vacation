import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className={`mx-auto max-w-6xl px-4 ${className}`.trim()}>
      <ol className="flex flex-wrap items-center gap-2 text-xs text-(--text-muted)">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${item.to ?? index}`} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="font-medium text-(--text-muted) transition-colors hover:text-(--text)"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-semibold text-(--text)" : ""}>
                  {item.label}
                </span>
              )}

              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}