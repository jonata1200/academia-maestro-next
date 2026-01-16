import { test, expect } from '../fixtures';
import { ContatoPage, HomePage } from '../pages';

/**
 * Testes de links externos
 */
test.describe('Links Externos', () => {
  test('deve ter links do Google Maps corretos', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    const mapsIframes = contatoPage.googleMapsIframes;
    const count = await mapsIframes.count();
    
    for (let i = 0; i < Math.min(count, 2); i++) {
      const iframe = mapsIframes.nth(i);
      const src = await iframe.getAttribute('src');
      expect(src).toContain('google.com/maps');
    }
  });

  test('deve ter links do WhatsApp com formato correto', async ({ contatoPage, page }) => {
    await contatoPage.goto();
    
    const whatsappLinks = contatoPage.whatsappLinks;
    const count = await whatsappLinks.count();
    
    for (let i = 0; i < Math.min(count, 2); i++) {
      const link = whatsappLinks.nth(i);
      const href = await link.getAttribute('href');
      
      expect(href).toContain('whatsapp.com');
      expect(href).toContain('phone=');
      
      // Verifica que abre em nova aba
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');
      
      // Verifica rel="noopener noreferrer"
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });

  test('deve ter links de redes sociais corretos', async ({ homePage, page }) => {
    await homePage.goto();
    
    // Procura por links de redes sociais no footer
    const socialLinks = page.locator('footer a[href*="facebook"], footer a[href*="instagram"], footer a[href*="youtube"], footer a[href*="twitter"]');
    const count = await socialLinks.count();
    
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 3); i++) {
        const link = socialLinks.nth(i);
        const href = await link.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href!.length).toBeGreaterThan(0);
        
        // Verifica que abre em nova aba se tiver target
        const target = await link.getAttribute('target');
        if (target) {
          expect(target).toBe('_blank');
        }
      }
    }
  });
});
