# Guia de Testes (Unitários) — Academia Maestro

## Stack
- **Runner**: Jest
- **DOM**: `jest-environment-jsdom`
- **UI**: React Testing Library + `@testing-library/jest-dom`

## Como rodar
- `npm test`
- `npm run test:watch`
- `npm run test:coverage`

## Estrutura
- `test/unit/components/`: testes de componentes
- `test/unit/hooks/`: testes de hooks
- `test/unit/utils/`: testes de utilitários
- `test/unit/helpers/`: helpers (ex.: `renderWithProviders`)
- `test/unit/mocks/`: mocks compartilhados

## Convenções
- Nome de arquivo: `*.test.ts` / `*.test.tsx`
- Padrão AAA (Arrange / Act / Assert)
- Preferir queries acessíveis: `getByRole`, `getByLabelText`

## Mocks importantes
- `next/image`, `next/link`, `next/navigation` são mockados em `jest.setup.ts`
- `window.matchMedia` também é mockado em `jest.setup.ts`

