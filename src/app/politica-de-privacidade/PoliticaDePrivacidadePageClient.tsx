// src/app/politica-de-privacidade/PoliticaDePrivacidadePageClient.tsx

'use client';

import React from 'react';
import Link from 'next/link';

export default function PoliticaDePrivacidadePageClient() {
  const nomeEmpresa = "Academia de Música Maestro";

  return (
    <div className="pt-[180px] pb-20">
      <div className="max-w-[800px] mx-auto px-5 text-left leading-relaxed text-text-light">
        <h1 className="text-center mb-10 text-[2.5rem] text-dark-blue">Política de Privacidade</h1>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 1 - Introdução e Definições</h2>
        <p className="mb-5">
          Esta Política de Privacidade descreve como a {nomeEmpresa}, na qualidade de Controladora de Dados Pessoais, coleta, utiliza, armazena, compartilha e protege os dados dos usuários de nosso website, em estrita conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 2 - Dados Pessoais Coletados e Finalidades</h2>
        <p className="mb-5">O tratamento de dados pessoais é realizado com o objetivo de viabilizar nossa relação comercial e aprimorar a sua experiência. Coletamos os seguintes dados:</p>
        <ul className="pl-6 mb-5">
          <li className="mb-2.5">
            <strong className="font-semibold text-text-color">Dados Fornecidos Diretamente pelo Titular:</strong> Nome, endereço de e-mail e número de telefone, coletados quando Você preenche formulários de contato ou nos contata via WhatsApp. A finalidade é responder às suas solicitações, fornecer informações sobre cursos e agendar aulas experimentais.
          </li>
          <li className="mb-2.5">
            <strong className="font-semibold text-text-color">Dados de Navegação Coletados Automaticamente:</strong> Endereço IP, tipo e versão do navegador, fuso horário, páginas visitadas, duração da visita e identificadores de dispositivo. Estes dados são coletados via cookies e tecnologias similares para fins de análise estatística (analytics), monitoramento de segurança e otimização da performance do site.
          </li>
        </ul>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 3 - Base Legal para o Tratamento</h2>
        <p className="mb-5">O tratamento de seus dados pessoais se fundamenta nas seguintes bases legais da LGPD:</p>
        <ul className="pl-6 mb-5">
          <li className="mb-2.5">
            <strong className="font-semibold text-text-color">Consentimento (Art. 7º, I):</strong> Obtido de forma livre, informada e inequívoca quando Você nos contata voluntariamente.
          </li>
          <li className="mb-2.5">
            <strong className="font-semibold text-text-color">Legítimo Interesse (Art. 7º, IX):</strong> Para atividades de análise de desempenho do site e prevenção a fraudes, sempre respeitando seus direitos e liberdades fundamentais.
          </li>
        </ul>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 4 - Armazenamento, Segurança e Retenção dos Dados</h2>
        <p className="mb-5">
          Seus dados são armazenados em ambientes operacionais seguros e protegidos. Adotamos medidas técnicas e administrativas, como criptografia de dados em trânsito (HTTPS) e controle de acesso restrito, para proteger seus dados contra perda, uso indevido e acesso não autorizado. Os dados serão retidos pelo tempo estritamente necessário para cumprir as finalidades para as quais foram coletados ou para cumprir com obrigações legais.
        </p>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 5 - Compartilhamento e Transferência Internacional de Dados</h2>
        <p className="mb-5">
          Não comercializamos seus dados pessoais. O compartilhamento ocorre apenas com Operadores (prestadores de serviços) essenciais, como plataformas de análise (Google Analytics). Ao utilizar serviços de empresas localizadas fora do Brasil, garantimos que tais transferências internacionais de dados sejam feitas para países com nível adequado de proteção de dados ou mediante cláusulas contratuais que assegurem tal proteção.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 6 - Direitos do Titular</h2>
        <p className="mb-5">Você, como titular dos dados, possui o direito de solicitar, a qualquer momento, via e-mail:</p>
        <ul className="pl-6 mb-5">
          <li className="mb-2.5">A confirmação da existência de tratamento;</li>
          <li className="mb-2.5">O acesso aos dados;</li>
          <li className="mb-2.5">A correção de dados incompletos, inexatos ou desatualizados;</li>
          <li className="mb-2.5">A anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li className="mb-2.5">A portabilidade dos dados a outro fornecedor de serviço;</li>
          <li className="mb-2.5">A eliminação dos dados tratados com o seu consentimento;</li>
          <li className="mb-2.5">A revogação do consentimento.</li>
        </ul>
        <p className="mb-5">Para exercer seus direitos, contate nosso Encarregado pela Proteção de Dados (DPO).</p>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Artigo 7 - Política de Cookies</h2>
        <p className="mb-5">
          Utilizamos cookies para melhorar sua experiência. Para mais detalhes sobre os cookies que utilizamos e como gerenciá-los, por favor, consulte nossa <Link href="/politica-de-cookies" className="text-primary underline font-semibold hover:no-underline">Política de Cookies</Link>.
        </p>
      </div>
    </div>
  );
}
