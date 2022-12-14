FROM node:14.15.3-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm i

FROM node:14.15.3 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:14.15.3-alpine AS runner

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD npm run start