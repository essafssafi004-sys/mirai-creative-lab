# Devcontainer based on official Node image
FROM node:20-slim

# Create app directory
WORKDIR /workspaces/${localWorkspaceFolderBasename}

# Install global tools you might want (optional)
RUN npm install -g pnpm

# Copy package manifests and install deps for a cached build
COPY package.json ./
COPY bun.lockb ./
RUN npm install --silent

# Forward port used by Vite
EXPOSE 5173

# Default user is 'node' in official Node images; use non-root if desired
USER node
