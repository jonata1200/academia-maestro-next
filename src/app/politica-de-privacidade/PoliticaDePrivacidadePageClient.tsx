// src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx

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
export default function PoliticaDePrivacidadePageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const dataVigencia = "18 de Outubro de 2025";

  return (
    <PageWrapper>
      <LegalPageContainer> {/* <-- GARANTE QUE OS ESTILOS SEJAM APLICADOS */}
        <h1>Política de Privacidade</h1>
        <p><strong>Última atualização:</strong> {dataVigencia}</p>

        <h2>Artigo 1 - Disposições Gerais</h2>
        <p>Esta Política de Privacidade visa informar como a {nomeEmpresa}, coleta, utiliza e protege os dados pessoais dos usuários ("Você") que acessam nosso site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</p>

        <h2>Artigo 2 - Dados Coletados e Finalidade</h2>
        <p>A Controladora coleta os seguintes dados para as finalidades especificadas:</p>
        <ol>
            <li><strong>Dados de Contato (Nome, E-mail, Telefone):</strong> Coletados via formulário de contato ou link de WhatsApp, com a finalidade de responder a solicitações, fornecer informações sobre nossos cursos e agendar aulas experimentais.</li>
            <li><strong>Dados de Navegação (Endereço IP, tipo de navegador, páginas visitadas):</strong> Coletados automaticamente através de cookies e serviços de terceiros como o Google Analytics, com a finalidade de analisar estatísticas de uso para otimização do site e melhoria da experiência do usuário.</li>
        </ol>

        <h2>Artigo 3 - Direitos do Titular dos Dados</h2>
        <p>Conforme a LGPD, você tem o direito de solicitar a qualquer momento a confirmação, acesso, correção ou eliminação de seus dados. Para exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO).</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}