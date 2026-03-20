import Button from "@/components/ui/Button";
import type { PlansFinalCtaContent } from "@/domain/types/Plans";
import {
  PLANS_ADVISOR_TEMPLATE,
  WHATSAPP_NUMBER,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";

type PlansFinalCTAProps = {
  content: PlansFinalCtaContent;
};

export default function PlansFinalCTA({ content }: PlansFinalCTAProps) {
  const handleAdvisorClick = () => {
    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      message: PLANS_ADVISOR_TEMPLATE,
    });
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-white shadow-lg sm:px-10 md:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #ffffff55 1px, transparent 2px), radial-gradient(circle at 80% 60%, #ffffff44 1px, transparent 2px)",
          backgroundSize: "28px 28px, 36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
          {content.titleLineOne}
          <br />
          {content.titleLineTwo}
        </h2>
        <p className="mt-4 text-base leading-7 text-sky-100 md:text-xl">{content.description}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={handleAdvisorClick}
            variant="secondary"
            className="inline-flex h-12 min-w-52 items-center justify-center border-white/45! bg-white! px-7 text-primary! hover:bg-slate-100!"
          >
            {content.primaryButton.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
