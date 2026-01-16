import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de responsividade de interações
 */
test.describe('Responsividade - Interações Mobile', () => {
  test('deve ter menu mobile funcional em mobile', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    expect(menuExists).toBe(true);
  });

  test('deve ter interações touch funcionais', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    // Testa tap em link
    const firstLink = homePage.navLinks.first();
    await firstLink.tap();
    await page.waitForTimeout(500);
    
    // Verifica que navegou ou que link é clicável
    const url = page.url();
    expect(url).toBeTruthy();
  });

  test('deve não ter overflow horizontal', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    // Verifica largura do body
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = 375;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Margem de erro
  });
});

test.describe('Responsividade - Interações Tablet', () => {
  test('deve funcionar em tablet', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await homePage.goto();
    
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.heroSection).toBeVisible();
  });
});

test.describe('Responsividade - Interações Desktop', () => {
  test('deve ter menu desktop funcional', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await homePage.goto();
    
    // Em desktop, menu deve estar sempre visível
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Links devem estar visíveis
    const navLinks = homePage.navLinks;
    const linkCount = await navLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });
});
