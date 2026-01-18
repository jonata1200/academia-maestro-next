import { test, expect } from '../fixtures';
import { HomePage, SobrePage, InstrumentosPage, ContatoPage } from '../pages';

/**
 * Testes de navegação entre páginas
 */
test.describe('Navegação', () => {
  test('deve navegar para todas as páginas principais', async ({ 
    homePage, 
    sobrePage, 
    instrumentosPage, 
    contatoPage 
  }) => {
    // Home
    await homePage.goto();
    await expect(homePage.page).toHaveURL('/');
    
    // Sobre
    await sobrePage.goto();
    await expect(sobrePage.page).toHaveURL(/.*sobre/);
    
    // Instrumentos
    await instrumentosPage.goto();
    await expect(instrumentosPage.page).toHaveURL(/.*instrumentos/);
    
    // Contato
    await contatoPage.goto();
    await expect(contatoPage.page).toHaveURL(/.*contato/);
  });

  test('deve ter links de navegação funcionais no header', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica se os links principais estão presentes
    const navLinks = homePage.navLinks;
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
    
    // Testa navegação via header
    await homePage.clickNavLink('Sobre Nós');
    await expect(page).toHaveURL(/.*sobre/);
  });
});
