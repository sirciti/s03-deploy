# Utiliser une image de base avec Node.js
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:latest

# Installer les dépendances du projet
WORKDIR /workspace

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173
