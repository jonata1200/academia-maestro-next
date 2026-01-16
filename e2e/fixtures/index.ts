import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SobrePage } from '../pages/SobrePage';
import { InstrumentosPage } from '../pages/InstrumentosPage';
import { ContatoPage } from '../pages/ContatoPage';
import { ManutencaoPage } from '../pages/ManutencaoPage';

/**
 * Fixtures customizadas para testes E2E
 * Permite injetar page objects diretamente nos testes
 */
type TestFixtures = {
  homePage: HomePage;
  sobrePage: SobrePage;
  instrumentosPage: InstrumentosPage;
  contatoPage: ContatoPage;
  manutencaoPage: ManutencaoPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  sobrePage: async ({ page }, use) => {
    const sobrePage = new SobrePage(page);
    await use(sobrePage);
  },
  instrumentosPage: async ({ page }, use) => {
    const instrumentosPage = new InstrumentosPage(page);
    await use(instrumentosPage);
  },
  contatoPage: async ({ page }, use) => {
    const contatoPage = new ContatoPage(page);
    await use(contatoPage);
  },
  manutencaoPage: async ({ page }, use) => {
    const manutencaoPage = new ManutencaoPage(page);
    await use(manutencaoPage);
  },
});

export { expect } from '@playwright/test';
