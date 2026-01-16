import { test, expect } from '../fixtures';
import { InstrumentosPage } from '../pages';

/**
 * Testes de integração para a página Instrumentos
 */
test.describe('Página Instrumentos', () => {
  test('deve carregar a página corretamente', async ({ instrumentosPage }) => {
    await instrumentosPage.goto();
    
    await expect(instrumentosPage.page).toHaveURL(/.*instrumentos/);
    
    const isLoaded = await instrumentosPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve exibir instrumentos', async ({ instrumentosPage, page }) => {
    await instrumentosPage.goto();
    
    // Verifica que há cards de instrumentos
    const instrumentCount = await instrumentosPage.getInstrumentCount();
    expect(instrumentCount).toBeGreaterThan(0);
    
    // Verifica que os cards estão visíveis
    await expect(instrumentosPage.instrumentCards.first()).toBeVisible();
  });

  test('deve exibir informações dos instrumentos', async ({ instrumentosPage, page }) => {
    await instrumentosPage.goto();
    
    // Verifica que há imagens
    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);
    
    // Verifica que há textos
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toMatch(/violão|guitarra|bateria|teclado|violino/i);
  });

  test('deve navegar a partir do header', async ({ page, homePage, instrumentosPage }) => {
    await homePage.goto();
    
    await homePage.clickNavLink('Instrumentos');
    
    await expect(page).toHaveURL(/.*instrumentos/);
    const isLoaded = await instrumentosPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve ter meta tags SEO', async ({ instrumentosPage, page }) => {
    await instrumentosPage.goto();
    
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});

test.describe('Página Instrumentos - Responsividade', () => {
  test('deve funcionar em mobile', async ({ instrumentosPage, page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await instrumentosPage.goto();
    
    const instrumentCount = await instrumentosPage.getInstrumentCount();
    expect(instrumentCount).toBeGreaterThan(0);
  });

  test('deve funcionar em desktop', async ({ instrumentosPage, page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await instrumentosPage.goto();
    
    const instrumentCount = await instrumentosPage.getInstrumentCount();
    expect(instrumentCount).toBeGreaterThan(0);
  });
});
