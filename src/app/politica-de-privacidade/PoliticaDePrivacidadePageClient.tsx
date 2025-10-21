// src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// ESTILOS (COPIE E COLE ESTE BLOCO ATUALIZADO)
const PageWrapper = styled.div` padding: 180px 0 80px; `;
const LegalPageContainer = styled.div`
  max-width: 800px; margin: 0 auto; padding: 0 20px; text-align: left; line-height: 1.8; color: var(--text-light);
  h1 { text-align: center; margin-bottom: 40px; font-size: 2.5rem; color: var(--dark-blue); }
  h2 { font-size: 1.8rem; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; color: var(--dark-blue); }
  h3 { font-size: 1.4rem; margin-top: 25px; margin-bottom: 15px; color: var(--dark-blue); }
  p { margin-bottom: 20px; }
  ul, ol { padding-left: 25px; margin-bottom: 20px; }
  li { margin-bottom: 10px; }
  strong { font-weight: 600; color: var(--text-color); }
  a { color: var(--primary-color); text-decoration: underline; font-weight: 600; &:hover { text-decoration: none; } }
`;

// COMPONENTE
export default function PoliticaDePrivacidadePageClient() {
  const nomeEmpresa = "Academia de Música Maestro";

  return (
    <PageWrapper>
      <LegalPageContainer>
        <h1>Política de Privacidade</h1>

        <h2>Artigo 1 - Introdução e Definições</h2>
        <p>Esta Política de Privacidade descreve como a {nomeEmpresa}, na qualidade de Controladora de Dados Pessoais, coleta, utiliza, armazena, compartilha e protege os dados dos usuários de nosso website, em estrita conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</p>

        <h2>Artigo 2 - Dados Pessoais Coletados e Finalidades</h2>
        <p>O tratamento de dados pessoais é realizado com o objetivo de viabilizar nossa relação comercial e aprimorar a sua experiência. Coletamos os seguintes dados:</p>
        <ul>
          <li><strong>Dados Fornecidos Diretamente pelo Titular:</strong> Nome, endereço de e-mail e número de telefone, coletados quando Você preenche formulários de contato ou nos contata via WhatsApp. A finalidade é responder às suas solicitações, fornecer informações sobre cursos e agendar aulas experimentais.</li>
          <li><strong>Dados de Navegação Coletados Automaticamente:</strong> Endereço IP, tipo e versão do navegador, fuso horário, páginas visitadas, duração da visita e identificadores de dispositivo. Estes dados são coletados via cookies e tecnologias similares para fins de análise estatística (analytics), monitoramento de segurança e otimização da performance do site.</li>
        </ul>

        <h2>Artigo 3 - Base Legal para o Tratamento</h2>
        <p>O tratamento de seus dados pessoais se fundamenta nas seguintes bases legais da LGPD:</p>
        <ul>
          <li><strong>Consentimento (Art. 7º, I):</strong> Obtido de forma livre, informada e inequívoca quando Você nos contata voluntariamente.</li>
          <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Para atividades de análise de desempenho do site e prevenção a fraudes, sempre respeitando seus direitos e liberdades fundamentais.</li>
        </ul>
        
        <h2>Artigo 4 - Armazenamento, Segurança e Retenção dos Dados</h2>
        <p>Seus dados são armazenados em ambientes operacionais seguros e protegidos. Adotamos medidas técnicas e administrativas, como criptografia de dados em trânsito (HTTPS) e controle de acesso restrito, para proteger seus dados contra perda, uso indevido e acesso não autorizado. Os dados serão retidos pelo tempo estritamente necessário para cumprir as finalidades para as quais foram coletados ou para cumprir com obrigações legais.</p>
        
        <h2>Artigo 5 - Compartilhamento e Transferência Internacional de Dados</h2>
        <p>Não comercializamos seus dados pessoais. O compartilhamento ocorre apenas com Operadores (prestadores de serviços) essenciais, como plataformas de análise (Google Analytics). Ao utilizar serviços de empresas localizadas fora do Brasil, garantimos que tais transferências internacionais de dados sejam feitas para países com nível adequado de proteção de dados ou mediante cláusulas contratuais que assegurem tal proteção.</p>

        <h2>Artigo 6 - Direitos do Titular</h2>
        <p>Você, como titular dos dados, possui o direito de solicitar, a qualquer momento, via e-mail:</p>
        <ul>
          <li>A confirmação da existência de tratamento;</li>
          <li>O acesso aos dados;</li>
          <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>A anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>A portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>A eliminação dos dados tratados com o seu consentimento;</li>
          <li>A revogação do consentimento.</li>
        </ul>
        <p>Para exercer seus direitos, contate nosso Encarregado pela Proteção de Dados (DPO).</p>
        
        <h2>Artigo 7 - Política de Cookies</h2>
        <p>Utilizamos cookies para melhorar sua experiência. Para mais detalhes sobre os cookies que utilizamos e como gerenciá-los, por favor, consulte nossa <Link href="/politica-de-cookies">Política de Cookies</Link>.</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}