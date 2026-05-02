# Jeiggar Vacation

> Plataforma turística moderna para la exploración y reserva de destinos en Colombia e internacionales.

## ¿Qué es esto?
Es una aplicación web diseñada para ofrecer experiencias de viaje personalizadas. Permite a los usuarios explorar un mapa interactivo de destinos, consultar detalles de planes turísticos y gestionar reservas a través de canales directos como WhatsApp.

## Tecnologías
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- Supabase JavaScript SDK (Auth, DB, Storage)
- MapLibre GL
- AOS (Animate On Scroll)
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

## Panel de Administración
El proyecto incluye un panel de gestión privada en la ruta `/admin`.
- **Autenticación**: Integrado con Supabase Auth.
- **Funcionalidades**: CRUD de destinos, gestión de destacados y subida de imágenes a Storage.

## Estructura del proyecto
```text
src/
  app/          # Router, shell principal y utilidades de navegación global
  assets/       # Recursos estáticos (imágenes y contenido multimedia)
  auth/         # Contexto y hooks de autenticación con Supabase
  components/   # Componentes compartidos y UI reutilizable
  domain/       # Tipos y contratos de dominio
  features/     # Módulos por funcionalidad
    admin/      # Panel de gestión de contenidos y autenticación
    landing/    # Secciones principales del home y páginas informativas
    destinations/# Detalle de destinos y servicios de consulta
    map/        # Módulo de mapa interactivo
    services/   # Páginas de servicios especializados
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
