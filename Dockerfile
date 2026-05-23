# Etapa 1: Compilación
FROM node:20-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm ci

# --- Registrar variables de entorno ---
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY

# Se pasan al entorno global de la compilación
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY
# -------------------------------------------------

# Copiar el resto del código y compilar
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine
# Copiar los archivos compilados desde la etapa anterior (Vite por defecto usa la carpeta 'dist')
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de Nginx para manejar rutas de SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]