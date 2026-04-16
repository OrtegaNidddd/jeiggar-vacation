import { MedicalAssistanceCta } from "../components/MedicalAssistanceCta";
import { MedicalAssistanceHero } from "../components/MedicalAssistanceHero";
import { MedicalCategoriesGrid } from "../components/MedicalCategoriesGrid";
import { MedicalDisclaimer } from "../components/MedicalDisclaimer";

import { medicalAssistanceCtaMock } from "@/mocks/services/medical-assistance";
import { medicalAssistanceDisclaimerMock } from "@/mocks/services/medical-assistance";
import { medicalAssistanceHeroMock } from "@/mocks/services/medical-assistance";
import { medicalAssistanceMock } from "@/mocks/services/medical-assistance";

export const MedicalAssistancePage = () => {
  return (
    <main data-aos="fade-up">
      <MedicalAssistanceHero content={medicalAssistanceHeroMock} />
      <MedicalCategoriesGrid categories={medicalAssistanceMock} />
      <MedicalAssistanceCta content={medicalAssistanceCtaMock} />
      <MedicalDisclaimer content={medicalAssistanceDisclaimerMock} />
    </main>
  );
};