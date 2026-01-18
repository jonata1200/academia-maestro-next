import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de scroll e animações
 */
test.describe('Scroll e Animações', () => {
  test('deve mudar header ao fazer scroll', async ({ page, homePage }) => {
    await homePage.goto();
    
    const header = page.locator('header');
    
    // No topo - transparente
    let headerClasses = await header.getAttribute('class');
    expect(headerClasses).toContain('bg-transparent');
    
    // Após scroll - branco
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);
    
    headerClasses = await header.getAttribute('class');
    expect(headerClasses).toContain('bg-white');
  });

  test('deve exibir botão "Voltar ao Topo" após scroll', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Botão não deve estar visível no topo
    const scrollToTopButton = page.locator('button[aria-label="Voltar ao topo"]');
    let isVisible = await scrollToTopButton.isVisible({ timeout: 1000 }).catch(() => false);
    expect(isVisible).toBe(false);
    
    // Faz scroll
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    
    // Botão deve estar visível
    isVisible = await scrollToTopButton.isVisible({ timeout: 2000 });
    expect(isVisible).toBe(true);
  });

  test('deve voltar ao topo ao clicar no botão', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Faz scroll
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    
    // Verifica que está scrolled
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
    
    // Clica no botão
    const scrollToTopButton = page.locator('button[aria-label="Voltar ao topo"]');
    await scrollToTopButton.waitFor({ state: 'visible', timeout: 2000 });
    await scrollToTopButton.click();
    
    // Aguarda scroll suave
    await page.waitForTimeout(1000);
    
    // Verifica que voltou ao topo (ou próximo)
    const scrollYAfter = await page.evaluate(() => window.scrollY);
    expect(scrollYAfter).toBeLessThan(100);
  });

  test('deve funcionar scroll em páginas longas', async ({ page, sobrePage }) => {
    await sobrePage.goto();
    
    // Faz scroll
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    
    // Verifica que scroll funcionou
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
    
    // Volta ao topo
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    
    const scrollYAfter = await page.evaluate(() => window.scrollY);
    expect(scrollYAfter).toBe(0);
  });
});
