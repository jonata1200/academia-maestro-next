"use client"; // Este componente usa hooks do React, então precisa ser um Client Component

import Script from 'next/script';

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Renderiza o componente apenas se o GA_ID estiver definido
  if (!gaId) {
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