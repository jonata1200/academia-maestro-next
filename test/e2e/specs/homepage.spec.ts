import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes específicos da página Home
 */
test.describe('Página Home', () => {
  test('deve exibir o logo', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });

  test('deve ter seção hero visível', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.heroSection).toBeVisible();
  });

  test('deve ter carrossel de instrumentos', async ({ homePage }) => {
    await homePage.goto();
    const isVisible = await homePage.isInstrumentosCarouselVisible();
    expect(isVisible).toBeTruthy();
  });

  test('deve ter título da página', async ({ homePage }) => {
    await homePage.goto();
    const title = await homePage.getTitle();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });
});
