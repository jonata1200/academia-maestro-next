// src/app/termos-de-uso/TermosDeUsoPageClient.tsx

'use client';

import React from 'react';

export default function TermosDeUsoPageClient() {
  const nomeEmpresa = "Academia de Música Maestro";
  const urlSite = "https://www.academiademusicamaestro.com.br";

  return (
    <div className="pt-[180px] pb-20">
      <div className="max-w-[800px] mx-auto px-5 text-left leading-relaxed text-text-light">
        <h1 className="text-center mb-10 text-[2.5rem] text-dark-blue">Termos e Condições de Uso</h1>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 1ª - Aceitação e Objeto</h2>
        <p className="mb-5">
          Bem-vindo ao site da {nomeEmpresa}. Estes Termos e Condições de Uso constituem um acordo legal entre Você e a {nomeEmpresa} para a utilização do website {urlSite}. Ao acessar ou usar o Site, Você declara que leu, compreendeu e concorda em se vincular a estes Termos.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 2ª - Propriedade Intelectual</h2>
        <p className="mb-5">
          Todo o conteúdo, incluindo, sem limitação, textos, imagens, gráficos, logotipos, marcas, e design do Site, é de propriedade exclusiva da {nomeEmpresa} ou de seus licenciantes, protegido pelas leis de direitos autorais e de propriedade industrial. É concedida ao Usuário uma licença limitada, não exclusiva e revogável para acessar e usar o Site para fins pessoais e não comerciais.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 3ª - Obrigações do Usuário</h2>
        <p className="mb-5">O Usuário compromete-se a não utilizar o Site para fins ilícitos ou que violem estes Termos. É expressamente proibido:</p>
        <ul className="pl-6 mb-5">
          <li className="mb-2.5">Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do Site;</li>
          <li className="mb-2.5">Utilizar qualquer tipo de automação, como robôs ou scripts, para coletar dados;</li>
          <li className="mb-2.5">Transmitir vírus, malware ou qualquer código de natureza destrutiva;</li>
          <li className="mb-2.5">Interferir na segurança ou no funcionamento adequado do Site.</li>
        </ul>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 4ª - Isenção de Garantias e Limitação de Responsabilidade</h2>
        <p className="mb-5">
          O Site é fornecido no estado em que se encontra, sem garantias de qualquer tipo. Na máxima extensão permitida pela lei, a {nomeEmpresa} isenta-se de qualquer responsabilidade por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de uso do Site.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 5ª - Indenização</h2>
        <p className="mb-5">
          O Usuário concorda em indenizar, defender e isentar a {nomeEmpresa} e seus diretores de quaisquer reivindicações, perdas, danos ou custos, incluindo honorários advocatícios, resultantes da violação destes Termos pelo Usuário.
        </p>

        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 6ª - Modificações e Rescisão</h2>
        <p className="mb-5">
          Reservamo-nos o direito de modificar estes Termos a qualquer momento. Também podemos, a nosso exclusivo critério, suspender ou rescindir seu acesso ao Site, sem aviso prévio, por qualquer violação destes Termos.
        </p>
        
        <h2 className="text-[1.8rem] mt-10 mb-5 border-b-2 border-gray-200 pb-2.5 text-dark-blue">Cláusula 7ª - Lei Aplicável e Foro</h2>
        <p className="mb-5">
          Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Brasília, Distrito Federal, como o competente para dirimir quaisquer disputas oriundas destes Termos.
        </p>
      </div>
    </div>
  );
}
