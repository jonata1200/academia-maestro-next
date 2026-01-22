# Visão Geral do Design System

Este Design System define **tokens**, **componentes** e **padrões** para manter consistência visual e acelerar a evolução do produto. Todos os componentes seguem padrões de acessibilidade (WCAG 2.1 AA) e são totalmente tipados com TypeScript.

## Estrutura de Pastas

```
src/design-system/
├── components/          # Componentes reutilizáveis
│   ├── Button/
│   ├── Input/
│   ├── Modal/
│   └── ...
├── tokens/              # Tokens de design
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── ...
├── hooks/               # Hooks customizados
│   ├── useModal.ts
│   ├── useToast.ts
│   └── ...
└── utils/               # Utilitários
    └── cn.ts            # Helper para classes CSS
```

## Princípios

### 1. **Consistência**
Evitar valores "hardcoded"; sempre usar tokens e componentes do Design System. Isso garante que mudanças futuras sejam aplicadas de forma centralizada.

### 2. **Acessibilidade**
Focar em WCAG 2.1 AA:
- Semântica HTML adequada
- Navegação por teclado
- Contraste de cores adequado
- Indicadores de foco visíveis
- Suporte a leitores de tela

### 3. **Composição**
Componentes pequenos e reutilizáveis que compõem interfaces maiores. Preferir composição sobre herança.

### 4. **Manutenibilidade**
APIs simples, tipadas e bem documentadas. Código autoexplicativo com TypeScript.

## Como Usar

### Importando Componentes

```tsx
import { Button, Input, Modal } from '@/design-system/components';
```

### Importando Tokens

```tsx
import { colors, typography, spacing } from '@/design-system/tokens';
```

### Importando Hooks

```tsx
import { useModal, useToast } from '@/design-system/hooks';
```

## Navegação

- [← Voltar ao índice](../design-system/README.md)
- [Próximo: Tokens →](02-tokens.md)

---

**Última atualização:** 2024
