import { ServicesGrid } from "../components/ServicesGrid";
import { ServicesHero } from "../components/ServicesHero";
import { WhyChooseServices } from "../components/WhyChooseServices";

import { servicesCtaMock } from "@/mocks/services-cta.mock";
import { servicesHeroMock } from "@/mocks/services-hero.mock";
import { servicesMock } from "@/mocks/services.mock";
import { whyChooseServicesMock } from "@/mocks/why-choose-services.mock";

export const ServicesPage = () => {
  return (
    <main>
      <ServicesHero content={servicesHeroMock} />
      <ServicesGrid services={servicesMock} cta={servicesCtaMock} />
      <WhyChooseServices content={whyChooseServicesMock} />
    </main>
  );
};