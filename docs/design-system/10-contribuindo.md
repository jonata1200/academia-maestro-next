# Contribuindo com o Design System

## Adicionando Novos Componentes

1. Crie a pasta do componente em `src/design-system/components/`
2. Implemente o componente com TypeScript
3. Adicione testes em `test/unit/components/`
4. Exporte no `index.ts`
5. Documente neste diretório

## Modificando Tokens

1. Atualize o arquivo de token correspondente
2. Verifique impacto visual em todo o projeto
3. Atualize a documentação
4. Considere versionamento se for breaking change

## Checklist de Componente

- [ ] Componente totalmente tipado
- [ ] Suporte a `className` para customização
- [ ] Acessibilidade (WCAG 2.1 AA)
- [ ] Testes unitários
- [ ] Documentação com exemplos
- [ ] Responsivo (mobile-first)
- [ ] Estados: hover, focus, active, disabled

## Boas Práticas

### 1. **Sempre use componentes do Design System**

```tsx
// ✅ Bom
import { Button } from '@/design-system/components';
<Button variant="primary">Clique</Button>

// ❌ Evitar
<button className="bg-blue-500 text-white px-4 py-2">Clique</button>
```

### 2. **Use tokens para valores visuais**

```tsx
// ✅ Bom
<div style={{ padding: spacing[4] }}>
<div className="p-4">

// ❌ Evitar
<div style={{ padding: '16px' }}>
```

### 3. **Mantenha acessibilidade**

```tsx
// ✅ Bom
<Button aria-label="Fechar modal">
  <CloseIcon />
</Button>

// ❌ Evitar
<div onClick={handleClose}>
  <CloseIcon />
</div>
```

### 4. **TypeScript em todos os componentes**

Todos os componentes são totalmente tipados. Aproveite o autocomplete e type-checking:

```tsx
// TypeScript detecta erros em tempo de desenvolvimento
<Button variant="invalid"> // ❌ Erro de tipo
<Button variant="primary"> // ✅ Correto
```

### 5. **Teste seus componentes**

Componentes do Design System já possuem testes. Ao criar novos componentes, adicione testes:

```tsx
// test/unit/components/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@/design-system/components';

test('renders correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## Recursos Adicionais

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React A11y](https://reactjs.org/docs/accessibility.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Navegação

- [← Anterior: Exemplos](09-exemplos.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
