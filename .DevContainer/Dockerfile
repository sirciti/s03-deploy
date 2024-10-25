FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-20

# Optionally install any additional packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*
