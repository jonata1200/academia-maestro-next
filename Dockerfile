# ====================================================================================
# FASE 1: Builder - Instala tudo e constrói o projeto
# ====================================================================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Instala TODAS as dependências (incluindo as de desenvolvimento) para poder construir
RUN npm install

COPY . .

# Gera a build de produção otimizada
RUN npm run build

# ====================================================================================
# FASE 2: Runner - A imagem final, leve e segura
# ====================================================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copia os arquivos de gerenciamento de pacotes da fase anterior
COPY --from=builder /app/package*.json ./

# --- MUDANÇA PRINCIPAL ---
# Instala APENAS as dependências listadas em "dependencies" no package.json.
# Isso ignora todas as "devDependencies" (ESLint, TypeScript, etc.) que são pesadas
# e desnecessárias para rodar o site. É isso que vai reduzir o tamanho da imagem.
RUN npm install --omit=dev

# Copia os arquivos que foram construídos na fase anterior
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# A imagem oficial 'node:alpine' já vem com um usuário de baixa permissão chamado 'node'.
# Mudar para este usuário é uma prática de segurança recomendada.
USER node

EXPOSE 3000

CMD ["npm", "start"]