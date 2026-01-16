import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Home
 */
export class HomePage extends BasePage {
  // Seletores
  readonly logo: Locator;
  readonly heroSection: Locator;
  readonly instrumentosCarousel: Locator;
  readonly sobreSection: Locator;
  readonly contatoSection: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator('img[alt="Logo Academia Maestro"]');
    this.heroSection = page.locator('section').first();
    this.instrumentosCarousel = page.locator('[class*="swiper"]');
    this.sobreSection = page.locator('section').filter({ hasText: /sobre/i });
    this.contatoSection = page.locator('section').filter({ hasText: /contato/i });
    this.navLinks = page.locator('nav a, header a');
  }

  /**
   * Navega para a página home
   */
  async goto() {
    await super.goto('/');
    await this.waitForLoadState();
  }

  /**
   * Clica em um link de navegação
   */
  async clickNavLink(text: string) {
    await this.navLinks.filter({ hasText: text }).click();
  }

  /**
   * Verifica se o carrossel de instrumentos está visível
   */
  async isInstrumentosCarouselVisible(): Promise<boolean> {
    return await this.instrumentosCarousel.isVisible();
  }

  /**
   * Obtém o texto do hero section
   */
  async getHeroText(): Promise<string> {
    return await this.heroSection.textContent() || '';
  }
}
