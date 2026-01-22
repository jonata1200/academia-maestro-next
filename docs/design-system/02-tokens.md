# Tokens de Design

Os tokens são valores fundamentais que definem a identidade visual do sistema. Eles devem ser usados em vez de valores hardcoded.

## Cores

O sistema de cores está organizado em categorias: **brand**, **neutral**, **semantic** e **state**.

### Cores da Marca

```typescript
import { colors } from '@/design-system/tokens';

// Cores primárias
colors.brand.primary[500]  // #0000FF - Azul principal
colors.brand.primary[600]  // #0000E6 - Hover
colors.brand.primary[700]  // #0000CC - Active

// Cores secundárias
colors.brand.secondary[500]  // #FFFFFF - Branco
```

### Cores Neutras

```typescript
colors.neutral[50]   // #f4f4f4 - Background claro
colors.neutral[700]  // #555555 - Texto secundário
colors.neutral[800]  // #333333 - Texto principal
colors.neutral[950]  // #000033 - Texto escuro
```

### Cores Semânticas

```typescript
colors.semantic.success  // #16a34a - Verde (sucesso)
colors.semantic.warning  // #f59e0b - Amarelo (aviso)
colors.semantic.error    // #dc2626 - Vermelho (erro)
colors.semantic.info     // #2563eb - Azul (informação)
```

### Cores de Estado

```typescript
colors.state.focusRing  // #2563eb - Anel de foco
colors.state.disabled   // #9ca3af - Estado desabilitado
```

### Uso no Tailwind

As cores também estão disponíveis como classes Tailwind:

```tsx
<div className="bg-primary text-white">        {/* Azul principal */}
<div className="bg-primary-600">              {/* Hover */}
<div className="text-text-color">              {/* #333 */}
<div className="text-text-light">             {/* #555 */}
<div className="bg-light-gray">                {/* #f4f4f4 */}
<div className="text-dark-blue">              {/* #000033 */}
```

## Tipografia

### Família de Fonte

```typescript
import { typography } from '@/design-system/tokens';

typography.fontFamily.sans  // ['Poppins', 'sans-serif']
```

### Tamanhos de Fonte

```typescript
typography.fontSize.xs     // 0.75rem (12px) - line-height: 1rem
typography.fontSize.sm     // 0.875rem (14px) - line-height: 1.25rem
typography.fontSize.base   // 1rem (16px) - line-height: 1.5rem
typography.fontSize.lg     // 1.125rem (18px) - line-height: 1.75rem
typography.fontSize.xl     // 1.25rem (20px) - line-height: 1.75rem
typography.fontSize['2xl'] // 1.5rem (24px) - line-height: 2rem
typography.fontSize['3xl'] // 1.875rem (30px) - line-height: 2.25rem
typography.fontSize['4xl'] // 2.25rem (36px) - line-height: 2.5rem
typography.fontSize['5xl'] // 3rem (48px) - line-height: 1
```

### Pesos de Fonte

```typescript
typography.fontWeight.light    // 300
typography.fontWeight.regular  // 400
typography.fontWeight.medium   // 500
typography.fontWeight.semibold // 600
typography.fontWeight.bold     // 700
```

### Espaçamento entre Letras

```typescript
typography.letterSpacing.tight  // -0.02em
typography.letterSpacing.normal // 0em
typography.letterSpacing.wide   // 0.02em
```

## Espaçamento

O sistema de espaçamento segue uma escala de 4px (0.25rem).

```typescript
import { spacing } from '@/design-system/tokens';

spacing[0]   // 0px
spacing[1]   // 0.25rem (4px)
spacing[2]   // 0.5rem (8px)
spacing[3]   // 0.75rem (12px)
spacing[4]   // 1rem (16px)
spacing[5]   // 1.25rem (20px)
spacing[6]   // 1.5rem (24px)
spacing[8]   // 2rem (32px)
spacing[10]  // 2.5rem (40px)
spacing[12]  // 3rem (48px)
spacing[16]  // 4rem (64px)
```

### Uso no Tailwind

```tsx
<div className="p-4">     {/* padding: 1rem */}
<div className="m-6">     {/* margin: 1.5rem */}
<div className="gap-8">   {/* gap: 2rem */}
```

## Animações

### Duração

```typescript
import { animations } from '@/design-system/tokens';

animations.duration.fast   // 150ms
animations.duration.normal // 300ms
animations.duration.slow   // 500ms
```

### Easing

```typescript
animations.easing.in     // cubic-bezier(0.4, 0, 1, 1)
animations.easing.out    // cubic-bezier(0, 0, 0.2, 1)
animations.easing.inOut  // cubic-bezier(0.4, 0, 0.2, 1)
```

### Keyframes

```typescript
// Animação de scroll (carrossel)
animations.keyframes.scroll

// Animação slide up
animations.keyframes.slideUp
```

### Uso

```tsx
<div className="transition-all duration-300 ease-in-out">
```

## Sombras

```typescript
import { shadows } from '@/design-system/tokens';

shadows.sm  // 0 1px 2px rgba(0,0,0,0.06) - Sombra pequena
shadows.md  // 0 4px 20px rgba(0,0,0,0.08) - Sombra média
shadows.lg  // 0 10px 30px rgba(0,0,0,0.12) - Sombra grande
```

## Bordas

### Raio de Borda

```typescript
import { borders } from '@/design-system/tokens';

borders.radius.sm    // 0.25rem (4px)
borders.radius.md    // 0.375rem (6px)
borders.radius.lg    // 0.5rem (8px)
borders.radius.full   // 9999px (totalmente arredondado)
```

### Largura de Borda

```typescript
borders.width.hairline  // 1px
borders.width.thin      // 2px
```

### Estilo de Borda

```typescript
borders.style.solid   // solid
borders.style.dashed  // dashed
borders.style.dotted  // dotted
```

## Breakpoints

O projeto usa os breakpoints padrão do Tailwind CSS:

```typescript
sm: '640px'   // Tablets pequenos
md: '768px'   // Tablets
lg: '1024px'  // Desktops pequenos
xl: '1280px'  // Desktops
2xl: '1536px' // Desktops grandes
```

### Uso

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## Navegação

- [← Anterior: Visão Geral](01-visao-geral.md)
- [Próximo: Componentes Base →](03-componentes-base.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
