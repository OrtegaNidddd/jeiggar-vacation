# ✈️ Jeiggar Vacation

> **Plataforma turística de vanguardia para la exploración y gestión de destinos nacionales e internacionales.**

Jeiggar Vacation es una solución web integral diseñada para agencias de viajes, permitiendo a los usuarios descubrir la riqueza turística de Colombia y el mundo a través de una experiencia interactiva y moderna. La plataforma combina un potente mapa interactivo con un panel de administración (CMS) robusto para la gestión dinámica de contenidos.

---

## 🌟 Visión General

El proyecto nace con el objetivo de digitalizar la oferta turística, facilitando la conexión entre el viajero y el destino. Se divide en dos ecosistemas principales:

1.  **Web Pública**: Un catálogo visualmente impactante que incluye mapas interactivos, buscador de destinos por categorías, y canales directos de cotización vía WhatsApp.
2.  **Panel Administrativo**: Un entorno seguro para la gestión de datos geográficos (países, ciudades) y destinos turísticos, incluyendo la carga de imágenes en la nube.

## 🚀 Características Principales

-   **🗺️ Mapa Interactivo**: Implementación de alto rendimiento con MapLibre GL para explorar destinos nacionales por ciudades.
-   **🌍 Jerarquía Geográfica**: Organización estructurada de tres niveles: Países → Ciudades → Destinos.
-   **📱 Cotización Omnicanal**: Integración fluida con WhatsApp para transformar el interés en reservas directas.
-   **🔐 Panel de Control (CMS)**: Sistema protegido con autenticación administrativa para gestionar cada detalle de la plataforma.
-   **⚡ Alto Rendimiento**: Navegación instantánea mediante rutas perezosas (lazy loading) y optimización de imágenes.
-   **🎨 Diseño Premium**: Interfaz moderna basada en Tailwind CSS 4 con animaciones suaves (AOS) y componentes accesibles.

---

## 🏗️ Arquitectura y Estándares

El proyecto sigue una arquitectura **Feature-Sliced Architecture (FSA)** adaptada, lo que permite una escalabilidad limpia y mantenible.

### Estructura de Carpetas
-   `src/app/`: Configuración global (Router, AppShell).
-   `src/auth/`: Lógica de sesión y protección de rutas con Supabase Auth.
-   `src/domain/`: Definición de tipos y modelos de datos (TypeScript).
-   `src/features/`: Módulos de negocio aislados (admin, landing, destinations, map).
-   `src/lib/`: Integraciones con servicios externos (Supabase, Storage, WhatsApp).
-   `src/components/ui/`: Biblioteca de componentes visuales de alta fidelidad.

---

## 📊 Modelo de Datos

La base de datos PostgreSQL en Supabase gestiona la siguiente estructura:

-   **Países (`countries`)**: Nivel raíz con datos geográficos y visibilidad controlada.
-   **Ciudades (`cities`)**: Regiones vinculadas a países con niveles de zoom específicos para el mapa.
-   **Destinos (`destinations`)**: Puntos de interés con categorías, actividades, clima y multimedia.
-   **Perfiles (`profiles`)**: Extensión de Auth para el control de acceso administrativo (RBAC).

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite |
| **Estilos** | Tailwind CSS 4, Lucide Icons, AOS |
| **Navegación** | React Router DOM v7 |
| **Backend (BaaS)** | Supabase (PostgreSQL, Auth, Storage) |
| **Mapas** | MapLibre GL |
| **UI** | Radix UI, shadcn |

---

## 🛠️ Configuración y Desarrollo

### Prerrequisitos
-   Node.js 20+
-   npm 10+
-   Cuenta en Supabase

### Instalación
```bash
git clone https://github.com/OrtegaNidddd/jeiggar-vacation
cd jeiggar-vacation
npm install
```

### Variables de Entorno
Crea un archivo `.env.local` con tus credenciales de Supabase:
```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anon_publica
```

### Scripts
-   `npm run dev`: Inicia el entorno de desarrollo.
-   `npm run build`: Compila para producción.
-   `npm run lint`: Verifica estándares de código.

---

## 📄 Documentación Técnica

Para una inmersión profunda en el sistema, consulta los manuales en formato LaTeX ubicados en `docs/`:
-   **[Diccionario de Datos](file:///mnt/hdd/projects/jeiggar-vacation/docs/diccionario_de_datos.tex)**: Esquemas, índices, triggers y políticas RLS.
-   **[Manual de Código](file:///mnt/hdd/projects/jeiggar-vacation/docs/manual_de_codigo.tex)**: Arquitectura detallada, convenciones y flujo de servicios.

---
© 2026 Jeiggar Vacation - Ingeniería de Software FESC.
