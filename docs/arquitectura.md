# Arquitectura

## Visión general
Jeiggar Vacation es una SPA de React organizada por módulos funcionales. La aplicación comparte un layout global y enruta páginas públicas de landing, destinos, mapa y servicios especializados.

La arquitectura combina:
- Capa de presentación basada en componentes reutilizables.
- Capa de dominio con tipos de datos explícitos.
- Capa de servicios para consulta de datos en Supabase.
- Capa de utilidades para resolver URLs públicas de storage y acciones comunes.

## Capas principales
- `src/app`: composición global de la app, router y shell.
- `src/features`: páginas y componentes por dominio funcional.
- `src/components`: piezas compartidas (comunes y UI).
- `src/domain`: contratos y tipos del dominio.
- `src/lib`: integraciones transversales (`supabase.ts`, `storage.ts`, utilidades).
- `src/mocks`: contenido estructurado de apoyo para distintas secciones.

## Flujo de datos
1. Las páginas de cada módulo renderizan componentes de presentación.
2. Cuando aplica, los módulos llaman servicios de datos en `src/features/*/*.service.ts`.
3. Los servicios consultan Supabase con el cliente central en `src/lib/supabase.ts`.
4. Las imágenes se resuelven con `getPublicStorageUrl` desde `src/lib/storage.ts`.
5. La UI consume datos transformados a tipos de dominio para mantener consistencia.

## Mapa y destinos
- El mapa nacional obtiene datos mediante RPC (`get_country_map_data`) desde `src/features/map/map.service.ts`.
- El detalle de destinos consulta la tabla `destinations` con relaciones a `cities` desde `src/features/destinations/destinations.service.ts`.
- El módulo de mapa usa MapLibre GL a través de componentes UI propios para mantener control de interacción y estilo.

## Navegación y layout
- El layout base vive en `src/app/AppShell.tsx` con header, outlet y footer.
- Las rutas se definen en `src/app/router.tsx`.
- Se incorporan breadcrumbs reutilizables para mejorar el contexto de navegación en landing, servicios, destinos y mapa.

## Assets y storage
La estrategia actual prioriza rutas públicas desde Supabase Storage para imágenes de marca, destinos y servicios. El helper `getPublicStorageUrl` mantiene compatibilidad con rutas locales durante la migración.

## Decisiones técnicas relevantes
- Alias `@` para imports desde `src`.
- Organización por features para escalar funcionalidades sin acoplar secciones.
- Tipado explícito en `src/domain/types` para evitar contratos implícitos en la UI.
- Integración de WhatsApp centralizada para mensajes y plantillas reutilizables.
