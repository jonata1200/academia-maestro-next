import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de integração para a página Home
 */
test.describe('Página Home', () => {
  test('deve carregar a página corretamente', async ({ homePage }) => {
    await homePage.goto();
    
    // Verifica URL
    await expect(homePage.page).toHaveURL('/');
    
    // Verifica título da página
    const title = await homePage.getTitle();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test('deve exibir o hero section', async ({ homePage }) => {
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.heroTitle).toBeVisible();
    await expect(homePage.heroSubtitle).toBeVisible();
    
    // Verifica conteúdo do hero
    const heroText = await homePage.getHeroText();
    expect(heroText).toContain('Música');
  });

  test('deve exibir a seção "Por que escolher a Maestro?"', async ({ homePage }) => {
    await homePage.goto();
    
    const isVisible = await homePage.isPorQueEscolherSectionVisible();
    expect(isVisible).toBe(true);
    
    // Verifica que há cards
    const cardsCount = await homePage.getPorQueEscolherCardsCount();
    expect(cardsCount).toBeGreaterThanOrEqual(3);
  });

  test('deve exibir o carrossel de instrumentos', async ({ homePage }) => {
    await homePage.goto();
    
    await expect(homePage.instrumentosSection).toBeVisible();
    
    // Verifica que há cards de instrumentos
    const instrumentCardsCount = await homePage.instrumentCards.count();
    expect(instrumentCardsCount).toBeGreaterThan(0);
  });

  test('deve ter botão "Ver todos os instrumentos" funcional', async ({ homePage, page }) => {
    await homePage.goto();
    
    await expect(homePage.verTodosInstrumentosButton).toBeVisible();
    
    // Clica no botão
    await homePage.clickVerTodosInstrumentos();
    
    // Verifica navegação
    await expect(page).toHaveURL(/.*instrumentos/);
  });

  test('deve exibir o mapa de localização', async ({ homePage }) => {
    await homePage.goto();
    
    await expect(homePage.localizacaoSection).toBeVisible();
    
    const isMapVisible = await homePage.isUnitsMapVisible();
    expect(isMapVisible).toBe(true);
  });

  test('deve navegar para outras páginas via header', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Testa navegação para Sobre
    await homePage.clickNavLink('Sobre Nós');
    await expect(page).toHaveURL(/.*sobre/);
    
    // Volta para home
    await homePage.goto();
    
    // Testa navegação para Instrumentos
    await homePage.clickNavLink('Instrumentos');
    await expect(page).toHaveURL(/.*instrumentos/);
  });

  test('deve ter meta tags SEO', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Verifica title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Verifica meta description (se existir)
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    // Meta description pode não existir, então apenas verificamos se não é vazio se existir
    if (metaDescription) {
      expect(metaDescription.length).toBeGreaterThan(0);
    }
  });

  test('deve ter heading hierarchy correta', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Verifica que há um h1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Verifica que há h2s
    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('deve ter imagens com alt text', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Verifica logo
    const logo = homePage.logo;
    await expect(logo).toBeVisible();
    const logoAlt = await logo.getAttribute('alt');
    expect(logoAlt).toBeTruthy();
    
    // Verifica outras imagens
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // Verifica que pelo menos algumas imagens têm alt
    let imagesWithAlt = 0;
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      if (alt) imagesWithAlt++;
    }
    expect(imagesWithAlt).toBeGreaterThan(0);
  });
});

test.describe('Página Home - Responsividade', () => {
  test('deve funcionar em mobile', async ({ homePage, page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.logo).toBeVisible();
  });

  test('deve funcionar em tablet', async ({ homePage, page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.porQueEscolherSection).toBeVisible();
  });

  test('deve funcionar em desktop', async ({ homePage, page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await homePage.goto();
    
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.instrumentosSection).toBeVisible();
  });
});
