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
- `src/__tests__/components/`: testes de componentes
- `src/__tests__/hooks/`: testes de hooks
- `src/__tests__/utils/`: testes de utilitários
- `src/__tests__/helpers/`: helpers (ex.: `renderWithProviders`)
- `src/__tests__/mocks/`: mocks compartilhados

## Convenções
- Nome de arquivo: `*.test.ts` / `*.test.tsx`
- Padrão AAA (Arrange / Act / Assert)
- Preferir queries acessíveis: `getByRole`, `getByLabelText`

## Mocks importantes
- `next/image`, `next/link`, `next/navigation` são mockados em `jest.setup.ts`
- `window.matchMedia` também é mockado em `jest.setup.ts`

