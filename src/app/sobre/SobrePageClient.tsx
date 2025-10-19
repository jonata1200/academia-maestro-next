// src/app/sobre/SobrePageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';

// ========================================================
// ESTILOS
// ========================================================

const PageWrapper = styled.div`
  /* Adiciona o padding superior para compensar o header fixo */
  padding-top: 100px; 
`;

const PageTitleSection = styled.section`
  padding: 80px 0 50px;
  text-align: center;

  h1 {
    font-size: 2.8rem;
  }
`;

const TimelineSection = styled.section`
  padding: 40px 0 60px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 25px;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: var(--primary-color);
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  padding: 20px 0 20px 70px;
  position: relative;
  margin-bottom: 30px;
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  z-index: 1;
`;

const TimelineContent = styled.div`
  h3 { font-size: 1.8rem; }
  p { font-size: 1.1rem; line-height: 1.7; }
`;

const CoreValuesSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-gray);

  h2 {
    text-align: center;
    color: var(--dark-blue);
    font-size: 2.2rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ValueCard = styled.div`
  background-color: var(--secondary-color);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);

  h4 {
    color: var(--primary-color);
    font-size: 1.5rem;   /* Tamanho do subtítulo */
    font-weight: 700;     /* Garante o negrito */
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
    margin-top: 0;        /* Remove margem superior extra */
    margin-bottom: 20px;
    display: inline-block;
  }

  p {
    color: var(--text-light);
  }
`;

// ========================================================
// COMPONENTE
// ========================================================
export default function SobrePageClient() {
  return (
    <PageWrapper>
      <PageTitleSection>
        <div className="container">
          <h1>Nossa Trajetória</h1>
          <p>Conheça a história que transformou a Academia Maestro em uma referência na educação musical desde 1981.</p>
        </div>
      </PageTitleSection>

      <TimelineSection>
        <div className="container">
          <Timeline>
            <TimelineItem>
              <TimelineIcon><span>★</span></TimelineIcon>
              <TimelineContent>
                <h3>1981: O Sonho Começa</h3>
                <p>Fundada pelo jovem músico Rivaldo de Sousa Mendes, a academia nasce da paixão e da resiliência, superando desafios para realizar o sonho de ensinar música.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon><span>📖</span></TimelineIcon>
              <TimelineContent>
                <h3>1987: Expansão com a EME Editora</h3>
                <p>Para alçar voos mais altos, a Maestro funda a EME Editora, focada em criar material didático de alta qualidade, hoje distribuído por todo o Brasil e exterior.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon><span>🎓</span></TimelineIcon>
              <TimelineContent>
                <h3>Hoje: Mais de 15 Mil Vidas Transformadas</h3>
                <p>Com um corpo docente qualificado e uma administração eficaz, a academia já formou mais de 15 mil alunos, criando profissionais, apreciadores e realizando sonhos.</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </TimelineSection>

      <CoreValuesSection>
        <div className="container">
          <h2>Nossos Pilares</h2>
          <ValuesGrid>
            <ValueCard>
              <h4>Missão</h4>
              <p>Promover o ensino musical de forma simples e prática, superando as expectativas.</p>
            </ValueCard>
            <ValueCard>
              <h4>Visão</h4>
              <p>Conscientizar sobre a importância da música para a qualidade e o estilo de vida.</p>
            </ValueCard>
            <ValueCard>
              <h4>Valores</h4>
              <p>Empatia, humanidade e excelência no servir, respeitando a individualidade de cada aluno.</p>
            </ValueCard>
          </ValuesGrid>
        </div>
      </CoreValuesSection>
    </PageWrapper>
  );
}