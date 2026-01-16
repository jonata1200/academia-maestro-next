import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Exemplo de teste básico
 * Este arquivo serve como referência para escrever novos testes
 */
test.describe('Exemplo de Teste', () => {
  test('deve carregar a página home', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica se o logo está visível
    await expect(homePage.logo).toBeVisible();
    
    // Verifica o título da página
    const title = await homePage.getTitle();
    expect(title).toBeTruthy();
  });

  test('deve navegar entre páginas', async ({ page, homePage, sobrePage }) => {
    await homePage.goto();
    
    // Clica no link "Sobre Nós"
    await homePage.clickNavLink('Sobre Nós');
    
    // Verifica se navegou para a página Sobre
    await expect(sobrePage.page).toHaveURL(/.*sobre/);
    await expect(sobrePage.page.locator('h1, h2')).toContainText(/sobre/i);
  });
});
