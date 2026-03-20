import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell';
import AboutUs from '@/features/landing/AboutUs';
import Home from '@/features/landing/Home';
import MapView from '@/features/map/MapView';
import { colombiaMapData } from '@/mocks/map.mock';
import Plans from '@/features/landing/Plans'; 
import DestinationDetail from '@/features/destinations/DestinationsDetails';
import DestinationsSelector from '@/features/destinations/DestinationsSelector';
import InternationalDestinations from '@/features/destinations/InternationalDestinations';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            { index: true, element: <Home /> },
            { path: 'nosotros', element: <AboutUs /> },
            { path: 'planes', element: <Plans /> },
            { path: 'destinos', element: <DestinationsSelector /> },
            { path: 'destinos/nacionales', element: <MapView data={colombiaMapData} /> },
            { path: 'destinos/internacionales', element: <InternationalDestinations /> },
            { path: 'destinos/:slug', element: <DestinationDetail /> },
        ],
    },
]);