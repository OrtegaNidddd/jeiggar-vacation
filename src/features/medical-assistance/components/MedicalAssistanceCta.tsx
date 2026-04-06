import { Link } from "react-router-dom";
import type { MedicalAssistanceCtaContent } from "@/domain/types/MedicalAssistance";

type MedicalAssistanceCtaProps = {
  content: MedicalAssistanceCtaContent;
};

export const MedicalAssistanceCta = ({
  content,
}: MedicalAssistanceCtaProps) => {
  const { title, buttonLabel, buttonHref } = content;

  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-5xl px-6 py-14 text-center md:px-10">
        <h2 className="text-3xl font-bold text-(--text) md:text-4xl">
          {title}
        </h2>

        <div className="mt-6">
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