# Etapa 1: Compilación
FROM node:20-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y compilar
COPY . .
RUN npm run build

# Etapa 2: Servidor estático para React
FROM node:20-alpine AS runtime
WORKDIR /app

RUN npm install -g serve

# Copiar el build compilado desde la etapa anterior
COPY --from=build /app/dist ./dist

EXPOSE 3001

CMD ["serve", "-s", "dist", "-l", "3001"]