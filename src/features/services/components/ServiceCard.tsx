import { Link } from "react-router-dom";
import type { ServiceItem } from "@/domain/types/Services";

type ServiceCardProps = {
  service: ServiceItem;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { icon: Icon, title, description, href } = service;

  return (
    <article data-aos="zoom-in" className="group flex h-full flex-col rounded-[20px] border border-(--border) bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--primary) hover:shadow-lg">
      
      <div className="mb-4 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--primary-50)">
          <Icon className="h-5 w-5 text-(--primary)" />
        </div>
      </div>

      <h3 className="text-center text-xl font-semibold text-(--text)">
        {title}
      </h3>

      <p className="mt-3 text-left text-sm leading-7 text-(--text-muted)">
        {description}
      </p>

      {href ? (
        <Link
          to={href}
          className="mt-4 inline-flex w-fit text-sm font-semibold text-(--primary) transition-colors duration-200 hover:text-(--primary-700)"
        >
          Ver detalles
        </Link>
      ) : null}
    </article>
  );
};