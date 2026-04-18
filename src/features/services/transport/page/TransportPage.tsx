import { TransportHero } from "../components/TransportHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
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
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Servicios", to: "/servicios" },
          { label: "Transporte" },
        ]}
      />
      <TransportHero content={transportHeroMock} />
      <TransportGrid items={transportMock} />
      <TransportCta content={transportCtaMock} />
      <TransportLegalNotice content={transportLegalMock} />
    </main>
  );
};