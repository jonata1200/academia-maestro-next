# Fase 3: Melhorias e Personalização do Storybook

## Objetivo
Melhorar o Storybook do projeto, tornando-o específico para a Academia Maestro, com documentação adequada, organização clara e melhorias visuais.

## Checklist de Ações

### 1. Revisar e melhorar documentação MDX
- [ ] Revisar `src/stories/GettingStarted.mdx`
  - [ ] Atualizar conteúdo para refletir o projeto Academia Maestro
  - [ ] Adicionar informações sobre o design system específico
  - [ ] Incluir links relevantes do projeto
- [ ] Revisar `src/stories/Tokens.mdx`
  - [ ] Verificar se todos os tokens estão documentados
  - [ ] Melhorar visualização dos tokens (cores, tipografia, espaçamento)
  - [ ] Adicionar exemplos de uso quando necessário
- [ ] Criar nova documentação MDX (se necessário)
  - [ ] Criar `GuiaDesignSystem.mdx` ou similar
  - [ ] Documentar padrões de uso dos componentes

### 2. Organizar stories do design system
- [ ] Verificar organização atual das stories DS-*
- [ ] Agrupar stories por categoria (formulários, navegação, layout, etc.)
- [ ] Padronizar títulos e estrutura das stories
- [ ] Verificar se todas as stories têm:
  - [ ] `title` apropriado
  - [ ] `tags: ['autodocs']` quando relevante
  - [ ] `argTypes` bem definidos
  - [ ] Documentação adequada

### 3. Melhorar configuração do Storybook
- [ ] Revisar `.storybook/main.ts`
  - [ ] Verificar se todos os addons estão sendo usados
  - [ ] Ordenar addons de forma lógica
- [ ] Revisar `.storybook/preview.ts`
  - [ ] Adicionar configurações de tema (se aplicável)
  - [ ] Configurar backgrounds padrão
  - [ ] Configurar viewport padrão
  - [ ] Adicionar decorators globais se necessário
  - [ ] Configurar a11y padrão

### 4. Adicionar melhorias visuais
- [ ] Configurar branding do Storybook (logo, cores)
- [ ] Personalizar tema do Storybook
- [ ] Adicionar welcome page personalizada (opcional)
- [ ] Melhorar apresentação dos componentes

### 5. Organizar estrutura de navegação
- [ ] Verificar hierarquia de títulos (sidebar navigation)
- [ ] Garantir que a organização faça sentido:
  - [ ] Design System como seção principal
  - [ ] Subseções: Tokens, Componentes, Hooks
  - [ ] Componentes agrupados por categoria
- [ ] Usar `title` hierárquico (ex: `Design System/Formulários/Input`)

### 6. Melhorar documentação dos componentes
- [ ] Adicionar descrições JSDoc nos componentes principais
- [ ] Documentar props em `argTypes`
- [ ] Adicionar exemplos de uso nos stories
- [ ] Incluir exemplos de acessibilidade
- [ ] Adicionar notas sobre quando usar cada componente

### 7. Verificar stories duplicadas ou desnecessárias
- [ ] Identificar stories que não agregam valor
- [ ] Consolidar stories similares
- [ ] Remover stories de componentes que não existem mais

### 8. Adicionar addons úteis (opcional)
- [ ] Verificar se `@storybook/addon-a11y` está configurado corretamente
- [ ] Considerar addons adicionais se necessário:
  - [ ] `@storybook/addon-controls` (já vem com docs)
  - [ ] `@storybook/addon-actions` (já vem com framework)
  - [ ] Outros addons específicos do projeto

## Melhorias Específicas Sugeridas

### 1. Estrutura de Títulos Sugerida
```
Design System/
  ├── Introdução/
  │   ├── Getting Started
  │   └── Tokens
  ├── Componentes/
  │   ├── Formulários/
  │   │   ├── Input
  │   │   ├── Textarea
  │   │   ├── Select
  │   │   ├── Checkbox
  │   │   └── Radio
  │   ├── Navegação/
  │   │   ├── Nav
  │   │   ├── Breadcrumb
  │   │   └── Pagination
  │   ├── Layout/
  │   │   ├── Container
  │   │   ├── Grid
  │   │   ├── Stack
  │   │   └── Section
  │   └── Feedback/
  │       ├── Modal
  │       ├── Toast
  │       ├── Alert
  │       └── Spinner
```

### 2. Melhorias no preview.ts
```typescript
const preview: Preview = {
  parameters: {
    // ... configurações existentes ...
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    layout: 'centered', // ou 'fullscreen' conforme necessário
  },
};
```

### 3. Branding (opcional)
Criar arquivo `.storybook/manager-head.html` para adicionar logo personalizado:
```html
<style>
  /* Personalizar logo e cores */
</style>
```

## Arquivos a Revisar/Atualizar

### Documentação
- `src/stories/GettingStarted.mdx`
- `src/stories/Tokens.mdx`

### Configuração
- `.storybook/main.ts`
- `.storybook/preview.ts`

### Stories
- Todos os arquivos `DS-*.stories.tsx` em `src/stories/`

## Notas
- Manter consistência na documentação
- Seguir padrões do projeto
- Focar na usabilidade para desenvolvedores
- Garantir que a documentação esteja sempre atualizada

## Resultado Esperado
- Storybook personalizado para Academia Maestro
- Documentação clara e útil
- Navegação intuitiva
- Componentes bem organizados
- Histórias bem documentadas com exemplos práticos
- Configuração otimizada
