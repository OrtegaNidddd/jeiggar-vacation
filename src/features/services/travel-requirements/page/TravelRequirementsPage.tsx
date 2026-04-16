import { TravelRequirementsHero } from "../components/TravelRequirementsHero";
import { TravelRequirementsGrid } from "../components/TravelRequirementsGrid";
import { TravelRequirementsCta } from "../components/TravelRequirementsCta";
import { TravelRequirementsLegalNotice } from "../components/TravelRequirementsLegalNotice";

import { travelRequirementsHeroMock } from "@/mocks/services/travel-requirements";
import { travelRequirementsMock } from "@/mocks/services/travel-requirements";
import { travelRequirementsCtaMock } from "@/mocks/services/travel-requirements";
import { travelRequirementsLegalMock } from "@/mocks/services/travel-requirements";

export const TravelRequirementsPage = () => {
  return (
    <main data-aos="fade-up">
      <TravelRequirementsHero content={travelRequirementsHeroMock} />
      <TravelRequirementsGrid items={travelRequirementsMock} />
      <TravelRequirementsCta content={travelRequirementsCtaMock} />
      <TravelRequirementsLegalNotice content={travelRequirementsLegalMock} />
    </main>
  );
};