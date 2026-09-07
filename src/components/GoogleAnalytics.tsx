"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from '@/lib/site';

const GoogleAnalytics = () => {
  // O ID pode ser configurado por ambiente (NEXT_PUBLIC_GA_ID); o valor
  // abaixo é o fallback usado em produção enquanto não houver variável definida.
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-55HWK9LCEY";

  // LGPD: o GA só carrega após o consentimento explícito do usuário no
  // banner de cookies. Sem consentimento, nenhum script é injetado.
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Consentimento dado em visita anterior?
    if (localStorage.getItem(COOKIE_CONSENT_KEY) === 'true') {
      setHasConsent(true);
    }

    // Consentimento dado agora (aceite no banner dispara o evento)
    const onConsentChange = () => {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) === 'true') {
        setHasConsent(true);
      }
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
  }, []);

  // "0" desativa o GA deliberadamente (ex.: em desenvolvimento)
  if (gaId === "0" || !hasConsent) {
    return null;
  }

  return (
    <>
      {/* O script principal que carrega o gtag.js */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      {/* O script inline que inicializa o dataLayer e configura o gtag */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;