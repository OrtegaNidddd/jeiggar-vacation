import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell';
import Home from '../features/landing/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            {path: '/', element: <Home />},
        ],
    },
]);