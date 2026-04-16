# Arquitectura

## Visión general
El proyecto está organizado como una SPA de React con enrutamiento por página y un layout compartido. La experiencia se apoya en contenido modular, mocks estáticos y componentes reutilizables para mantener separada la presentación de cada sección.

## Capas principales
- `src/app`: configuración global de la aplicación, router y shell principal.
- `src/features`: páginas y bloques por dominio funcional, como landing, destinos, servicios, conectividad y mapa.
- `src/components`: componentes compartidos entre features, como header, footer y controles UI.
- `src/domain`: tipos de datos y contratos que modelan el contenido de la app.
- `src/mocks`: datos de ejemplo y contenido estructurado para renderizar la web sin depender de un backend.
- `src/lib`: utilidades transversales, como helpers de WhatsApp y funciones de clase/estado.
- `src/hooks`: hooks reutilizables, por ejemplo la inicialización de AOS.

## Composición de la app
La entrada de la aplicación vive en `src/main.tsx`, que monta el router de React Router. El layout global está en `src/app/AppShell.tsx` e incluye:
- Header fijo.
- Contenedor principal con el outlet de rutas.
- Footer compartido.
- Scroll-to-top y activación de AOS.

Las rutas están definidas en `src/app/router.tsx` y cubren la landing, destinos, servicios, conectividad y páginas de detalle.

## Decisiones técnicas
- El alias `@` apunta a `src`, para evitar imports relativos largos.
- La mayor parte del contenido visible se alimenta desde mocks y tipos, lo que facilita iterar sobre copy y diseño sin backend.
- La integración de WhatsApp está centralizada en `src/lib/whatsapp.ts` para reutilizar plantillas y sanitización del número.
- La vista de mapa usa MapLibre GL y un componente propio en `src/components/ui/Map.tsx`.
- Los estilos globales y tokens están en `src/index.css`, con Tailwind 4 y variables CSS para colores, radios y sombras.

## Organización funcional
- Landing: portada, valores, planes, CTA y carrusel.
- Destinos: selector, destinos nacionales, destinos internacionales y detalle por slug.
- Servicios: servicios generales, asistencia médica, trámites, requisitos de viaje, conectividad y transporte.
- Mapa: visualización interactiva de ciudades y atractivos turísticos de Colombia.