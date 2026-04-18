# Configuración

## Requisitos
- Node.js 20 o superior
- npm
- Navegador moderno para pruebas de UI y mapa

## Instalación
```bash
npm install
```

## Variables de entorno
La app necesita variables para conectarse a Supabase.

### Variables requeridas
- `VITE_SUPABASE_URL`: URL del proyecto en Supabase.
- `VITE_SUPABASE_ANON_KEY`: clave pública anónima del proyecto.

### Configuración local
```bash
cp .env.example .env
```

Ejemplo:
```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anon_publica
```

## Alias y resolución de módulos
El proyecto utiliza alias `@` para apuntar a `src` y simplificar imports. Esta configuración se define en `vite.config.ts` y en los archivos de TypeScript (`tsconfig.*.json`).

## Estilos globales
Los tokens visuales, fuente base y reglas globales están en `src/index.css`. El proyecto usa Tailwind CSS 4, shadcn y animaciones con AOS.

## Scripts útiles
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Solución de problemas comunes
- Error por variables faltantes: verifica que `.env` exista y tenga `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
- Imágenes vacías: confirma rutas y buckets esperados por `getPublicStorageUrl`.
- Datos de mapa o destinos no disponibles: revisa permisos y disponibilidad de funciones/tablas en Supabase.
