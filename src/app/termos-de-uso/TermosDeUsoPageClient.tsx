// src/app/termos-de-uso/TermosDeUsoPageClient.tsx

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
export default function TermosDeUsoPageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const urlSite = "https://www.academiademusicamaestro.com.br";

  return (
    <PageWrapper>
      <LegalPageContainer> {/* <-- GARANTE QUE OS ESTILOS SEJAM APLICADOS */}
        <h1>Termos e Condições de Uso</h1>

        <h2>Cláusula 1ª - Objeto</h2>
        <p>Estes Termos e Condições de Uso regem o acesso e a utilização do website {urlSite}, de propriedade da {nomeEmpresa}, por parte de seus usuários ("Você"). A utilização do site implica na aceitação plena e sem reservas de todos os termos aqui dispostos.</p>

        <h2>Cláusula 2ª - Propriedade Intelectual</h2>
        <p>Todo o conteúdo exibido no site, incluindo textos, gráficos, logos e imagens, é de propriedade exclusiva da {nomeEmpresa} e é protegido pelas leis de direitos autorais. É vedada a reprodução ou modificação de qualquer conteúdo sem autorização prévia e expressa.</p>

        <h2>Cláusula 3ª - Das Responsabilidades</h2>
        <p>Você concorda em utilizar o site de forma lícita. A {nomeEmpresa} não se responsabiliza por danos decorrentes do uso indevido do site, interrupções na operação ou conteúdo de sites de terceiros.</p>
        
        <h2>Cláusula 4ª - Legislação Aplicável e Foro</h2>
        <p>Estes Termos serão regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Brasília, Distrito Federal, para dirimir quaisquer controvérsias.</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}