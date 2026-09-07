// src/components/UnitsMap.tsx

'use client';

import React from 'react';
import { UNITS, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

export default function UnitsMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {UNITS.map((unit) => (
        <div
          key={unit.id}
          className="border border-gray-300 rounded-xl p-5 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-center flex flex-col"
        >
          <h3 className="text-primary text-xl mb-1">{unit.name}</h3>
          <p className="text-text-light min-h-[40px] mb-5">{unit.address}</p>
          <div className="rounded-lg overflow-hidden leading-none">
            <iframe
              title={`Mapa da localização da Academia Maestro em ${unit.city}`}
              src={unit.mapsEmbed}
              width="400"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-[250px]"
            ></iframe>
          </div>
          <a
            href={whatsappUrl(unit.whatsapp, DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 mt-5 border-2 border-primary text-primary bg-transparent rounded-lg text-center no-underline font-semibold transition-all duration-300 hover:bg-primary hover:text-secondary"
          >
            Agendar Aula Experimental
          </a>
        </div>
      ))}
    </div>
  );
}