// src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx

'use client'; // <-- Diretiva 'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  h3 { font-size: 1.4rem; margin-top: 25px; margin-bottom: 15px; }
  ul { padding-left: 20px; margin-bottom: 20px; }
  li { margin-bottom: 10px; }
`;

// ========================================================
// COMPONENTE CLIENTE
// ========================================================
export default function PoliticaDeCookiesPageClient() {
  return (
    <main className="generic-page-content">
      <div className="container legal-page-container">
        <h1>Política de Cookies</h1>
        
        <h2>Seção 1 - O que são Cookies?</h2>
        <p>Cookies são pequenos arquivos de texto que um site armazena no seu computador ou dispositivo móvel quando você o visita. Eles permitem que o site "lembre" de suas ações e preferências (como login, idioma, tamanho da fonte e outras preferências de exibição) por um período, para que você não precise reinseri-las sempre que voltar ao site ou navegar de uma página para outra.</p>

        <h2>Seção 2 - Como Utilizamos os Cookies?</h2>
        <p>Nosso site utiliza cookies para as seguintes finalidades:</p>
        
        <h3>2.1. Cookies Estritamente Necessários</h3>
        <p>Estes são cookies essenciais para o funcionamento do site. Atualmente, nosso site não utiliza cookies que se enquadrem nesta categoria, como cookies de sessão para login de usuários.</p>

        <h3>2.2. Cookies de Desempenho e Análise</h3>
        <p>Utilizamos cookies para coletar informações sobre como os visitantes interagem com nosso site. Isso nos ajuda a melhorar a funcionalidade e o conteúdo oferecido. As informações são coletadas de forma anônima.</p>
        <ul>
            <li><strong>Google Analytics:</strong> Este serviço, fornecido pelo Google, nos ajuda a analisar o tráfego do site. Os cookies do Google Analytics (`_ga`, `_gid`, `_gat`) coletam informações sobre o número de visitantes, as páginas que visitaram e de onde vieram, de forma totalmente anônima.</li>
        </ul>

        <h3>2.3. Cookies de Terceiros</h3>
        <p>Nosso site incorpora funcionalidades de terceiros que podem instalar seus próprios cookies.</p>
        <ul>
            <li><strong>Google Maps:</strong> Os mapas incorporados em nossas páginas de contato e inicial podem instalar cookies para armazenar preferências e informações do usuário ao visualizar o mapa.</li>
        </ul>

        <h2>Seção 3 - Gestão de Cookies</h2>
        <p>Você pode gerenciar e/ou deletar cookies a qualquer momento através das configurações do seu navegador. Bloquear todos os cookies pode, no entanto, impactar a funcionalidade de nosso site. Para mais informações, consulte a documentação de ajuda do seu navegador ou visite <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
        <p>Para mais detalhes sobre como tratamos seus dados pessoais, por favor, consulte nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>.</p>
      </div>
    </main>
  );
}