# Arquitectura

## Visión general
Jeiggar Vacation es una SPA de React organizada por módulos funcionales. La aplicación se divide en dos grandes áreas: la web pública y el panel administrativo.

## Áreas Principales
1.  **Web Pública**: Gestionada por `AppShell.tsx`, incluye header y footer global.
2.  **Panel Admin**: Gestionada por `AdminLayout.tsx`, protegida por autenticación y con navegación lateral propia.

## Autenticación y Seguridad
- **Supabase Auth**: Se utiliza para gestionar el acceso al panel administrativo.
- **ProtectedRoute**: Componente que envuelve las rutas de `/admin` para verificar la sesión del usuario.
- **Contexto de Auth**: Ubicado en `src/auth/`, centraliza el estado del usuario y las funciones de login/logout.

## Capas principales
- `src/app`: Composición global, definición de rutas dinámicas.
- `src/features`: Lógica de negocio y páginas por dominio (landing, admin, destinations, map, services).
- `src/components`: UI atómica y componentes compartidos.
- `src/domain`: Contratos de datos (Typescript types/interfaces).
- `src/lib`: Integraciones de terceros (Supabase, WhatsApp templates, storage helper).

## Flujo de Datos Administrativo
1. El usuario accede a `/admin/login`.
2. Tras autenticarse, el `AuthContext` guarda la sesión.
3. El `AdminLayout` renderiza las herramientas de gestión.
4. Los servicios en `destinationsAdmin.service.ts` interactúan con la base de datos permitiendo escritura.
5. El sistema de subida de imágenes procesa los archivos, los sube a Supabase Storage y guarda la referencia en la DB.

## Navegación
- Se utilizan `Breadcrumbs` dinámicos para mejorar la experiencia de usuario en profundidad de navegación.
- El router (`src/app/router.tsx`) utiliza `lazy loading` para optimizar el tamaño de los bundles por sección.
