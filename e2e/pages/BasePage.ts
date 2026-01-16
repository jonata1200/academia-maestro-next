import { Page, Locator } from '@playwright/test';

/**
 * Classe base para Page Objects
 * Contém métodos comuns que podem ser reutilizados por todas as páginas
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega para uma URL relativa
   */
  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  /**
   * Aguarda até que a página esteja completamente carregada
   */
  async waitForLoadState() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Aguarda até que um elemento esteja visível
   */
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  /**
   * Obtém o título da página
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Obtém a URL atual
   */
  getUrl(): string {
    return this.page.url();
  }

  /**
   * Tira um screenshot
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `e2e/screenshots/${name}.png`, fullPage: true });
  }

  /**
   * Clica em um elemento
   */
  async click(selector: string) {
    await this.page.click(selector);
  }

  /**
   * Preenche um campo de input
   */
  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  /**
   * Obtém o texto de um elemento
   */
  async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector) || '';
  }

  /**
   * Verifica se um elemento está visível
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }
}
