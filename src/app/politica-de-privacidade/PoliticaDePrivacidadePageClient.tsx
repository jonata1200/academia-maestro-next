// src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx

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

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
  }
`;

export default function PoliticaDePrivacidadePageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const emailContatoDPO = "privacidade@academiamusicamaestro.com.br"; // <-- SUBSTITUA por um e-mail real
  const dataVigencia = "18 de Outubro de 2025"; // <-- SUBSTITUA PELA DATA ATUAL

  return (
    <main className="generic-page-content">
      <div className="container legal-page-container">
        <h1>Política de Privacidade</h1>
        <p><strong>Última atualização:</strong> {dataVigencia}</p>

        <h2>Artigo 1 - Disposições Gerais</h2>
        <p>Esta Política de Privacidade visa informar como a {nomeEmpresa}, doravante denominada "Controladora", coleta, utiliza e protege os dados pessoais dos usuários ("Você") que acessam nosso site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</p>

        <h2>Artigo 2 - Dados Coletados e Finalidade</h2>
        <p>A Controladora coleta os seguintes dados para as finalidades especificadas:</p>
        <ol>
            <li><strong>Dados de Contato (Nome, E-mail, Telefone):</strong> Coletados via formulário de contato ou link de WhatsApp, com a finalidade de responder a solicitações, fornecer informações sobre nossos cursos e agendar aulas experimentais.</li>
            <li><strong>Dados de Navegação (Endereço IP, tipo de navegador, páginas visitadas):</strong> Coletados automaticamente através de cookies e serviços de terceiros como o Google Analytics, com a finalidade de analisar estatísticas de uso para otimização do site e melhoria da experiência do usuário.</li>
        </ol>

        <h2>Artigo 3 - Base Legal para o Tratamento</h2>
        <p>O tratamento dos seus dados é realizado com base no seu consentimento (Art. 7º, I, LGPD), fornecido de forma livre e inequívoca ao nos contatar, e no legítimo interesse da Controladora (Art. 7º, IX, LGPD) para análise e melhoria dos nossos serviços.</p>
        
        <h2>Artigo 4 - Compartilhamento de Dados</h2>
        <p>Seus dados pessoais não serão vendidos ou alugados. O compartilhamento ocorre apenas com operadores essenciais para nossa atividade, como plataformas de análise de dados (Google Analytics), que estão contratualmente obrigados a manter a confidencialidade e segurança das informações.</p>

        <h2>Artigo 5 - Direitos do Titular dos Dados</h2>
        <p>Conforme a LGPD, você tem o direito de solicitar a qualquer momento:</p>
        <ul>
          <li>A confirmação da existência de tratamento de seus dados;</li>
          <li>O acesso aos seus dados;</li>
          <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>A eliminação de dados pessoais desnecessários ou tratados em desconformidade com a LGPD;</li>
          <li>A revogação do consentimento.</li>
        </ul>
        <p>Para exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail: <strong>{emailContatoDPO}</strong>.</p>

        <h2>Artigo 6 - Alterações nesta Política</h2>
        <p>Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.</p>
      </div>
    </main>
  );
}