# 🧪 Testes — Academia Maestro

Documentação completa sobre testes unitários do projeto.

## 📋 Índice

1. [Configuração](01-configuracao.md) - Setup do Jest e dependências
2. [Estrutura](02-estrutura.md) - Organização de pastas e arquivos
3. [Escrevendo Testes](03-escrevendo-testes.md) - Guia prático para escrever testes
4. [Convenções](04-convencoes.md) - Padrões e convenções de nomenclatura
5. [Mocks](05-mocks.md) - Mocks do Next.js e fixtures
6. [Cobertura](06-cobertura.md) - Como verificar e interpretar cobertura
7. [Exemplos](07-exemplos.md) - Exemplos práticos de testes

## 🚀 Quick Start

### Executar Testes

```bash
# Executar todos os testes
npm test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com relatório de cobertura
npm run test:coverage

# Modo CI
npm run test:ci
```

## 🛠️ Stack de Testes

- **Runner**: Jest 30.2.0
- **DOM**: jest-environment-jsdom
- **UI Testing**: React Testing Library
- **Matchers**: @testing-library/jest-dom

## 📁 Estrutura de Testes

```
test/unit/
├── components/     # Testes de componentes
├── hooks/          # Testes de hooks
├── utils/          # Testes de utilitários
├── helpers/        # Helpers de teste
└── mocks/          # Mocks compartilhados
```

## 📖 Documentação Detalhada

Consulte os arquivos individuais para documentação completa de cada tópico.

---

**Última atualização:** 2024
