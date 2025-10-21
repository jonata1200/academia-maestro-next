// src/app/termos-de-uso/TermosDeUsoPageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';

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
export default function TermosDeUsoPageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const urlSite = "https://www.academiademusicamaestro.com.br"; // <-- SUBSTITUA

  return (
    <PageWrapper>
      <LegalPageContainer>
        <h1>Termos e Condições de Uso</h1>

        <h2>Cláusula 1ª - Aceitação e Objeto</h2>
        <p>Bem-vindo ao site da {nomeEmpresa}. Estes Termos e Condições de Uso constituem um acordo legal entre Você e a {nomeEmpresa} para a utilização do website {urlSite}. Ao acessar ou usar o Site, Você declara que leu, compreendeu e concorda em se vincular a estes Termos.</p>

        <h2>Cláusula 2ª - Propriedade Intelectual</h2>
        <p>Todo o conteúdo, incluindo, sem limitação, textos, imagens, gráficos, logotipos, marcas, e design do Site, é de propriedade exclusiva da {nomeEmpresa} ou de seus licenciantes, protegido pelas leis de direitos autorais e de propriedade industrial. É concedida ao Usuário uma licença limitada, não exclusiva e revogável para acessar e usar o Site para fins pessoais e não comerciais.</p>

        <h2>Cláusula 3ª - Obrigações do Usuário</h2>
        <p>O Usuário compromete-se a não utilizar o Site para fins ilícitos ou que violem estes Termos. É expressamente proibido:</p>
        <ul>
            <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do Site;</li>
            <li>Utilizar qualquer tipo de automação, como robôs ou scripts, para coletar dados;</li>
            <li>Transmitir vírus, malware ou qualquer código de natureza destrutiva;</li>
            <li>Interferir na segurança ou no funcionamento adequado do Site.</li>
        </ul>
        
        <h2>Cláusula 4ª - Isenção de Garantias e Limitação de Responsabilidade</h2>
        <p>O Site é fornecido no estado em que se encontra, sem garantias de qualquer tipo. Na máxima extensão permitida pela lei, a {nomeEmpresa} isenta-se de qualquer responsabilidade por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de uso do Site.</p>

        <h2>Cláusula 5ª - Indenização</h2>
        <p>O Usuário concorda em indenizar, defender e isentar a {nomeEmpresa} e seus diretores de quaisquer reivindicações, perdas, danos ou custos, incluindo honorários advocatícios, resultantes da violação destes Termos pelo Usuário.</p>

        <h2>Cláusula 6ª - Modificações e Rescisão</h2>
        <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. Também podemos, a nosso exclusivo critério, suspender ou rescindir seu acesso ao Site, sem aviso prévio, por qualquer violação destes Termos.</p>
        
        <h2>Cláusula 7ª - Lei Aplicável e Foro</h2>
        <p>Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Brasília, Distrito Federal, como o competente para dirimir quaisquer disputas oriundas destes Termos.</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}