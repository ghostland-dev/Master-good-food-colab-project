 
FROM node:22-alpine AS builder

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour installer les dépendances en premier
COPY package.json package-lock.json* ./

# Installation des dépendances
RUN npm install --frozen-lockfile

# Copie du reste des fichiers sources
COPY . .

# Build de l'application avec Vite
RUN npm run build

# ---- Étape 2 : Serveur nginx pour la prod ----
FROM nginx:alpine

# Suppression de la configuration nginx par défaut
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copie de la configuration nginx optimisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers de build dans le répertoire nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposition du port 80
EXPOSE 80

# Lancement de nginx
CMD ["nginx", "-g", "daemon off;"]
    