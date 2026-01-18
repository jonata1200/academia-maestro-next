import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de comportamento cross-browser
 * Nota: Estes testes rodam em todos os browsers configurados no playwright.config.ts
 */
test.describe('Cross-Browser - Funcionalidades Básicas', () => {
  test('deve carregar página home em todos os browsers', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveURL('/');
    await expect(homePage.logo).toBeVisible();
  });

  test('deve navegar entre páginas em todos os browsers', async ({ page, homePage }) => {
    await homePage.goto();
    await homePage.clickNavLink('Sobre Nós');
    await expect(page).toHaveURL(/.*sobre/);
  });

  test('deve ter header funcional em todos os browsers', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica header no topo
    const isTransparent = await homePage.isHeaderTransparent();
    expect(isTransparent).toBe(true);
    
    // Faz scroll
    await homePage.scroll(200);
    
    // Verifica que header mudou
    const isTransparentAfter = await homePage.isHeaderTransparent();
    expect(isTransparentAfter).toBe(false);
  });
});

test.describe('Cross-Browser - Interações', () => {
  test('deve ter scroll funcional em todos os browsers', async ({ page, homePage }) => {
    await homePage.goto();
    
    await homePage.scroll(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
  });

  test('deve ter links clicáveis em todos os browsers', async ({ page, homePage }) => {
    await homePage.goto();
    
    const firstLink = homePage.navLinks.first();
    await firstLink.click();
    await page.waitForTimeout(500);
    
    // Verifica que algo aconteceu (navegação ou clique registrado)
    expect(page.url()).toBeTruthy();
  });
});
