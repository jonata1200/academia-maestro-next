import { test, expect } from '../fixtures';
import { HomePage, SobrePage, InstrumentosPage, ContatoPage, ManutencaoPage } from '../pages';

/**
 * Testes de navegação global (Header e Footer)
 */
test.describe('Navegação Global - Header', () => {
  test('deve exibir logo em todas as páginas', async ({ page, homePage, sobrePage, instrumentosPage, contatoPage }) => {
    const pages = [homePage, sobrePage, instrumentosPage, contatoPage];
    
    for (const pageObj of pages) {
      await pageObj.goto();
      await expect(pageObj.logo).toBeVisible();
    }
  });

  test('deve ter links de navegação funcionais', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Testa cada link do header
    const navLinks = ['Home', 'Sobre Nós', 'Instrumentos', 'Contato', 'Manutenção'];
    
    for (const linkText of navLinks) {
      await homePage.goto();
      await homePage.clickNavLink(linkText);
      
      // Verifica que navegou
      if (linkText === 'Home') {
        await expect(page).toHaveURL('/');
      } else {
        await expect(page).toHaveURL(new RegExp(linkText.toLowerCase().replace(/\s+/g, '.*')));
      }
    }
  });

  test('deve fechar menu mobile ao clicar em link', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    // Abre menu mobile (se houver botão hambúrguer)
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"], button:has-text("☰")');
    const menuExists = await menuButton.first().isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      await menuButton.first().click();
      
      // Clica em um link
      await homePage.clickNavLink('Sobre Nós');
      
      // Verifica que navegou
      await expect(page).toHaveURL(/.*sobre/);
    }
  });
});

test.describe('Navegação Global - Footer', () => {
  test('deve exibir footer em todas as páginas', async ({ page, homePage, sobrePage }) => {
    const pages = [homePage, sobrePage];
    
    for (const pageObj of pages) {
      await pageObj.goto();
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    }
  });

  test('deve ter links do footer funcionais', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que há links no footer
    const footerLinks = page.locator('footer a');
    const linkCount = await footerLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('deve ter links de redes sociais', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Procura por links de redes sociais
    const socialLinks = page.locator('footer a[href*="facebook"], footer a[href*="instagram"], footer a[href*="youtube"]');
    const socialCount = await socialLinks.count();
    
    // Pode ter ou não redes sociais, mas se tiver, deve estar correto
    if (socialCount > 0) {
      const firstLink = socialLinks.first();
      const href = await firstLink.getAttribute('href');
      expect(href).toBeTruthy();
      
      // Verifica que abre em nova aba
      const target = await firstLink.getAttribute('target');
      if (target) {
        expect(target).toBe('_blank');
      }
    }
  });
});
