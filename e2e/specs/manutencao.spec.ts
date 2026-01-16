import { test, expect } from '../fixtures';
import { ManutencaoPage } from '../pages';

/**
 * Testes de integração para a página Manutenção
 */
test.describe('Página Manutenção', () => {
  test('deve carregar a página corretamente', async ({ manutencaoPage }) => {
    await manutencaoPage.goto();
    
    await expect(manutencaoPage.page).toHaveURL(/.*manutencao/);
    
    const isLoaded = await manutencaoPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve exibir conteúdo da página', async ({ manutencaoPage, page }) => {
    await manutencaoPage.goto();
    
    // Verifica que há conteúdo
    const mainContent = page.locator('main, [role="main"], section');
    await expect(mainContent.first()).toBeVisible();
    
    // Verifica que há texto
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(50);
  });

  test('deve navegar a partir do header', async ({ page, homePage, manutencaoPage }) => {
    await homePage.goto();
    
    await homePage.clickNavLink('Manutenção');
    
    await expect(page).toHaveURL(/.*manutencao/);
    const isLoaded = await manutencaoPage.isLoaded();
    expect(isLoaded).toBe(true);
  });
});
