// src/components/CookieBanner.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="fixed bottom-0 left-0 w-full bg-dark-blue text-white/90 py-4 px-5 z-[1000] animate-slide-up shadow-[0_-4px_15px_rgba(0,0,0,0.1)]">
      <div className="max-w-container mx-auto px-5 flex justify-between items-center gap-5 md:flex-row flex-col md:items-center items-start md:gap-5 gap-4">
        <p className="m-0 text-sm text-white/90">
          Nós utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Ao continuar, você concorda com a nossa <Link href="/politica-de-cookies" className="text-white underline font-semibold hover:no-underline">Política de Cookies</Link>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary text-secondary border-none rounded-md py-2.5 px-5 font-semibold cursor-pointer whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0000cc]"
        >
          Aceitar e Fechar
        </button>
      </div>
    </div>
  );
}
