import type { MedicalDisclaimerContent } from "@/domain/types/MedicalAssistance";

type MedicalDisclaimerProps = {
  content: MedicalDisclaimerContent;
};

export const MedicalDisclaimer = ({ content }: MedicalDisclaimerProps) => {
  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div className="rounded-[24px] border border-(--border) bg-white p-6 shadow-sm">
          <p className="mb-0 text-sm leading-7 text-(--text-muted)">
            {content.text}
          </p>
        </div>
      </div>
    </section>
  );
};