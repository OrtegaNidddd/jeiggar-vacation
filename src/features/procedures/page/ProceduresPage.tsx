import { ProceduresHero } from "../components/ProceduresHero";
import { ProceduresCountriesGrid } from "../components/ProceduresCountriesGrid";
import { ProceduresBenefitsGrid } from "../components/ProceduresBenefitsGrid";
import { ProceduresProcessGrid } from "../components/ProceduresProcessGrid";
import { ProceduresCta } from "../components/ProceduresCta";
import { ProceduresLegalNotice } from "../components/ProceduresLegalNotice";

import { proceduresHeroMock } from "@/mocks/procedures-hero.mock";
import { proceduresCountriesMock } from "@/mocks/procedures-countries.mock";
import { proceduresBenefitsMock } from "@/mocks/procedures-benefits.mock";
import { proceduresProcessMock } from "@/mocks/procedures-process.mock";
import { proceduresCtaMock } from "@/mocks/procedures-cta.mock";
import { proceduresLegalMock } from "@/mocks/procedures-legal.mock";

export const ProceduresPage = () => {
  return (
    <main>
      <ProceduresHero content={proceduresHeroMock} />
      <ProceduresCountriesGrid items={proceduresCountriesMock} />
      <ProceduresBenefitsGrid items={proceduresBenefitsMock} />
      <ProceduresProcessGrid items={proceduresProcessMock} />
      <ProceduresCta content={proceduresCtaMock} />
      <ProceduresLegalNotice content={proceduresLegalMock} />
    </main>
  );
};