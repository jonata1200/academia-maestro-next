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
- [ ] Criar arquivo `src/design-system/components/Card/Card.tsx`
- [ ] Implementar variantes (default, outlined, elevated)
- [ ] Suportar header, body e footer
- [ ] Suportar imagem no topo
- [ ] Suportar ações (botões, links)
- [ ] Criar arquivo `Card.stories.tsx` no Storybook
- [ ] Documentar uso e exemplos

### 2. Componente Modal
- [ ] Criar arquivo `src/design-system/components/Modal/Modal.tsx`
- [ ] Implementar overlay com backdrop
- [ ] Implementar animações de entrada/saída
- [ ] Suportar tamanhos (sm, md, lg, fullscreen)
- [ ] Suportar header, body e footer
- [ ] Implementar fechamento (X button, ESC key, click outside)
- [ ] Adicionar acessibilidade (aria-modal, focus trap)
- [ ] Criar hook `useModal` para controle de estado
- [ ] Criar arquivo `Modal.stories.tsx` no Storybook
- [ ] Documentar uso e padrões de acessibilidade

### 3. Componente Toast/Notification
- [ ] Criar arquivo `src/design-system/components/Toast/Toast.tsx`
- [ ] Implementar variantes (info, success, warning, error)
- [ ] Implementar posicionamento (top, bottom, left, right)
- [ ] Suportar auto-dismiss com timer
- [ ] Suportar ações (botões, links)
- [ ] Criar contexto `ToastProvider` e hook `useToast`
- [ ] Criar arquivo `Toast.stories.tsx` no Storybook
- [ ] Documentar uso

### 4. Componente Tooltip
- [ ] Criar arquivo `src/design-system/components/Tooltip/Tooltip.tsx`
- [ ] Implementar posicionamento (top, bottom, left, right)
- [ ] Implementar animações
- [ ] Suportar delay de exibição
- [ ] Adicionar acessibilidade (aria-describedby)
- [ ] Criar arquivo `Tooltip.stories.tsx` no Storybook
- [ ] Documentar uso

### 5. Componente Accordion
- [ ] Criar arquivo `src/design-system/components/Accordion/Accordion.tsx`
- [ ] Implementar item único ou múltiplos itens abertos
- [ ] Implementar animações de abertura/fechamento
- [ ] Suportar ícones customizáveis
- [ ] Adicionar acessibilidade (aria-expanded, aria-controls)
- [ ] Criar arquivo `Accordion.stories.tsx` no Storybook
- [ ] Documentar uso

### 6. Componente Tabs
- [ ] Criar arquivo `src/design-system/components/Tabs/Tabs.tsx`
- [ ] Implementar navegação por teclado (arrow keys)
- [ ] Suportar orientação (horizontal, vertical)
- [ ] Suportar variantes de estilo
- [ ] Adicionar acessibilidade (aria-selected, role="tablist")
- [ ] Criar arquivo `Tabs.stories.tsx` no Storybook
- [ ] Documentar uso

### 7. Componente Nav/Menu
- [ ] Criar arquivo `src/design-system/components/Nav/Nav.tsx`
- [ ] Implementar menu horizontal e vertical
- [ ] Suportar submenu/dropdown
- [ ] Implementar estado ativo
- [ ] Suportar ícones
- [ ] Adicionar acessibilidade (aria-current, keyboard navigation)
- [ ] Criar arquivo `Nav.stories.tsx` no Storybook
- [ ] Documentar uso

### 8. Componente Breadcrumb
- [ ] Criar arquivo `src/design-system/components/Breadcrumb/Breadcrumb.tsx`
- [ ] Implementar separadores customizáveis
- [ ] Suportar ícones
- [ ] Adicionar acessibilidade (aria-label, nav role)
- [ ] Criar arquivo `Breadcrumb.stories.tsx` no Storybook
- [ ] Documentar uso

### 9. Componente Form e FormField
- [ ] Criar arquivo `src/design-system/components/Form/Form.tsx`
- [ ] Criar arquivo `src/design-system/components/Form/FormField.tsx`
- [ ] Implementar validação integrada
- [ ] Suportar error states
- [ ] Suportar helper text
- [ ] Criar hook `useForm` para gerenciamento de estado
- [ ] Criar arquivo `Form.stories.tsx` no Storybook
- [ ] Documentar uso e padrões de validação

