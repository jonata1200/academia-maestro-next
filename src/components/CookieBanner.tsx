// src/components/CookieBanner.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Button } from '@/design-system/components';
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from '@/lib/site';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica no localStorage se o usuário já respondeu ao banner.
    // Isso só roda no cliente, após a página ser carregada.
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Sem resposta anterior, mostra o banner.
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (value: 'true' | 'false') => {
    // Salva a resposta no localStorage e esconde o banner.
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setShowBanner(false);
    // Avisa o site da resposta (ex.: GoogleAnalytics só carrega após aceite)
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
  };

  const handleAccept = () => saveConsent('true');
  const handleReject = () => saveConsent('false');

  // Se o banner não deve ser mostrado (seja por já ter respondido ou
  // na renderização inicial do servidor), não renderiza nada.
  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-dark-blue text-white/90 py-4 px-5 z-[1000] animate-slide-up shadow-[0_-4px_15px_rgba(0,0,0,0.1)]">
      <Container className="flex justify-between items-center gap-5 md:flex-row flex-col md:items-center items-start md:gap-5 gap-4">
        <p className="m-0 text-sm text-white/90">
          Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Você pode aceitar ou recusar o uso. Saiba mais na nossa <Link href="/politica-de-cookies" className="text-white underline font-semibold hover:no-underline">Política de Cookies</Link>.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Button
            onClick={handleAccept}
            variant="primary"
            className="whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
          >
            Aceitar
          </Button>
          <Button
            onClick={handleReject}
            variant="secondary"
            className="whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
          >
            Recusar
          </Button>
        </div>
      </Container>
    </div>
  );
}