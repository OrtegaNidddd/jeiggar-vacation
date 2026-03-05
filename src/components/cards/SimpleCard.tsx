import type { SimpleCardProps } from "../../domain/types/Cards";

export default function SimpleCard({ title, description, icon: Icon, to }: SimpleCardProps) {
  return (
    <a href={to} className="block">
      <div className="p-6 border border-(--border) rounded-(--radius) h-full hover:bg-(--bg-muted) transition-colors duration-500">
        {Icon && <Icon className="w-8 h-auto text-(--primary)" />}
        <h3 className="my-4! font-semibold">{title}</h3>
        <p className="text-sm text-(--text-muted)">{description}</p>
      </div>
    </a>
  );
}