import { test, expect } from '../fixtures';
import { HomePage, SobrePage, InstrumentosPage, ContatoPage, ManutencaoPage } from '../pages';

/**
 * Testes de navegação completa entre páginas
 */
test.describe('Navegação Completa', () => {
  test('deve navegar por todas as páginas principais', async ({ 
    page, 
    homePage, 
    sobrePage, 
    instrumentosPage, 
    contatoPage, 
    manutencaoPage 
  }) => {
    // Home
    await homePage.goto();
    await expect(page).toHaveURL('/');
    
    // Sobre
    await homePage.clickNavLink('Sobre Nós');
    await expect(page).toHaveURL(/.*sobre/);
    await expect(sobrePage.page.locator('h1, h2')).toContainText(/sobre/i);
    
    // Instrumentos
    await sobrePage.goto();
    await sobrePage.page.locator('header a, nav a').filter({ hasText: 'Instrumentos' }).click();
    await expect(page).toHaveURL(/.*instrumentos/);
    
    // Contato
    await instrumentosPage.goto();
    await instrumentosPage.page.locator('header a, nav a').filter({ hasText: 'Contato' }).click();
    await expect(page).toHaveURL(/.*contato/);
    
    // Manutenção
    await contatoPage.goto();
    await contatoPage.page.locator('header a, nav a').filter({ hasText: 'Manutenção' }).click();
    await expect(page).toHaveURL(/.*manutencao/);
    
    // Volta para Home
    await manutencaoPage.goto();
    await manutencaoPage.page.locator('header a, nav a').filter({ hasText: 'Home' }).click();
    await expect(page).toHaveURL('/');
  });

  test('deve navegar pelo footer', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Scroll até o footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Clica em link do footer
    const footerLink = page.locator('footer a').filter({ hasText: 'Sobre Nós' });
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    
    await expect(page).toHaveURL(/.*sobre/);
  });

  test('deve navegar pelo menu mobile', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    // Abre menu mobile
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Verifica que menu está aberto
      const nav = page.locator('nav');
      const navClasses = await nav.getAttribute('class');
      expect(navClasses).toContain('left-0');
      
      // Clica em link do menu
      await homePage.clickNavLink('Sobre Nós');
      await expect(page).toHaveURL(/.*sobre/);
      
      // Verifica que menu fechou
      await page.waitForTimeout(300);
      const navAfter = page.locator('nav');
      const navClassesAfter = await navAfter.getAttribute('class');
      expect(navClassesAfter).not.toContain('left-0');
    }
  });

  test('deve manter navegação suave entre páginas', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Navega para várias páginas rapidamente
    await homePage.clickNavLink('Sobre Nós');
    await page.waitForLoadState('networkidle');
    
    await page.locator('header a, nav a').filter({ hasText: 'Instrumentos' }).click();
    await page.waitForLoadState('networkidle');
    
    await page.locator('header a, nav a').filter({ hasText: 'Contato' }).click();
    await page.waitForLoadState('networkidle');
    
    // Verifica que chegou na página correta
    await expect(page).toHaveURL(/.*contato/);
  });
});
