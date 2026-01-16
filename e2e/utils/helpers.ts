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
 * Helper para verificar meta tags
 */
export async function checkMetaTag(page: Page, name: string, expectedContent?: string) {
  const meta = page.locator(`meta[name="${name}"]`);
  const exists = await meta.count() > 0;
  expect(exists).toBe(true);
  
  if (expectedContent) {
    const content = await meta.getAttribute('content');
    expect(content).toContain(expectedContent);
  }
}

/**
 * Helper para verificar links
 */
export async function checkLink(page: Page, selector: string, expectedHref?: string, shouldOpenInNewTab = false) {
  const link = page.locator(selector);
  await expect(link).toBeVisible();
  
  if (expectedHref) {
    const href = await link.getAttribute('href');
    expect(href).toContain(expectedHref);
  }
  
  if (shouldOpenInNewTab) {
    const target = await link.getAttribute('target');
    expect(target).toBe('_blank');
  }
}

/**
 * Helper para verificar imagens
 */
export async function checkImage(page: Page, selector: string, shouldHaveAlt = true) {
  const image = page.locator(selector);
  await expect(image).toBeVisible();
  
  if (shouldHaveAlt) {
    const alt = await image.getAttribute('alt');
    expect(alt).toBeTruthy();
    expect(alt!.length).toBeGreaterThan(0);
  }
}

/**
 * Helper para verificar heading hierarchy
 */
export async function checkHeadingHierarchy(page: Page) {
  // Deve ter exatamente um h1
  const h1 = page.locator('h1');
  const h1Count = await h1.count();
  expect(h1Count).toBe(1);
  
  // Deve ter pelo menos um h2
  const h2 = page.locator('h2');
  const h2Count = await h2.count();
  expect(h2Count).toBeGreaterThan(0);
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
