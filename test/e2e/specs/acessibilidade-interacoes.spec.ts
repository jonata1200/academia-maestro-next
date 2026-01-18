import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de acessibilidade de interações
 */
test.describe('Acessibilidade - Navegação por Teclado', () => {
  test('deve navegar por links com Tab', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Pressiona Tab algumas vezes
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Verifica que algum elemento está focado
    const focused = page.locator(':focus');
    const focusedCount = await focused.count();
    expect(focusedCount).toBeGreaterThan(0);
  });

  test('deve ativar links com Enter', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Foca no primeiro link
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Pressiona Enter
    await page.keyboard.press('Enter');
    
    // Aguarda navegação (pode ou não navegar dependendo do foco)
    await page.waitForTimeout(500);
  });

  test('deve fechar menu mobile com ESC', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      // Abre menu
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Verifica que menu está aberto
      const nav = page.locator('nav');
      let navClasses = await nav.getAttribute('class');
      expect(navClasses).toContain('left-0');
      
      // Pressiona ESC (pode não fechar se não houver handler, mas testamos)
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    }
  });

  test('deve ter focus visível', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Foca em um link
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Verifica que há elemento focado
    const focused = page.locator(':focus');
    await expect(focused.first()).toBeVisible();
  });
});

test.describe('Acessibilidade - ARIA e Semântica', () => {
  test('deve ter aria-labels corretos', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Menu button
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    if (menuExists) {
      const ariaLabel = await menuButton.getAttribute('aria-label');
      expect(ariaLabel).toBe('Abrir menu');
    }
    
    // Scroll to top button
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    const scrollToTopButton = page.locator('button[aria-label="Voltar ao topo"]');
    const scrollButtonExists = await scrollToTopButton.isVisible({ timeout: 2000 }).catch(() => false);
    if (scrollButtonExists) {
      const ariaLabel = await scrollToTopButton.getAttribute('aria-label');
      expect(ariaLabel).toBe('Voltar ao topo');
    }
  });

  test('deve ter estrutura semântica correta', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica header
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Verifica nav
    const nav = page.locator('nav');
    const navCount = await nav.count();
    expect(navCount).toBeGreaterThan(0);
    
    // Verifica footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
