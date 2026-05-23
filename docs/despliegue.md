# Guía rápida de despliegue (alineada con el Manual de Despliegue)

Esta versión resume y corrige los pasos clave del despliegue, conservando las recomendaciones del manual completo.

1. Preparar el VPS

```bash
ssh root@<IP_DEL_SERVIDOR>
apt update && apt upgrade -y
```

2. Instalar herramientas base (incluye Certbot)

```bash
apt install -y curl apt-transport-https ca-certificates software-properties-common certbot
```

3. Instalar Docker y Docker Compose

```bash
apt install -y docker.io docker-compose-v2
docker --version
docker compose version
```

4. Crear carpeta para proyectos y clonar el repo

```bash
mkdir -p /var/www/proyectos
cd /var/www/proyectos
git clone https://github.com/OrtegaNidddd/jeiggar-vacation
cd jeiggar-vacation
```

5. Variables de entorno: crear el archivo físico antes del build

```bash
cp .env.example .env.local
nano .env.local
```

Guarde el archivo con sus credenciales reales (por ejemplo `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`).
Importante: el archivo debe existir físicamente en la raíz del proyecto antes de ejecutar `docker build`. Asegúrese de que `.env.local` esté incluido en `.gitignore` y no sea enviado al repositorio.

6. Compilar la imagen Docker (recomendado: usar puerto no estándar del host)

```bash
docker build --no-cache -t jeiggar-vacation .
```

Nota: en el manual se recomienda exponer la app en el puerto `8082` del host para evitar conflictos con proxys que utilicen los puertos 80/443.

7. Ejecutar el contenedor (puerto recomendado 8082)

```bash
docker run -d \
    --name jeiggar-app \
    -p 8082:80 \
    --restart unless-stopped \
    jeiggar-vacation
```

Si su máquina no usa un proxy inverso global, y desea exponer directamente en 80, reemplace `-p 8082:80` por `-p 80:80` — pero tenga en cuenta que esto puede entrar en conflicto con Nginx Proxy Manager.

8. Verificación rápida

```bash
docker ps
docker logs jeiggar-app
```

9. Configurar dominio (DNS)

- Cree un registro A apuntando el dominio principal (`@`) a la IP pública del VPS.
- Cree un registro CNAME para `www` apuntando al dominio raíz.

10. Certificados y Proxy Inverso (resumen)

Si usa Nginx Proxy Manager (recomendado para gestionar certificados):

- Obtener certificados con Certbot (desafío DNS manual si el puerto 80 está ocupado):

```bash
certbot certonly --manual --preferred-challenges dns -d tu-dominio.com -d www.tu-dominio.com --email tu-correo@gmail.com --agree-tos --no-eff-email
```

- Copiar los `.pem` emitidos a la ruta de volúmenes que usa Nginx Proxy Manager (ajuste según su instalación):

```bash
mkdir -p /var/lib/docker/volumes/parking_nginxmanager_data/_data/nginx/certs
cp /etc/letsencrypt/live/tu-dominio.com/fullchain.pem /var/lib/docker/volumes/parking_nginxmanager_data/_data/nginx/certs/tu-dominio-fullchain.pem
cp /etc/letsencrypt/live/tu-dominio.com/privkey.pem /var/lib/docker/volumes/parking_nginxmanager_data/_data/nginx/certs/tu-dominio-privkey.pem
```

- Reinicie el contenedor del proxy:

```bash
docker restart nginxmanager
```

11. Actualizar despliegue (pasos cuando hay nuevos cambios)

```bash
cd /var/www/proyectos/jeiggar-vacation
git pull origin main
docker stop jeiggar-app
docker rm jeiggar-app
docker build --no-cache -t jeiggar-vacation .
docker run -d --name jeiggar-app -p 8082:80 --restart unless-stopped jeiggar-vacation
```

12. Notas de resolución de problemas importantes

- Pantalla en blanco: verifique que ` .env.local ` existió durante el `docker build` y que contiene las variables `VITE_*`.
- Rutas 404: confirme que `nginx.conf` contiene `try_files $uri $uri/ /index.html;`.
- Contenedor `Exited`: `docker logs jeiggar-app` para ver errores de Nginx o permisos.

---

He corregido comandos erróneos y alineado `docs/despliegue.md` con el contenido y las recomendaciones del `manual_de_despliegue.tex` (puerto recomendado, inclusión de `certbot`, uso de `--no-cache`, y nombre correcto ` .env.local `). Si quieres, agrego la sección completa de Nginx Proxy Manager con ejemplos concretos de `server` blocks.