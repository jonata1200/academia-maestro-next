// src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx

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
  
  /* Estilos para a tabela de cookies */
  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
  th { background-color: #f7f7f7; color: var(--dark-blue); }
`;

// COMPONENTE
export default function PoliticaDeCookiesPageClient() {
  return (
    <PageWrapper>
      <LegalPageContainer>
        <h1>Política de Cookies</h1>
        
        <h2>Seção 1 - O que são Cookies?</h2>
        <p>Cookies são pequenos arquivos de texto que um site armazena no seu dispositivo ao visitá-lo. Eles são utilizados para diversas finalidades, como lembrar suas preferências, ajudar na navegação entre páginas e coletar dados estatísticos.</p>

        <h2>Seção 2 - Tipos de Cookies Utilizados</h2>
        <p>Nosso site utiliza os seguintes tipos de cookies:</p>
        
        <h3>2.1. Cookies de Análise ou Desempenho</h3>
        <p>Estes cookies nos ajudam a entender como os visitantes interagem com o site, coletando e relatando informações de forma anônima. Isso nos permite otimizar a estrutura e o conteúdo.</p>
        
        <h3>2.2. Cookies de Terceiros</h3>
        <p>Estes cookies são definidos por um domínio diferente do que você está visitando, geralmente por meio de conteúdo incorporado, como mapas.</p>
        
        <h3>Tabela de Cookies</h3>
        <table>
            <thead>
                <tr>
                    <th>Cookie</th>
                    <th>Fornecedor</th>
                    <th>Finalidade</th>
                    <th>Duração</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>_ga, _ga_*</td>
                    <td>Google Analytics</td>
                    <td>Usado para distinguir usuários e analisar o tráfego do site de forma anônima.</td>
                    <td>2 anos</td>
                </tr>
                <tr>
                    <td>_gid</td>
                    <td>Google Analytics</td>
                    <td>Usado para distinguir usuários durante uma única sessão de navegação.</td>
                    <td>24 horas</td>
                </tr>
                <tr>
                    <td>NID, CONSENT</td>
                    <td>Google Maps</td>
                    <td>Usados pelo Google Maps para armazenar preferências do usuário, como idioma e nível de zoom.</td>
                    <td>Varia (até 6 meses)</td>
                </tr>
            </tbody>
        </table>

        <h2>Seção 3 - Como Gerenciar Cookies</h2>
        <p>Você pode controlar ou recusar o uso de cookies através das configurações do seu navegador. A recusa de cookies pode, no entanto, afetar a funcionalidade de algumas partes do nosso site. Para obter instruções detalhadas, consulte os links abaixo:</p>
        <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/pt-BR/kb/impeca-que-sites-armazenem-cookies-e-dados-no-fir" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p>Para mais informações sobre o tratamento de seus dados, consulte nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>.</p>
      </LegalPageContainer>
    </PageWrapper>
  );
}