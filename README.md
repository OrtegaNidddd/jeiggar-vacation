# Jeiggar Vacation

> Plataforma web de viajes para explorar destinos y servicios turísticos con contacto directo por WhatsApp y datos integrados desde Supabase.

## ¿Qué es esto?
Jeiggar Vacation es una aplicación frontend construida con React para una agencia de viajes. Centraliza contenido de marca, planes, destinos nacionales e internacionales, y servicios como conectividad, asistencia médica, trámites, transporte y requisitos de viaje.

El proyecto usa rutas públicas en una SPA, componentes compartidos, un mapa interactivo para destinos nacionales y una capa de servicios para consultar información desde Supabase.

## Tecnologías
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- Supabase JavaScript SDK
- MapLibre GL
- AOS
- Lucide React
- shadcn y Radix UI

## Requisitos previos
- Node.js 20 o superior
- npm
- Navegador moderno con soporte WebGL para la sección de mapa

## Instalación
```bash
# Clonar e instalar
git clone https://github.com/OrtegaNidddd/jeiggar-vacation
cd jeiggar-vacation
npm install
```

## Configuración
El proyecto requiere variables de entorno para conectarse a Supabase.

```bash
cp .env.example .env
```

Configura al menos estas variables en `.env`:

```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anon_publica
```

## Uso / Desarrollo local
```bash
npm run dev
```

## Scripts disponibles
- `npm run dev`: inicia el servidor de desarrollo con Vite.
- `npm run build`: ejecuta el chequeo de tipos y compila el proyecto para producción.
- `npm run preview`: levanta una vista previa local del build.
- `npm run lint`: ejecuta ESLint sobre el código fuente.

## Estructura del proyecto
```text
src/
  app/          # Router, shell principal y utilidades de navegación global
  assets/       # Recursos estáticos (imágenes y contenido multimedia)
  components/   # Componentes compartidos y UI reutilizable
  domain/       # Tipos y contratos de dominio
  features/     # Módulos por funcionalidad (landing, destinos, mapa, servicios)
  hooks/        # Hooks reutilizables
  lib/          # Integraciones y utilidades transversales (Supabase, storage, WhatsApp)
  mocks/        # Contenido estructurado para secciones y componentes
  main.tsx      # Punto de entrada de la aplicación

docs/
  arquitectura.md
  configuracion.md
  api.md
  despliegue.md
```
