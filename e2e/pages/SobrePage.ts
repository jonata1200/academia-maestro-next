import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Sobre
 */
export class SobrePage extends BasePage {
  readonly pageTitle: string = 'Sobre Nós';

  constructor(page: Page) {
    super(page);
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
}
