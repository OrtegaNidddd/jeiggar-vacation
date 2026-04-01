import { MedicalAssistanceCta } from "../components/MedicalAssistanceCta";
import { MedicalAssistanceHero } from "../components/MedicalAssistanceHero";
import { MedicalCategoriesGrid } from "../components/MedicalCategoriesGrid";
import { MedicalDisclaimer } from "../components/MedicalDisclaimer";

import { medicalAssistanceCtaMock } from "@/mocks/medical-assistance-cta.mock";
import { medicalAssistanceDisclaimerMock } from "@/mocks/medical-assistance-disclaimer.mock";
import { medicalAssistanceHeroMock } from "@/mocks/medical-assistance-hero.mock";
import { medicalAssistanceMock } from "@/mocks/medical-assistance.mock";

export const MedicalAssistancePage = () => {
  return (
    <main>
      <MedicalAssistanceHero content={medicalAssistanceHeroMock} />
      <MedicalCategoriesGrid categories={medicalAssistanceMock} />
      <MedicalAssistanceCta content={medicalAssistanceCtaMock} />
      <MedicalDisclaimer content={medicalAssistanceDisclaimerMock} />
    </main>
  );
};