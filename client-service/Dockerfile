# FROM node:23-alpine3.20

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install && npm install -g nodemon

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]

# Étape 1 : Construction de l’application
FROM node:23-alpine3.20 AS builder

WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers et lancer la commande de build
COPY . .
RUN npm run build

# Étape 2 : Création de l’image de production
FROM node:23-alpine3.20

WORKDIR /app

# Copier uniquement les fichiers nécessaires en production
COPY package.json package-lock.json ./
RUN npm install --production

# Copier le résultat du build depuis l’étape précédente
COPY --from=builder /app/build ./build

EXPOSE 3000

# Démarrer l’application avec le script "start"
CMD ["npm", "start"]
