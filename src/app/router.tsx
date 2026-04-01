import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell';
import AboutUs from '@/features/landing/AboutUs';

import { ServicesPage } from "@/features/services/page/ServicesPage";
import { MedicalAssistancePage } from "@/features/medical-assistance/page/MedicalAssistancePage";
import { ProceduresPage } from "@/features/procedures/page/ProceduresPage";
import { TravelRequirementsPage } from "@/features/travel-requirements/page/TravelRequirementsPage";
import { ConnectivityPage } from "@/features/connectivity/page/ConnectivityPage";
import { TransportPage } from "@/features/transport/page/TransportPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            { path: 'nosotros', element: <AboutUs /> },
            
            { path: 'servicios', element: <ServicesPage /> },
            { path: 'asistencia-medica', element: <MedicalAssistancePage /> },
            { path: 'procedimientos', element: <ProceduresPage /> },
            { path: 'requisitos-de-viaje', element: <TravelRequirementsPage /> },
            { path: "servicios/conectividad", element: <ConnectivityPage /> },
            { path: "servicios/transporte", element: <TransportPage /> },
        ],
    },
]);