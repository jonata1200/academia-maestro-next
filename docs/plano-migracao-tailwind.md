# 📋 Plano de Migração para Tailwind CSS

## 📊 Situação Atual

O projeto **Academia de Música Maestro** atualmente utiliza:
- **Styled Components 6.1.19** para estilização CSS-in-JS
- **CSS Global** (`globals.css`) com variáveis CSS customizadas
- **GlobalStyles.ts** com estilos globais via Styled Components

### Componentes que precisam ser migrados:

1. **Componentes Base:**
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `src/components/CookieBanner.tsx`
   - `src/components/UnitsMap.tsx`
   - `src/components/GlobalStyles.ts`

2. **Páginas Client:**
   - `src/app/HomePageClient.tsx`
   - `src/app/sobre/SobrePageClient.tsx`
   - `src/app/instrumentos/InstrumentosPageClient.tsx`
   - `src/app/contato/ContatoPageClient.tsx`
   - `src/app/manutencao/ManutencaoPageClient.tsx`
   - `src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx`
   - `src/app/termos-de-uso/TermosDeUsoPageClient.tsx`
   - `src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx`

3. **Arquivos de Estilo:**
   - `src/app/globals.css`
   - `src/lib/registry.tsx` (registry do Styled Components)

---

## 🎯 Objetivos da Migração

- Migrar de Styled Components para Tailwind CSS
- Manter toda a funcionalidade e aparência visual atual
- Melhorar performance (redução de JavaScript no bundle)
- Facilitar manutenção futura com classes utilitárias
- Manter responsividade e acessibilidade

---

## 📅 Fases da Migração

A migração está dividida em **6 fases** principais. Cada fase possui um arquivo dedicado com checklist detalhado:

### [FASE 1: Preparação e Configuração Inicial](./fase-1-preparacao.md)
**Objetivo**: Configurar o Tailwind CSS no projeto sem quebrar a aplicação atual.  
**Estimativa**: 2-4 horas  
**Status**: 🟡 Aguardando início

### [FASE 2: Migração de Componentes Base](./fase-2-componentes-base.md)
**Objetivo**: Migrar os componentes reutilizáveis que são usados em múltiplas páginas.  
**Estimativa**: 8-12 horas  
**Status**: 🟡 Aguardando início

### [FASE 3: Migração das Páginas - Parte 1 (Páginas Principais)](./fase-3-paginas-principais.md)
**Objetivo**: Migrar as páginas mais importantes e complexas do site.  
**Estimativa**: 12-16 horas  
**Status**: 🟡 Aguardando início

### [FASE 4: Migração das Páginas - Parte 2 (Páginas Secundárias)](./fase-4-paginas-secundarias.md)
**Objetivo**: Migrar as páginas restantes do site.  
**Estimativa**: 6-8 horas  
**Status**: 🟡 Aguardando início

### [FASE 5: Limpeza e Otimização](./fase-5-limpeza-otimizacao.md)
**Objetivo**: Remover dependências antigas, otimizar código e garantir que tudo está funcionando perfeitamente.  
**Estimativa**: 4-6 horas  
**Status**: 🟡 Aguardando início

### [FASE 6: Testes Finais e Validação](./fase-6-testes-validacao.md)
**Objetivo**: Garantir que a migração foi bem-sucedida e que não há regressões.  
**Estimativa**: 6-8 horas  
**Status**: 🟡 Aguardando início

---

## 📚 Documentação Adicional

- [Configurações Técnicas e Notas Importantes](./configuracoes-tecnicas.md) - Configurações recomendadas, notas sobre animações, props dinâmicas, e mais.

---

## 🚨 Riscos e Mitigações

### Riscos Identificados

1. **Quebra visual durante migração**
   - **Mitigação**: Migrar componente por componente e testar após cada migração

2. **Animações complexas podem não funcionar**
   - **Mitigação**: Manter animações em CSS customizado se necessário

3. **Perda de funcionalidade dinâmica**
   - **Mitigação**: Usar classes condicionais e state do React adequadamente

4. **Tempo de desenvolvimento**
   - **Mitigação**: Planejar migração em fases, não tentar fazer tudo de uma vez

5. **Conflitos de estilos**
   - **Mitigação**: Limpar completamente Styled Components antes de finalizar

---

## ✅ Critérios de Sucesso

A migração será considerada bem-sucedida quando:

- ✅ Todos os componentes foram migrados para Tailwind CSS
- ✅ Não há mais dependências do Styled Components
- ✅ Aparência visual é idêntica à versão anterior
- ✅ Todas as funcionalidades estão funcionando
- ✅ Performance melhorou ou se manteve
- ✅ Responsividade está funcionando em todos os dispositivos
- ✅ Build de produção está funcionando sem erros
- ✅ Testes passaram em todos os navegadores principais
- ✅ Documentação foi atualizada

---

## 📅 Estimativa de Tempo Total

**Total estimado**: 38-54 horas de desenvolvimento

- Fase 1: 2-4 horas
- Fase 2: 8-12 horas
- Fase 3: 12-16 horas
- Fase 4: 6-8 horas
- Fase 5: 4-6 horas
- Fase 6: 6-8 horas

---

## 📚 Recursos Úteis

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind CSS com Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Migração de Styled Components para Tailwind](https://tailwindcss.com/docs/utility-first)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (Extensão VS Code)

---

**Última atualização**: Data da criação do plano  
**Status Geral**: 🟡 Aguardando início
