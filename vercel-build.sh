#!/bin/bash
# Script de build personalizado para Vercel
echo "Usando Node.js versión: $(node --version)"
echo "Usando npm versión: $(npm --version)"

# Instalar dependencias
npm install

# Ejecutar el build
npm run build 