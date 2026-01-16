# Fase 4: Implementação do Design System - Componentes Complexos

## 📋 Objetivo
Criar componentes mais complexos e compostos do Design System, que utilizam os componentes base criados na fase anterior.

## 🎯 Entregáveis
- Componentes de navegação (Nav, Menu, Breadcrumb)
- Componentes de formulário (Form, FormField, Checkbox, Radio)
- Componentes de feedback avançados (Modal, Toast, Tooltip)
- Componentes de conteúdo (Card, Accordion, Tabs)
- Componentes de layout avançados (Section, Hero)
- Documentação completa no Storybook

## ✅ Checklist de Ações

### 1. Componente Card
- [x] Criar arquivo `src/design-system/components/Card/Card.tsx`
- [x] Implementar variantes (default, outlined, elevated)
- [x] Suportar header, body e footer
- [x] Suportar imagem no topo
- [x] Suportar ações (botões, links)
- [x] Criar arquivo `Card.stories.tsx` no Storybook
- [x] Documentar uso e exemplos

### 2. Componente Modal
- [x] Criar arquivo `src/design-system/components/Modal/Modal.tsx`
- [x] Implementar overlay com backdrop
- [x] Implementar animações de entrada/saída
- [x] Suportar tamanhos (sm, md, lg, fullscreen)
- [x] Suportar header, body e footer
- [x] Implementar fechamento (X button, ESC key, click outside) - implementado com useClickOutside
- [x] Adicionar acessibilidade (aria-modal, focus trap) - focus management implementado
- [x] Criar hook `useModal` para controle de estado
- [x] Criar arquivo `Modal.stories.tsx` no Storybook
- [x] Documentar uso e padrões de acessibilidade

### 3. Componente Toast/Notification
- [x] Criar arquivo `src/design-system/components/Toast/Toast.tsx`
- [x] Implementar variantes (info, success, warning, error)
- [x] Implementar posicionamento (top, bottom, left, right)
- [x] Suportar auto-dismiss com timer
- [x] Suportar ações (botões, links) - botão de fechar implementado, ações customizadas podem ser adicionadas via children
- [x] Criar contexto `ToastProvider` e hook `useToast`
- [x] Criar arquivo `Toast.stories.tsx` no Storybook
- [x] Documentar uso

### 4. Componente Tooltip
- [x] Criar arquivo `src/design-system/components/Tooltip/Tooltip.tsx`
- [x] Implementar posicionamento (top, bottom, left, right)
- [x] Implementar animações
- [x] Suportar delay de exibição
- [x] Adicionar acessibilidade (aria-describedby)
- [x] Criar arquivo `Tooltip.stories.tsx` no Storybook
- [x] Documentar uso

### 5. Componente Accordion
- [x] Criar arquivo `src/design-system/components/Accordion/Accordion.tsx`
- [x] Implementar item único ou múltiplos itens abertos
- [x] Implementar animações de abertura/fechamento
- [x] Suportar ícones customizáveis
- [x] Adicionar acessibilidade (aria-expanded, aria-controls)
- [x] Criar arquivo `Accordion.stories.tsx` no Storybook
- [x] Documentar uso

### 6. Componente Tabs
- [x] Criar arquivo `src/design-system/components/Tabs/Tabs.tsx`
- [x] Implementar navegação por teclado (arrow keys)
- [x] Suportar orientação (horizontal, vertical)
- [x] Suportar variantes de estilo
- [x] Adicionar acessibilidade (aria-selected, role="tablist")
- [x] Criar arquivo `Tabs.stories.tsx` no Storybook
- [x] Documentar uso

### 7. Componente Nav/Menu
- [x] Criar arquivo `src/design-system/components/Nav/Nav.tsx`
- [x] Implementar menu horizontal e vertical
- [x] Suportar submenu/dropdown
- [x] Implementar estado ativo
- [x] Suportar ícones
- [x] Adicionar acessibilidade (aria-current, keyboard navigation)
- [x] Criar arquivo `Nav.stories.tsx` no Storybook
- [x] Documentar uso

### 8. Componente Breadcrumb
- [x] Criar arquivo `src/design-system/components/Breadcrumb/Breadcrumb.tsx`
- [x] Implementar separadores customizáveis
- [x] Suportar ícones
- [x] Adicionar acessibilidade (aria-label, nav role)
- [x] Criar arquivo `Breadcrumb.stories.tsx` no Storybook
- [x] Documentar uso

### 9. Componente Form e FormField
- [x] Criar arquivo `src/design-system/components/Form/Form.tsx`
- [x] Criar arquivo `src/design-system/components/Form/FormField.tsx`
- [x] Implementar validação integrada
- [x] Suportar error states
- [x] Suportar helper text
- [x] Criar hook `useForm` para gerenciamento de estado
- [x] Criar arquivo `Form.stories.tsx` no Storybook
- [x] Documentar uso e padrões de validação

