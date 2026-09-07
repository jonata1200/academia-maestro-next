// src/app/politica-de-cookies/PoliticaDeCookiesPageClient.tsx

'use client';

import React from 'react';
import Link from 'next/link';

export default function PoliticaDeCookiesPageClient() {
  return (
    <div className="pt-[180px] pb-20">
      <div className="max-w-[800px] mx-auto px-5 text-left leading-relaxed text-text-light">
        <h1 className="text-center mb-10 text-[2.5rem] text-dark-blue font-bold">Política de Cookies</h1>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue font-bold">Seção 1 - O que são Cookies?</h2>
        <p className="mb-5">
          Cookies são pequenos arquivos de texto que um site armazena no seu dispositivo ao visitá-lo. Eles são utilizados para diversas finalidades, como lembrar suas preferências, ajudar na navegação entre páginas e coletar dados estatísticos.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue font-bold">Seção 2 - Tipos de Cookies Utilizados</h2>
        <p className="mb-5">Nosso site utiliza os seguintes tipos de cookies:</p>
        
        <h3 className="text-[1.4rem] mt-6 mb-4 text-dark-blue font-bold">2.1. Cookies de Análise ou Desempenho</h3>
        <p className="mb-5">
          Estes cookies nos ajudam a entender como os visitantes interagem com o site, coletando e relatando informações de forma anônima. Isso nos permite otimizar a estrutura e o conteúdo.
        </p>
        
        <h3 className="text-[1.4rem] mt-6 mb-4 text-dark-blue font-bold">2.2. Cookies de Terceiros</h3>
        <p className="mb-5">
          Estes cookies são definidos por um domínio diferente do que você está visitando, geralmente por meio de conteúdo incorporado, como mapas.
        </p>
        
        <h3 className="text-[1.4rem] mt-6 mb-4 text-dark-blue font-bold">Tabela de Cookies</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-5">
            <thead>
              <tr>
                <th className="border border-gray-300 p-3 text-left bg-gray-100 text-dark-blue">Cookie</th>
                <th className="border border-gray-300 p-3 text-left bg-gray-100 text-dark-blue">Fornecedor</th>
                <th className="border border-gray-300 p-3 text-left bg-gray-100 text-dark-blue">Finalidade</th>
                <th className="border border-gray-300 p-3 text-left bg-gray-100 text-dark-blue">Duração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">_ga, _ga_*</td>
                <td className="border border-gray-300 p-3">Google Analytics</td>
                <td className="border border-gray-300 p-3">Usado para distinguir usuários e analisar o tráfego do site de forma anônima.</td>
                <td className="border border-gray-300 p-3">2 anos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">_gid</td>
                <td className="border border-gray-300 p-3">Google Analytics</td>
                <td className="border border-gray-300 p-3">Usado para distinguir usuários durante uma única sessão de navegação.</td>
                <td className="border border-gray-300 p-3">24 horas</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">NID, CONSENT</td>
                <td className="border border-gray-300 p-3">Google Maps</td>
                <td className="border border-gray-300 p-3">Usados pelo Google Maps para armazenar preferências do usuário, como idioma e nível de zoom.</td>
                <td className="border border-gray-300 p-3">Varia (até 6 meses)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue font-bold">Seção 3 - Como Gerenciar Cookies</h2>
        <p className="mb-5">
          Você pode controlar ou recusar o uso de cookies através das configurações do seu navegador. A recusa de cookies pode, no entanto, afetar a funcionalidade de algumas partes do nosso site. Para obter instruções detalhadas, consulte os links abaixo:
        </p>
        <ul className="pl-6 mb-5">
          <li className="mb-2.5">
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold hover:no-underline">
              Google Chrome
            </a>
          </li>
          <li className="mb-2.5">
            <a href="https://support.mozilla.org/pt-BR/kb/impeca-que-sites-armazenem-cookies-e-dados-no-fir" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold hover:no-underline">
              Mozilla Firefox
            </a>
          </li>
          <li className="mb-2.5">
            <a href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold hover:no-underline">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="mb-5">
          Para mais informações sobre o tratamento de seus dados, consulte nossa <Link href="/politica-de-privacidade" className="text-primary underline font-semibold hover:no-underline">Política de Privacidade</Link>.
        </p>
      </div>
    </div>
  );
}