### 10. Componente Checkbox
- [ ] Criar arquivo `src/design-system/components/Checkbox/Checkbox.tsx`
- [ ] Implementar estados (unchecked, checked, indeterminate)
- [ ] Suportar label e helper text
- [ ] Suportar grupo de checkboxes
- [ ] Adicionar acessibilidade (aria-checked)
- [ ] Criar arquivo `Checkbox.stories.tsx` no Storybook
- [ ] Documentar uso

### 11. Componente Radio
- [ ] Criar arquivo `src/design-system/components/Radio/Radio.tsx`
- [ ] Implementar grupo de radio buttons
- [ ] Suportar label e helper text
- [ ] Adicionar acessibilidade (aria-checked, role="radiogroup")
- [ ] Criar arquivo `Radio.stories.tsx` no Storybook
- [ ] Documentar uso

### 12. Componente Section
- [ ] Criar arquivo `src/design-system/components/Section/Section.tsx`
- [ ] Implementar variantes de background
- [ ] Suportar padding customizável
- [ ] Suportar título e descrição
- [ ] Criar arquivo `Section.stories.tsx` no Storybook
- [ ] Documentar uso

### 13. Componente Hero
- [ ] Criar arquivo `src/design-system/components/Hero/Hero.tsx`
- [ ] Implementar variantes de layout
- [ ] Suportar imagem de fundo
- [ ] Suportar CTA (call-to-action)
- [ ] Criar arquivo `Hero.stories.tsx` no Storybook
- [ ] Documentar uso

### 14. Componente Dropdown/Select Menu
- [ ] Criar arquivo `src/design-system/components/Dropdown/Dropdown.tsx`
- [ ] Implementar posicionamento inteligente
- [ ] Suportar grupos de itens
- [ ] Suportar separadores
- [ ] Suportar ícones e badges
- [ ] Adicionar acessibilidade (aria-expanded, keyboard navigation)
- [ ] Criar arquivo `Dropdown.stories.tsx` no Storybook
- [ ] Documentar uso

### 15. Componente Pagination
- [ ] Criar arquivo `src/design-system/components/Pagination/Pagination.tsx`
- [ ] Implementar navegação (first, prev, next, last)
- [ ] Suportar números de página
- [ ] Suportar ellipsis para muitas páginas
- [ ] Adicionar acessibilidade (aria-label, aria-current)
- [ ] Criar arquivo `Pagination.stories.tsx` no Storybook
- [ ] Documentar uso

### 16. Hooks Utilitários
- [ ] Criar `src/design-system/hooks/useModal.ts`
- [ ] Criar `src/design-system/hooks/useToast.ts`
- [ ] Criar `src/design-system/hooks/useForm.ts`
- [ ] Criar `src/design-system/hooks/useClickOutside.ts`
- [ ] Criar `src/design-system/hooks/useKeyboard.ts`
- [ ] Documentar cada hook

### 17. Atualização de Componentes Existentes
- [ ] Refatorar `Header.tsx` para usar componentes do Design System
- [ ] Refatorar `Footer.tsx` para usar componentes do Design System
- [ ] Refatorar `CookieBanner.tsx` para usar componentes do Design System
- [ ] Validar que não há regressões visuais
- [ ] Testar responsividade

### 18. Documentação no Storybook
- [ ] Garantir stories completas para todos os componentes
- [ ] Adicionar exemplos de composição (componentes trabalhando juntos)
- [ ] Documentar padrões de uso comum
- [ ] Adicionar guidelines de acessibilidade
- [ ] Criar página de "Getting Started" no Storybook

### 19. Validação e Testes
- [ ] Testar todos os componentes em diferentes navegadores
- [ ] Validar acessibilidade com ferramentas automatizadas
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar performance (bundle size, render time)
- [ ] Testar interações de teclado em todos os componentes
- [ ] Validar que TypeScript está funcionando corretamente

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
