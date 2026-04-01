import { ConnectivityHero } from "../components/ConnectivityHero";
import { ConnectivityGrid } from "../components/ConnectivityGrid";
import { ConnectivityCta } from "../components/ConnectivityCta";
import { ConnectivityLegalNotice } from "../components/ConnectivityLegalNotice";

import { connectivityHeroMock } from "@/mocks/connectivity-hero.mock";
import { connectivityMock } from "@/mocks/connectivity.mock";
import { connectivityCtaMock } from "@/mocks/connectivity-cta.mock";
import { connectivityLegalMock } from "@/mocks/connectivity-legal.mock";

export const ConnectivityPage = () => {
  return (
    <main>
      <ConnectivityHero content={connectivityHeroMock} />
      <ConnectivityGrid items={connectivityMock} />
      <ConnectivityCta content={connectivityCtaMock} />
      <ConnectivityLegalNotice content={connectivityLegalMock} />
    </main>
  );
};