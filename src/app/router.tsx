import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

const Home = lazy(() => import("@/features/landing/Home"));
const AboutUs = lazy(() => import("@/features/landing/AboutUs"));
const Plans = lazy(() => import("@/features/landing/Plans"));
const Contact = lazy(() => import("@/features/landing/Contact"));
const DestinationsSelector = lazy(() => import("@/features/destinations/DestinationsSelector"));
const InternationalDestinations = lazy(() => import("@/features/destinations/InternationalDestinations"));
const DestinationDetail = lazy(() => import("@/features/destinations/DestinationsDetails"));
const MapRoute = lazy(() => import("@/features/map/MapRoute"));
const ServicesPage = lazy(() => import("@/features/services/page/ServicesPage").then((module) => ({ default: module.ServicesPage })));
const MedicalAssistancePage = lazy(() => import("@/features/services/medical-assistance/page/MedicalAssistancePage").then((module) => ({ default: module.MedicalAssistancePage })));
const ProceduresPage = lazy(() => import("@/features/services/procedures/page/ProceduresPage").then((module) => ({ default: module.ProceduresPage })));
const TravelRequirementsPage = lazy(() => import("@/features/services/travel-requirements/page/TravelRequirementsPage").then((module) => ({ default: module.TravelRequirementsPage })));
const ConnectivityPage = lazy(() => import("@/features/services/connectivity/page/ConnectivityPage").then((module) => ({ default: module.ConnectivityPage })));
const TransportPage = lazy(() => import("@/features/services/transport/page/TransportPage").then((module) => ({ default: module.TransportPage })));

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
      { path: "destinos/nacionales", element: <MapRoute /> },
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