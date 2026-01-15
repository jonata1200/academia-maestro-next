# Fase 1: Preparação e Setup do Design System

## 📋 Objetivo
Preparar a estrutura base e ferramentas necessárias para implementar o Design System do projeto Academia Maestro.

## 🎯 Entregáveis
- Estrutura de pastas organizada para o Design System
- Documentação inicial do Design System
- Configuração de ferramentas de desenvolvimento
- Análise do estado atual do projeto

## ✅ Checklist de Ações

### 1. Análise e Documentação Inicial
- [x] Realizar auditoria visual dos componentes existentes
- [x] Documentar padrões de cores atuais (primary, secondary, text-color, etc.)
- [x] Documentar tipografia utilizada (Poppins)
- [x] Mapear todos os componentes existentes (Header, Footer, CookieBanner, etc.)
- [ ] Identificar inconsistências visuais e de código
- [x] Documentar breakpoints responsivos utilizados
- [x] Listar animações e transições existentes

### 2. Estrutura de Pastas do Design System
- [x] Criar pasta `src/design-system/`
- [x] Criar subpasta `src/design-system/tokens/` (cores, espaçamentos, tipografia)
- [x] Criar subpasta `src/design-system/components/` (componentes base)
- [x] Criar subpasta `src/design-system/utils/` (utilitários e helpers)
- [x] Criar subpasta `src/design-system/docs/` (documentação Storybook)
- [x] Criar arquivo `src/design-system/README.md` com visão geral

### 3. Configuração de Ferramentas
- [x] Instalar e configurar Storybook para documentação de componentes
  - [ ] `npm install --save-dev @storybook/react @storybook/addon-essentials`
  - [x] Configurar Storybook para Next.js 15
  - [x] Configurar addons (controls, actions, docs, a11y)
- [ ] Instalar ferramentas de linting para Design System
  - [x] Configurar ESLint para componentes do Design System
- [x] Configurar TypeScript paths para imports facilitados
  - [x] Adicionar alias `@design-system/*` no `tsconfig.json`

### 4. Documentação Inicial
- [x] Criar documento de princípios do Design System
- [x] Documentar guia de estilo (brand guidelines)
- [x] Criar guia de contribuição para o Design System
- [x] Documentar processo de versionamento de componentes

### 5. Setup de Desenvolvimento
- [x] Criar script no `package.json` para rodar Storybook (`storybook`)
- [x] Criar script no `package.json` para build do Storybook (`build-storybook`)
- [ ] Configurar pre-commit hooks (opcional, com Husky)
- [ ] Configurar CI/CD para validar componentes (opcional)

### 6. Análise de Dependências
- [x] Verificar compatibilidade de bibliotecas com Design System
- [x] Avaliar necessidade de bibliotecas adicionais (ex: Radix UI, Headless UI)
- [x] Documentar decisões sobre bibliotecas de componentes

#### Decisões (inicial)
- **Base de UI**: manter Tailwind como base (utility-first) e evoluir com tokens/DS.
- **Componentes acessíveis**: avaliar Radix UI/Headless UI somente quando surgirem necessidades de componentes complexos (Dialog/Popover/Menu) para reduzir esforço de a11y.
- **Storybook**: usar `@storybook/nextjs-vite` (gerado pelo init) para documentação e revisão visual.

## 📝 Notas
- Esta fase é fundamental para estabelecer uma base sólida
- Tempo estimado: 1-2 semanas
- Priorizar documentação para facilitar fases futuras

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 2: Implementação do Design System - Tokens e Fundamentos](./fase-02-tokens-fundamentos.md)
