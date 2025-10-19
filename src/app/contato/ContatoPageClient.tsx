// src/app/contato/ContatoPageClient.tsx

'use client';

import React from 'react';
import styled from 'styled-components';
import UnitsMap from '@/components/UnitsMap';

// ========================================================
// ESTILOS
// ========================================================
const PageWrapper = styled.div`
  padding: 180px 0 80px; /* Padding superior para compensar o Header fixo */
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 15px;
`;

const PageSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: var(--text-light);
`;

// ========================================================
// COMPONENTE
// ========================================================
export default function ContatoPageClient() {
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Nossas Unidades</PageTitle>
        <PageSubtitle>
          Estamos prontos para receber você. Escolha a unidade mais próxima e agende sua aula experimental pelo WhatsApp!
        </PageSubtitle>
        <UnitsMap />
      </div>
    </PageWrapper>
  );
}