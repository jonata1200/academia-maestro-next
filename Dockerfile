# ====================================================================================
# FASE 1: Builder - Instala tudo e constrói o projeto
# ====================================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de gerenciamento de pacotes
COPY package*.json ./

# Instala TODAS as dependências (incluindo as de desenvolvimento) para poder construir
RUN npm ci --legacy-peer-deps

# Copia os arquivos de configuração necessários para o build
COPY next.config.ts ./
COPY tsconfig.json ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY eslint.config.mjs ./

# Copia o código-fonte e arquivos públicos
COPY public ./public
COPY src ./src

# Gera a build de produção otimizada
RUN npm run build

# ====================================================================================
# FASE 2: Runner - A imagem final, leve e segura
# ====================================================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Desabilita telemetria do Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Adiciona o usuário nextjs com baixos privilégios
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os arquivos públicos
COPY --from=builder /app/public ./public

# Copia os arquivos standalone da build (já inclui node_modules necessários)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Muda para o usuário de baixa permissão
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Usa o servidor standalone do Next.js (mais eficiente que npm start)
CMD ["node", "server.js"]