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
- [x] Instalar Jest e dependências relacionadas
  - [x] `npm install --save-dev jest @types/jest`
  - [x] `npm install --save-dev jest-environment-jsdom`
- [x] Instalar React Testing Library
  - [x] `npm install --save-dev @testing-library/react`
  - [x] `npm install --save-dev @testing-library/jest-dom`
  - [x] `npm install --save-dev @testing-library/user-event`
- [x] Instalar utilitários adicionais
  - [x] `@testing-library/react-hooks` não necessário (renderHook já incluído no @testing-library/react)
  - [x] `jest-next` não necessário (next/jest já fornece configuração)

### 2. Configuração do Jest
- [x] Criar arquivo `jest.config.js` ou `jest.config.ts`
- [x] Configurar testEnvironment para 'jsdom'
- [x] Configurar moduleNameMapper para imports do Next.js
  - [x] Mapear `@/` para `src/`
  - [x] Mapear imports de CSS e imagens
- [x] Configurar setupFilesAfterEnv para incluir `@testing-library/jest-dom`
- [x] Configurar collectCoverageFrom para definir quais arquivos incluir
- [x] Configurar coverageThreshold (opcional, para garantir cobertura mínima) - não configurado, mas cobertura está sendo monitorada
- [x] Configurar transform para TypeScript
- [x] Configurar testMatch para encontrar arquivos de teste

### 3. Configuração do TypeScript para Testes
- [x] Atualizar `tsconfig.json` para incluir tipos de Jest
- [x] Criar `tsconfig.test.json` se necessário
- [x] Garantir que tipos do Jest estão disponíveis

### 4. Setup de Testes
- [x] Criar arquivo `src/__tests__/setup.ts` ou `jest.setup.ts`
- [x] Configurar mocks globais (se necessário)
  - [x] Mock do Next.js router
  - [x] Mock do Next.js Image component
  - [x] Mock de módulos externos
- [x] Configurar cleanup automático após cada teste
- [x] Configurar extensões do jest-dom

### 5. Estrutura de Pastas
- [x] Criar pasta `src/__tests__/` para testes unitários
- [x] Criar subpasta `src/__tests__/components/` para testes de componentes
- [x] Criar subpasta `src/__tests__/utils/` para testes de utilitários
- [x] Criar subpasta `src/__tests__/hooks/` para testes de hooks
- [x] Criar subpasta `src/__tests__/mocks/` para mocks compartilhados
- [x] Criar subpasta `src/__tests__/helpers/` para helpers de teste
- [x] Decidir estratégia: testes ao lado dos arquivos (`*.test.tsx`) ou em pasta separada

### 6. Helpers e Utilitários de Teste
- [x] Criar função `renderWithProviders` para renderizar com providers
- [x] Criar função `createMockRouter` para mock do Next.js router
- [ ] Criar helpers para queries comuns
- [ ] Criar factory functions para dados de teste
- [ ] Criar custom matchers se necessário

### 7. Mocks Comuns
- [x] Criar mock do Next.js `next/router`
- [x] Criar mock do Next.js `next/navigation`
- [x] Criar mock do Next.js `next/image`
- [x] Criar mock do Next.js `next/link`
- [ ] Criar mocks de APIs externas (se houver)
- [x] Criar mocks de localStorage/sessionStorage
- [x] Criar mocks de window.matchMedia (para testes responsivos)

### 8. Scripts no package.json
- [x] Adicionar script `test` para rodar todos os testes
- [x] Adicionar script `test:watch` para modo watch
- [x] Adicionar script `test:coverage` para gerar relatório de cobertura
- [x] Adicionar script `test:ci` para execução em CI/CD
- [x] Adicionar script `test:update` para atualizar snapshots

### 9. Configuração de Cobertura
- [x] Configurar quais arquivos incluir na cobertura
- [x] Configurar quais arquivos excluir da cobertura
- [ ] Definir thresholds de cobertura (statements, branches, functions, lines)
- [x] Configurar formato de relatório (HTML, JSON, text)
- [x] Configurar pasta de output do relatório

### 10. Configuração do ESLint para Testes
- [x] Instalar `eslint-plugin-jest` se necessário - não necessário, ESLint já funciona com testes
- [x] Configurar regras do ESLint para arquivos de teste - ESLint configurado e funcionando
- [x] Permitir `describe`, `it`, `test`, `expect` sem importação - funcionando corretamente

### 11. Exemplos de Testes
- [x] Criar teste de exemplo para um componente simples
- [x] Criar teste de exemplo para um hook
- [x] Criar teste de exemplo para uma função utilitária (cn.test.ts criado)
- [x] Documentar padrões de teste a seguir

### 12. Documentação
- [x] Criar arquivo `docs/testing-guide.md` com guia de testes
- [x] Documentar convenções de nomenclatura
- [x] Documentar estrutura de testes (AAA pattern)
- [x] Documentar boas práticas
- [x] Documentar como mockar dependências
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
- [x] Executar `npm test` e verificar que funciona
- [x] Executar `npm run test:coverage` e verificar relatório
- [x] Verificar que TypeScript não apresenta erros
- [x] Verificar que ESLint não apresenta erros
- [ ] Testar modo watch
- [x] Validar que mocks estão funcionando

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
