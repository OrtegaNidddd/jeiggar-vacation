import { Link } from "react-router-dom";
import type { ServicesCtaContent } from "@/domain/types/Services";

type CustomServiceCtaProps = {
  content: ServicesCtaContent;
};

export const CustomServiceCta = ({ content }: CustomServiceCtaProps) => {
  const { title, description, buttonLabel, buttonHref } = content;

  return (
    <article className="flex h-full flex-col justify-between rounded-[24px] bg-(--primary) p-8 text-white shadow-md">
      <div>
        <h3 className="text-3xl font-bold leading-tight">{title}</h3>
        <p className="mt-4 text-base leading-8 text-white/90">{description}</p>
      </div>

      <div className="mt-8">
        <Link
          to={buttonHref ?? "/contacto"}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--primary) transition-transform duration-200 hover:scale-[1.02]"
        >
          {buttonLabel}
        </Link>
      </div>
    </article>
  );
};