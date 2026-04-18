# API Interna y Capa de Datos

## Alcance
Este documento describe la capa de acceso a datos usada por el frontend para consumir información desde Supabase.

## Cliente base
El cliente se define en `src/lib/supabase.ts` usando `@supabase/supabase-js` y variables de entorno:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Si faltan variables, el cliente lanza un error para evitar ejecuciones con configuración incompleta.

## Resolución de recursos públicos
`src/lib/storage.ts` expone `getPublicStorageUrl(path, bucket?)` para construir URLs públicas de archivos en Supabase Storage.

Comportamiento:
- Si `path` ya es URL absoluta, se usa tal cual.
- Si `path` apunta a assets locales (`/assets/...`), se conserva para compatibilidad.
- En otros casos, construye URL pública con bucket y base de Supabase.

## Servicios de datos disponibles

### Destinos
Archivo: `src/features/destinations/destinations.service.ts`

Función pública:
- `fetchDestinationBySlug(slug: string): Promise<Destination | null>`

Resumen:
- Consulta `destinations` y relación con `cities`.
- Mapea columnas de base de datos al tipo de dominio `Destination`.
- Devuelve `null` cuando no existe el slug consultado.

### Mapa
Archivo: `src/features/map/map.service.ts`

Función pública:
- `fetchCountryMapData(slug = 'colombia'): Promise<CountryMapData>`

Resumen:
- Ejecuta RPC `get_country_map_data` en Supabase.
- Lanza error si la consulta falla o si no hay datos.
