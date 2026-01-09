# 📄 FASE 4: Migração das Páginas - Parte 2 (Páginas Secundárias)

## 📋 Objetivo

Migrar as páginas restantes do site.

**Estimativa de tempo**: 6-8 horas  
**Status**: 🟡 Aguardando início

**Pré-requisito**: [FASE 3](./fase-3-paginas-principais.md) deve estar completa

---

## ✅ Checklist

- [ ] **4.1** Migrar `src/app/contato/ContatoPageClient.tsx`
  - Converter hero section
    - Background image e overlay
    - Padding e tipografia
  - Converter layout de contato
    - Espaçamentos
    - Layout responsivo
  - Manter integração com `UnitsMap` (já migrado na Fase 2)
  - Testar formulários se houver
  - Verificar que os mapas do Google ainda funcionam
  - Remover imports do Styled Components

- [ ] **4.2** Migrar `src/app/manutencao/ManutencaoPageClient.tsx`
  - Converter hero section
    - Background image e overlay
    - Padding e tipografia
  - Converter seções de serviços
    - Layout e espaçamentos
    - Tipografia
  - Converter `FeaturesGrid` e `FeatureCard`
    - Grid responsivo
    - Cards com hover effects
    - Ícones e espaçamentos
  - Testar layout e responsividade
  - Remover imports do Styled Components

- [ ] **4.3** Migrar `src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx`
  - Converter layout de página de política
    - Container e max-width
    - Padding e espaçamentos
  - Manter tipografia e espaçamentos
    - Títulos e subtítulos
    - Parágrafos e listas
    - Espaçamento entre seções
  - Testar legibilidade
  - Verificar que o conteúdo está bem formatado
  - Remover imports do Styled Components

- [ ] **4.4** Migrar `src/app/termos-de-uso/TermosDeUsoPageClient.tsx`
  - Converter layout de página de termos
    - Container e max-width
    - Padding e espaçamentos
  - Manter tipografia e espaçamentos
    - Títulos e subtítulos
    - Parágrafos e listas
    - Espaçamento entre seções
  - Testar legibilidade
  - Verificar que o conteúdo está bem formatado
  - Remover imports do Styled Components

- [ ] **4.5** Migrar `src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx`
  - Converter layout de página de cookies
    - Container e max-width
    - Padding e espaçamentos
  - Manter tipografia e espaçamentos
    - Títulos e subtítulos
    - Parágrafos e listas
    - Espaçamento entre seções
  - Testar legibilidade
  - Verificar que o conteúdo está bem formatado
  - Remover imports do Styled Components

- [ ] **4.6** Testar todas as páginas migradas
  - Navegar por todas as rotas:
    - [ ] Página Contato
    - [ ] Página Manutenção
    - [ ] Página Política de Privacidade
    - [ ] Página Termos de Uso
    - [ ] Página Política de Cookies
  - Verificar que não há estilos quebrados:
    - [ ] Layout está correto
    - [ ] Tipografia está legível
    - [ ] Espaçamentos estão adequados
    - [ ] Links funcionam
  - Testar em diferentes dispositivos:
    - [ ] Mobile (320px - 768px)
    - [ ] Tablet (768px - 1024px)
    - [ ] Desktop (1024px+)

---

## 📝 Notas Importantes

### Páginas de Políticas
- Essas páginas geralmente têm muito texto
- Foque em legibilidade: line-height, espaçamento entre parágrafos, contraste
- Use classes Tailwind de tipografia: `prose` (se usar plugin typography) ou classes manuais

### Layout Consistente
- Mantenha consistência entre as páginas de políticas
- Use o mesmo padrão de container e espaçamentos

### Formulários
- Se houver formulários na página de contato, considere usar `@tailwindcss/forms` plugin
- Ou estilize manualmente com classes Tailwind

---

## ✅ Critérios de Conclusão

Esta fase está completa quando:

- ✅ Todas as páginas secundárias foram migradas
- ✅ Todas as páginas funcionam visualmente como antes
- ✅ Layout e tipografia estão corretos
- ✅ Responsividade está funcionando
- ✅ Não há mais imports de Styled Components nas páginas migradas

---

**Fase anterior**: [FASE 3: Migração das Páginas - Parte 1](./fase-3-paginas-principais.md)  
**Próxima fase**: [FASE 5: Limpeza e Otimização](./fase-5-limpeza-otimizacao.md)

