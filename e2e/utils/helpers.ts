import { Page, expect } from '@playwright/test';

/**
 * Helper para aguardar navegação
 */
export async function waitForNavigation(page: Page, action: () => Promise<void>) {
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    action(),
  ]);
}

/**
 * Helper para tirar screenshot com nome único
 */
export async function takeScreenshot(page: Page, name: string) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await page.screenshot({ 
    path: `e2e/screenshots/${name}-${timestamp}.png`,
    fullPage: true 
  });
}

/**
 * Helper para validar que um elemento contém texto
 */
export async function expectTextContent(page: Page, selector: string, expectedText: string) {
  const element = page.locator(selector);
  await expect(element).toContainText(expectedText);
}

/**
 * Helper para preencher formulário
 */
export async function fillForm(page: Page, fields: Record<string, string>) {
  for (const [selector, value] of Object.entries(fields)) {
    await page.fill(selector, value);
  }
}

/**
 * Helper para aguardar elemento estar visível
 */
export async function waitForElementVisible(page: Page, selector: string, timeout = 5000) {
  await page.waitForSelector(selector, { state: 'visible', timeout });
}

/**
 * Helper para verificar acessibilidade básica
 */
export async function checkBasicA11y(page: Page) {
  // Verifica se há um título na página
  const title = await page.title();
  expect(title).toBeTruthy();
  expect(title.length).toBeGreaterThan(0);

  // Verifica se há um elemento main ou role="main"
  const main = page.locator('main, [role="main"]').first();
  await expect(main).toBeVisible();
}

/**
 * Helper para verificar links externos
 */
export async function checkExternalLink(page: Page, linkSelector: string) {
  const link = page.locator(linkSelector);
  const href = await link.getAttribute('href');
  const target = await link.getAttribute('target');
  
  expect(href).toBeTruthy();
  if (href?.startsWith('http')) {
    expect(target).toBe('_blank');
  }
}
