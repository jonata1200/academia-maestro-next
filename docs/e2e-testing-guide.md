# Guia de Testes E2E

Este guia documenta como escrever e executar testes de integração E2E usando Playwright.

## 📋 Visão Geral

Os testes E2E verificam o comportamento completo da aplicação do ponto de vista do usuário, testando fluxos completos e interações entre componentes.

## 🏗️ Arquitetura

### Page Object Model (POM)

Utilizamos o padrão Page Object Model para organizar os testes:

- **Page Objects**: Encapsulam seletores e ações de uma página
- **Fixtures**: Fornecem page objects prontos para uso nos testes
- **Helpers**: Funções utilitárias reutilizáveis
- **Specs**: Arquivos de teste (.spec.ts)

## 📝 Escrevendo Testes

### Estrutura Básica

```typescript
import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

test.describe('Nome do Grupo de Testes', () => {
  test('descrição do teste', async ({ homePage }) => {
    // Arrange
    await homePage.goto();
    
    // Act
    await homePage.clickNavLink('Sobre Nós');
    
    // Assert
    await expect(homePage.page).toHaveURL(/.*sobre/);
  });
});
```

### Usando Page Objects

```typescript
test('exemplo com page object', async ({ homePage }) => {
  await homePage.goto();
  await expect(homePage.logo).toBeVisible();
  await expect(homePage.heroSection).toBeVisible();
});
```

### Usando Helpers

```typescript
import { waitForElementVisible, checkBasicA11y } from '../utils/helpers';

test('exemplo com helpers', async ({ page }) => {
  await page.goto('/');
  await waitForElementVisible(page, 'header');
  await checkBasicA11y(page);
});
```

## 🎯 Boas Práticas

### 1. Seletor Estável

✅ **Bom**: Seletores semânticos e estáveis
```typescript
page.locator('nav a[href="/sobre"]')
page.getByRole('link', { name: 'Sobre Nós' })
```

❌ **Ruim**: Seletores frágeis
```typescript
page.locator('div > div > a:nth-child(2)')
page.locator('.some-random-class')
```

### 2. Aguardar Elementos

Sempre aguarde elementos antes de interagir:

```typescript
await page.waitForSelector('header');
await expect(page.locator('header')).toBeVisible();
```

### 3. Testes Independentes

Cada teste deve poder rodar isoladamente:

```typescript
test('teste independente', async ({ page }) => {
  // Não depende de estado de outros testes
  await page.goto('/');
  // ...
});
```

### 4. Organização

Agrupe testes relacionados:

```typescript
test.describe('Navegação', () => {
  test('navega para home', async () => { /* ... */ });
  test('navega para sobre', async () => { /* ... */ });
});
```

## 🔧 Configuração

### Variáveis de Ambiente

- `PLAYWRIGHT_TEST_BASE_URL`: URL base (padrão: http://localhost:3000)
- `CI`: Define se está em CI (afeta retries e workers)

### Timeouts

Configurados em `playwright.config.ts`:
- `timeout`: 30s por teste
- `expect.timeout`: 5s para assertions

## 🐛 Debugging

### Modo UI Interativo

```bash
npm run test:e2e:ui
```

### Modo Debug

```bash
npm run test:e2e:debug
```

### Logs Detalhados

```bash
DEBUG=pw:api npm run test:e2e
```

## 📸 Screenshots e Vídeos

Screenshots e vídeos são automaticamente capturados em falhas:
- Localização: `test-results/`
- Configuração: `playwright.config.ts`

## 🚀 Executando Testes

### Todos os Testes
```bash
npm run test:e2e
```

### Teste Específico
```bash
npx playwright test e2e/specs/homepage.spec.ts
```

### Com Browser Visível
```bash
npm run test:e2e:headed
```

### Apenas Chromium
```bash
npx playwright test --project=chromium
```

## 📚 Recursos

- [Documentação Playwright](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model](https://playwright.dev/docs/pom)
- [Selectors](https://playwright.dev/docs/selectors)
- [Assertions](https://playwright.dev/docs/test-assertions)
