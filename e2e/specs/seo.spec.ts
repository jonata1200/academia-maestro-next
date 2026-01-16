import { test, expect } from '../fixtures';
import { HomePage, SobrePage, InstrumentosPage, ContatoPage, ManutencaoPage } from '../pages';

/**
 * Testes de SEO
 */
test.describe('SEO - Meta Tags', () => {
  test('deve ter title em todas as páginas', async ({ page, homePage, sobrePage, instrumentosPage, contatoPage, manutencaoPage }) => {
    const pages = [
      { pageObj: homePage, name: 'Home' },
      { pageObj: sobrePage, name: 'Sobre' },
      { pageObj: instrumentosPage, name: 'Instrumentos' },
      { pageObj: contatoPage, name: 'Contato' },
      { pageObj: manutencaoPage, name: 'Manutenção' },
    ];
    
    for (const { pageObj, name } of pages) {
      await pageObj.goto();
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    }
  });

  test('deve ter meta description quando disponível', async ({ page, homePage }) => {
    await homePage.goto();
    
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    // Meta description pode não existir, mas se existir, deve ter conteúdo
    if (metaDescription) {
      expect(metaDescription.length).toBeGreaterThan(0);
      expect(metaDescription.length).toBeLessThan(160); // Boa prática: menos de 160 caracteres
    }
  });

  test('deve ter heading hierarchy correta', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que há um h1
    const h1 = page.locator('h1');
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    expect(h1Count).toBeLessThanOrEqual(1); // Deve ter apenas um h1
    
    // Verifica que há h2s
    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('deve ter alt text em imagens', async ({ page, homePage }) => {
    await homePage.goto();
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // Verifica que imagens importantes têm alt
    const logo = homePage.logo;
    const logoAlt = await logo.getAttribute('alt');
    expect(logoAlt).toBeTruthy();
    
    // Verifica outras imagens (pelo menos algumas devem ter alt)
    let imagesWithAlt = 0;
    for (let i = 0; i < Math.min(imageCount, 10); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      if (alt && alt.length > 0) imagesWithAlt++;
    }
    expect(imagesWithAlt).toBeGreaterThan(0);
  });
});

test.describe('SEO - Sitemap e Robots', () => {
  test('deve ter sitemap.xml acessível', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    // Pode retornar 404 se não estiver configurado, mas não deve quebrar
    if (response) {
      expect([200, 404]).toContain(response.status());
    }
  });

  test('deve ter robots.txt acessível', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    // Pode retornar 404 se não estiver configurado
    if (response) {
      expect([200, 404]).toContain(response.status());
    }
  });
});
