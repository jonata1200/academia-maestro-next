import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Instrumentos
 */
export class InstrumentosPage extends BasePage {
  readonly pageTitle: string = 'Instrumentos';
  readonly instrumentCards: Locator;

  constructor(page: Page) {
    super(page);
    this.instrumentCards = page.locator('[class*="instrument"], [class*="card"]');
  }

  /**
   * Navega para a página Instrumentos
   */
  async goto() {
    await super.goto('/instrumentos');
    await this.waitForLoadState();
  }

  /**
   * Verifica se a página foi carregada corretamente
   */
  async isLoaded(): Promise<boolean> {
    const title = await this.getTitle();
    return title.includes(this.pageTitle) || await this.page.locator('h1, h2').filter({ hasText: /instrumento/i }).isVisible();
  }

  /**
   * Obtém o número de instrumentos exibidos
   */
  async getInstrumentCount(): Promise<number> {
    return await this.instrumentCards.count();
  }
}
