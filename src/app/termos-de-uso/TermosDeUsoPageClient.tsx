// src/app/termos-de-uso/TermosDeUsoPageClient.tsx

'use client'; // <-- Diretiva 'use client'

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

  h1 { text-align: center; margin-bottom: 40px; font-size: 2.5rem; }
  h2 { font-size: 1.8rem; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
  ul { padding-left: 20px; margin-bottom: 20px; }
  li { margin-bottom: 10px; }
`;

// ========================================================
// COMPONENTE CLIENTE
// ========================================================
export default function TermosDeUsoPageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const urlSite = "https://www.academiademusicamaestro.com.br"; // <-- SUBSTITUA

  return (
    <main className="generic-page-content">
      <div className="container legal-page-container">
        <h1>Termos e Condições de Uso</h1>

        <h2>Cláusula 1ª - Objeto</h2>
        <p>Estes Termos e Condições de Uso regem o acesso e a utilização do website {urlSite}, de propriedade da {nomeEmpresa}, por parte de seus usuários ("Você"). A utilização do site implica na aceitação plena e sem reservas de todos os termos aqui dispostos.</p>

        <h2>Cláusula 2ª - Propriedade Intelectual</h2>
        <p>Todo o conteúdo exibido no site, incluindo, mas não se limitando a, textos, gráficos, logos, imagens, e software, é de propriedade exclusiva da {nomeEmpresa} ou de seus licenciantes e é protegido pelas leis de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia e expressa.</p>

        <h2>Cláusula 3ª - Das Responsabilidades</h2>
        <p>Você concorda em utilizar o site de forma lícita, não devendo utilizá-lo para fins ilegais ou que infrinjam os direitos de terceiros. A {nomeEmpresa} não se responsabiliza por: </p>
        <ul>
            <li>Danos de qualquer natureza decorrentes do uso indevido do site;</li>
            <li>Interrupções ou erros na operação do site;</li>
            <li>Conteúdo de sites de terceiros acessados através de links externos.</li>
        </ul>

        <h2>Cláusula 4ª - Isenção de Garantias</h2>
        <p>O site e seu conteúdo são fornecidos "no estado em que se encontram", sem garantias de qualquer tipo, sejam elas explícitas ou implícitas. A {nomeEmpresa} não garante que o site atenderá às suas necessidades ou que será ininterrupto, seguro ou livre de erros.</p>
        
        <h2>Cláusula 5ª - Legislação Aplicável e Foro</h2>
        <p>Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Brasília, Distrito Federal, para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
      </div>
    </main>
  );
}