import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import { ProtectedRoute } from "@/auth/ProtectedRoute";
import { loader as destinationListLoader } from "@/features/admin/pages/DestinationListLoader";

// ── Páginas públicas (sin cambios) ─────────────────────────────────────────
const Home = lazy(() => import("@/features/landing/Home"));
const AboutUs = lazy(() => import("@/features/landing/AboutUs"));
const Plans = lazy(() => import("@/features/landing/Plans"));
const ContactPage = lazy(() => import("@/features/contact/pages/ContactPage"));
const QuotePage = lazy(() => import("@/features/quotes/pages/QuotePage"));
const DestinationsSelector = lazy(() => import("@/features/destinations/DestinationsSelector"));
const InternationalDestinations = lazy(() => import("@/features/destinations/InternationalDestinations"));
const DestinationDetail = lazy(() => import("@/features/destinations/DestinationsDetails"));
const MapRoute = lazy(() => import("@/features/map/MapRoute"));
const ServicesPage = lazy(() => import("@/features/services/page/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const MedicalAssistancePage = lazy(() => import("@/features/services/medical-assistance/page/MedicalAssistancePage").then((m) => ({ default: m.MedicalAssistancePage })));
const ProceduresPage = lazy(() => import("@/features/services/procedures/page/ProceduresPage").then((m) => ({ default: m.ProceduresPage })));
const TravelRequirementsPage = lazy(() => import("@/features/services/travel-requirements/page/TravelRequirementsPage").then((m) => ({ default: m.TravelRequirementsPage })));
const ConnectivityPage = lazy(() => import("@/features/services/connectivity/page/ConnectivityPage").then((m) => ({ default: m.ConnectivityPage })));
const TransportPage = lazy(() => import("@/features/services/transport/page/TransportPage").then((m) => ({ default: m.TransportPage })));

// ── Páginas admin ──────────────────────────────────────────────────────────
const AdminLogin = lazy(() => import("@/features/admin/pages/Login"));
const AdminLayout = lazy(() => import("@/features/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("@/features/admin/pages/Dashboard"));
const DestinationList = lazy(() => import("@/features/admin/pages/DestinationList"));
const DestinationForm = lazy(() => import("@/features/admin/pages/DestinationForm"));

export const router = createBrowserRouter([
  // ── Web pública ────────────────────────────────────────────────────────
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <AboutUs /> },
      { path: "planes", element: <Plans /> },
      { path: "contacto", element: <ContactPage /> },
      { path: "destinos", element: <DestinationsSelector /> },
      { path: "destinos/nacionales", element: <MapRoute /> },
      { path: "destinos/internacionales", element: <InternationalDestinations /> },
      { path: "destinos/:slug", element: <DestinationDetail /> },
      { path: "servicios", element: <ServicesPage /> },
      { path: "servicios/asistencia-medica", element: <MedicalAssistancePage /> },
      { path: "servicios/tramites-y-documentacion", element: <ProceduresPage /> },
      { path: "servicios/requisitos-de-viaje", element: <TravelRequirementsPage /> },
      { path: "servicios/conectividad", element: <ConnectivityPage /> },
      { path: "servicios/transporte", element: <TransportPage /> },
      { path: "cotizar", element: <QuotePage /> },
    ]
  },

  // ── Login admin (público, fuera del AppShell) ──────────────────────────
  {
    path: "/admin/login",
    element: (
      <Suspense fallback={null}>
        <AdminLogin />
      </Suspense>
    )
  },

  // ── Panel admin (protegido, layout propio sin header/footer público) ───
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Suspense fallback={null}>
          <AdminLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "destinos", element: <DestinationList />, loader: destinationListLoader },
      { path: "destinos/nuevo", element: <DestinationForm /> },
      { path: "destinos/:id/editar", element: <DestinationForm /> },
    ]
  }
]);