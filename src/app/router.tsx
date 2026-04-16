import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

import AboutUs from "@/features/landing/AboutUs";
import Home from "@/features/landing/Home";
import Plans from "@/features/landing/Plans";
import Contact from "@/features/landing/Contact";

import MapView from "@/features/map/MapView";
import { colombiaMapData } from "@/mocks/map.mock";

import DestinationDetail from "@/features/destinations/DestinationsDetails";
import DestinationsSelector from "@/features/destinations/DestinationsSelector";
import InternationalDestinations from "@/features/destinations/InternationalDestinations";

import { ServicesPage } from "@/features/services/page/ServicesPage";
import { MedicalAssistancePage } from "@/features/services/medical-assistance/page/MedicalAssistancePage";
import { ProceduresPage } from "@/features/services/procedures/page/ProceduresPage";
import { TravelRequirementsPage } from "@/features/services/travel-requirements/page/TravelRequirementsPage";
import { ConnectivityPage } from "@/features/services/connectivity/page/ConnectivityPage";
import { TransportPage } from "@/features/services/transport/page/TransportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <AboutUs /> },
      { path: "planes", element: <Plans /> },
      { path: "contacto", element: <Contact /> },
      { path: "destinos", element: <DestinationsSelector /> },
      { path: "destinos/nacionales", element: <MapView data={colombiaMapData} /> },
      { path: "destinos/internacionales", element: <InternationalDestinations /> },
      { path: "destinos/:slug", element: <DestinationDetail /> },

      { path: "servicios", element: <ServicesPage /> },
      { path: "servicios/asistencia-medica", element: <MedicalAssistancePage /> },
      { path: "servicios/tramites-y-documentacion", element: <ProceduresPage /> },
      { path: "servicios/requisitos-de-viaje", element: <TravelRequirementsPage /> },
      { path: "servicios/conectividad", element: <ConnectivityPage /> },
      { path: "servicios/transporte", element: <TransportPage /> }
    ]
  }
]);