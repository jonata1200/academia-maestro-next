# Fase 5: Setup e Configuração de Testes Unitários

## 📋 Objetivo
Configurar o ambiente de testes unitários, incluindo ferramentas, estrutura de pastas e configurações necessárias para começar a escrever testes.

## 🎯 Entregáveis
- Jest e React Testing Library configurados
- Estrutura de pastas para testes
- Scripts de teste no package.json
- Configurações de cobertura de código
- Exemplos de testes básicos
- Integração com CI/CD (opcional)

## ✅ Checklist de Ações

### 1. Instalação de Dependências
- [ ] Instalar Jest e dependências relacionadas
  - [ ] `npm install --save-dev jest @types/jest`
  - [ ] `npm install --save-dev jest-environment-jsdom`
- [ ] Instalar React Testing Library
  - [ ] `npm install --save-dev @testing-library/react`
  - [ ] `npm install --save-dev @testing-library/jest-dom`
  - [ ] `npm install --save-dev @testing-library/user-event`
- [ ] Instalar utilitários adicionais
  - [ ] `npm install --save-dev @testing-library/react-hooks` (se necessário)
  - [ ] `npm install --save-dev jest-next` (para Next.js)

### 2. Configuração do Jest
- [ ] Criar arquivo `jest.config.js` ou `jest.config.ts`
- [ ] Configurar testEnvironment para 'jsdom'
- [ ] Configurar moduleNameMapper para imports do Next.js
  - [ ] Mapear `@/` para `src/`
  - [ ] Mapear imports de CSS e imagens
- [ ] Configurar setupFilesAfterEnv para incluir `@testing-library/jest-dom`
- [ ] Configurar collectCoverageFrom para definir quais arquivos incluir
- [ ] Configurar coverageThreshold (opcional, para garantir cobertura mínima)
- [ ] Configurar transform para TypeScript
- [ ] Configurar testMatch para encontrar arquivos de teste

### 3. Configuração do TypeScript para Testes
- [ ] Atualizar `tsconfig.json` para incluir tipos de Jest
- [ ] Criar `tsconfig.test.json` se necessário
- [ ] Garantir que tipos do Jest estão disponíveis

### 4. Setup de Testes
- [ ] Criar arquivo `src/__tests__/setup.ts` ou `jest.setup.ts`
- [ ] Configurar mocks globais (se necessário)
  - [ ] Mock do Next.js router
  - [ ] Mock do Next.js Image component
  - [ ] Mock de módulos externos
- [ ] Configurar cleanup automático após cada teste
- [ ] Configurar extensões do jest-dom

### 5. Estrutura de Pastas
- [ ] Criar pasta `src/__tests__/` para testes unitários
- [ ] Criar subpasta `src/__tests__/components/` para testes de componentes
- [ ] Criar subpasta `src/__tests__/utils/` para testes de utilitários
- [ ] Criar subpasta `src/__tests__/hooks/` para testes de hooks
- [ ] Criar subpasta `src/__tests__/mocks/` para mocks compartilhados
- [ ] Criar subpasta `src/__tests__/helpers/` para helpers de teste
- [ ] Decidir estratégia: testes ao lado dos arquivos (`*.test.tsx`) ou em pasta separada

### 6. Helpers e Utilitários de Teste
- [ ] Criar função `renderWithProviders` para renderizar com providers
- [ ] Criar função `createMockRouter` para mock do Next.js router
- [ ] Criar helpers para queries comuns
- [ ] Criar factory functions para dados de teste
- [ ] Criar custom matchers se necessário

### 7. Mocks Comuns
- [ ] Criar mock do Next.js `next/router`
- [ ] Criar mock do Next.js `next/navigation`
- [ ] Criar mock do Next.js `next/image`
- [ ] Criar mock do Next.js `next/link`
- [ ] Criar mocks de APIs externas (se houver)
- [ ] Criar mocks de localStorage/sessionStorage
- [ ] Criar mocks de window.matchMedia (para testes responsivos)

### 8. Scripts no package.json
- [ ] Adicionar script `test` para rodar todos os testes
- [ ] Adicionar script `test:watch` para modo watch
- [ ] Adicionar script `test:coverage` para gerar relatório de cobertura
- [ ] Adicionar script `test:ci` para execução em CI/CD
- [ ] Adicionar script `test:update` para atualizar snapshots

### 9. Configuração de Cobertura
- [ ] Configurar quais arquivos incluir na cobertura
- [ ] Configurar quais arquivos excluir da cobertura
- [ ] Definir thresholds de cobertura (statements, branches, functions, lines)
- [ ] Configurar formato de relatório (HTML, JSON, text)
- [ ] Configurar pasta de output do relatório

### 10. Configuração do ESLint para Testes
- [ ] Instalar `eslint-plugin-jest` se necessário
- [ ] Configurar regras do ESLint para arquivos de teste
- [ ] Permitir `describe`, `it`, `test`, `expect` sem importação

### 11. Exemplos de Testes
- [ ] Criar teste de exemplo para um componente simples
- [ ] Criar teste de exemplo para um hook
- [ ] Criar teste de exemplo para uma função utilitária
- [ ] Documentar padrões de teste a seguir

### 12. Documentação
- [ ] Criar arquivo `docs/testing-guide.md` com guia de testes
- [ ] Documentar convenções de nomenclatura
- [ ] Documentar estrutura de testes (AAA pattern)
- [ ] Documentar boas práticas
- [ ] Documentar como mockar dependências
- [ ] Adicionar exemplos de testes comuns

### 13. Integração com Editor/IDE
- [ ] Configurar extensões do VS Code (Jest, Testing Library)
- [ ] Garantir que testes são detectados pelo IDE
- [ ] Configurar debug de testes (se necessário)

### 14. Integração com CI/CD (Opcional)
- [ ] Configurar execução de testes no GitHub Actions (ou similar)
- [ ] Configurar upload de relatório de cobertura
- [ ] Configurar badges de cobertura no README
- [ ] Configurar falha do build se testes falharem

### 15. Validação Inicial
- [ ] Executar `npm test` e verificar que funciona
- [ ] Executar `npm run test:coverage` e verificar relatório
- [ ] Verificar que TypeScript não apresenta erros
- [ ] Verificar que ESLint não apresenta erros
- [ ] Testar modo watch
- [ ] Validar que mocks estão funcionando

### 16. Configuração de Snapshots (Opcional)
- [ ] Decidir se vai usar snapshots
- [ ] Configurar Jest para snapshots se necessário
- [ ] Documentar quando usar snapshots

### 17. Configuração de Timeouts
- [ ] Configurar timeout padrão para testes
- [ ] Documentar quando aumentar timeout

### 18. Pre-commit Hooks (Opcional)
- [ ] Instalar Husky
- [ ] Configurar pre-commit para rodar testes
- [ ] Configurar para rodar apenas testes relacionados a arquivos alterados (se possível)

## 📝 Notas
- Priorizar testes rápidos e confiáveis
- Manter configuração simples e manutenível
- Documentar decisões importantes
- Tempo estimado: 1 semana

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 6: Implementação de Testes Unitários - Componentes](./fase-06-testes-unitarios-componentes.md)
