# Base stage for common setup
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS development
RUN npm install --force
COPY . .
CMD ["npm", "run", "dev"]

# Builder stage for production
FROM base AS builder
RUN npm install --force
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm install --force --only=production
EXPOSE 3000
CMD ["npm", "start"]