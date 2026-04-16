import type { NavItem } from "@/domain/types/NavItem";

export const navigationMock: NavItem[] = [
    { 
        label: 'Inicio',
        to: '/' 
    },
    { 
        label: 'Destinos', 
        children: [
            { 
                label: 'Destinos Nacionales', 
                to: '/destinos/nacionales' 
            },
            { 
                label: 'Destinos Internacionales', 
                to: '/destinos/internacionales' 
            },
        ]
    },
    { 
        label: 'Planes', 
        to: '/planes' 
    },
    { 
        label: 'Servicios', 
        to: '/servicios'    
    },
    { 
        label: 'Nosotros', 
        to: '/nosotros' 
    },
    {
        label: 'Contacto',
        to: '/contacto',
        variant: 'highlight'
    }
];