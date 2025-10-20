// src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';

// ========================================================
// ESTILOS
// ========================================================

const PageWrapper = styled.div`
  padding: 180px 0 80px;
`;

const LegalPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: left;
  line-height: 1.8;
  color: var(--text-light);

  h1 { text-align: center; margin-bottom: 40px; font-size: 2.5rem; color: var(--dark-blue); }
  h2 { font-size: 1.8rem; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; color: var(--dark-blue); }
  h3 { font-size: 1.4rem; margin-top: 25px; margin-bottom: 15px; color: var(--dark-blue); }
  p { margin-bottom: 20px; }
  ul, ol { padding-left: 25px; margin-bottom: 20px; }
  li { margin-bottom: 10px; }
  strong { font-weight: 600; color: var(--text-color); }
  a { color: var(--primary-color); text-decoration: underline; font-weight: 600; &:hover { text-decoration: none; } }
`;

// ========================================================
// COMPONENTE
// ========================================================
export default function PoliticaDeCookiesPageClient() {
  return (
    <PageWrapper>
      <LegalPageContainer> {/* <-- GARANTE QUE OS ESTILOS SEJAM APLICADOS */}
        <h1>Política de Cookies</h1>
        
        <h2>Seção 1 - O que são Cookies?</h2>
        <p>Cookies são pequenos arquivos de texto que um site armazena no seu dispositivo quando você o visita. Eles são utilizados para fazer os sites funcionarem de forma mais eficiente e para fornecer informações aos proprietários do site.</p>

        <h2>Seção 2 - Como Utilizamos os Cookies?</h2>
        <p>Nosso site utiliza cookies para as seguintes finalidades:</p>
        
        <h3>2.1. Cookies de Desempenho e Análise</h3>
        <ul>
            <li><strong>Google Analytics:</strong> Este serviço nos ajuda a analisar o tráfego do site para melhorar a experiência do usuário de forma anônima.</li>
        </ul>

        <h3>2.2. Cookies de Terceiros</h3>
        <ul>
            <li><strong>Google Maps:</strong> Os mapas incorporados em nossas páginas podem instalar cookies para armazenar preferências de visualização.</li>
        </ul>

        <h2>Seção 3 - Gestão de Cookies</h2>
        <p>Você pode gerenciar e/ou deletar cookies a qualquer momento através das configurações do seu navegador.</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}