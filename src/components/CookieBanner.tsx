// src/components/CookieBanner.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

// ========================================================
// ESTILOS
// ========================================================

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--dark-blue);
  color: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  z-index: 1000;
  animation: ${slideUp} 0.5s ease-out;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }
`;

const BannerContent = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);

  a {
    color: var(--secondary-color);
    text-decoration: underline;
    font-weight: 600;
    
    &:hover {
      text-decoration: none;
    }
  }
`;

const AcceptButton = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap; /* Impede que o texto quebre */
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #0000cc;
  }
`;

// ========================================================
// COMPONENTE
// ========================================================

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica no localStorage se o consentimento já foi dado.
    // Isso só roda no cliente, após a página ser carregada.
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Se não houver consentimento, mostra o banner.
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Salva o consentimento no localStorage e esconde o banner.
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  // Se o banner não deve ser mostrado (seja por já ter consentido ou
  // na renderização inicial do servidor), não renderiza nada.
  if (!showBanner) {
    return null;
  }

  return (
    <BannerWrapper>
      <div className="container">
        <BannerContent>
          Nós utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Ao continuar, você concorda com a nossa <Link href="/politica-de-cookies">Política de Cookies</Link>.
        </BannerContent>
        <AcceptButton onClick={handleAccept}>
          Aceitar e Fechar
        </AcceptButton>
      </div>
    </BannerWrapper>
  );
}