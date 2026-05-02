# Configuración

## Requisitos
- Node.js 20 o superior
- npm
- Navegador moderno

## Variables de entorno
Configura el archivo `.env` basándote en `.env.example`.

```bash
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anon_publica
```

## Configuración de Supabase (Importante)

### Base de Datos
Asegúrate de que la tabla `destinations` tenga la columna `country_id` para destinos internacionales:
```sql
ALTER TABLE destinations ADD COLUMN country_id uuid REFERENCES countries(id);
```

### Storage y RLS
Para que la subida de imágenes funcione en el panel admin, debes crear un bucket llamado `destinations` y configurar las siguientes políticas en el SQL Editor de Supabase:

```sql
-- Permitir ver imágenes públicamente
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'destinations');

-- Permitir a usuarios autenticados subir imágenes
CREATE POLICY "Authenticated Upload" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'destinations' AND auth.role() = 'authenticated'
);

-- Permitir a usuarios autenticados actualizar/borrar
CREATE POLICY "Authenticated Update" ON storage.objects FOR UPDATE USING (
  bucket_id = 'destinations' AND auth.role() = 'authenticated'
);
```

## Scripts de Desarrollo
- `npm run dev`: Servidor local.
- `npm run build`: Compilación y chequeo de tipos.
- `npm run lint`: Análisis de calidad de código.
