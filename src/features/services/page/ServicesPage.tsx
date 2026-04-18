import { ServicesGrid } from "../components/ServicesGrid";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { ServicesHero } from "../components/ServicesHero";
import { WhyChooseServices } from "../components/WhyChooseServices";

import { servicesCtaMock } from "@/mocks/services/common";
import { servicesHeroMock } from "@/mocks/services/common";
import { servicesMock } from "@/mocks/services/common";
import { whyChooseServicesMock } from "@/mocks/services/common";

export const ServicesPage = () => {
  return (
    <main data-aos="fade-up">
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Servicios" },
        ]}
      />
      <ServicesHero content={servicesHeroMock} />
      <ServicesGrid services={servicesMock} cta={servicesCtaMock} />
      <WhyChooseServices content={whyChooseServicesMock} />
    </main>
  );
};