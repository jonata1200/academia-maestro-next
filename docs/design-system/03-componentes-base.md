# Componentes Base

Todos os componentes estão localizados em `src/design-system/components/` e são exportados através de `src/design-system/components/index.ts`.

## Button

Botão com múltiplas variantes, tamanhos e suporte a ícones.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (padrão: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (padrão: `'md'`)
- `fullWidth`: `boolean` - Ocupa toda a largura disponível
- `loading`: `boolean` - Mostra estado de carregamento
- `leftIcon`: `React.ReactNode` - Ícone à esquerda
- `rightIcon`: `React.ReactNode` - Ícone à direita
- `iconOnly`: `boolean` - Botão apenas com ícone
- `href`: `string` - Renderiza como Link do Next.js
- `asLink`: `boolean` - Força renderização como link

**Exemplo:**

```tsx
import { Button } from '@/design-system/components';

// Botão primário
<Button variant="primary" size="md">
  Clique aqui
</Button>

// Botão com ícone
<Button leftIcon={<Icon />} variant="outline">
  Ação
</Button>

// Botão como link
<Button href="/sobre" asLink>
  Ver mais
</Button>

// Botão com loading
<Button loading>Carregando...</Button>

// Botão full width
<Button fullWidth>Enviar</Button>
```

## Heading

Componente para títulos (h1-h6) com tamanhos e pesos configuráveis.

**Props:**
- `as`: `1 | 2 | 3 | 4 | 5 | 6` - Nível do heading (padrão: `2`)
- `size`: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'` (padrão: `'lg'`)
- `weight`: `'light' | 'regular' | 'medium' | 'semibold' | 'bold'` (padrão: `'semibold'`)
- `colorClassName`: `string` - Classe de cor (padrão: `'text-dark-blue'`)

**Exemplo:**

```tsx
import { Heading } from '@/design-system/components';

<Heading as={1} size="4xl" weight="bold">
  Título Principal
</Heading>

<Heading as={2} size="2xl">
  Subtítulo
</Heading>
```

## Text

Componente para textos com tamanhos, pesos e cores configuráveis.

**Props:**
- `as`: `'p' | 'span' | 'div' | 'label'` - Elemento HTML (padrão: `'p'`)
- `size`: `'sm' | 'base' | 'lg'` (padrão: `'base'`)
- `weight`: `'light' | 'regular' | 'medium' | 'semibold' | 'bold'` (padrão: `'regular'`)
- `colorClassName`: `string` - Classe de cor (padrão: `'text-text-light'`)
- `truncate`: `boolean` - Trunca texto com ellipsis
- `lineClamp`: `number` - Limita número de linhas

**Exemplo:**

```tsx
import { Text } from '@/design-system/components';

<Text size="lg" weight="medium">
  Texto destacado
</Text>

<Text truncate>
  Texto muito longo que será truncado...
</Text>

<Text lineClamp={3}>
  Texto que será limitado a 3 linhas...
</Text>
```

## Badge

Badge para indicar status, categorias ou contadores.

**Props:**
- `variant`: `'default' | 'success' | 'warning' | 'error' | 'info'`
- `size`: `'sm' | 'md' | 'lg'`

**Exemplo:**

```tsx
import { Badge } from '@/design-system/components';

<Badge variant="success">Ativo</Badge>
<Badge variant="error">Erro</Badge>
<Badge variant="info">Novo</Badge>
```

## Alert

Componente de alerta para mensagens importantes.

**Props:**
- `variant`: `'info' | 'success' | 'warning' | 'error'`
- `title`: `string` - Título do alerta
- `children`: `React.ReactNode` - Conteúdo

**Exemplo:**

```tsx
import { Alert } from '@/design-system/components';

<Alert variant="success" title="Sucesso!">
  Operação realizada com sucesso.
</Alert>

<Alert variant="error" title="Erro">
  Ocorreu um erro ao processar sua solicitação.
</Alert>
```

## Spinner

Indicador de carregamento.

**Props:**
- `size`: `'sm' | 'md' | 'lg'`
- `color`: `string` - Classe de cor

**Exemplo:**

```tsx
import { Spinner } from '@/design-system/components';

<Spinner size="md" />
<Spinner size="lg" color="text-primary" />
```

## Navegação

- [← Anterior: Tokens](02-tokens.md)
- [Próximo: Componentes de Formulário →](04-componentes-formulario.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
