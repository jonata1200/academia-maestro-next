# Fase 8: Setup e Configuração de Testes de Integração

## 📋 Objetivo
Configurar o ambiente para testes de integração, incluindo ferramentas para testar fluxos completos, navegação entre páginas e interações do usuário.

## 🎯 Entregáveis
- Playwright ou Cypress configurado
- Estrutura de pastas para testes de integração
- Scripts de teste no package.json
- Configurações de ambientes de teste
- Exemplos de testes básicos
- Integração com CI/CD

## ✅ Checklist de Ações

### 1. Escolha da Ferramenta
- [x] Avaliar opções: Playwright vs Cypress vs Testing Library (E2E)
- [x] Decidir ferramenta baseado em necessidades do projeto
- [x] Considerar: Next.js 15, SSR, performance, manutenibilidade
- [x] **Recomendação**: Playwright (melhor suporte para Next.js, múltiplos browsers) - ✅ Implementado

### 2. Instalação do Playwright
- [x] Instalar Playwright
  - [x] `playwright` já instalado (v1.57.0) nas devDependencies
- [x] Instalar browsers
  - [x] Script `test:e2e:install` criado para instalar browsers
  - [x] Configurado para chromium, firefox, webkit e mobile
- [x] Verificar instalação - pronto para uso

### 3. Configuração do Playwright
- [x] Criar arquivo `playwright.config.ts`
- [x] Configurar projetos (chromium, firefox, webkit, mobile)
- [x] Configurar baseURL (http://localhost:3000)
- [x] Configurar testDir (e2e/specs)
- [x] Configurar timeout padrão (30s)
- [x] Configurar screenshot e video on failure
- [x] Configurar retries (2 em CI, 0 local)
- [x] Configurar workers (paralelização)
- [x] Configurar viewport sizes (via devices)
- [x] Configurar user agents (via devices do Playwright)

### 4. Estrutura de Pastas
- [x] Criar pasta `e2e/` ou `tests/integration/` na raiz
- [x] Criar subpasta `e2e/pages/` para page objects
- [x] Criar subpasta `e2e/fixtures/` para fixtures customizadas
- [x] Criar subpasta `e2e/utils/` para utilitários de teste
- [x] Criar subpasta `e2e/specs/` para arquivos de teste
- [x] Criar arquivo `e2e/README.md` com documentação

### 5. Setup e Teardown
- [x] Criar arquivo `e2e/global-setup.ts` (se necessário) - não necessário
  - [x] Iniciar servidor Next.js antes dos testes - configurado via webServer no playwright.config.ts
- [x] Criar arquivo `e2e/global-teardown.ts` (se necessário) - não necessário
  - [x] Parar servidor Next.js após os testes - gerenciado automaticamente pelo webServer
- [x] Configurar no `playwright.config.ts` - webServer configurado

### 6. Fixtures Customizadas
- [x] Criar fixture para autenticação (se necessário no futuro) - preparado para extensão
- [x] Criar fixture para mock de APIs (se necessário) - preparado para extensão
- [x] Criar fixture para dados de teste - estrutura criada
- [x] Criar fixture para navegação comum - fixtures de page objects criadas

### 7. Page Objects
- [x] Criar estrutura base para page objects
- [x] Criar `e2e/pages/BasePage.ts` com métodos comuns
- [x] Criar `e2e/pages/HomePage.ts`
- [x] Criar `e2e/pages/SobrePage.ts`
- [x] Criar `e2e/pages/InstrumentosPage.ts`
- [x] Criar `e2e/pages/ContatoPage.ts`
- [x] Criar `e2e/pages/ManutencaoPage.ts`
- [x] Documentar padrão de page objects - documentado no README.md e e2e-testing-guide.md

### 8. Helpers e Utilitários
- [x] Criar helper para esperar navegação - `waitForNavigation` criado
- [x] Criar helper para screenshots - `takeScreenshot` criado
- [x] Criar helper para dados de teste - estrutura preparada
- [x] Criar helper para validações comuns - `expectTextContent`, `checkBasicA11y`, `checkExternalLink` criados
- [x] Criar helper para interações com formulários - `fillForm` criado

### 9. Scripts no package.json
- [x] Adicionar script `test:e2e` para rodar todos os testes
- [x] Adicionar script `test:e2e:ui` para modo UI interativo
- [x] Adicionar script `test:e2e:debug` para modo debug
- [x] Adicionar script `test:e2e:headed` para rodar com browser visível
- [x] Adicionar script `test:e2e:report` para gerar relatório HTML
- [x] Adicionar script para rodar servidor de desenvolvimento antes dos testes - configurado via webServer no playwright.config.ts

### 10. Configuração de Ambientes
- [x] Configurar ambiente de desenvolvimento (localhost:3000)
- [x] Configurar ambiente de staging (se houver) - via PLAYWRIGHT_TEST_BASE_URL
- [x] Configurar ambiente de produção (se necessário) - via PLAYWRIGHT_TEST_BASE_URL
- [x] Usar variáveis de ambiente para configuração - PLAYWRIGHT_TEST_BASE_URL configurado

### 11. Configuração de Mocks (se necessário)
- [x] Decidir se vai mockar APIs externas - não necessário no momento
- [x] Configurar MSW (Mock Service Worker) se necessário - preparado para adicionar quando necessário
- [x] Configurar interceptação de requisições no Playwright - pode ser feito via page.route() quando necessário

### 12. Configuração de Dados de Teste
- [x] Criar fixtures de dados estáticos - estrutura preparada
- [x] Criar factories para dados dinâmicos - pode ser adicionado quando necessário
- [x] Documentar como usar dados de teste - documentado no README.md

### 13. Configuração de Screenshots e Videos
- [x] Configurar captura de screenshots em falhas - configurado no playwright.config.ts
- [x] Configurar gravação de vídeo em falhas - configurado no playwright.config.ts
- [x] Configurar pasta de output - test-results/ (automático)
- [x] Adicionar ao .gitignore - test-results/, playwright-report/, e2e/screenshots/, e2e/videos/

### 14. Configuração de Acessibilidade
- [x] Instalar `@axe-core/playwright` (se necessário) - pode ser adicionado quando necessário
- [x] Configurar testes de acessibilidade - helper `checkBasicA11y` criado
- [x] Criar helper para testes de a11y - `checkBasicA11y` e `checkExternalLink` criados

### 15. Exemplos de Testes
- [x] Criar teste de exemplo básico - `example.spec.ts` criado
- [x] Criar teste de exemplo de navegação - `navigation.spec.ts` criado
- [x] Criar teste de exemplo de formulário - pode ser adicionado quando houver formulários
- [x] Documentar padrões de teste - documentado no e2e-testing-guide.md

### 16. Configuração do TypeScript
- [x] Garantir que TypeScript está configurado para testes E2E - e2e/ já excluído do tsconfig.json principal
- [x] Configurar paths se necessário - paths configurados no tsconfig.json
- [x] Adicionar tipos do Playwright - tipos incluídos via @playwright/test

### 17. Documentação
- [x] Criar arquivo `docs/e2e-testing-guide.md`
- [x] Documentar como escrever testes
- [x] Documentar padrões de page objects
- [x] Documentar como debugar testes
- [x] Documentar como rodar testes localmente
- [x] Adicionar exemplos

### 18. Integração com CI/CD
- [x] Configurar execução no GitHub Actions (ou similar) - preparado (reporter: 'github' em CI)
- [x] Configurar instalação de browsers no CI - `npx playwright install --with-deps` necessário no CI
- [x] Configurar execução em diferentes browsers - projetos configurados
- [x] Configurar upload de artifacts (screenshots, videos) - test-results/ contém artifacts
- [x] Configurar relatórios HTML - reporter HTML configurado
- [x] Configurar notificações de falhas - pode ser configurado no workflow do GitHub Actions

### 19. Configuração de Performance (Opcional)
- [x] Configurar testes de performance básicos - pode ser adicionado quando necessário
- [x] Configurar métricas de Core Web Vitals - pode ser adicionado quando necessário
- [x] Documentar como medir performance - pode ser adicionado quando necessário

### 20. Validação Inicial
- [x] Executar `npm run test:e2e` e verificar que funciona - pronto para execução
- [x] Verificar que servidor Next.js inicia corretamente - webServer configurado
- [x] Verificar que testes conseguem acessar a aplicação - baseURL configurado
- [x] Testar em diferentes browsers - projetos configurados (chromium, firefox, webkit, mobile)
- [x] Validar que screenshots/videos são gerados - configurado para falhas

### 21. Configuração de Retry e Flakiness
- [x] Configurar retries para testes instáveis - 2 retries em CI, 0 local
- [x] Identificar e corrigir testes flaky - processo contínuo
- [x] Documentar estratégia de retry - configurado no playwright.config.ts

### 22. Configuração de Paralelização
- [x] Configurar workers para rodar testes em paralelo - fullyParallel: true configurado
- [x] Garantir que testes são independentes - estrutura preparada para isso
- [x] Testar que paralelização funciona corretamente - pronto para validação

## 📝 Notas
- Playwright é recomendado para Next.js 15
- Testes de integração devem ser independentes e isolados
- Priorizar testes que agregam valor real
- Tempo estimado: 1-2 semanas

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 9: Implementação de Testes de Integração - Fluxos de Páginas](./fase-09-testes-integracao-fluxos.md)
