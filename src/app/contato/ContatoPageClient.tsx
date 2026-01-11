// src/app/contato/ContatoPageClient.tsx

'use client';

import React from 'react';
import UnitsMap from '@/components/UnitsMap';

export default function ContatoPageClient() {
  return (
    <div className="pt-[180px] pb-20">
      <div className="container">
        <h1 className="text-center text-[2.8rem] mb-4 font-bold">Nossas Unidades</h1>
        <p className="text-center max-w-[700px] mx-auto mb-5 text-xl text-text-light">
          Estamos prontos para receber você. Escolha a unidade mais próxima e agende sua aula experimental pelo WhatsApp!
        </p>
        <UnitsMap />
      </div>
    </div>
  );
}
