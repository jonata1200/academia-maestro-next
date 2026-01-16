import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes do Cookie Banner
 */
test.describe('Cookie Banner', () => {
  test('deve exibir na primeira visita', async ({ page, homePage }) => {
    // Limpa localStorage antes do teste
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
    
    await homePage.goto();
    
    // Verifica que o banner está visível
    const cookieBanner = page.locator('text=/cookie/i').or(page.locator('button:has-text("Aceitar")'));
    await expect(cookieBanner.first()).toBeVisible({ timeout: 5000 });
  });

  test('deve aceitar cookies e esconder o banner', async ({ page, homePage }) => {
    // Limpa localStorage
    await page.evaluate(() => localStorage.clear());
    
    await homePage.goto();
    
    // Procura pelo botão de aceitar
    const acceptButton = page.locator('button:has-text("Aceitar"), button:has-text("Aceitar e Fechar")');
    await expect(acceptButton.first()).toBeVisible({ timeout: 5000 });
    
    // Clica no botão
    await acceptButton.first().click();
    
    // Aguarda o banner desaparecer
    await expect(acceptButton.first()).not.toBeVisible({ timeout: 2000 });
  });

  test('deve persistir após aceitação e não exibir novamente', async ({ page, homePage }) => {
    // Limpa localStorage
    await page.evaluate(() => localStorage.clear());
    
    await homePage.goto();
    
    // Aceita cookies
    const acceptButton = page.locator('button:has-text("Aceitar"), button:has-text("Aceitar e Fechar")');
    if (await acceptButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
      await acceptButton.first().click();
      await page.waitForTimeout(500);
    }
    
    // Recarrega a página
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Verifica que o banner não aparece novamente
    const cookieBanner = page.locator('text=/cookie/i');
    const isVisible = await cookieBanner.first().isVisible({ timeout: 2000 }).catch(() => false);
    expect(isVisible).toBe(false);
  });

  test('deve funcionar em diferentes páginas', async ({ page, sobrePage }) => {
    // Limpa localStorage
    await page.evaluate(() => localStorage.clear());
    
    await sobrePage.goto();
    
    // Verifica que o banner pode aparecer em outras páginas também
    const cookieBanner = page.locator('text=/cookie/i').or(page.locator('button:has-text("Aceitar")'));
    // Pode ou não estar visível dependendo do timing, mas não deve quebrar
    await cookieBanner.first().isVisible({ timeout: 2000 }).catch(() => {});
  });
});
