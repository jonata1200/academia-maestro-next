# Hooks Customizados

## useModal

Hook para gerenciar estado de modais.

**Retorna:**
- `isOpen`: `boolean` - Estado do modal
- `open`: `() => void` - Abre o modal
- `close`: `() => void` - Fecha o modal
- `toggle`: `() => void` - Alterna o estado

**Exemplo:**

```tsx
import { useModal } from '@/design-system/hooks';

function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Abrir</Button>
      <Modal open={isOpen} onClose={close}>
        Conteúdo
      </Modal>
    </>
  );
}
```

## useToast

Hook para exibir notificações toast.

**Retorna:**
- `showToast`: `(toast: ToastItem) => void` - Mostra um toast

**Tipos:**
```typescript
type ToastVariant = 'success' | 'error' | 'warning' | 'info';

type ToastItem = {
  message: string;
  variant?: ToastVariant;
  duration?: number; // em ms
};
```

**Exemplo:**

```tsx
import { ToastProvider, useToast } from '@/design-system/hooks';

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      message: 'Operação realizada!',
      variant: 'success',
      duration: 3000
    });
  };

  return <Button onClick={handleSuccess}>Sucesso</Button>;
}
```

## useForm

Hook para gerenciar formulários com validação.

**Retorna:**
- `register`: Função para registrar campos
- `handleSubmit`: Função para submeter formulário
- `errors`: Objeto com erros de validação
- `reset`: Função para resetar formulário

**Exemplo:**

```tsx
import { useForm } from '@/design-system/hooks';

function MyForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: {
      email: { required: true, email: true },
      name: { required: true, minLength: 3 }
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} />
      {errors.email && <Text color="error">{errors.email}</Text>}
      <Button type="submit">Enviar</Button>
    </form>
  );
}
```

## useClickOutside

Hook para detectar cliques fora de um elemento.

**Exemplo:**

```tsx
import { useClickOutside } from '@/design-system/hooks';
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    console.log('Clicou fora!');
  });

  return <div ref={ref}>Conteúdo</div>;
}
```

## useKeyboard

Hook para detectar teclas pressionadas.

**Exemplo:**

```tsx
import { useKeyboard } from '@/design-system/hooks';

function MyComponent() {
  useKeyboard('Escape', (e) => {
    e.preventDefault();
    console.log('ESC pressionado');
  });

  return <div>Pressione ESC</div>;
}
```

## Navegação

- [← Anterior: Componentes Complexos](06-componentes-complexos.md)
- [Próximo: Acessibilidade →](08-acessibilidade.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
