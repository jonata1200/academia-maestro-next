import { test, expect } from '../fixtures';
import { ContatoPage } from '../pages';

/**
 * Testes de integração para a página Contato
 */
test.describe('Página Contato', () => {
  test('deve carregar a página corretamente', async ({ contatoPage }) => {
    await contatoPage.goto();
    
    await expect(contatoPage.page).toHaveURL(/.*contato/);
    
    const isLoaded = await contatoPage.isLoaded();
    expect(isLoaded).toBe(true);
  });

  test('deve exibir as unidades', async ({ contatoPage }) => {
    await contatoPage.goto();
    
    const unitsCount = await contatoPage.getUnitsCount();
    expect(unitsCount).toBeGreaterThanOrEqual(2);
    
    // Verifica que há informações das unidades
    await expect(contatoPage.unitCards.first()).toBeVisible();
  });

  test('deve exibir mapas do Google Maps', async ({ contatoPage }) => {
    await contatoPage.goto();
    
    const mapsCount = await contatoPage.getGoogleMapsCount();
    expect(mapsCount).toBeGreaterThanOrEqual(2);
    
    // Verifica que os iframes estão presentes
    await expect(contatoPage.googleMapsIframes.first()).toBeVisible();
  });

  test('deve ter links do Google Maps corretos', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    // Verifica que os iframes têm src do Google Maps
    const firstIframe = contatoPage.googleMapsIframes.first();
    const src = await firstIframe.getAttribute('src');
    expect(src).toContain('google.com/maps');
  });

  test('deve exibir links do WhatsApp', async ({ contatoPage }) => {
    await contatoPage.goto();
    
    const whatsappCount = await contatoPage.getWhatsAppLinksCount();
    expect(whatsappCount).toBeGreaterThanOrEqual(2);
    
    // Verifica que os links estão visíveis
    await expect(contatoPage.whatsappLinks.first()).toBeVisible();
  });

  test('deve ter links do WhatsApp com formato correto', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    // Verifica que os links têm href do WhatsApp
    const firstLink = contatoPage.whatsappLinks.first();
    const href = await firstLink.getAttribute('href');
    expect(href).toContain('whatsapp.com');
    expect(href).toContain('phone=');
    
    // Verifica que abrem em nova aba
    const target = await firstLink.getAttribute('target');
    expect(target).toBe('_blank');
  });

  test('deve ter informações de endereço', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    // Verifica que há textos de endereço
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toMatch(/ceilândia|sobradinho/i);
  });

  test('deve navegar a partir do header', async ({ page, homePage, contatoPage }) => {
    await homePage.goto();
    
    await homePage.clickNavLink('Contato');
    
    await expect(page).toHaveURL(/.*contato/);
    const isLoaded = await contatoPage.isLoaded();
    expect(isLoaded).toBe(true);
  });
});

test.describe('Página Contato - Responsividade', () => {
  test('deve funcionar em mobile', async ({ contatoPage, page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await contatoPage.goto();
    
    const unitsCount = await contatoPage.getUnitsCount();
    expect(unitsCount).toBeGreaterThan(0);
  });

  test('deve funcionar em desktop', async ({ contatoPage, page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await contatoPage.goto();
    
    const unitsCount = await contatoPage.getUnitsCount();
    expect(unitsCount).toBeGreaterThan(0);
  });
});
