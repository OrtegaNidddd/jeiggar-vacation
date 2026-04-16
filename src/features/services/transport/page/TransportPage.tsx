import { TransportHero } from "../components/TransportHero";
import { TransportGrid } from "../components/TransportGrid";
import { TransportCta } from "../components/TransportCta";
import { TransportLegalNotice } from "../components/TransportLegalNotice";

import { transportHeroMock } from "@/mocks/services/transport";
import { transportMock } from "@/mocks/services/transport";
import { transportCtaMock } from "@/mocks/services/transport";
import { transportLegalMock } from "@/mocks/services/transport";

export const TransportPage = () => {
  return (
    <main data-aos="fade-up">
      <TransportHero content={transportHeroMock} />
      <TransportGrid items={transportMock} />
      <TransportCta content={transportCtaMock} />
      <TransportLegalNotice content={transportLegalMock} />
    </main>
  );
};