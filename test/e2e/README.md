# Testes E2E (End-to-End)

Este diretório contém os testes de integração E2E usando Playwright.

## 📁 Estrutura

```
e2e/
├── fixtures/          # Fixtures customizadas do Playwright
├── pages/             # Page Objects (padrão Page Object Model)
├── specs/             # Arquivos de teste (.spec.ts)
├── utils/             # Helpers e utilitários de teste
└── screenshots/       # Screenshots gerados em falhas (gitignored)
```

## 🚀 Como Executar

### Instalar dependências
```bash
npm run test:e2e:install
```

### Executar todos os testes
```bash
npm run test:e2e
```

### Executar em modo UI interativo
```bash
npm run test:e2e:ui
```

### Executar em modo debug
```bash
npm run test:e2e:debug
```

### Executar com browser visível (headed)
```bash
npm run test:e2e:headed
```

### Ver relatório HTML
```bash
npm run test:e2e:report
```

## 📝 Escrevendo Testes

### Usando Page Objects

```typescript
import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

test('exemplo de teste', async ({ homePage }) => {
  await homePage.goto();
  await expect(homePage.logo).toBeVisible();
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

## 🎯 Page Objects

Page Objects encapsulam a lógica de interação com as páginas:

- `BasePage`: Classe base com métodos comuns
- `HomePage`: Página inicial
- `SobrePage`: Página Sobre Nós
- `InstrumentosPage`: Página de Instrumentos
- `ContatoPage`: Página de Contato
- `ManutencaoPage`: Página de Manutenção

## 🔧 Configuração

A configuração do Playwright está em `playwright.config.ts` na raiz do projeto.

### Variáveis de Ambiente

- `PLAYWRIGHT_TEST_BASE_URL`: URL base para testes (padrão: http://localhost:3000)
- `CI`: Define se está rodando em CI (afeta retries e workers)

## 📸 Screenshots e Vídeos

Screenshots e vídeos são automaticamente capturados quando testes falham e salvos em:
- `test-results/` (gitignored)

## 🎨 Boas Práticas

1. **Use Page Objects**: Encapsule seletores e ações em page objects
2. **Seja específico**: Use seletores estáveis (data-testid, roles, text)
3. **Aguarde elementos**: Sempre aguarde elementos antes de interagir
4. **Testes independentes**: Cada teste deve poder rodar isoladamente
5. **Limpeza**: Use `test.afterEach` para limpar estado se necessário

## 🐛 Debugging

### Modo Debug Interativo
```bash
npm run test:e2e:debug
```

### Modo UI
```bash
npm run test:e2e:ui
```

### Logs detalhados
```bash
DEBUG=pw:api npm run test:e2e
```

## 📚 Recursos

- [Documentação Playwright](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model](https://playwright.dev/docs/pom)
