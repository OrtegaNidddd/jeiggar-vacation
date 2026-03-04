import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell';
import AboutUs from '../features/landing/AboutUs';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            { path: 'nosotros', element: <AboutUs /> },
        ],
    },
]);