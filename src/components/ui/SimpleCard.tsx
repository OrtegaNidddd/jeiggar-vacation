import type { SimpleCardProps } from "@/domain/types/Cards";
import { Link } from "react-router-dom";

export default function SimpleCard({ title, description, icon: Icon, to }: SimpleCardProps) {
  return (
    <Link to={to} className="block">
      <div className="p-6 border border-(--border) rounded-(--radius) h-full bg-(--bg) hover:bg-(--bg-muted-2) transition! duration-500!">
        {Icon && <Icon className="w-8 h-auto text-(--primary)" />}
        <h3 className="my-4! font-semibold">{title}</h3>
        <p className="text-sm text-(--text-muted)">{description}</p>
      </div>
    </Link>
  );
}