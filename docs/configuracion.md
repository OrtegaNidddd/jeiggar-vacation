# Configuración

## Requisitos
- Node.js 20 o superior
- npm
- Navegador moderno para desarrollo y pruebas visuales

## Instalación
```bash
npm install
```

## Alias y resolución
El proyecto usa el alias `@` para resolver imports desde `src`. La configuración está en `vite.config.ts` y se complementa con los `tsconfig` del repositorio.

## Estilos globales
Los tokens visuales, la fuente principal y las reglas base viven en `src/index.css`. Ahí también se cargan Tailwind CSS, shadcn, AOS y la fuente Geist.

## Scripts útiles
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Dependencias externas relevantes
- MapLibre GL para el mapa interactivo.
- WhatsApp Web/API para la derivación de reservas y consultas.
- Fuentes remotas de Google Fonts y `@fontsource-variable/geist`.
