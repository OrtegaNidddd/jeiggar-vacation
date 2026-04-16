import { ConnectivityHero } from "../components/ConnectivityHero";
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
      <ConnectivityHero content={connectivityHeroMock} />
      <ConnectivityGrid content={connectivityGridMock} items={connectivityMock} />
      <ConnectivityCta content={connectivityCtaMock} />
      <ConnectivityLegalNotice content={connectivityLegalMock} />
    </main>
  );
};