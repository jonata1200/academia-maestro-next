# Fase 6: Implementação de Testes Unitários - Componentes

## 📋 Objetivo
Escrever testes unitários completos para todos os componentes do projeto, garantindo que cada componente funciona corretamente em isolamento.

## 🎯 Entregáveis
- Testes unitários para todos os componentes existentes
- Testes para componentes do Design System
- Cobertura de código mínima de 80% para componentes
- Documentação de padrões de teste

## ✅ Checklist de Ações

### 1. Testes do Componente Header
- [ ] Criar arquivo `src/__tests__/components/Header.test.tsx`
- [ ] Testar renderização básica
- [ ] Testar exibição do logo
- [ ] Testar exibição dos links de navegação
- [ ] Testar abertura/fechamento do menu mobile
- [ ] Testar mudança de estilo ao fazer scroll
- [ ] Testar mudança de estilo na home (transparente no topo)
- [ ] Testar navegação entre páginas
- [ ] Testar estado ativo do link atual
- [ ] Testar acessibilidade (aria-labels, roles)
- [ ] Testar responsividade (menu hambúrguer em mobile)
- [ ] Testar interações de teclado

### 2. Testes do Componente Footer
- [ ] Criar arquivo `src/__tests__/components/Footer.test.tsx`
- [ ] Testar renderização básica
- [ ] Testar exibição de links de navegação
- [ ] Testar exibição de links de redes sociais
- [ ] Testar exibição de informações de contato
- [ ] Testar exibição de informações legais
- [ ] Testar links externos (abrem em nova aba)
- [ ] Testar acessibilidade

### 3. Testes do Componente CookieBanner
- [ ] Criar arquivo `src/__tests__/components/CookieBanner.test.tsx`
- [ ] Testar renderização quando cookies não foram aceitos
- [ ] Testar não renderização quando cookies foram aceitos
- [ ] Testar clique no botão de aceitar
- [ ] Testar salvamento no localStorage
- [ ] Testar persistência após reload
- [ ] Testar acessibilidade

### 4. Testes do Componente GoogleAnalytics
- [ ] Criar arquivo `src/__tests__/components/GoogleAnalytics.test.tsx`
- [ ] Testar renderização do script do GA
- [ ] Testar que script não renderiza sem ID
- [ ] Testar que script renderiza com ID válido
- [ ] Mockar window.gtag se necessário

### 5. Testes do Componente UnitsMap
- [ ] Criar arquivo `src/__tests__/components/UnitsMap.test.tsx`
- [ ] Testar renderização básica
- [ ] Testar exibição de múltiplas unidades
- [ ] Testar exibição de informações de cada unidade
- [ ] Testar links do Google Maps
- [ ] Testar links do WhatsApp
- [ ] Testar acessibilidade

### 6. Testes dos Componentes de Página (PageClient)
- [ ] Criar testes para `HomePageClient.test.tsx`
  - [ ] Testar renderização
  - [ ] Testar seções principais
  - [ ] Testar carrossel de instrumentos
  - [ ] Testar links e CTAs
- [ ] Criar testes para `SobrePageClient.test.tsx`
  - [ ] Testar renderização
  - [ ] Testar conteúdo da página
- [ ] Criar testes para `InstrumentosPageClient.test.tsx`
  - [ ] Testar renderização
  - [ ] Testar exibição de instrumentos
- [ ] Criar testes para `ContatoPageClient.test.tsx`
  - [ ] Testar renderização
  - [ ] Testar integração com UnitsMap
- [ ] Criar testes para `ManutencaoPageClient.test.tsx`
  - [ ] Testar renderização
  - [ ] Testar conteúdo da página

### 7. Testes dos Componentes do Design System - Button
- [ ] Criar arquivo `src/design-system/components/Button/Button.test.tsx`
- [ ] Testar renderização com diferentes variantes
- [ ] Testar renderização com diferentes tamanhos
- [ ] Testar estados (disabled, loading)
- [ ] Testar clique e eventos
- [ ] Testar ícones (left, right, icon-only)
- [ ] Testar fullWidth
- [ ] Testar acessibilidade

