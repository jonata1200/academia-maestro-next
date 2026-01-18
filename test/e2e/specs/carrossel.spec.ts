import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes do carrossel de instrumentos
 */
test.describe('Carrossel de Instrumentos', () => {
  test('deve exibir carrossel na home', async ({ homePage }) => {
    await homePage.goto();
    
    const isVisible = await homePage.isInstrumentosCarouselVisible();
    expect(isVisible).toBe(true);
  });

  test('deve exibir todos os instrumentos', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Verifica que há cards de instrumentos
    const instrumentCards = homePage.instrumentCards;
    const count = await instrumentCards.count();
    expect(count).toBeGreaterThan(0);
    
    // Verifica que pelo menos alguns instrumentos estão visíveis
    const visibleCount = await instrumentCards.filter({ hasNotText: '' }).count();
    expect(visibleCount).toBeGreaterThan(0);
  });

  test('deve ter animação contínua (CSS)', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Verifica que o carrossel tem classe de animação
    const carousel = homePage.instrumentosCarousel;
    const carouselClasses = await carousel.getAttribute('class');
    expect(carouselClasses).toMatch(/animate|scroll/i);
  });

  test('deve ter links funcionais nos cards', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Clica em um card de instrumento
    const firstCard = homePage.instrumentCards.first();
    await expect(firstCard).toBeVisible();
    
    // Verifica que é um link
    const tagName = await firstCard.evaluate((el) => el.tagName.toLowerCase());
    expect(tagName).toBe('a');
    
    // Verifica href
    const href = await firstCard.getAttribute('href');
    expect(href).toContain('/instrumentos');
  });

  test('deve funcionar em diferentes resoluções', async ({ homePage, page }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    const isVisibleMobile = await homePage.isInstrumentosCarouselVisible();
    expect(isVisibleMobile).toBe(true);
    
    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await homePage.goto();
    const isVisibleDesktop = await homePage.isInstrumentosCarouselVisible();
    expect(isVisibleDesktop).toBe(true);
  });
});
