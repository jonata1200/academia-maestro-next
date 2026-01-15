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
- [ ] Avaliar opções: Playwright vs Cypress vs Testing Library (E2E)
- [ ] Decidir ferramenta baseado em necessidades do projeto
- [ ] Considerar: Next.js 15, SSR, performance, manutenibilidade
- [ ] **Recomendação**: Playwright (melhor suporte para Next.js, múltiplos browsers)

### 2. Instalação do Playwright
- [ ] Instalar Playwright
  - [ ] `npm install --save-dev @playwright/test`
- [ ] Instalar browsers
  - [ ] `npx playwright install`
  - [ ] Instalar chromium, firefox, webkit (ou apenas chromium para começar)
- [ ] Verificar instalação

### 3. Configuração do Playwright
- [ ] Criar arquivo `playwright.config.ts`
- [ ] Configurar projetos (chromium, firefox, webkit)
- [ ] Configurar baseURL (http://localhost:3000)
- [ ] Configurar testDir (pasta de testes)
- [ ] Configurar timeout padrão
- [ ] Configurar screenshot e video on failure
- [ ] Configurar retries
- [ ] Configurar workers (paralelização)
- [ ] Configurar viewport sizes
- [ ] Configurar user agents (se necessário)

### 4. Estrutura de Pastas
- [ ] Criar pasta `e2e/` ou `tests/integration/` na raiz
- [ ] Criar subpasta `e2e/pages/` para page objects
- [ ] Criar subpasta `e2e/fixtures/` para fixtures customizadas
- [ ] Criar subpasta `e2e/utils/` para utilitários de teste
- [ ] Criar subpasta `e2e/specs/` para arquivos de teste
- [ ] Criar arquivo `e2e/README.md` com documentação

### 5. Setup e Teardown
- [ ] Criar arquivo `e2e/global-setup.ts` (se necessário)
  - [ ] Iniciar servidor Next.js antes dos testes
- [ ] Criar arquivo `e2e/global-teardown.ts` (se necessário)
  - [ ] Parar servidor Next.js após os testes
- [ ] Configurar no `playwright.config.ts`

### 6. Fixtures Customizadas
- [ ] Criar fixture para autenticação (se necessário no futuro)
- [ ] Criar fixture para mock de APIs (se necessário)
- [ ] Criar fixture para dados de teste
- [ ] Criar fixture para navegação comum

### 7. Page Objects
- [ ] Criar estrutura base para page objects
- [ ] Criar `e2e/pages/BasePage.ts` com métodos comuns
- [ ] Criar `e2e/pages/HomePage.ts`
- [ ] Criar `e2e/pages/SobrePage.ts`
- [ ] Criar `e2e/pages/InstrumentosPage.ts`
- [ ] Criar `e2e/pages/ContatoPage.ts`
- [ ] Criar `e2e/pages/ManutencaoPage.ts`
- [ ] Documentar padrão de page objects

### 8. Helpers e Utilitários
- [ ] Criar helper para esperar navegação
- [ ] Criar helper para screenshots
- [ ] Criar helper para dados de teste
- [ ] Criar helper para validações comuns
- [ ] Criar helper para interações com formulários

### 9. Scripts no package.json
- [ ] Adicionar script `test:e2e` para rodar todos os testes
- [ ] Adicionar script `test:e2e:ui` para modo UI interativo
- [ ] Adicionar script `test:e2e:debug` para modo debug
- [ ] Adicionar script `test:e2e:headed` para rodar com browser visível
- [ ] Adicionar script `test:e2e:report` para gerar relatório HTML
- [ ] Adicionar script para rodar servidor de desenvolvimento antes dos testes

### 10. Configuração de Ambientes
- [ ] Configurar ambiente de desenvolvimento (localhost:3000)
- [ ] Configurar ambiente de staging (se houver)
- [ ] Configurar ambiente de produção (se necessário)
- [ ] Usar variáveis de ambiente para configuração

### 11. Configuração de Mocks (se necessário)
- [ ] Decidir se vai mockar APIs externas
- [ ] Configurar MSW (Mock Service Worker) se necessário
- [ ] Configurar interceptação de requisições no Playwright

### 12. Configuração de Dados de Teste
- [ ] Criar fixtures de dados estáticos
- [ ] Criar factories para dados dinâmicos
- [ ] Documentar como usar dados de teste

### 13. Configuração de Screenshots e Videos
- [ ] Configurar captura de screenshots em falhas
- [ ] Configurar gravação de vídeo em falhas
- [ ] Configurar pasta de output
- [ ] Adicionar ao .gitignore

### 14. Configuração de Acessibilidade
- [ ] Instalar `@axe-core/playwright` (se necessário)
- [ ] Configurar testes de acessibilidade
- [ ] Criar helper para testes de a11y

### 15. Exemplos de Testes
- [ ] Criar teste de exemplo básico
- [ ] Criar teste de exemplo de navegação
- [ ] Criar teste de exemplo de formulário
- [ ] Documentar padrões de teste

### 16. Configuração do TypeScript
- [ ] Garantir que TypeScript está configurado para testes E2E
- [ ] Configurar paths se necessário
- [ ] Adicionar tipos do Playwright

### 17. Documentação
- [ ] Criar arquivo `docs/e2e-testing-guide.md`
- [ ] Documentar como escrever testes
- [ ] Documentar padrões de page objects
- [ ] Documentar como debugar testes
- [ ] Documentar como rodar testes localmente
- [ ] Adicionar exemplos

### 18. Integração com CI/CD
- [ ] Configurar execução no GitHub Actions (ou similar)
- [ ] Configurar instalação de browsers no CI
- [ ] Configurar execução em diferentes browsers
- [ ] Configurar upload de artifacts (screenshots, videos)
- [ ] Configurar relatórios HTML
- [ ] Configurar notificações de falhas

### 19. Configuração de Performance (Opcional)
- [ ] Configurar testes de performance básicos
- [ ] Configurar métricas de Core Web Vitals
- [ ] Documentar como medir performance

### 20. Validação Inicial
- [ ] Executar `npm run test:e2e` e verificar que funciona
- [ ] Verificar que servidor Next.js inicia corretamente
- [ ] Verificar que testes conseguem acessar a aplicação
- [ ] Testar em diferentes browsers
- [ ] Validar que screenshots/videos são gerados

### 21. Configuração de Retry e Flakiness
- [ ] Configurar retries para testes instáveis
- [ ] Identificar e corrigir testes flaky
- [ ] Documentar estratégia de retry

### 22. Configuração de Paralelização
- [ ] Configurar workers para rodar testes em paralelo
- [ ] Garantir que testes são independentes
- [ ] Testar que paralelização funciona corretamente

## 📝 Notas
- Playwright é recomendado para Next.js 15
- Testes de integração devem ser independentes e isolados
- Priorizar testes que agregam valor real
- Tempo estimado: 1-2 semanas

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 9: Implementação de Testes de Integração - Fluxos de Páginas](./fase-09-testes-integracao-fluxos.md)
