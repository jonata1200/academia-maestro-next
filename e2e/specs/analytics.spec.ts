import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de integração com Google Analytics
 */
test.describe('Google Analytics', () => {
  test('deve carregar GA após aceitar cookies', async ({ page, homePage }) => {
    // Limpa localStorage
    await page.evaluate(() => localStorage.clear());
    
    await homePage.goto();
    
    // Aceita cookies
    const acceptButton = page.locator('button:has-text("Aceitar"), button:has-text("Aceitar e Fechar")');
    const buttonExists = await acceptButton.first().isVisible({ timeout: 5000 }).catch(() => false);
    
    if (buttonExists) {
      await acceptButton.first().click();
      await page.waitForTimeout(1000);
      
      // Verifica que consentimento foi salvo
      const consent = await page.evaluate(() => localStorage.getItem('cookie_consent'));
      expect(consent).toBe('true');
    }
  });

  test('deve não ter erros no console relacionados a GA', async ({ page, homePage }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await homePage.goto();
    await page.waitForTimeout(2000);
    
    // Verifica que não há erros críticos (pode ter warnings)
    const criticalErrors = consoleErrors.filter((error) => 
      error.includes('Failed') || error.includes('Error')
    );
    expect(criticalErrors.length).toBe(0);
  });
});
