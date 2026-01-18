import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para a página Manutenção
 */
export class ManutencaoPage extends BasePage {
  readonly pageTitle: string = 'Manutenção';
  readonly mainContent: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('main, [role="main"], section').first();
  }

  /**
   * Navega para a página Manutenção
   */
  async goto() {
    await super.goto('/manutencao');
    await this.waitForLoadState();
  }

  /**
   * Verifica se a página foi carregada corretamente
   */
  async isLoaded(): Promise<boolean> {
    const title = await this.getTitle();
    return title.includes(this.pageTitle) || await this.page.locator('h1, h2').filter({ hasText: /manuten/i }).isVisible();
  }
}
