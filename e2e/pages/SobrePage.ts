import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Sobre
 */
export class SobrePage extends BasePage {
  readonly pageTitle: string = 'Sobre Nós';
  readonly mainContent: Locator;
  readonly headings: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('main, [role="main"], section').first();
    this.headings = page.locator('h1, h2, h3');
  }

  /**
   * Navega para a página Sobre
   */
  async goto() {
    await super.goto('/sobre');
    await this.waitForLoadState();
  }

  /**
   * Verifica se a página foi carregada corretamente
   */
  async isLoaded(): Promise<boolean> {
    const title = await this.getTitle();
    return title.includes(this.pageTitle) || await this.page.locator('h1, h2').filter({ hasText: /sobre/i }).isVisible();
  }

  /**
   * Obtém o número de headings na página
   */
  async getHeadingsCount(): Promise<number> {
    return await this.headings.count();
  }
}
