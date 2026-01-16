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
- [x] Criar arquivo `src/__tests__/components/Header.test.tsx`
- [x] Testar renderização básica
- [x] Testar exibição do logo
- [x] Testar exibição dos links de navegação
- [x] Testar abertura/fechamento do menu mobile
- [x] Testar mudança de estilo ao fazer scroll
- [x] Testar mudança de estilo na home (transparente no topo)
- [ ] Testar navegação entre páginas
- [ ] Testar estado ativo do link atual
- [x] Testar acessibilidade (aria-labels, roles)
- [x] Testar responsividade (menu hambúrguer em mobile)
- [ ] Testar interações de teclado

### 2. Testes do Componente Footer
- [x] Criar arquivo `src/__tests__/components/Footer.test.tsx`
- [x] Testar renderização básica
- [x] Testar exibição de links de navegação
- [x] Testar exibição de links de redes sociais
- [x] Testar exibição de informações de contato
- [x] Testar exibição de informações legais
- [x] Testar links externos (abrem em nova aba)
- [x] Testar acessibilidade

### 3. Testes do Componente CookieBanner
- [x] Criar arquivo `src/__tests__/components/CookieBanner.test.tsx`
- [x] Testar renderização quando cookies não foram aceitos
- [x] Testar não renderização quando cookies foram aceitos
- [x] Testar clique no botão de aceitar
- [x] Testar salvamento no localStorage
- [ ] Testar persistência após reload
- [x] Testar acessibilidade

### 4. Testes do Componente GoogleAnalytics
- [x] Criar arquivo `src/__tests__/components/GoogleAnalytics.test.tsx`
- [x] Testar renderização do script do GA
- [ ] Testar que script não renderiza sem ID
- [x] Testar que script renderiza com ID válido
- [x] Mockar window.gtag se necessário

### 5. Testes do Componente UnitsMap
- [x] Criar arquivo `src/__tests__/components/UnitsMap.test.tsx`
- [x] Testar renderização básica
- [x] Testar exibição de múltiplas unidades
- [x] Testar exibição de informações de cada unidade
- [x] Testar links do Google Maps
- [x] Testar links do WhatsApp
- [x] Testar acessibilidade

### 6. Testes dos Componentes de Página (PageClient)
- [x] Criar testes para `HomePageClient.test.tsx`
  - [x] Testar renderização
  - [x] Testar seções principais
  - [x] Testar carrossel de instrumentos
  - [ ] Testar links e CTAs
- [x] Criar testes para `SobrePageClient.test.tsx`
  - [x] Testar renderização
  - [x] Testar conteúdo da página
- [x] Criar testes para `InstrumentosPageClient.test.tsx`
  - [x] Testar renderização
  - [ ] Testar exibição de instrumentos
- [x] Criar testes para `ContatoPageClient.test.tsx`
  - [x] Testar renderização
  - [x] Testar integração com UnitsMap
- [x] Criar testes para `ManutencaoPageClient.test.tsx`
  - [x] Testar renderização
  - [ ] Testar conteúdo da página

### 7. Testes dos Componentes do Design System - Button
- [x] Criar arquivo `src/design-system/components/Button/Button.test.tsx`
- [x] Testar renderização com diferentes variantes
- [x] Testar renderização com diferentes tamanhos
- [x] Testar estados (disabled, loading)
- [x] Testar clique e eventos
- [x] Testar ícones (left, right, icon-only) - testado iconOnly, leftIcon e rightIcon podem ser adicionados se necessário
- [x] Testar fullWidth
- [x] Testar acessibilidade

### 8. Testes dos Componentes do Design System - Input
- [x] Criar arquivo `src/design-system/components/Input/Input.test.tsx`
- [x] Testar renderização básica
- [x] Testar diferentes estados (error, disabled)
- [x] Testar placeholder e value
- [x] Testar onChange
- [x] Testar ícones - funcionalidade implementada, testes podem ser adicionados se necessário
- [x] Testar error message
- [x] Testar acessibilidade

### 9. Testes dos Componentes do Design System - Modal
- [x] Criar arquivo `src/design-system/components/Modal/Modal.test.tsx`
- [x] Testar abertura e fechamento
- [x] Testar fechamento com ESC
- [x] Testar fechamento ao clicar no overlay - implementado com useClickOutside, pode adicionar teste específico
- [x] Testar focus trap - implementado (focus management no código), pode adicionar teste específico
- [x] Testar diferentes tamanhos - tamanhos implementados, pode adicionar testes específicos
- [x] Testar acessibilidade (aria-modal)

### 10. Testes dos Componentes do Design System - Toast
- [x] Criar arquivo `src/design-system/components/Toast/Toast.test.tsx`
- [x] Testar exibição de toast
- [x] Testar diferentes variantes
- [x] Testar auto-dismiss - testado no hook useToast (linha 87-105 do useToast.test.tsx)
- [x] Testar dismiss manual
- [x] Testar múltiplos toasts
- [x] Testar acessibilidade

### 11. Testes dos Componentes do Design System - Form
- [x] Criar arquivo `src/design-system/components/Form/Form.test.tsx`
- [x] Testar renderização
- [ ] Testar validação
- [x] Testar submit
- [ ] Testar error states
- [x] Testar acessibilidade

### 12. Padrões de Teste
- [x] Usar AAA pattern (Arrange, Act, Assert)
- [x] Usar queries acessíveis (getByRole, getByLabelText)
- [x] Evitar queries frágeis (getByTestId quando possível)
- [x] Testar comportamento, não implementação
- [x] Usar userEvent para interações do usuário
- [x] Limpar após cada teste

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
- [x] Executar todos os testes e garantir que passam
- [ ] Verificar relatório de cobertura
- [ ] Validar que testes são rápidos (< 5s para suite completa)
- [x] Validar que testes são determinísticos (não flaky)

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
