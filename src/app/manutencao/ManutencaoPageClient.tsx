// src/app/manutencao/ManutencaoPageClient.tsx

'use client';

import React from 'react';

export default function ManutencaoPageClient() {
  const mensagemWhatsapp = encodeURIComponent("Olá! Vi no site que vocês fazem conserto e manutenção de instrumentos e gostaria de um orçamento.");
  const whatsappLink = `https://wa.me/5561996392573?text=${mensagemWhatsapp}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white text-center bg-[url('/manutencao-bg.jpg')] bg-cover bg-[center_60%] bg-no-repeat pt-[220px] pb-[120px] px-5 isolate md:pt-[220px] md:pb-[120px] md:px-5">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/70 to-dark-blue/50 -z-10"></div>
        <div className="container">
          <h1 className="text-white text-3xl md:text-[3rem] mb-4 font-bold">Conserto e Manutenção de Instrumentos</h1>
          <p className="text-white/90 text-xl md:text-[1.2rem]">Cuidado profissional para que sua paixão pela música nunca pare.</p>
        </div>
      </section>

      {/* Seção "Por que escolher a Maestro?" */}
      <section className="py-20 text-center bg-light-gray">
        <div className="container">
          <h2 className="text-[2.2rem] mb-12 font-bold">Por que escolher a Maestro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="text-4xl w-16 h-16 mx-auto mb-5 bg-[#e8e8ff] rounded-full flex justify-center items-center">
                <span>🛠️</span>
              </div>
              <h3 className="text-2xl text-primary mb-4 font-bold">Técnicos Especializados</h3>
              <p>Nossa equipe possui anos de experiência com todos os tipos de instrumentos.</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="text-4xl w-16 h-16 mx-auto mb-5 bg-[#e8e8ff] rounded-full flex justify-center items-center">
                <span>⚙️</span>
              </div>
              <h3 className="text-2xl text-primary mb-4 font-bold">Peças de Qualidade</h3>
              <p>Utilizamos apenas componentes e peças de reposição de alta qualidade e confiança.</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="text-4xl w-16 h-16 mx-auto mb-5 bg-[#e8e8ff] rounded-full flex justify-center items-center">
                <span>✅</span>
              </div>
              <h3 className="text-2xl text-primary mb-4 font-bold">Serviço com Garantia</h3>
              <p>Todos os nossos reparos e manutenções possuem garantia, para sua total tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços Detalhados */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="text-[2.2rem] mb-12 font-bold">Nossos Serviços Detalhados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-4 border-t-primary text-left transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] group">
              <h4 className="text-2xl text-dark-blue mb-5 font-bold">Regulagem e Setup</h4>
              <ul className="list-none p-0">
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Regulagem completa de guitarras e baixos
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Ajuste de altura de cordas e oitavas
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Troca e ajuste de pestana e rastilho
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Retífica e troca de trastes
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-4 border-t-primary text-left transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] group">
              <h4 className="text-2xl text-dark-blue mb-5 font-bold">Elétrica e Captadores</h4>
              <ul className="list-none p-0">
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Manutenção e troca de captadores
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Troca de potenciômetros, chaves e jacks
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Blindagem de cavidades elétricas
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Instalação de circuitos ativos e pré-amps
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-4 border-t-primary text-left transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] group">
              <h4 className="text-2xl text-dark-blue mb-5 font-bold">Reparos Estruturais</h4>
              <ul className="list-none p-0">
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Colagem de headstock e cavalete
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Reparos em rachaduras no tampo e corpo
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Revisão e hidratação da escala
                </li>
                <li className="mb-2.5 relative pl-6 before:content-['✓'] before:text-primary before:font-bold before:absolute before:left-0">
                  Limpeza e polimento geral do instrumento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção CTA */}
      <section className="py-16 bg-light-gray text-center">
        <div className="container">
          <h3 className="text-[1.8rem] mb-4 font-bold">Pronto para dar vida nova ao seu instrumento?</h3>
          <p className="mb-6">Entre em contato pelo WhatsApp e solicite um orçamento sem compromisso.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white py-4 px-9 text-lg rounded-lg no-underline font-semibold inline-block transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,255,0.2)] hover:-translate-y-1 hover:bg-[#0000cc]"
          >
            Falar com um Especialista
          </a>
        </div>
      </section>
    </>
  );
}
