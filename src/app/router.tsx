import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell';
import AboutUs from '../features/landing/AboutUs';
import Home from '../features/landing/Home';
import MapView from '../features/map/MapView';
import { colombiaMapData } from '@/mocks/map.mock';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            { index: true, element: <Home /> },
            { path: 'nosotros', element: <AboutUs /> },
            { path: 'destinos/nacionales', element: <MapView data={colombiaMapData} /> },
        ],
    },
]);