### 10. Componente Checkbox
- [x] Criar arquivo `src/design-system/components/Checkbox/Checkbox.tsx`
- [x] Implementar estados (unchecked, checked, indeterminate)
- [x] Suportar label e helper text
- [ ] Suportar grupo de checkboxes
- [x] Adicionar acessibilidade (aria-checked)
- [x] Criar arquivo `Checkbox.stories.tsx` no Storybook
- [x] Documentar uso

### 11. Componente Radio
- [x] Criar arquivo `src/design-system/components/Radio/Radio.tsx`
- [x] Implementar grupo de radio buttons
- [x] Suportar label e helper text
- [x] Adicionar acessibilidade (aria-checked, role="radiogroup")
- [x] Criar arquivo `Radio.stories.tsx` no Storybook
- [x] Documentar uso

### 12. Componente Section
- [x] Criar arquivo `src/design-system/components/Section/Section.tsx`
- [x] Implementar variantes de background
- [x] Suportar padding customizável
- [x] Suportar título e descrição
- [x] Criar arquivo `Section.stories.tsx` no Storybook
- [x] Documentar uso

### 13. Componente Hero
- [x] Criar arquivo `src/design-system/components/Hero/Hero.tsx`
- [x] Implementar variantes de layout
- [x] Suportar imagem de fundo
- [x] Suportar CTA (call-to-action)
- [x] Criar arquivo `Hero.stories.tsx` no Storybook
- [x] Documentar uso

### 14. Componente Dropdown/Select Menu
- [x] Criar arquivo `src/design-system/components/Dropdown/Dropdown.tsx`
- [x] Implementar posicionamento inteligente
- [x] Suportar grupos de itens
- [x] Suportar separadores
- [x] Suportar ícones e badges
- [x] Adicionar acessibilidade (aria-expanded, keyboard navigation)
- [x] Criar arquivo `Dropdown.stories.tsx` no Storybook
- [x] Documentar uso

### 15. Componente Pagination
- [x] Criar arquivo `src/design-system/components/Pagination/Pagination.tsx`
- [x] Implementar navegação (first, prev, next, last)
- [x] Suportar números de página
- [x] Suportar ellipsis para muitas páginas
- [x] Adicionar acessibilidade (aria-label, aria-current)
- [x] Criar arquivo `Pagination.stories.tsx` no Storybook
- [x] Documentar uso

### 16. Hooks Utilitários
- [x] Criar `src/design-system/hooks/useModal.ts`
- [x] Criar `src/design-system/hooks/useToast.ts`
- [x] Criar `src/design-system/hooks/useForm.ts`
- [x] Criar `src/design-system/hooks/useClickOutside.ts`
- [x] Criar `src/design-system/hooks/useKeyboard.ts`
- [x] Documentar cada hook

#### Notas rápidas (implementação)
- Hooks exportados por `src/design-system/hooks/index.ts`.
- `useToast` expõe `ToastProvider` + `useToast` e a UI fica em `ToastViewport`.

### 17. Atualização de Componentes Existentes
- [ ] Refatorar `Header.tsx` para usar componentes do Design System
- [ ] Refatorar `Footer.tsx` para usar componentes do Design System
- [ ] Refatorar `CookieBanner.tsx` para usar componentes do Design System
- [ ] Validar que não há regressões visuais
- [ ] Testar responsividade

### 18. Documentação no Storybook
- [x] Garantir stories completas para todos os componentes
- [x] Adicionar exemplos de composição (componentes trabalhando juntos)
- [x] Documentar padrões de uso comum
- [ ] Adicionar guidelines de acessibilidade
- [x] Criar página de "Getting Started" no Storybook

### 19. Validação e Testes
- [ ] Testar todos os componentes em diferentes navegadores
- [ ] Validar acessibilidade com ferramentas automatizadas
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar performance (bundle size, render time)
- [ ] Testar interações de teclado em todos os componentes
- [x] Validar que TypeScript está funcionando corretamente

### 20. Migração Gradual
- [ ] Criar plano de migração dos componentes existentes
- [ ] Documentar breaking changes (se houver)
- [ ] Criar guia de migração para desenvolvedores
- [ ] Estabelecer timeline de depreciação de componentes antigos

## 📝 Notas
- Componentes complexos devem ser compostos de componentes base
- Priorizar acessibilidade e experiência do usuário
- Manter API consistente entre componentes similares
- Tempo estimado: 3-4 semanas

## 🔗 Próxima Fase
Após completar esta fase, seguir para: [Fase 5: Setup e Configuração de Testes Unitários](./fase-05-setup-testes-unitarios.md)
