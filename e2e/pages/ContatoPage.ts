import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Contato
 */
export class ContatoPage extends BasePage {
  readonly pageTitle: string = 'Contato';
  readonly unitsMap: Locator;
  readonly contactForm: Locator;

  constructor(page: Page) {
    super(page);
    this.unitsMap = page.locator('[class*="map"], [class*="units"]');
    this.contactForm = page.locator('form');
  }

  /**
   * Navega para a página Contato
   */
  async goto() {
    await super.goto('/contato');
    await this.waitForLoadState();
  }

  /**
   * Verifica se a página foi carregada corretamente
   */
  async isLoaded(): Promise<boolean> {
    const title = await this.getTitle();
    return title.includes(this.pageTitle) || await this.page.locator('h1, h2').filter({ hasText: /contato/i }).isVisible();
  }

  /**
   * Verifica se o mapa de unidades está visível
   */
  async isUnitsMapVisible(): Promise<boolean> {
    return await this.unitsMap.isVisible();
  }
}
