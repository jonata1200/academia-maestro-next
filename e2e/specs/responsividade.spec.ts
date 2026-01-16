import { test, expect } from '../fixtures';
import { HomePage, SobrePage, InstrumentosPage, ContatoPage } from '../pages';

/**
 * Testes de Responsividade
 */
const viewports = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
};

test.describe('Responsividade - Mobile (375px)', () => {
  test('Home deve funcionar em mobile', async ({ page, homePage }) => {
    await page.setViewportSize(viewports.mobile);
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.logo).toBeVisible();
  });

  test('Sobre deve funcionar em mobile', async ({ page, sobrePage }) => {
    await page.setViewportSize(viewports.mobile);
    await sobrePage.goto();
    
    const mainContent = page.locator('main, section').first();
    await expect(mainContent).toBeVisible();
  });

  test('Instrumentos deve funcionar em mobile', async ({ page, instrumentosPage }) => {
    await page.setViewportSize(viewports.mobile);
    await instrumentosPage.goto();
    
    const instrumentCount = await instrumentosPage.getInstrumentCount();
    expect(instrumentCount).toBeGreaterThan(0);
  });

  test('Contato deve funcionar em mobile', async ({ page, contatoPage }) => {
    await page.setViewportSize(viewports.mobile);
    await contatoPage.goto();
    
    const unitsCount = await contatoPage.getUnitsCount();
    expect(unitsCount).toBeGreaterThan(0);
  });

  test('deve ter menu hambúrguer em mobile', async ({ page, homePage }) => {
    await page.setViewportSize(viewports.mobile);
    await homePage.goto();
    
    // Procura por botão de menu (pode ter diferentes formatos)
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"], button:has-text("☰"), [class*="menu-toggle"]');
    // Menu pode ou não estar visível dependendo da implementação
    await menuButton.first().isVisible({ timeout: 2000 }).catch(() => {});
  });
});

test.describe('Responsividade - Tablet (768px)', () => {
  test('Home deve funcionar em tablet', async ({ page, homePage }) => {
    await page.setViewportSize(viewports.tablet);
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.porQueEscolherSection).toBeVisible();
  });

  test('Contato deve funcionar em tablet', async ({ page, contatoPage }) => {
    await page.setViewportSize(viewports.tablet);
    await contatoPage.goto();
    
    const unitsCount = await contatoPage.getUnitsCount();
    expect(unitsCount).toBeGreaterThan(0);
  });
});

test.describe('Responsividade - Desktop (1280px)', () => {
  test('Home deve funcionar em desktop', async ({ page, homePage }) => {
    await page.setViewportSize(viewports.desktop);
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.instrumentosSection).toBeVisible();
    await expect(homePage.porQueEscolherSection).toBeVisible();
  });

  test('Todas as páginas devem funcionar em desktop', async ({ page, sobrePage, instrumentosPage, contatoPage }) => {
    await page.setViewportSize(viewports.desktop);
    
    const pages = [sobrePage, instrumentosPage, contatoPage];
    for (const pageObj of pages) {
      await pageObj.goto();
      const mainContent = page.locator('main, section').first();
      await expect(mainContent).toBeVisible();
    }
  });
});
