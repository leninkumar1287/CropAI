# Multi-stage Docker build for MERN Crop Recommendation App

# Backend Stage
FROM node:18-alpine AS backend-build

WORKDIR /app/backend

# Copy package files
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source
COPY backend/ .

# Frontend Stage
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend

# Copy package files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source
COPY frontend/ ./

# Build frontend
RUN npm run build

# Production Stage
FROM node:18-alpine

WORKDIR /app

# Install serve for serving React build
RUN npm install -g serve

# Copy backend
COPY --from=backend-build /app/backend ./backend

# Copy built frontend
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Expose ports
EXPOSE 5000 3000

# Copy and make startup script
RUN echo "#!/bin/sh" > start.sh && \
    echo "cd /app/backend && npm start &" >> start.sh && \
    echo "serve -s /app/frontend/dist -l 3000" >> start.sh && \
    chmod +x start.sh

# Start both services
CMD ./start.sh
