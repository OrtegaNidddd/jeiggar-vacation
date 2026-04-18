# Despliegue

## Build de producción
Genera el artefacto con:

```bash
npm run build
```

Esto ejecuta validación de tipos y build de Vite.

## Variables de entorno para producción
Antes de desplegar, define en el entorno de hosting:

```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anon_publica
```

Sin estas variables, la aplicación no puede inicializar el cliente de datos.

## Verificación post-despliegue
1. Cargar página de inicio y validar render de header, hero y footer.
2. Navegar a secciones de servicios y validar imágenes resueltas desde storage.
3. Probar vista de mapa y selección de destinos.
4. Abrir un detalle de destino por slug y verificar contenido.
5. Validar enlaces de contacto a WhatsApp.

## Checklist mínimo previo al deploy
```bash
npm run lint
npm run build
```

