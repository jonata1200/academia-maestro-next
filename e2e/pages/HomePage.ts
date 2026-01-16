import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Home
 */
export class HomePage extends BasePage {
  // Seletores
  readonly logo: Locator;
  readonly heroSection: Locator;
  readonly heroTitle: Locator;
  readonly heroSubtitle: Locator;
  readonly instrumentosCarousel: Locator;
  readonly instrumentosSection: Locator;
  readonly instrumentCards: Locator;
  readonly verTodosInstrumentosButton: Locator;
  readonly porQueEscolherSection: Locator;
  readonly porQueEscolherCards: Locator;
  readonly localizacaoSection: Locator;
  readonly unitsMap: Locator;
  readonly sobreSection: Locator;
  readonly contatoSection: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator('img[alt="Logo Academia Maestro"]');
    this.heroSection = page.locator('section').first();
    this.heroTitle = page.locator('h1');
    this.heroSubtitle = page.locator('section').first().locator('p');
    this.instrumentosCarousel = page.locator('[class*="animate-scroll"], [class*="instrument-scroller"]');
    this.instrumentosSection = page.locator('section').filter({ hasText: /escolha um instrumento/i });
    this.instrumentCards = page.locator('a[href="/instrumentos"]').filter({ hasText: /violão|guitarra|bateria|teclado|violino/i });
    this.verTodosInstrumentosButton = page.locator('a[href="/instrumentos"]').filter({ hasText: /ver todos os instrumentos/i });
    this.porQueEscolherSection = page.locator('section').filter({ hasText: /por que escolher/i });
    this.porQueEscolherCards = this.porQueEscolherSection.locator('div[class*="grid"] > div');
    this.localizacaoSection = page.locator('section').filter({ hasText: /encontre a maestro/i });
    this.unitsMap = page.locator('[class*="units"], [class*="map"]');
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
    await this.navLinks.filter({ hasText: text }).first().click();
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

  /**
   * Verifica se a seção "Por que escolher a Maestro?" está visível
   */
  async isPorQueEscolherSectionVisible(): Promise<boolean> {
    return await this.porQueEscolherSection.isVisible();
  }

  /**
   * Obtém o número de cards na seção "Por que escolher"
   */
  async getPorQueEscolherCardsCount(): Promise<number> {
    return await this.porQueEscolherCards.count();
  }

  /**
   * Verifica se o mapa de unidades está visível
   */
  async isUnitsMapVisible(): Promise<boolean> {
    return await this.unitsMap.isVisible();
  }

  /**
   * Clica no botão "Ver todos os instrumentos"
   */
  async clickVerTodosInstrumentos() {
    await this.verTodosInstrumentosButton.click();
  }
}
