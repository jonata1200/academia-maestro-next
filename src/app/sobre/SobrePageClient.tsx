// src/app/sobre/SobrePageClient.tsx

'use client';

import React from 'react';

export default function SobrePageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-20 md:py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-[2.8rem] font-bold">Nossa Trajetória</h1>
          <p className="text-lg mt-4">Conheça a história que transformou a Academia Maestro em uma referência na educação musical desde 1981.</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container">
          <div className="relative max-w-[800px] mx-auto before:content-[''] before:absolute before:left-[25px] before:top-0 before:bottom-0 before:w-[3px] before:bg-primary before:-translate-x-1/2">
            <div className="py-5 pl-[70px] relative mb-8">
              <div className="absolute left-0 top-5 bg-primary text-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl z-10">
                <span>★</span>
              </div>
              <div>
                <h3 className="text-[1.8rem] mb-2 font-bold">1981: O Sonho Começa</h3>
                <p className="text-[1.1rem] leading-relaxed">Fundada pelo jovem músico Rivaldo de Sousa Mendes, a academia nasce da paixão e da resiliência, superando desafios para realizar o sonho de ensinar música.</p>
              </div>
            </div>
            <div className="py-5 pl-[70px] relative mb-8">
              <div className="absolute left-0 top-5 bg-primary text-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl z-10">
                <span>📖</span>
              </div>
              <div>
                <h3 className="text-[1.8rem] mb-2 font-bold">1987: Expansão com a EME Editora</h3>
                <p className="text-[1.1rem] leading-relaxed">Para alçar voos mais altos, a Maestro funda a EME Editora, focada em criar material didático de alta qualidade, hoje distribuído por todo o Brasil e exterior.</p>
              </div>
            </div>
            <div className="py-5 pl-[70px] relative mb-8">
              <div className="absolute left-0 top-5 bg-primary text-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl z-10">
                <span>🎓</span>
              </div>
              <div>
                <h3 className="text-[1.8rem] mb-2 font-bold">Hoje: Mais de 15 Mil Vidas Transformadas</h3>
                <p className="text-[1.1rem] leading-relaxed">Com um corpo docente qualificado e uma administração eficaz, a academia já formou mais de 15 mil alunos, criando profissionais, apreciadores e realizando sonhos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <h2 className="text-center text-dark-blue text-[2.2rem] mb-10 font-bold">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <h4 className="text-primary text-2xl font-bold border-b-2 border-primary pb-2.5 mt-0 mb-5 inline-block">
                Missão
              </h4>
              <p className="text-text-light">Promover o ensino musical de forma simples e prática, superando as expectativas.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <h4 className="text-primary text-2xl font-bold border-b-2 border-primary pb-2.5 mt-0 mb-5 inline-block">
                Visão
              </h4>
              <p className="text-text-light">Conscientizar sobre a importância da música para a qualidade e o estilo de vida.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <h4 className="text-primary text-2xl font-bold border-b-2 border-primary pb-2.5 mt-0 mb-5 inline-block">
                Valores
              </h4>
              <p className="text-text-light">Empatia, humanidade e excelência no servir, respeitando a individualidade de cada aluno.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
