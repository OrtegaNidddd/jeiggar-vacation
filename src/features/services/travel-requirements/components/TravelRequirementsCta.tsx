import { Link } from "react-router-dom";
import type { TravelRequirementsCtaContent } from "@/domain/types/TravelRequirements";

type TravelRequirementsCtaProps = {
  content: TravelRequirementsCtaContent;
};

export const TravelRequirementsCta = ({
  content,
}: TravelRequirementsCtaProps) => {
  const { title, description, buttonLabel, buttonHref } = content;

  return (
    <section data-aos="fade-up" className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-5xl px-6 py-14 text-center md:px-10">
        <h2 className="text-3xl font-bold text-(--text) md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-(--text-muted) md:text-lg">
          {description}
        </p>

        <div className="mt-6" data-aos="fade-up" data-aos-delay={120}>
          <Link
            to={buttonHref ?? "/contacto"}
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--primary-700)"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};