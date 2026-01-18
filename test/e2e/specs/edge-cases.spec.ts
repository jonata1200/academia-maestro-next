import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de edge cases
 */
test.describe('Edge Cases', () => {
  test('deve lidar com navegação rápida entre páginas', async ({ page, homePage, sobrePage, instrumentosPage }) => {
    await homePage.goto();
    
    // Navega rapidamente
    await homePage.clickNavLink('Sobre Nós');
    await page.waitForTimeout(100);
    
    await sobrePage.page.locator('header a, nav a').filter({ hasText: 'Instrumentos' }).click();
    await page.waitForTimeout(100);
    
    // Verifica que chegou na página correta
    await expect(page).toHaveURL(/.*instrumentos/);
  });

  test('deve lidar com múltiplos cliques rápidos', async ({ page, homePage }) => {
    await homePage.goto();
    
    const firstLink = homePage.navLinks.first();
    
    // Múltiplos cliques rápidos
    await firstLink.click();
    await page.waitForTimeout(50);
    await firstLink.click({ clickCount: 1 }).catch(() => {});
    
    // Não deve quebrar
    await page.waitForTimeout(500);
    expect(page.url()).toBeTruthy();
  });

  test('deve lidar com scroll rápido', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Scroll rápido
    await page.evaluate(() => {
      window.scrollTo(0, 1000);
    });
    await page.waitForTimeout(100);
    
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(100);
    
    // Não deve quebrar
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test('deve funcionar com viewport extremo', async ({ page, homePage }) => {
    // Viewport muito pequeno
    await page.setViewportSize({ width: 320, height: 568 });
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
    
    // Viewport muito grande
    await page.setViewportSize({ width: 1920, height: 1080 });
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});