### 8. Testes dos Componentes do Design System - Input
- [ ] Criar arquivo `src/design-system/components/Input/Input.test.tsx`
- [ ] Testar renderização básica
- [ ] Testar diferentes estados (error, disabled)
- [ ] Testar placeholder e value
- [ ] Testar onChange
- [ ] Testar ícones
- [ ] Testar error message
- [ ] Testar acessibilidade

### 9. Testes dos Componentes do Design System - Modal
- [ ] Criar arquivo `src/design-system/components/Modal/Modal.test.tsx`
- [ ] Testar abertura e fechamento
- [ ] Testar fechamento com ESC
- [ ] Testar fechamento ao clicar no overlay
- [ ] Testar focus trap
- [ ] Testar diferentes tamanhos
- [ ] Testar acessibilidade (aria-modal)

### 10. Testes dos Componentes do Design System - Toast
- [ ] Criar arquivo `src/design-system/components/Toast/Toast.test.tsx`
- [ ] Testar exibição de toast
- [ ] Testar diferentes variantes
- [ ] Testar auto-dismiss
- [ ] Testar dismiss manual
- [ ] Testar múltiplos toasts
- [ ] Testar acessibilidade

### 11. Testes dos Componentes do Design System - Form
- [ ] Criar arquivo `src/design-system/components/Form/Form.test.tsx`
- [ ] Testar renderização
- [ ] Testar validação
- [ ] Testar submit
- [ ] Testar error states
- [ ] Testar acessibilidade

### 12. Padrões de Teste
- [ ] Usar AAA pattern (Arrange, Act, Assert)
- [ ] Usar queries acessíveis (getByRole, getByLabelText)
- [ ] Evitar queries frágeis (getByTestId quando possível)
- [ ] Testar comportamento, não implementação
- [ ] Usar userEvent para interações do usuário
- [ ] Limpar após cada teste

### 13. Helpers de Teste para Componentes
- [ ] Criar helper `renderComponent` se necessário
- [ ] Criar helper para testar acessibilidade
- [ ] Criar helper para testar responsividade
- [ ] Criar factory functions para props de componentes

### 14. Testes de Acessibilidade
- [ ] Para cada componente, testar:
  - [ ] Roles corretos
  - [ ] Labels acessíveis
  - [ ] Navegação por teclado
  - [ ] ARIA attributes
  - [ ] Focus management
- [ ] Usar `@testing-library/jest-dom` para assertions
- [ ] Considerar usar `jest-axe` para validação automática

### 15. Testes de Responsividade
- [ ] Mockar window.matchMedia
- [ ] Testar comportamento em diferentes breakpoints
- [ ] Testar menu mobile vs desktop
- [ ] Testar layout responsivo

### 16. Testes de Integração entre Componentes
- [ ] Testar composição de componentes
- [ ] Testar comunicação entre componentes (props, callbacks)
- [ ] Testar contexto compartilhado (se houver)

### 17. Cobertura de Código
- [ ] Alcançar pelo menos 80% de cobertura para componentes
- [ ] Identificar branches não cobertos
- [ ] Adicionar testes para edge cases
- [ ] Adicionar testes para error states

### 18. Documentação
- [ ] Documentar padrões de teste seguidos
- [ ] Documentar helpers criados
- [ ] Adicionar exemplos de testes complexos
- [ ] Documentar como testar componentes específicos

### 19. Validação
- [ ] Executar todos os testes e garantir que passam
- [ ] Verificar relatório de cobertura
- [ ] Validar que testes são rápidos (< 5s para suite completa)
- [ ] Validar que testes são determinísticos (não flaky)

### 20. Manutenção
- [ ] Estabelecer processo de atualização de testes quando componentes mudam
- [ ] Documentar quando quebrar testes é aceitável
- [ ] Criar checklist para novos componentes (incluir testes)

## 📝 Notas
- Priorizar testes que garantem comportamento correto
- Testar casos de uso reais, não apenas casos felizes
- Manter testes simples e legíveis
- Tempo estimado: 3-4 semanas (dependendo do número de componentes)

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 7: Implementação de Testes Unitários - Utilitários e Hooks](./fase-07-testes-unitarios-utils-hooks.md)
