# API Interna y Capa de Datos

## Alcance
Este documento describe la capa de acceso a datos usada por el frontend para consumir información desde Supabase.

## Cliente base
El cliente se define en `src/lib/supabase.ts` usando `@supabase/supabase-js` y variables de entorno:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Si faltan variables, el cliente lanza un error para evitar ejecuciones con configuración incompleta.

## Resolución de recursos públicos e Imágenes
`src/lib/storage.ts` expone `getPublicStorageUrl(path, bucket?)` para construir URLs públicas de archivos en Supabase Storage.

El proyecto utiliza un bucket llamado `destinations` para almacenar las imágenes de los destinos subidas desde el panel admin.
- Las imágenes se nombran como `slug-timestamp.ext`.
- Se almacena solo la ruta relativa en la base de datos.

## Servicios de datos disponibles

### Destinos (Público)
Archivo: `src/features/destinations/services/destinations.service.ts`

Funciones:
- `fetchDestinationBySlug(slug: string)`: Obtiene el detalle de un destino.
- `fetchFeaturedDestinations()`: Obtiene los destinos marcados como destacados para el Home.

### Destinos (Admin)
Archivo: `src/features/destinations/services/destinationsAdmin.service.ts`

Funciones para CRUD administrativo (requieren sesión activa):
- `fetchAllDestinations()`
- `fetchDestinationById(id: string)`
- `upsertDestination(payload: any)`
- `deleteDestination(id: string)`

### Mapa
Archivo: `src/features/map/map.service.ts`

Función pública:
- `fetchCountryMapData(slug = 'colombia')`: Ejecuta RPC `get_country_map_data`.
