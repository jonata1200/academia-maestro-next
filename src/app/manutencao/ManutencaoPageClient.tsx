// src/app/manutencao/ManutencaoPageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';

// ========================================================
// ESTILOS
// ========================================================

const MaintenanceHero = styled.section`
  position: relative;
  color: var(--secondary-color);
  text-align: center;
  background-image: url('/manutencao-bg.jpg');
  background-size: cover;
  background-position: center 60%;
  background-repeat: no-repeat;
  padding: 230px 20px 150px; /* Padding ajustado para header fixo */
  isolation: isolate;

  h1 { color: var(--secondary-color); font-size: 3rem; }
  p { color: rgba(255, 255, 255, 0.9); font-size: 1.2rem; }

  @media(max-width: 768px) {
    padding: 180px 20px 100px;
    h1 { font-size: 2.2rem; }
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 51, 0.7) 0%, rgba(0, 0, 51, 0.5) 100%);
  z-index: -1;
`;

const GenericSection = styled.section`
  padding: 80px 0;
  text-align: center;
  h2 { font-size: 2.2rem; margin-bottom: 50px; }
`;

const WhyChooseUsSection = styled(GenericSection)`
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

  .feature-icon {
    font-size: 2rem;
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    background-color: #e8e8ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
`;

const ServiceDetailsSection = styled(GenericSection)``;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background-color: var(--secondary-color);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border-top: 4px solid var(--primary-color);
  text-align: left;

  h4 { font-size: 1.5rem; color: var(--dark-blue); margin-bottom: 20px; }
  ul { list-style: none; padding: 0; }
  li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 25px;
    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CtaSection = styled.section`
  padding: 60px 0;
  background-color: var(--light-gray);
  text-align: center;

  h3 { font-size: 1.8rem; }
`;

const CtaButton = styled.a`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 15px 35px;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    background-color: #0000cc;
  }
`;

// ========================================================
// COMPONENTE
// ========================================================
export default function ManutencaoPageClient() {
  const mensagemWhatsapp = encodeURIComponent("Olá! Vi no site que vocês fazem conserto e manutenção de instrumentos e gostaria de um orçamento.");
  const whatsappLink = `https://wa.me/5561996392573?text=${mensagemWhatsapp}`;

  return (
    <>
      <MaintenanceHero>
        <HeroOverlay />
        <div className="container">
          <h1>Conserto e Manutenção de Instrumentos</h1>
          <p>Cuidado profissional para que sua paixão pela música nunca pare.</p>
        </div>
      </MaintenanceHero>

      <WhyChooseUsSection>
        <div className="container">
          <h2>Por que escolher a Maestro?</h2>
          <FeaturesGrid>
            <FeatureCard>
              <div className="feature-icon"><span>🛠️</span></div>
              <h3>Técnicos Especializados</h3>
              <p>Nossa equipe possui anos de experiência com todos os tipos de instrumentos.</p>
            </FeatureCard>
            <FeatureCard>
              <div className="feature-icon"><span>⚙️</span></div>
              <h3>Peças de Qualidade</h3>
              <p>Utilizamos apenas componentes e peças de reposição de alta qualidade e confiança.</p>
            </FeatureCard>
            <FeatureCard>
              <div className="feature-icon"><span>✅</span></div>
              <h3>Serviço com Garantia</h3>
              <p>Todos os nossos reparos e manutenções possuem garantia, para sua total tranquilidade.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </WhyChooseUsSection>

      <ServiceDetailsSection>
        <div className="container">
          <h2>Nossos Serviços Detalhados</h2>
          <ServiceGrid>
            <ServiceCard>
              <h4>Regulagem e Setup</h4>
              <ul>
                <li>Regulagem completa de guitarras e baixos</li>
                <li>Ajuste de altura de cordas e oitavas</li>
                <li>Troca e ajuste de pestana e rastilho</li>
                <li>Retífica e troca de trastes</li>
              </ul>
            </ServiceCard>
            <ServiceCard>
              <h4>Elétrica e Captadores</h4>
              <ul>
                <li>Manutenção e troca de captadores</li>
                <li>Troca de potenciômetros, chaves e jacks</li>
                <li>Blindagem de cavidades elétricas</li>
                <li>Instalação de circuitos ativos e pré-amps</li>
              </ul>
            </ServiceCard>
            <ServiceCard>
              <h4>Reparos Estruturais</h4>
              <ul>
                <li>Colagem de headstock e cavalete</li>
                <li>Reparos em rachaduras no tampo e corpo</li>
                <li>Revisão e hidratação da escala</li>
                <li>Limpeza e polimento geral do instrumento</li>
              </ul>
            </ServiceCard>
          </ServiceGrid>
        </div>
      </ServiceDetailsSection>
      
      <CtaSection>
        <div className="container">
          <h3>Pronto para dar vida nova ao seu instrumento?</h3>
          <p>Entre em contato pelo WhatsApp e solicite um orçamento sem compromisso.</p>
          <CtaButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Falar com um Especialista
          </CtaButton>
        </div>
      </CtaSection>
    </>
  );
}