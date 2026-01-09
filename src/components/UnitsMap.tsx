// src/components/UnitsMap.tsx

'use client';

import React from 'react';

export default function UnitsMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Unidade 1: Ceilândia */}
      <div className="border border-gray-300 rounded-xl p-5 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-center flex flex-col">
        <h3 className="text-primary text-xl mb-1">Maestro Ceilândia</h3>
        <p className="text-text-light min-h-[40px] mb-5">St. M CNM 1 Bloco G Sala 315</p>
        <div className="rounded-lg overflow-hidden leading-none">
          <iframe
            title="Mapa da localização da Academia Maestro em Ceilândia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61417.86053077997!2d-48.14103086556073!3d-15.824174320945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccebc2a19a29%3A0x8ec89d8de25bf9c2!2sAcademia%20de%20M%C3%BAsica%20Maestro%20Ceil%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1755189029158!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[250px]"
          ></iframe>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5561996392573&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 mt-5 border-2 border-primary text-primary bg-transparent rounded-lg text-center no-underline font-semibold transition-all duration-300 hover:bg-primary hover:text-secondary"
        >
          Agendar Aula Experimental
        </a>
      </div>

      {/* Unidade 2: Sobradinho */}
      <div className="border border-gray-300 rounded-xl p-5 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-center flex flex-col">
        <h3 className="text-primary text-xl mb-1">Maestro Sobradinho</h3>
        <p className="text-text-light min-h-[40px] mb-5">Quadra 08 Bloco 1 Lote 5 Loja 1</p>
        <div className="rounded-lg overflow-hidden leading-none">
          <iframe
            title="Mapa da localização da Academia Maestro em Sobradinho"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.986106128716!2d-47.8747074783203!3d-15.645034699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a407e75555555%3A0xfd983bc81e58783a!2sEscola%20de%20M%C3%BAsica%20Academia%20Maestro!5e0!3m2!1spt-BR!2sbr!4v1755189252685!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[250px]"
          ></iframe>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5561983171825&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 mt-5 border-2 border-primary text-primary bg-transparent rounded-lg text-center no-underline font-semibold transition-all duration-300 hover:bg-primary hover:text-secondary"
        >
          Agendar Aula Experimental
        </a>
      </div>
    </div>
  );
}
