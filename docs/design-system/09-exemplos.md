# Exemplos Práticos

Este documento contém exemplos práticos e casos de uso comuns dos componentes do Design System.

## 📋 Índice

1. [Formulários Completos](#formulários-completos)
2. [Layouts Responsivos](#layouts-responsivos)
3. [Modais e Interações](#modais-e-interações)
4. [Feedback ao Usuário](#feedback-ao-usuário)
5. [Navegação](#navegação)
6. [Cards e Listagens](#cards-e-listagens)

---

## Formulários Completos

### Formulário de Contato Simples

```tsx
'use client';

import { useState } from 'react';
import {
  Form,
  FormField,
  Input,
  Textarea,
  Label,
  Button,
  Alert,
  Text,
  Stack,
} from '@/design-system/components';
import { useForm } from '@/design-system/hooks';

export function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: {
      name: { required: true, minLength: 3 },
      email: { required: true, email: true },
      message: { required: true, minLength: 10 },
    },
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {showSuccess && (
          <Alert variant="success" title="Sucesso!">
            Mensagem enviada com sucesso. Entraremos em contato em breve.
          </Alert>
        )}

        <FormField>
          <Label htmlFor="name" required>Nome Completo</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Seu nome"
            error={!!errors.name}
          />
          {errors.name && (
            <Text size="sm" colorClassName="text-error mt-1">
              {errors.name}
            </Text>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="email" required>E-mail</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="seu@email.com"
            error={!!errors.email}
          />
          {errors.email && (
            <Text size="sm" colorClassName="text-error mt-1">
              {errors.email}
            </Text>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="message" required>Mensagem</Label>
          <Textarea
            id="message"
            {...register('message')}
            rows={5}
            placeholder="Digite sua mensagem..."
            error={!!errors.message}
          />
          {errors.message && (
            <Text size="sm" colorClassName="text-error mt-1">
              {errors.message}
            </Text>
          )}
        </FormField>

        <Stack spacing={4} align="end">
          <Button type="submit" variant="primary" size="lg">
            Enviar Mensagem
          </Button>
        </Stack>
      </Form>
    </div>
  );
}
```

Consulte o arquivo completo [DESIGN-SYSTEM-EXAMPLES.md](../DESIGN-SYSTEM-EXAMPLES.md) para mais exemplos detalhados de layouts responsivos, modais, feedback ao usuário, navegação e cards.

## Navegação

- [← Anterior: Acessibilidade](08-acessibilidade.md)
- [Próximo: Contribuindo →](10-contribuindo.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
