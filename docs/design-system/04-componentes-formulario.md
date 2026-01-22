# Componentes de Formulário

## Input

Campo de entrada de texto.

**Props:**
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'`
- `error`: `boolean` - Estado de erro
- `disabled`: `boolean`
- `placeholder`: `string`
- `leftIcon`: `React.ReactNode`
- `rightIcon`: `React.ReactNode`

**Exemplo:**

```tsx
import { Input } from '@/design-system/components';

<Input 
  type="email" 
  placeholder="seu@email.com"
  leftIcon={<MailIcon />}
/>

<Input 
  type="text" 
  error 
  placeholder="Campo obrigatório"
/>
```

## Textarea

Campo de texto multilinha.

**Props:**
- `rows`: `number` - Número de linhas
- `error`: `boolean`
- `disabled`: `boolean`
- `resize`: `'none' | 'vertical' | 'horizontal' | 'both'`

**Exemplo:**

```tsx
import { Textarea } from '@/design-system/components';

<Textarea 
  rows={5}
  placeholder="Digite sua mensagem..."
/>
```

## Select

Dropdown de seleção.

**Props:**
- `options`: `Array<{ value: string; label: string }>`
- `placeholder`: `string`
- `error`: `boolean`
- `disabled`: `boolean`

**Exemplo:**

```tsx
import { Select } from '@/design-system/components';

<Select
  options={[
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' }
  ]}
  placeholder="Selecione uma opção"
/>
```

## Checkbox

Caixa de seleção.

**Props:**
- `checked`: `boolean`
- `indeterminate`: `boolean` - Estado intermediário
- `disabled`: `boolean`
- `label`: `string`

**Exemplo:**

```tsx
import { Checkbox } from '@/design-system/components';

<Checkbox label="Aceito os termos" />
<Checkbox checked disabled label="Item desabilitado" />
```

## Radio

Botão de opção.

**Props:**
- `name`: `string` - Nome do grupo
- `value`: `string`
- `checked`: `boolean`
- `disabled`: `boolean`
- `label`: `string`

**Exemplo:**

```tsx
import { Radio } from '@/design-system/components';

<Radio name="opcao" value="1" label="Opção 1" />
<Radio name="opcao" value="2" label="Opção 2" />
```

## Label

Rótulo para campos de formulário.

**Props:**
- `required`: `boolean` - Mostra asterisco
- `htmlFor`: `string` - ID do campo associado

**Exemplo:**

```tsx
import { Label } from '@/design-system/components';

<Label htmlFor="email" required>
  E-mail
</Label>
<Input id="email" />
```

## Form

Wrapper para formulários com validação.

**Props:**
- `onSubmit`: `(data: FormData) => void`
- `children`: `React.ReactNode`

**Exemplo:**

```tsx
import { Form, FormField } from '@/design-system/components';

<Form onSubmit={(data) => console.log(data)}>
  <FormField>
    <Label htmlFor="nome" required>Nome</Label>
    <Input id="nome" name="nome" />
  </FormField>
</Form>
```

## Navegação

- [← Anterior: Componentes Base](03-componentes-base.md)
- [Próximo: Componentes de Layout →](05-componentes-layout.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
