import { test, expect } from '../fixtures';
import { HomePage } from '../pages';

/**
 * Testes de interações com o Header
 */
test.describe('Header - Interações', () => {
  test('deve mudar estilo ao fazer scroll na home', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que header está transparente no topo
    const header = page.locator('header');
    let headerClasses = await header.getAttribute('class');
    expect(headerClasses).toContain('bg-transparent');
    
    // Faz scroll
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);
    
    // Verifica que header mudou para branco
    headerClasses = await header.getAttribute('class');
    expect(headerClasses).toContain('bg-white');
    expect(headerClasses).not.toContain('bg-transparent');
  });

  test('deve ter logo invertido no topo da home', async ({ page, homePage }) => {
    await homePage.goto();
    
    // Verifica que logo está invertido no topo
    const logo = homePage.logo;
    let logoClasses = await logo.getAttribute('class');
    expect(logoClasses).toContain('invert');
    
    // Faz scroll
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);
    
    // Verifica que logo não está mais invertido
    logoClasses = await logo.getAttribute('class');
    expect(logoClasses).not.toContain('invert');
  });

  test('deve abrir e fechar menu mobile', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      // Abre menu
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Verifica que menu está aberto
      const nav = page.locator('nav');
      const navClasses = await nav.getAttribute('class');
      expect(navClasses).toContain('left-0');
      
      // Verifica que body scroll está bloqueado
      const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
      expect(bodyOverflow).toBe('hidden');
      
      // Fecha menu
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Verifica que menu fechou
      const navClassesAfter = await nav.getAttribute('class');
      expect(navClassesAfter).not.toContain('left-0');
      
      // Verifica que body scroll foi liberado
      const bodyOverflowAfter = await page.evaluate(() => document.body.style.overflow);
      expect(bodyOverflowAfter).toBe('');
    }
  });

  test('deve fechar menu mobile ao clicar em link', async ({ page, homePage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    
    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    const menuExists = await menuButton.isVisible({ timeout: 2000 }).catch(() => false);
    
    if (menuExists) {
      // Abre menu
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Clica em link
      await homePage.clickNavLink('Sobre Nós');
      await page.waitForTimeout(300);
      
      // Verifica que menu fechou
      const nav = page.locator('nav');
      const navClasses = await nav.getAttribute('class');
      expect(navClasses).not.toContain('left-0');
    }
  });

  test('deve voltar para home ao clicar no logo', async ({ page, homePage, sobrePage }) => {
    await sobrePage.goto();
    await expect(page).toHaveURL(/.*sobre/);
    
    // Clica no logo
    await homePage.logo.click();
    await page.waitForLoadState('networkidle');
    
    // Verifica que voltou para home
    await expect(page).toHaveURL('/');
  });

  test('deve ter header responsivo', async ({ page, homePage }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
    
    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
    
    // Verifica que links estão visíveis em desktop
    const navLinks = homePage.navLinks;
    const linkCount = await navLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });
});
