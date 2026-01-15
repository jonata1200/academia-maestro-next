# Design System — Academia Maestro

## Visão geral
Este Design System define **tokens**, **componentes** e **padrões** para manter consistência visual e acelerar evolução do produto.

## Princípios
- **Consistência**: evitar valores “hardcoded”; usar tokens e componentes do DS.
- **Acessibilidade**: focar em WCAG 2.1 AA (semântica, teclado, contraste, foco).
- **Composição**: componentes pequenos e reutilizáveis, compondo UI maior.
- **Manutenibilidade**: APIs simples, tipadas e com documentação no Storybook.

## Auditoria inicial (estado atual)

### Tokens já existentes no projeto
- **Cores (Tailwind)**: `primary #0000FF`, `secondary #FFFFFF`, `text-color #333`, `text-light #555`, `light-gray #f4f4f4`, `dark-blue #000033`
- **Fonte**: `Poppins` (definida no Tailwind e em `src/app/globals.css`)
- **Container**: `max-w-container` = `1100px`

### Breakpoints
O projeto usa os breakpoints padrão do Tailwind (a menos que sejam customizados futuramente).

### Animações/Transições
- `slideUp` (classe `.animate-slide-up`)
- `scroll` (keyframes do Tailwind para carrossel)
- Transições do menu hambúrguer (`.menu-toggle` / `.menu-bar`)

### Componentes existentes
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/CookieBanner.tsx`
- `src/components/GoogleAnalytics.tsx`
- `src/components/UnitsMap.tsx`

## Estrutura de pastas
- `src/design-system/tokens/`: tokens (cores, tipografia, espaçamento, etc.)
- `src/design-system/components/`: componentes do DS
- `src/design-system/utils/`: utilitários do DS
- `src/design-system/docs/`: material de documentação (referências internas)

## Contribuição (resumo)
- Crie/ajuste tokens antes de adicionar novos valores visuais.
- Todo componente novo deve ter documentação no Storybook.
- Preferir `className` + Tailwind/tokens e evitar CSS global.

## Versionamento (inicial)
- Mudanças **breaking** em componentes: registrar no changelog e orientar migração.
- Mudanças de tokens: considerar impacto visual em todo o site.

