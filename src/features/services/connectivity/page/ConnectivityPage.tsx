import { ConnectivityHero } from "../components/ConnectivityHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { ConnectivityGrid } from "../components/ConnectivityGrid";
import { ConnectivityCta } from "../components/ConnectivityCta";
import { ConnectivityLegalNotice } from "../components/ConnectivityLegalNotice";

import { connectivityHeroMock } from "@/mocks/services/connectivity";
import { connectivityMock } from "@/mocks/services/connectivity";
import { connectivityGridMock } from "@/mocks/services/connectivity";
import { connectivityCtaMock } from "@/mocks/services/connectivity";
import { connectivityLegalMock } from "@/mocks/services/connectivity";

export const ConnectivityPage = () => {
  return (
    <main data-aos="fade-up">
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Servicios", to: "/servicios" },
          { label: "Conectividad" },
        ]}
      />
      <ConnectivityHero content={connectivityHeroMock} />
      <ConnectivityGrid content={connectivityGridMock} items={connectivityMock} />
      <ConnectivityCta content={connectivityCtaMock} />
      <ConnectivityLegalNotice content={connectivityLegalMock} />
    </main>
  );
};