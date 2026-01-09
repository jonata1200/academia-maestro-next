# 📄 FASE 3: Migração das Páginas - Parte 1 (Páginas Principais)

## 📋 Objetivo

Migrar as páginas mais importantes e complexas do site.

**Estimativa de tempo**: 12-16 horas  
**Status**: 🟡 Aguardando início

**Pré-requisito**: [FASE 2](./fase-2-componentes-base.md) deve estar completa

---

## ✅ Checklist

- [ ] **3.1** Migrar `src/app/HomePageClient.tsx`
  - Converter `HeroSection` e `HeroOverlay`
    - Background image com overlay gradiente
    - Padding responsivo
    - Tipografia e cores
  - Converter `WhyChooseUsSection` e `FeaturesGrid`
    - Grid responsivo com `grid-cols-1 md:grid-cols-3`
    - Espaçamentos e gaps
  - Converter `FeatureCard` e `FeatureIcon`
    - Hover effects e transições
    - Border top animado no hover
    - Shadow effects
  - Converter `InstrumentsPreviewSection` e animações de scroll
    - Animação de scroll infinito (pode precisar de CSS customizado)
    - Mask gradient para fade nas bordas
    - Pause no hover
  - Converter `InstrumentItemCard` e `CardOverlay`
    - Hover effects com scale e translate
    - Overlay gradiente
    - Posicionamento do texto
  - Converter `CtaButton`
    - Hover effects
    - Transições
    - Shadow effects
  - Converter `TrialLessonSection` e `BannerLink`
    - Background image
    - Hover scale effect
    - Link overlay
  - Converter `LocationsSection`
    - Espaçamentos e layout
  - Manter animações keyframes usando Tailwind ou CSS customizado
  - Testar todas as seções e interações
  - Remover imports do Styled Components

- [ ] **3.2** Migrar `src/app/instrumentos/InstrumentosPageClient.tsx`
  - Converter hero section
    - Background image e overlay
    - Padding e tipografia
  - Converter grid de instrumentos
    - Grid responsivo
    - Gaps e espaçamentos
  - Converter cards de instrumentos
    - Hover effects
    - Transições
    - Shadow effects
    - Layout interno
  - Manter hover effects e transições
  - Testar responsividade
  - Remover imports do Styled Components

- [ ] **3.3** Migrar `src/app/sobre/SobrePageClient.tsx`
  - Converter hero section
    - Background image e overlay
    - Padding e tipografia
  - Converter seções de conteúdo
    - Layout e espaçamentos
    - Tipografia
  - Converter layout e espaçamentos
    - Containers e max-width
    - Padding e margins
  - Testar responsividade
  - Remover imports do Styled Components

- [ ] **3.4** Testar páginas migradas
  - Verificar visualmente:
    - [ ] Home page - todas as seções aparecem corretamente
    - [ ] Página Instrumentos - layout e cards
    - [ ] Página Sobre Nós - conteúdo e layout
  - Testar navegação entre páginas:
    - [ ] Links funcionam corretamente
    - [ ] Transições entre páginas são suaves
  - Verificar SEO e metadata:
    - [ ] Metadata não foi afetado (verificar no código fonte)
    - [ ] Títulos e descrições estão corretos

---

## 📝 Notas Importantes

### Animações de Scroll Infinito
- A animação de scroll infinito do carrossel de instrumentos pode precisar de CSS customizado
- Considere usar `@keyframes` em `globals.css` ou criar uma animação customizada no Tailwind
- Exemplo de animação customizada no `tailwind.config.ts`:
  ```typescript
  theme: {
    extend: {
      keyframes: {
        scroll: {
          'to': { transform: 'translate(calc(-50% - 10px))' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      }
    }
  }
  ```

### Background Images
- Background images podem ser mantidas inline ou movidas para CSS
- Tailwind suporta background images via `bg-[url(...)]` ou classes customizadas

### Gradientes
- Tailwind tem suporte nativo para gradientes
- Use `bg-gradient-to-[direction]` e `from-[color]`, `via-[color]`, `to-[color]`

### Hover Effects Complexos
- Para hover effects que afetam elementos filhos, use `group` e `group-hover:`
  ```tsx
  <div className="group">
    <div className="group-hover:scale-110">...</div>
  </div>
  ```

---

## ✅ Critérios de Conclusão

Esta fase está completa quando:

- ✅ Home page foi completamente migrada e funciona como antes
- ✅ Página Instrumentos foi migrada e funciona como antes
- ✅ Página Sobre Nós foi migrada e funciona como antes
- ✅ Todas as animações e interações funcionam
- ✅ Responsividade está funcionando
- ✅ Não há mais imports de Styled Components nas páginas migradas

---

**Fase anterior**: [FASE 2: Migração de Componentes Base](./fase-2-componentes-base.md)  
**Próxima fase**: [FASE 4: Migração das Páginas - Parte 2](./fase-4-paginas-secundarias.md)

