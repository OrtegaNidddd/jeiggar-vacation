import { TransportHero } from "../components/TransportHero";
import { TransportGrid } from "../components/TransportGrid";
import { TransportCta } from "../components/TransportCta";
import { TransportLegalNotice } from "../components/TransportLegalNotice";

import { transportHeroMock } from "@/mocks/transport-hero.mock";
import { transportMock } from "@/mocks/transport.mock";
import { transportCtaMock } from "@/mocks/transport-cta.mock";
import { transportLegalMock } from "@/mocks/transport-legal.mock";

export const TransportPage = () => {
  return (
    <main>
      <TransportHero content={transportHeroMock} />
      <TransportGrid items={transportMock} />
      <TransportCta content={transportCtaMock} />
      <TransportLegalNotice content={transportLegalMock} />
    </main>
  );
};