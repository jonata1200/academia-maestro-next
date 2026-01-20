// src/app/HomePageClient.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UnitsMap from '@/components/UnitsMap';
import { Button, Container, Card } from '@/design-system/components';

const instruments = [
  { href: "/instrumentos", src: "/violao.jpg", alt: "Violão", name: "Violão" },
  { href: "/instrumentos", src: "/guitarra.webp", alt: "Guitarra", name: "Guitarra" },
  { href: "/instrumentos", src: "/bateria.webp", alt: "Bateria", name: "Bateria" },
  { href: "/instrumentos", src: "/teclado.webp", alt: "Teclado", name: "Teclado" },
  { href: "/instrumentos", src: "/violino.jpg", alt: "Violino", name: "Violino" },
];
const instrumentList = [...instruments, ...instruments]; // Duplica a lista para o efeito de scroll infinito

export default function HomePageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white text-center bg-[url('https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center min-h-[400px] px-5 isolate md:pt-[220px] md:pb-[120px] md:px-5 md:flex-none md:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/80 via-[rgba(0,0,102,0.6)] to-dark-blue/80 -z-10"></div>
        <Container className="relative z-10">
          <h1 className="text-white text-3xl md:text-[3.2rem] md:leading-tight mb-4 font-bold">A Música Transforma Vidas<span className="hidden md:inline">. Comece a Sua Transformação.</span></h1>
          <p className="text-white/90 text-xl md:text-[1.3rem]">Ensino musical de forma simples e prática, desde 1981.</p>
        </Container>
      </section>

      {/* Seção "Por que escolher a Maestro?" */}
      <section className="py-20 md:py-16 text-center bg-light-gray">
        <Container>
          <h2 className="text-[2.2rem] mb-12 font-bold md:text-[2.2rem]">Por que escolher a Maestro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="outlined" className="text-center transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-full flex justify-center items-center">
                <Image src="/experiencia.png" alt="Ícone de Experiência" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Tradição e Experiência</h3>
              <p>Desde 1981 no mercado, com mais de 15 mil alunos formados e uma metodologia comprovada.</p>
            </Card>
            <Card variant="outlined" className="text-center transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-full flex justify-center items-center">
                <Image src="/professor.png" alt="Ícone de Professor Qualificado" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Professores Qualificados</h3>
              <p>Nossa equipe é formada por músicos profissionais e apaixonados pelo ensino.</p>
            </Card>
            <Card variant="outlined" className="text-center transition-all duration-300 border-t-[3px] border-t-transparent hover:-translate-y-2.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] hover:border-t-primary group">
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-full flex justify-center items-center">
                <Image src="/niveis.png" alt="Ícone de Todos os Níveis" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Para Todos os Níveis</h3>
              <p>Do iniciante que nunca tocou ao músico que busca aperfeiçoamento profissional.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Seção de Instrumentos */}
      <section className="py-20 md:py-16 text-center overflow-x-hidden">
        <Container>
          <h2 className="text-[2.2rem] mb-16 font-bold md:text-[2.2rem]">Escolha um Instrumento para Aprender</h2>
          <div className="max-w-full -webkit-mask-[linear-gradient(90deg,transparent,white_10%,white_90%,transparent)] mask-[linear-gradient(90deg,transparent,white_10%,white_90%,transparent)] mb-10 instrument-scroller">
            <div className="flex gap-5 w-max animate-scroll scroller-inner">
              {instrumentList.map((instrument, index) => (
                <Link
                  href={instrument.href}
                  key={`${instrument.name}-${index}`}
                  className="relative block flex-[0_0_240px] h-80 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 no-underline group"
                >
                  <Image
                    src={instrument.src}
                    alt={instrument.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,20,0.8)] from-0% via-[rgba(0,0,20,0.4)] via-50% to-transparent to-50%"></div>
                  <h3 className="absolute bottom-5 left-5 text-white text-2xl m-0">{instrument.name}</h3>
                </Link>
              ))}
            </div>
          </div>
          <Button href="/instrumentos" variant="primary" size="lg">
            Ver todos os instrumentos
          </Button>
        </Container>
      </section>

      {/* Seção de Localização */}
      <section className="py-20 md:py-16 text-center">
        <Container>
          <h2 className="text-[2.2rem] mb-12 font-bold md:text-[2.2rem]">Encontre a Maestro mais perto de você</h2>
          <UnitsMap />
        </Container>
      </section>
    </>
  );
}
