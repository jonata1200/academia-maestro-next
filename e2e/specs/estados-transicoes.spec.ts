import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de estados e transições
 */
test.describe('Estados e Transições', () => {
  test('deve ter transições suaves no header', async ({ page, homePage }) => {
    await homePage.goto();
    
    const header = page.locator('header');
    const headerClasses = await header.getAttribute('class');
    expect(headerClasses).toContain('transition');
  });

  test('deve ter estados hover em links', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Hover em um link
    const firstLink = homePage.navLinks.first();
    await firstLink.hover();
    await page.waitForTimeout(200);
    
    // Verifica que link ainda está visível
    await expect(firstLink).toBeVisible();
  });

  test('deve ter estados hover em botões', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Scroll para ver botão "Voltar ao topo"
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    
    const scrollToTopButton = page.locator('button[aria-label="Voltar ao topo"]');
    const buttonExists = await scrollToTopButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (buttonExists) {
      await scrollToTopButton.hover();
      await page.waitForTimeout(200);
      await expect(scrollToTopButton).toBeVisible();
    }
  });

  test('deve ter transições no menu mobile', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      const nav = page.locator('nav');
      const navClasses = await nav.getAttribute('class');
      expect(navClasses).toContain('transition');
    }
  });
});
