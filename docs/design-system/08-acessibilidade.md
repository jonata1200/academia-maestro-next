# Acessibilidade

Todos os componentes seguem as diretrizes WCAG 2.1 AA:

## Semântica HTML

- Uso correto de elementos HTML semânticos
- Headings hierárquicos (h1 → h2 → h3)
- Labels associados a inputs

## Navegação por Teclado

- Todos os componentes interativos são focáveis
- Suporte a Tab, Enter, Space e Escape
- Indicadores de foco visíveis

## Contraste de Cores

- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande
- Cores não são o único meio de transmitir informação

## Leitores de Tela

- Atributos `aria-*` apropriados
- Textos alternativos para imagens
- Estados descritos adequadamente

## Exemplos

```tsx
// ✅ Acessível
<Button aria-label="Fechar modal">
  <CloseIcon aria-hidden="true" />
</Button>

<Input 
  id="email"
  aria-describedby="email-error"
  aria-invalid={hasError}
/>
{hasError && (
  <Text id="email-error" role="alert">
    E-mail inválido
  </Text>
)}

// ❌ Não acessível
<div onClick={handleClick}>
  <Icon />
</div>
```

## Recursos Adicionais

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React A11y](https://reactjs.org/docs/accessibility.html)

## Navegação

- [← Anterior: Hooks](07-hooks.md)
- [Próximo: Exemplos →](09-exemplos.md)
- [← Voltar ao índice](README.md)

---

**Última atualização:** 2024
