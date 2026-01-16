import { defineConfig, devices } from '@playwright/test';

/**
 * Configuração do Playwright para testes E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Diretório onde os testes estão localizados
  testDir: './e2e/specs',
  
  // Timeout para cada teste
  timeout: 30 * 1000,
  
  // Timeout para expect assertions
  expect: {
    timeout: 5 * 1000,
  },
  
  // Executar testes em paralelo
  fullyParallel: true,
  
  // Falhar o build se você deixar test.only no CI
  forbidOnly: !!process.env.CI,
  
  // Retry em CI se os testes falharem
  retries: process.env.CI ? 2 : 0,
  
  // Número de workers para paralelização
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter para usar
  reporter: [
    ['html'],
    ['list'],
    ...(process.env.CI ? [['github'] as const] : []),
  ],
  
  // Configurações compartilhadas para todos os projetos
  use: {
    // Base URL para usar em navegação como `await page.goto('/')`
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
    
    // Coletar trace quando retentar o teste falho
    trace: 'on-first-retry',
    
    // Screenshot apenas em falhas
    screenshot: 'only-on-failure',
    
    // Vídeo apenas em falhas
    video: 'retain-on-failure',
  },

  // Configurar projetos para diferentes navegadores
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Testes mobile
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Executar servidor de desenvolvimento local antes de iniciar os testes
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
