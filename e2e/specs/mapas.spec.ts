import { test, expect } from '../fixtures';
import { ContatoPage, HomePage } from '../pages';

/**
 * Testes de interações com mapas
 */
test.describe('Mapas - Página Contato', () => {
  test('deve carregar mapas do Google Maps', async ({ contatoPage }) => {
    await contatoPage.goto();
    
    const mapsCount = await contatoPage.getGoogleMapsCount();
    expect(mapsCount).toBeGreaterThanOrEqual(2);
    
    // Verifica que iframes estão presentes
    await expect(contatoPage.googleMapsIframes.first()).toBeVisible();
  });

  test('deve ter links do Google Maps corretos', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    const mapsIframes = contatoPage.googleMapsIframes;
    const count = await mapsIframes.count();
    
    for (let i = 0; i < Math.min(count, 2); i++) {
      const iframe = mapsIframes.nth(i);
      const src = await iframe.getAttribute('src');
      expect(src).toContain('google.com/maps');
      expect(src).toBeTruthy();
    }
  });

  test('deve exibir informações das unidades', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    // Verifica que há informações das unidades
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toMatch(/ceilândia|sobradinho/i);
    expect(bodyText).toMatch(/endereço|localização/i);
  });

  test('deve funcionar em diferentes resoluções', async ({ contatoPage, page }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await contatoPage.goto();
    const mapsCountMobile = await contatoPage.getGoogleMapsCount();
    expect(mapsCountMobile).toBeGreaterThan(0);
    
    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await contatoPage.goto();
    const mapsCountDesktop = await contatoPage.getGoogleMapsCount();
    expect(mapsCountDesktop).toBeGreaterThan(0);
  });
});

test.describe('Mapas - Home', () => {
  test('deve exibir mapa na home', async ({ homePage }) => {
    await homePage.goto();
    
    const isMapVisible = await homePage.isUnitsMapVisible();
    expect(isMapVisible).toBe(true);
  });
});
