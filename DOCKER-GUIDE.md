# 🐋 Guia de Docker - Academia Maestro

Este guia fornece instruções completas para construir e executar o projeto Academia Maestro em containers Docker.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Docker Desktop** (Windows/Mac) ou **Docker Engine** (Linux)
  - Download: https://www.docker.com/products/docker-desktop
  - Verifique a instalação: `docker --version`
- **Docker Compose** (geralmente vem com o Docker Desktop)
  - Verifique a instalação: `docker-compose --version`

## 🏗️ Arquitetura da Imagem Docker

O projeto usa **multi-stage build** para otimização:

1. **Stage 1 (Builder)**: Instala dependências e compila o projeto
2. **Stage 2 (Runner)**: Cria imagem final leve apenas com arquivos necessários

### Otimizações Implementadas:

- ✅ **Output Standalone**: Next.js gera apenas arquivos necessários
- ✅ **Multi-stage Build**: Reduz tamanho da imagem final
- ✅ **npm ci**: Instalação determinística e mais rápida
- ✅ **.dockerignore**: Evita copiar arquivos desnecessários
- ✅ **Usuário não-root**: Segurança aprimorada
- ✅ **Cache de layers**: Otimiza rebuilds

## 🚀 Passo a Passo - Construir e Executar

### Opção 1: Usando Docker Compose (Recomendado)

O Docker Compose facilita o gerenciamento do container.

#### 1. Construir a imagem

```bash
docker-compose build
```

#### 2. Iniciar o container

```bash
docker-compose up
```

Ou em modo detached (background):

```bash
docker-compose up -d
```

#### 3. Acessar a aplicação

Abra o navegador em: http://localhost:3000

#### 4. Ver logs

```bash
docker-compose logs -f
```

#### 5. Parar o container

```bash
docker-compose down
```

---

### Opção 2: Usando Comandos Docker Diretos

Se preferir usar comandos Docker diretamente:

#### 1. Construir a imagem

```bash
docker build -t academia-maestro-next .
```

Este comando:
- `-t academia-maestro-next`: Define o nome da imagem
- `.`: Usa o diretório atual como contexto

#### 2. Executar o container

```bash
docker run -d -p 3000:3000 --name academia-maestro academia-maestro-next
```

Parâmetros:
- `-d`: Executa em background (detached)
- `-p 3000:3000`: Mapeia porta 3000 do container para porta 3000 do host
- `--name academia-maestro`: Nome do container
- `academia-maestro-next`: Nome da imagem

#### 3. Acessar a aplicação

Abra o navegador em: http://localhost:3000

#### 4. Ver logs

```bash
docker logs -f academia-maestro
```

#### 5. Parar e remover o container

```bash
docker stop academia-maestro
docker rm academia-maestro
```

---

## 🔧 Comandos Úteis

### Gerenciamento de Containers

```bash
# Listar containers em execução
docker ps

# Listar todos os containers (incluindo parados)
docker ps -a

# Parar um container
docker stop academia-maestro

# Iniciar um container parado
docker start academia-maestro

# Reiniciar um container
docker restart academia-maestro

# Remover um container
docker rm academia-maestro

# Remover um container em execução (força)
docker rm -f academia-maestro
```

### Gerenciamento de Imagens

```bash
# Listar imagens
docker images

# Remover uma imagem
docker rmi academia-maestro-next

# Remover imagens não utilizadas
docker image prune

# Reconstruir sem usar cache
docker build --no-cache -t academia-maestro-next .
```

### Inspeção e Debug

```bash
# Entrar no container em execução
docker exec -it academia-maestro sh

# Ver uso de recursos
docker stats academia-maestro

# Inspecionar detalhes do container
docker inspect academia-maestro

# Ver processos rodando no container
docker top academia-maestro
```

### Limpeza Geral

```bash
# Remover todos os containers parados
docker container prune

# Remover todas as imagens não utilizadas
docker image prune -a

# Limpeza completa (containers, imagens, volumes, redes)
docker system prune -a --volumes
```

---

## 🌐 Deployment em Produção

### Docker Hub

#### 1. Fazer login no Docker Hub

```bash
docker login
```

#### 2. Criar tag da imagem

```bash
docker tag academia-maestro-next seu-usuario/academia-maestro-next:latest
```

#### 3. Enviar para o Docker Hub

```bash
docker push seu-usuario/academia-maestro-next:latest
```

#### 4. Em outro servidor, baixar e executar

```bash
docker pull seu-usuario/academia-maestro-next:latest
docker run -d -p 3000:3000 seu-usuario/academia-maestro-next:latest
```

---

### Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente (ex: chaves de API):

#### Usando Docker Compose

Crie um arquivo `.env.production`:

```env
NEXT_PUBLIC_API_URL=https://api.exemplo.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Descomente no `docker-compose.yml`:

```yaml
env_file:
  - .env.production
```

#### Usando Docker Run

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://api.exemplo.com \
  -e NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX \
  --name academia-maestro \
  academia-maestro-next
```

---

## 🔍 Troubleshooting

### Problema: Porta 3000 já está em uso

```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Ou usar a porta alternativa
docker run -d -p 3001:3000 --name academia-maestro academia-maestro-next
```

### Problema: Erro de permissão no Windows

Execute o Docker Desktop como Administrador.

### Problema: Build muito lento

```bash
# Verifique se o .dockerignore está correto
# Certifique-se de que node_modules está sendo ignorado
```

### Problema: Imagem muito grande

```bash
# Verifique o tamanho da imagem
docker images academia-maestro-next

# A imagem otimizada deve ter ~150-200MB
# Se estiver maior, verifique o .dockerignore
```

---

## 📊 Monitoramento

### Verificar recursos utilizados

```bash
docker stats academia-maestro
```

### Verificar saúde do container

```bash
docker inspect --format='{{.State.Health.Status}}' academia-maestro
```

---

## 🎯 Resumo Rápido

```bash
# Construir e executar (modo rápido)
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Parar
docker-compose down

# Limpar tudo
docker-compose down -v
docker system prune -a
```

---

## 📝 Estrutura de Arquivos Docker

```
academia-maestro-next/
├── Dockerfile              # Instruções de build da imagem
├── .dockerignore          # Arquivos ignorados no build
├── docker-compose.yml     # Orquestração de containers
└── DOCKER-GUIDE.md       # Este guia
```

---

## 🔒 Segurança

- ✅ Container roda com usuário não-root (`nextjs`)
- ✅ Apenas portas necessárias são expostas
- ✅ Variáveis sensíveis via environment variables
- ✅ Imagem baseada em Alpine Linux (minimal)
- ✅ Dependências de desenvolvimento não incluídas

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique os logs: `docker-compose logs -f`
2. Verifique se o Docker está rodando: `docker --version`
3. Reconstrua sem cache: `docker-compose build --no-cache`
4. Limpe containers antigos: `docker system prune`

---

**Desenvolvido com ❤️ para a Academia Maestro**
