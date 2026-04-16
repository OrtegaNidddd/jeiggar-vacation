# Jeiggar Vacation

> Plataforma web de viajes y turismo para explorar destinos, planes y servicios complementarios con contacto directo por WhatsApp.

## ¿Qué es esto?
Jeiggar Vacation es una aplicación frontend en React orientada a una agencia de viajes. Reúne información de la marca, planes, destinos nacionales e internacionales, y distintas líneas de servicio como asistencia médica, trámites, requisitos de viaje, conectividad y transporte.

La navegación principal vive en una sola app con rutas públicas, un layout compartido, mapas interactivos para destinos nacionales y llamadas a acción hacia WhatsApp.

## Tecnologías
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- MapLibre GL
- AOS para animaciones de entrada
- Lucide React para iconografía
- shadcn y Radix UI para componentes base

## Requisitos previos
- Node.js 20 o superior
- npm
- Un navegador moderno con soporte para WebGL para la vista de mapa

## Instalación
```bash
# TODO: completar la URL del repositorio
 git clone <repository-url>
cd jeiggar-vacation
npm install
```

## Uso local
```bash
npm run dev
```

## Scripts disponibles
- `npm run dev`: inicia Vite en modo desarrollo
- `npm run build`: ejecuta el chequeo de tipos y genera el build de producción
- `npm run preview`: sirve localmente el build generado
- `npm run lint`: ejecuta ESLint en el proyecto

## Estructura del proyecto
```text
src/
  app/          # Router, shell de la app y utilidades de navegación global
  assets/       # Imágenes y recursos estáticos
  components/   # Componentes compartidos por toda la aplicación
  domain/       # Tipos y contratos de dominio
  features/     # Módulos por funcionalidad o sección del sitio
  hooks/        # Hooks reutilizables
  lib/          # Utilidades y helpers transversales
  mocks/        # Contenido de demostración y datos estáticos
  index.css     # Base visual, tokens y estilos globales
  main.tsx      # Punto de entrada de React

docs/
  arquitectura.md
  configuracion.md
```

