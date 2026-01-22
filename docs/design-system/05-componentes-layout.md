# Componentes de Layout

## Container

Container centralizado com largura máxima.

**Props:**
- `maxWidth`: `'sm' | 'md' | 'lg' | 'xl' | 'full'` (padrão: `'lg'`)
- `padding`: `boolean` - Adiciona padding horizontal (padrão: `true`)

**Exemplo:**

```tsx
import { Container } from '@/design-system/components';

<Container maxWidth="lg">
  Conteúdo centralizado
</Container>
```

## Stack

Layout em pilha (flexbox vertical).

**Props:**
- `spacing`: `number` - Espaçamento entre itens
- `align`: `'start' | 'center' | 'end' | 'stretch'`
- `justify`: `'start' | 'center' | 'end' | 'between' | 'around'`

**Exemplo:**

```tsx
import { Stack } from '@/design-system/components';

<Stack spacing={4} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

## Grid

Layout em grade.

**Props:**
- `cols`: `number | { sm?: number; md?: number; lg?: number }`
- `gap`: `number` - Espaçamento entre itens

**Exemplo:**

```tsx
import { Grid } from '@/design-system/components';

<Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## Section

Seção de conteúdo com espaçamento padrão.

**Props:**
- `spacing`: `'sm' | 'md' | 'lg' | 'xl'`
- `background`: `'default' | 'light' | 'dark'`

**Exemplo:**

```tsx
import { Section } from '@/design-system/components';

<Section spacing="lg" background="light">
  Conteúdo da seção
</Section>
```

## Hero

Seção hero para páginas principais.

**Props:**
- `title`: `string`
- `subtitle`: `string`
- `backgroundImage`: `string`
- `cta`: `React.ReactNode`

**Exemplo:**

```tsx
import { Hero, Button } from '@/design-system/components';

<Hero
  title="Bem-vindo à Academia Maestro"
  subtitle="Aprenda música desde 1981"
  backgroundImage="/hero-bg.jpg"
  cta={<Button>Começar Agora</Button>}
/>
```

## Nav

Navegação principal.

**Props:**
- `items`: `Array<{ label: string; href: string }>`
- `logo`: `React.ReactNode`
- `mobileBreakpoint`: `string`

**Exemplo:**

```tsx
import { Nav } from '@/design-system/components';

<Nav
  logo={<img src="/logo.png" alt="Logo" />}
  items={[
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/sobre' }
  ]}
/>
```

## Navegação

- [← Anterior: Componentes de Formulário](04-componentes-formulario.md)
- [Próximo: Componentes Complexos →](06-componentes-complexos.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
