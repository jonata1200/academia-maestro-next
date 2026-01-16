import { test, expect } from '../fixtures';
import { HomePage, SobrePage } from '../pages';
import { checkBasicA11y } from '../utils/helpers';

/**
 * Testes de Acessibilidade
 */
test.describe('Acessibilidade Básica', () => {
  test('deve ter estrutura semântica correta', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que há um elemento main ou role="main"
    const main = page.locator('main, [role="main"]').first();
    await expect(main).toBeVisible();
    
    // Verifica que há um header
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Verifica que há um footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('deve ter navegação acessível', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que há um nav
    const nav = page.locator('nav');
    const navCount = await nav.count();
    expect(navCount).toBeGreaterThan(0);
    
    // Verifica que links têm texto acessível
    const links = page.locator('nav a, header a');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
    
    // Verifica que pelo menos alguns links têm texto
    let linksWithText = 0;
    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const text = await links.nth(i).textContent();
      if (text && text.trim().length > 0) linksWithText++;
    }
    expect(linksWithText).toBeGreaterThan(0);
  });

  test('deve ter imagens com alt text', async ({ page, homePage }) => {
    await homePage.goto();
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // Logo deve ter alt
    const logoAlt = await homePage.logo.getAttribute('alt');
    expect(logoAlt).toBeTruthy();
    
    // Verifica outras imagens importantes
    let imagesWithAlt = 0;
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      if (alt) imagesWithAlt++;
    }
    expect(imagesWithAlt).toBeGreaterThan(0);
  });

  test('deve ter títulos acessíveis', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica h1
    const h1 = page.locator('h1');
    await expect(h1.first()).toBeVisible();
    const h1Text = await h1.first().textContent();
    expect(h1Text).toBeTruthy();
    expect(h1Text!.trim().length).toBeGreaterThan(0);
  });

  test('deve passar verificação básica de acessibilidade', async ({ page, homePage }) => {
    await homePage.goto();
    await checkBasicA11y(page);
  });
});

test.describe('Acessibilidade - Navegação por Teclado', () => {
  test('deve poder navegar por links com Tab', async ({ page, homePage }) => {
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
});
