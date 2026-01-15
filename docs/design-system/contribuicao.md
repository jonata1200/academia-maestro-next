# Guia de Contribuição — Design System

## Regras
- Evite valores “hardcoded” (cores, spacing, font-size). Use tokens.
- Componentes devem ser acessíveis (teclado, roles, aria quando necessário).
- Documente no Storybook (props, exemplos e variações).

## Padrão de pastas (DS)
- `src/design-system/components/<Componente>/`
- `src/design-system/tokens/`

## Checklist para novo componente
- [ ] Props tipadas (TypeScript)
- [ ] Estados (hover/active/disabled/loading quando aplicável)
- [ ] Acessibilidade (semântica + teclado)
- [ ] Story no Storybook
- [ ] Sem regressões visuais em páginas existentes

