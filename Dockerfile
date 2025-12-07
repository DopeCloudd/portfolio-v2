FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# (ne PAS fixer NODE_ENV ici)

# Optionnel: recommandé pour Next sur Alpine
RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json package-lock.json* ./
# On installe AUSSI les devDependencies pour le build
RUN npm ci --include=dev

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
# En prod uniquement ici
ENV NODE_ENV=production
ENV PORT=3999
EXPOSE 3999

# User non-root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

# Fichiers nécessaires au runtime standalone
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json

CMD ["node", "server.js"]
