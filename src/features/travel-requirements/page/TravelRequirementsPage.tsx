import { TravelRequirementsHero } from "../components/TravelRequirementsHero";
import { TravelRequirementsGrid } from "../components/TravelRequirementsGrid";
import { TravelRequirementsCta } from "../components/TravelRequirementsCta";
import { TravelRequirementsLegalNotice } from "../components/TravelRequirementsLegalNotice";

import { travelRequirementsHeroMock } from "@/mocks/travel-requirements-hero.mock";
import { travelRequirementsMock } from "@/mocks/travel-requirements.mock";
import { travelRequirementsCtaMock } from "@/mocks/requirements-cta.mock";
import { travelRequirementsLegalMock } from "@/mocks/travel-requirements-legal.mock";

export const TravelRequirementsPage = () => {
  return (
    <main>
      <TravelRequirementsHero content={travelRequirementsHeroMock} />
      <TravelRequirementsGrid items={travelRequirementsMock} />
      <TravelRequirementsCta content={travelRequirementsCtaMock} />
      <TravelRequirementsLegalNotice content={travelRequirementsLegalMock} />
    </main>
  );
};