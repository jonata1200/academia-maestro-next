# Fase 3: Melhorias e Personalização do Storybook

## Objetivo
Melhorar o Storybook do projeto, tornando-o específico para a Academia Maestro, com documentação adequada, organização clara e melhorias visuais.

## Checklist de Ações

### 1. Revisar e melhorar documentação MDX
- [x] Revisar `src/stories/GettingStarted.mdx`
  - [x] Atualizar conteúdo para refletir o projeto Academia Maestro
  - [x] Adicionar informações sobre o design system específico
  - [x] Incluir links relevantes do projeto
- [x] Revisar `src/stories/Tokens.mdx`
  - [x] Verificar se todos os tokens estão documentados
  - [x] Melhorar visualização dos tokens (cores, tipografia, espaçamento)
  - [x] Adicionar exemplos de uso quando necessário
- [x] Criar nova documentação MDX (se necessário)
  - [ ] Criar `GuiaDesignSystem.mdx` ou similar - não necessário, GettingStarted.mdx já cobre
  - [x] Documentar padrões de uso dos componentes - feito em GettingStarted.mdx

### 2. Organizar stories do design system
- [x] Verificar organização atual das stories DS-*
- [x] Agrupar stories por categoria (formulários, navegação, layout, etc.) - 17 de 28 stories reorganizadas
- [x] Padronizar títulos e estrutura das stories - títulos hierárquicos implementados
- [x] Verificar se todas as stories têm:
  - [x] `title` apropriado - reorganizadas com categorias
  - [ ] `tags: ['autodocs']` quando relevante - verificar gradualmente
  - [x] `argTypes` bem definidos - já estão definidos nas stories verificadas
  - [x] Documentação adequada - stories têm exemplos práticos

### 3. Melhorar configuração do Storybook
- [x] Revisar `.storybook/main.ts`
  - [x] Verificar se todos os addons estão sendo usados - todos necessários
  - [x] Ordenar addons de forma lógica - ordem já está lógica
- [x] Revisar `.storybook/preview.ts`
  - [x] Adicionar configurações de tema (se aplicável) - backgrounds configurados
  - [x] Configurar backgrounds padrão - light, dark, gray adicionados
  - [x] Configurar viewport padrão - mobile, tablet, desktop adicionados
  - [x] Adicionar decorators globais se necessário - não necessário no momento
  - [x] Configurar a11y padrão - já configurado com regras

### 4. Adicionar melhorias visuais
- [ ] Configurar branding do Storybook (logo, cores) - opcional, pode ser feito depois
- [ ] Personalizar tema do Storybook - opcional, backgrounds já configurados
- [x] Adicionar welcome page personalizada (opcional) - GettingStarted.mdx serve como welcome
- [x] Melhorar apresentação dos componentes - melhorado com backgrounds e viewports

### 5. Organizar estrutura de navegação
- [x] Verificar hierarquia de títulos (sidebar navigation)
- [x] Garantir que a organização faça sentido:
  - [x] Design System como seção principal
  - [x] Subseções: Introdução (Getting Started, Tokens), Componentes por categoria
  - [x] Componentes agrupados por categoria (Formulários, Navegação, Layout, Feedback)
- [x] Usar `title` hierárquico (ex: `Design System/Componentes/Formulários/Input`) - implementado

### 6. Melhorar documentação dos componentes
- [ ] Adicionar descrições JSDoc nos componentes principais - pode ser feito gradualmente
- [x] Documentar props em `argTypes` - já estão bem documentados nas stories
- [x] Adicionar exemplos de uso nos stories - stories têm exemplos práticos
- [ ] Incluir exemplos de acessibilidade - pode ser melhorado gradualmente
- [x] Adicionar notas sobre quando usar cada componente - mencionado em GettingStarted.mdx

### 7. Verificar stories duplicadas ou desnecessárias
- [x] Identificar stories que não agregam valor - todas as stories são necessárias
- [x] Consolidar stories similares - não há duplicações
- [x] Remover stories de componentes que não existem mais - todas existem

### 8. Adicionar addons úteis (opcional)
- [x] Verificar se `@storybook/addon-a11y` está configurado corretamente - configurado e funcionando
- [x] Considerar addons adicionais se necessário:
  - [x] `@storybook/addon-controls` (já vem com docs) - incluído no framework
  - [x] `@storybook/addon-actions` (já vem com framework) - incluído no framework
  - [x] Outros addons específicos do projeto - addons atuais são suficientes

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
