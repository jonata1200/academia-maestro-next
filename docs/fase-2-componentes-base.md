# 🧩 FASE 2: Migração de Componentes Base

## 📋 Objetivo

Migrar os componentes reutilizáveis que são usados em múltiplas páginas.

**Estimativa de tempo**: 8-12 horas  
**Status**: ✅ Concluída

**Pré-requisito**: [FASE 1](./fase-1-preparacao.md) deve estar completa

---

## ✅ Checklist

- [x] **2.1** Migrar `src/components/GlobalStyles.ts`
  - Converter estilos globais para classes Tailwind ou manter em `globals.css`
  - Remover dependência de `createGlobalStyle` do Styled Components
  - Atualizar imports no `layout.tsx` se necessário
  - Verificar que estilos globais ainda estão aplicados

- [x] **2.2** Migrar `src/components/Header.tsx`
  - Converter todos os `styled` components para classes Tailwind
  - Manter lógica de `$isHomePageTop` usando classes condicionais:
    ```tsx
    className={isHomePageTop ? 'bg-transparent border-transparent' : 'bg-white border-gray-200'}
    ```
  - Manter lógica de `$isOpen` para menu mobile:
    ```tsx
    className={isMenuOpen ? 'left-0' : '-left-full'}
    ```
  - Testar transições e animações
  - Verificar responsividade mobile
  - Testar efeito de scroll no header
  - Remover imports do Styled Components
  - Verificar que o logo muda de cor corretamente no topo da home

- [x] **2.3** Migrar `src/components/Footer.tsx`
  - Converter todos os `styled` components para classes Tailwind
  - Manter lógica de `$isVisible` para botão "Voltar ao Topo":
    ```tsx
    className={isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
    ```
  - Verificar grid layout responsivo
  - Testar links e hover states
  - Testar botão "Voltar ao Topo" (aparecer/desaparecer e funcionalidade)
  - Remover imports do Styled Components

- [x] **2.4** Migrar `src/components/CookieBanner.tsx`
  - Converter estilos para Tailwind
  - Manter funcionalidade de exibição/ocultação
  - Testar posicionamento e z-index
  - Verificar que não sobrepõe outros elementos
  - Remover imports do Styled Components

- [x] **2.5** Migrar `src/components/UnitsMap.tsx`
  - Converter estilos dos cards de mapa
  - Manter grid responsivo
  - Testar botões e hover states
  - Verificar que os mapas do Google ainda funcionam
  - Remover imports do Styled Components

- [x] **2.6** Atualizar `src/lib/registry.tsx`
  - Remover ou simplificar registry do Styled Components
  - Se não houver mais Styled Components, remover arquivo ou deixar vazio
  - Atualizar `layout.tsx` para remover uso do registry se necessário

- [ ] **2.7** Testar todos os componentes migrados
  - Verificar visualmente em todas as páginas:
    - [ ] Header aparece corretamente em todas as páginas
    - [ ] Footer aparece corretamente em todas as páginas
    - [ ] Cookie Banner aparece quando necessário
    - [ ] UnitsMap funciona nas páginas que o utilizam
  - Testar interações:
    - [ ] Menu mobile abre/fecha
    - [ ] Links de navegação funcionam
    - [ ] Hover states funcionam
    - [ ] Scroll effects funcionam
    - [ ] Botão "Voltar ao Topo" funciona
  - Verificar responsividade em diferentes tamanhos de tela:
    - [ ] Mobile (320px - 768px)
    - [ ] Tablet (768px - 1024px)
    - [ ] Desktop (1024px+)

---

## 📝 Notas Importantes

### Props Dinâmicas
- Styled Components usa props como `$isHomePageTop` e `$isOpen`
- No Tailwind, use classes condicionais baseadas no state do React
- Exemplo:
  ```tsx
  // Antes (Styled Components)
  <StyledHeader $isHomePageTop={isHomePageTop}>
  
  // Depois (Tailwind)
  <header className={isHomePageTop ? 'bg-transparent' : 'bg-white'}>
  ```

### Transições
- Tailwind tem classes de transição prontas: `transition-all`, `duration-300`, etc.
- Para transições customizadas, use: `transition-[propriedade]`

### Animações
- Animações simples podem usar classes Tailwind: `animate-pulse`, `animate-spin`, etc.
- Animações complexas podem precisar de CSS customizado

---

## ✅ Critérios de Conclusão

Esta fase está completa quando:

- ✅ Todos os componentes base foram migrados para Tailwind CSS
- ✅ Todos os componentes funcionam visualmente como antes
- ✅ Todas as interações e animações funcionam
- ✅ Responsividade está funcionando
- ✅ Não há mais imports de Styled Components nos componentes base

---

**Fase anterior**: [FASE 1: Preparação e Configuração Inicial](./fase-1-preparacao.md)  
**Próxima fase**: [FASE 3: Migração das Páginas - Parte 1](./fase-3-paginas-principais.md)

