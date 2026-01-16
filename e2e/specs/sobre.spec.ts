import { test, expect } from '../fixtures';
import { SobrePage } from '../pages';

/**
 * Testes de integração para a página Sobre Nós
 */
test.describe('Página Sobre Nós', () => {
  test('deve carregar a página corretamente', async ({ sobrePage }) => {
    await sobrePage.goto();
    
    await expect(sobrePage.page).toHaveURL(/.*sobre/);
    
    const isLoaded = await sobrePage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve exibir conteúdo da página', async ({ sobrePage, page }) => {
    await sobrePage.goto();
    
    // Verifica que há conteúdo
    const mainContent = page.locator('main, [role="main"], section');
    await expect(mainContent.first()).toBeVisible();
    
    // Verifica que há texto
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);
  });

  test('deve navegar a partir do header', async ({ page, homePage, sobrePage }) => {
    await homePage.goto();
    
    // Navega via header
    await homePage.clickNavLink('Sobre Nós');
    
    await expect(page).toHaveURL(/.*sobre/);
    const isLoaded = await sobrePage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve ter meta tags SEO', async ({ sobrePage, page }) => {
    await sobrePage.goto();
    
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('deve ter heading hierarchy correta', async ({ sobrePage, page }) => {
    await sobrePage.goto();
    
    // Verifica que há pelo menos um heading
    const headings = page.locator('h1, h2, h3');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });
});

test.describe('Página Sobre - Responsividade', () => {
  test('deve funcionar em mobile', async ({ sobrePage, page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await sobrePage.goto();
    
    const mainContent = page.locator('main, section').first();
    await expect(mainContent).toBeVisible();
  });

  test('deve funcionar em desktop', async ({ sobrePage, page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await sobrePage.goto();
    
    const mainContent = page.locator('main, section').first();
    await expect(mainContent).toBeVisible();
  });
});
