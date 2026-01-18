# Fase 2: Reorganização dos Arquivos de Teste

## Objetivo
Mover todos os arquivos de teste de `src/__tests__/` para uma pasta `test/` na raiz do projeto, mantendo a estrutura organizada e atualizando todas as configurações necessárias.

## Checklist de Ações

### 1. Criar estrutura de pastas `test/`
- [ ] Criar pasta `test/` na raiz do projeto
- [ ] Criar `test/unit/` para testes unitários
- [ ] Criar `test/unit/components/` para testes de componentes
- [ ] Criar `test/unit/hooks/` para testes de hooks
- [ ] Criar `test/unit/utils/` para testes de utilitários
- [ ] Criar `test/unit/helpers/` para helpers de teste
- [ ] Criar `test/unit/mocks/` para mocks e fixtures
- [ ] Criar `test/e2e/` (se necessário separar do e2e existente, ou manter como está)

### 2. Mover arquivos de teste
- [ ] Mover `src/__tests__/components/*` → `test/unit/components/`
- [ ] Mover `src/__tests__/hooks/*` → `test/unit/hooks/`
- [ ] Mover `src/__tests__/utils/*` → `test/unit/utils/`
- [ ] Mover `src/__tests__/helpers/*` → `test/unit/helpers/`
- [ ] Mover `src/__tests__/mocks/*` → `test/unit/mocks/`

### 3. Atualizar imports nos arquivos de teste
- [ ] Atualizar imports relativos nos testes de componentes
- [ ] Atualizar imports relativos nos testes de hooks
- [ ] Atualizar imports relativos nos testes de utils
- [ ] Atualizar imports nos arquivos de helpers
- [ ] Atualizar imports nos arquivos de mocks

### 4. Atualizar configurações
- [ ] Atualizar `jest.config.ts` para apontar para nova estrutura
  - [ ] Ajustar `roots` ou `testMatch` para incluir `test/`
  - [ ] Ajustar `moduleNameMapper` se necessário para paths
- [ ] Atualizar `tsconfig.test.json` se houver paths customizados
- [ ] Verificar e atualizar `vitest.config.ts` se usar testes do Storybook
- [ ] Verificar scripts no `package.json` (podem não precisar mudanças)

### 5. Atualizar arquivos que referenciam testes
- [ ] Verificar `.gitignore` (geralmente não precisa mudar)
- [ ] Atualizar documentação (README.md, docs/testing-guide.md)
- [ ] Verificar se há referências em outros arquivos de configuração

### 6. Limpeza final
- [ ] Remover pasta `src/__tests__/` vazia
- [ ] Executar testes para verificar se tudo funciona
  - [ ] `npm test` deve executar todos os testes
  - [ ] Verificar se cobertura ainda funciona
  - [ ] Verificar se testes individuais ainda funcionam

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
