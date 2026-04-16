import type { ServiceItem, ServicesCtaContent } from "@/domain/types/Services";
import { CustomServiceCta } from "./CustomServiceCta";
import { ServiceCard } from "./ServiceCard";

type ServicesGridProps = {
  services: ServiceItem[];
  cta: ServicesCtaContent;
};

export const ServicesGrid = ({ services, cta }: ServicesGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.id} data-aos="fade-up" data-aos-delay={index * 80}>
              <ServiceCard service={service} />
            </div>
          ))}

          <div data-aos="fade-up" data-aos-delay={services.length * 80}>
            <CustomServiceCta content={cta} />
          </div>
        </div>
      </div>
    </section>
  );
};