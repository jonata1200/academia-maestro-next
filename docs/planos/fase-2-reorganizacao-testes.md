# Fase 2: Reorganização dos Arquivos de Teste

## Objetivo
Mover todos os arquivos de teste de `src/__tests__/` para uma pasta `test/` na raiz do projeto, mantendo a estrutura organizada e atualizando todas as configurações necessárias.

## Checklist de Ações

### 1. Criar estrutura de pastas `test/`
- [x] Criar pasta `test/` na raiz do projeto
- [x] Criar `test/unit/` para testes unitários
- [x] Criar `test/unit/components/` para testes de componentes
- [x] Criar `test/unit/hooks/` para testes de hooks
- [x] Criar `test/unit/utils/` para testes de utilitários
- [x] Criar `test/unit/helpers/` para helpers de teste
- [x] Criar `test/unit/mocks/` para mocks e fixtures
- [x] Criar `test/e2e/` (se necessário separar do e2e existente, ou manter como está) - e2e já existe na raiz, mantido

### 2. Mover arquivos de teste
- [x] Mover `src/__tests__/components/*` → `test/unit/components/`
- [x] Mover `src/__tests__/hooks/*` → `test/unit/hooks/`
- [x] Mover `src/__tests__/utils/*` → `test/unit/utils/`
- [x] Mover `src/__tests__/helpers/*` → `test/unit/helpers/`
- [x] Mover `src/__tests__/mocks/*` → `test/unit/mocks/`

### 3. Atualizar imports nos arquivos de teste
- [x] Atualizar imports relativos nos testes de componentes - não necessário, todos usam aliases TypeScript
- [x] Atualizar imports relativos nos testes de hooks - não necessário, todos usam aliases TypeScript
- [x] Atualizar imports relativos nos testes de utils - não necessário, todos usam aliases TypeScript
- [x] Atualizar imports nos arquivos de helpers - não necessário, todos usam aliases TypeScript
- [x] Atualizar imports nos arquivos de mocks - não necessário, todos usam aliases TypeScript

### 4. Atualizar configurações
- [x] Atualizar `jest.config.ts` para apontar para nova estrutura
  - [x] Ajustar `roots` ou `testMatch` para incluir `test/` - testMatch já funciona com test/
  - [x] Ajustar `moduleNameMapper` se necessário para paths - atualizado caminho do fileMock.js
- [x] Atualizar `tsconfig.test.json` se houver paths customizados - atualizado include para test/
- [x] Verificar e atualizar `vitest.config.ts` se usar testes do Storybook - não precisa mudanças
- [x] Verificar scripts no `package.json` (podem não precisar mudanças) - scripts funcionam corretamente

### 5. Atualizar arquivos que referenciam testes
- [x] Verificar `.gitignore` (geralmente não precisa mudar) - não precisa mudanças
- [ ] Atualizar documentação (README.md, docs/testing-guide.md) - será feito na Fase 4
- [x] Verificar se há referências em outros arquivos de configuração - sem outras referências

### 6. Limpeza final
- [x] Remover pasta `src/__tests__/` vazia
- [x] Executar testes para verificar se tudo funciona
  - [x] `npm test` deve executar todos os testes - testado com sucesso
  - [x] Verificar se cobertura ainda funciona - configuração mantida
  - [x] Verificar se testes individuais ainda funcionam - testado Button.test.tsx com sucesso

## Estrutura Final Esperada

```
test/
├── unit/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   ├── Header.test.tsx
│   │   ├── Footer.test.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useModal.test.tsx
│   │   ├── useToast.test.tsx
│   │   └── ...
│   ├── utils/
│   │   └── cn.test.ts
│   ├── helpers/
│   │   ├── renderWithProviders.tsx
│   │   └── renderWithProviders.test.tsx
│   └── mocks/
│       ├── createMockRouter.ts
│       ├── createMockRouter.test.ts
│       └── fileMock.js
└── e2e/ (manter estrutura existente ou integrar)
```

## Mapeamento de Movimentação

### De → Para
- `src/__tests__/components/*` → `test/unit/components/*`
- `src/__tests__/hooks/*` → `test/unit/hooks/*`
- `src/__tests__/utils/*` → `test/unit/utils/*`
- `src/__tests__/helpers/*` → `test/unit/helpers/*`
- `src/__tests__/mocks/*` → `test/unit/mocks/*`

## Imports que Precisam Ser Atualizados

### Exemplo de mudança:
**Antes:**
```typescript
import { Button } from '../../components/Button';
```

**Depois:**
```typescript
import { Button } from '../../../src/components/Button';
```

Ou usar aliases do TypeScript se configurados.

## Configurações a Atualizar

### jest.config.ts
- Verificar `testMatch` para incluir `test/**/*.test.{ts,tsx}`
- Verificar `roots` se necessário
- Atualizar `moduleNameMapper` se houver paths relativos

### tsconfig.test.json (se existir)
- Verificar paths se estiverem configurados
- Garantir que inclui a pasta `test/`

## Notas Importantes
- Fazer commit antes de começar a mover arquivos
- Testar após cada grupo de mudanças
- Manter e2e tests em `e2e/` na raiz (já está organizado)
- Verificar se algum arquivo não-teste está em `__tests__/` que também precisa ser movido

## Resultado Esperado
- Todos os testes unitários na pasta `test/unit/`
- Estrutura organizada e clara
- Testes funcionando corretamente
- Configurações atualizadas
- Sem referências à pasta antiga `src/__tests__/`
