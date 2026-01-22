# Componentes Complexos

## Modal

Modal/Dialog para conteúdo sobreposto.

**Props:**
- `open`: `boolean` - Controla visibilidade
- `onClose`: `() => void` - Callback ao fechar
- `title`: `string` - Título do modal
- `size`: `'sm' | 'md' | 'lg' | 'fullscreen'` (padrão: `'md'`)
- `footer`: `React.ReactNode` - Rodapé customizado
- `children`: `React.ReactNode` - Conteúdo

**Exemplo:**

```tsx
import { Modal, Button } from '@/design-system/components';
import { useModal } from '@/design-system/hooks';

function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Abrir Modal</Button>
      <Modal 
        open={isOpen} 
        onClose={close}
        title="Título do Modal"
        size="md"
        footer={
          <Button onClick={close}>Fechar</Button>
        }
      >
        Conteúdo do modal
      </Modal>
    </>
  );
}
```

## Toast

Notificações temporárias. Veja [Hooks](07-hooks.md#usetoast) para uso completo.

## Tooltip

Tooltip informativo.

**Props:**
- `content`: `string` - Conteúdo do tooltip
- `position`: `'top' | 'bottom' | 'left' | 'right'`
- `children`: `React.ReactNode` - Elemento que aciona o tooltip

**Exemplo:**

```tsx
import { Tooltip } from '@/design-system/components';

<Tooltip content="Informação adicional" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

## Accordion

Acordeão expansível.

**Props:**
- `items`: `Array<{ title: string; content: React.ReactNode }>`
- `allowMultiple`: `boolean` - Permite múltiplos itens abertos
- `defaultOpen`: `number[]` - Índices dos itens abertos por padrão

**Exemplo:**

```tsx
import { Accordion } from '@/design-system/components';

<Accordion
  items={[
    { title: 'Item 1', content: 'Conteúdo 1' },
    { title: 'Item 2', content: 'Conteúdo 2' }
  ]}
  allowMultiple
/>
```

## Tabs

Abas para organização de conteúdo.

**Props:**
- `tabs`: `Array<{ id: string; label: string; content: React.ReactNode }>`
- `defaultTab`: `string` - ID da aba padrão

**Exemplo:**

```tsx
import { Tabs } from '@/design-system/components';

<Tabs
  tabs={[
    { id: '1', label: 'Aba 1', content: <div>Conteúdo 1</div> },
    { id: '2', label: 'Aba 2', content: <div>Conteúdo 2</div> }
  ]}
  defaultTab="1"
/>
```

## Card

Card para agrupar conteúdo relacionado.

**Props:**
- `variant`: `'default' | 'outlined' | 'elevated'`
- `header`: `React.ReactNode`
- `footer`: `React.ReactNode`
- `imageSrc`: `string`
- `imageAlt`: `string`
- `actions`: `React.ReactNode`

**Exemplo:**

```tsx
import { Card, Button } from '@/design-system/components';

<Card
  variant="elevated"
  header={<Heading as={3}>Título do Card</Heading>}
  imageSrc="/image.jpg"
  imageAlt="Descrição"
  actions={<Button>Ação</Button>}
>
  Conteúdo do card
</Card>
```

## Dropdown

Menu dropdown.

**Props:**
- `trigger`: `React.ReactNode` - Elemento que aciona o dropdown
- `items`: `DropdownItem[]` - Itens do menu
- `position`: `'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'`

**Exemplo:**

```tsx
import { Dropdown } from '@/design-system/components';

<Dropdown
  trigger={<Button>Menu</Button>}
  items={[
    { type: 'item', label: 'Item 1', onClick: () => {} },
    { type: 'divider' },
    { type: 'item', label: 'Item 2', onClick: () => {} }
  ]}
/>
```

## Breadcrumb

Navegação breadcrumb.

**Props:**
- `items`: `Array<{ label: string; href?: string }>`

**Exemplo:**

```tsx
import { Breadcrumb } from '@/design-system/components';

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Atual' }
  ]}
/>
```

## Pagination

Paginação.

**Props:**
- `currentPage`: `number`
- `totalPages`: `number`
- `onPageChange`: `(page: number) => void`

**Exemplo:**

```tsx
import { Pagination } from '@/design-system/components';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
```

## Navegação

- [← Anterior: Componentes de Layout](05-componentes-layout.md)
- [Próximo: Hooks →](07-hooks.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
