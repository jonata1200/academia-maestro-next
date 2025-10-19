// src/app/page.tsx

'use client';

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import UnitsMap from '@/components/UnitsMap';

// ========================================================
// 2. DEFINIÇÃO DOS ESTILOS (CSS-in-JS)
// ========================================================

// --- Seção Hero ---
const HeroSection = styled.section`
  position: relative;
  color: var(--secondary-color);
  text-align: center;
  background-image: url('https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
  background-size: cover;
  background-position: center center;
  padding: 220px 20px 120px; /* Mais padding superior por causa do header fixo */
  isolation: isolate;

  h1 {
    color: var(--secondary-color);
    font-size: 3.2rem;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 180px 20px 80px;
    h1 { font-size: 2.2rem; }
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 51, 0.8) 0%, rgba(0, 0, 102, 0.6) 50%, rgba(0, 0, 51, 0.8) 100%);
  z-index: -1;
`;

// --- Seções Genéricas da Home ---
const HomeSection = styled.section`
  padding: 80px 0;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 50px;
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
    h2 { font-size: 1.8rem; }
  }
`;

// --- Seção "Por que escolher a Maestro?" ---
const WhyChooseUsSection = styled(HomeSection)`
  background-color: var(--light-gray);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: var(--secondary-color);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  border-top: 3px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
    border-top-color: var(--primary-color);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background-color: #e8e8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// --- Seção de Instrumentos ---
const InstrumentsPreviewSection = styled(HomeSection)`
  overflow-x: hidden;
  h2 { margin-bottom: 70px; }
`;

const scrollAnimation = keyframes`
  to {
    transform: translate(calc(-50% - 10px));
  }
`;

const ScrollerInner = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: ${scrollAnimation} 40s linear infinite;
`;

const InstrumentScroller = styled.div`
  max-width: 100%;
  -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  margin-bottom: 40px;

  &:hover ${ScrollerInner} {
    animation-play-state: paused;
  }
`;

const InstrumentItemCard = styled(Link)`
  position: relative;
  display: block;
  flex: 0 0 240px;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);

    img {
      transform: scale(1.1);
    }
  }

  img {
    transition: transform 0.4s ease;
  }

  h3 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin: 0;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 20, 0.8) 0%, rgba(0, 0, 20, 0) 50%);
`;

const CtaButton = styled(Link)`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.3s, background-color 0.3s;
  border: none;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    background-color: #0000cc;
  }
`;

// --- Seção Banner Clicável (Curso Online) ---
const TrialLessonSection = styled.section`
  min-height: 500px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: url('/violao-puro-e-simples.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    min-height: 280px;
    &:hover {
      transform: none; /* Desativa zoom no mobile */
    }
  }
`;

const BannerLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

// --- Seção de Localização ---
const LocationsSection = styled(HomeSection)``;


// ========================================================
// 3. COMPONENTE REACT
// ========================================================

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
      <HeroSection>
        <HeroOverlay />
        <div className="container">
          <h1>A Música Transforma Vidas. Comece a Sua Transformação.</h1>
          <p>Ensino musical de forma simples e prática, desde 1981.</p>
        </div>
      </HeroSection>

      <WhyChooseUsSection>
        <div className="container">
          <h2>Por que escolher a Maestro?</h2>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <Image src="/experiencia.png" alt="Ícone de Experiência" width={40} height={40} />
              </FeatureIcon>
              <h3>Tradição e Experiência</h3>
              <p>Desde 1981 no mercado, com mais de 15 mil alunos formados e uma metodologia comprovada.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <Image src="/professor.png" alt="Ícone de Professor Qualificado" width={40} height={40} />
              </FeatureIcon>
              <h3>Professores Qualificados</h3>
              <p>Nossa equipe é formada por músicos profissionais e apaixonados pelo ensino.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <Image src="/niveis.png" alt="Ícone de Todos os Níveis" width={40} height={40} />
              </FeatureIcon>
              <h3>Para Todos os Níveis</h3>
              <p>Do iniciante que nunca tocou ao músico que busca aperfeiçoamento profissional.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </WhyChooseUsSection>

      <InstrumentsPreviewSection>
        <div className="container">
          <h2>Escolha um Instrumento para Aprender</h2>
          <InstrumentScroller>
            <ScrollerInner>
              {instrumentList.map((instrument, index) => (
                <InstrumentItemCard href={instrument.href} key={`${instrument.name}-${index}`}>
                  <Image src={instrument.src} alt={instrument.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" />
                  <CardOverlay />
                  <h3>{instrument.name}</h3>
                </InstrumentItemCard>
              ))}
            </ScrollerInner>
          </InstrumentScroller>
          <CtaButton href="/instrumentos">Ver todos os instrumentos</CtaButton>
        </div>
      </InstrumentsPreviewSection>
      
      <TrialLessonSection>
        <BannerLink
          href="https://go.hotmart.com/I101679958C"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Saiba mais sobre o curso Violão Puro e Simples"
        />
      </TrialLessonSection>

      <LocationsSection>
        <div className="container">
          <h2>Encontre a Maestro mais perto de você</h2>
          <UnitsMap />
        </div>
      </LocationsSection>
    </>
  );
}