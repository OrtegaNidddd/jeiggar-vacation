import { ServicesGrid } from "../components/ServicesGrid";
import { ServicesHero } from "../components/ServicesHero";
import { WhyChooseServices } from "../components/WhyChooseServices";

import { servicesCtaMock } from "@/mocks/services/common";
import { servicesHeroMock } from "@/mocks/services/common";
import { servicesMock } from "@/mocks/services/common";
import { whyChooseServicesMock } from "@/mocks/services/common";

export const ServicesPage = () => {
  return (
    <main data-aos="fade-up">
      <ServicesHero content={servicesHeroMock} />
      <ServicesGrid services={servicesMock} cta={servicesCtaMock} />
      <WhyChooseServices content={whyChooseServicesMock} />
    </main>
  );
};