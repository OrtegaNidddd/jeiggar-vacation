import { ProceduresHero } from "../components/ProceduresHero";
import { ProceduresCountriesGrid } from "../components/ProceduresCountriesGrid";
import { ProceduresBenefitsGrid } from "../components/ProceduresBenefitsGrid";
import { ProceduresProcessGrid } from "../components/ProceduresProcessGrid";
import { ProceduresCta } from "../components/ProceduresCta";
import { ProceduresLegalNotice } from "../components/ProceduresLegalNotice";

import { proceduresHeroMock } from "@/mocks/services/procedures";
import { proceduresCountriesMock } from "@/mocks/services/procedures";
import { proceduresBenefitsMock } from "@/mocks/services/procedures";
import { proceduresProcessMock } from "@/mocks/services/procedures";
import { proceduresCtaMock } from "@/mocks/services/procedures";
import { proceduresLegalMock } from "@/mocks/services/procedures";

export const ProceduresPage = () => {
  return (
    <main data-aos="fade-up">
      <ProceduresHero content={proceduresHeroMock} />
      <ProceduresCountriesGrid items={proceduresCountriesMock} />
      <ProceduresBenefitsGrid items={proceduresBenefitsMock} />
      <ProceduresProcessGrid items={proceduresProcessMock} />
      <ProceduresCta content={proceduresCtaMock} />
      <ProceduresLegalNotice content={proceduresLegalMock} />
    </main>
  );
};