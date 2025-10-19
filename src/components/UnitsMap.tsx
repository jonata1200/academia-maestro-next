// src/components/UnitsMap.tsx

'use client';

import React from 'react';
import styled from 'styled-components';

// ========================================================
// 1. DEFINIÇÃO DOS ESTILOS (CSS-in-JS)
// ========================================================

const MapsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 40px; /* Adiciona um espaço acima dos mapas */
`;

const MapCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  p {
    color: var(--text-light);
    min-height: 40px; /* Garante alinhamento se um endereço tiver mais linhas */
    margin-bottom: 20px;
  }
`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  line-height: 0; /* Remove espaço extra abaixo do iframe */

  iframe {
    border: 0;
    width: 100%;
    height: 250px;
  }
`;

const MapButton = styled.a`
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: auto; /* Empurra o botão para o final do card */
  margin-top: 20px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background-color: transparent;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;

// ========================================================
// 2. COMPONENTE REACT
// ========================================================

export default function UnitsMap() {
  return (
    <MapsGrid>
      {/* Unidade 1: Ceilândia */}
      <MapCard>
        <h3>Maestro Ceilândia</h3>
        <p>St. M CNM 1 Bloco G Sala 315</p>
        <MapContainer>
          <iframe
            title="Mapa da localização da Academia Maestro em Ceilândia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61417.86053077997!2d-48.14103086556073!3d-15.824174320945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccebc2a19a29%3A0x8ec89d8de25bf9c2!2sAcademia%20de%20M%C3%BAsica%20Maestro%20Ceil%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1755189029158!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
        <MapButton href="https://api.whatsapp.com/send?phone=5561996392573&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6" target="_blank" rel="noopener noreferrer">
          Agendar Aula Experimental
        </MapButton>
      </MapCard>

      {/* Unidade 2: Sobradinho */}
      <MapCard>
        <h3>Maestro Sobradinho</h3>
        <p>Quadra 08 Bloco 1 Lote 5 Loja 1</p>
        <MapContainer>
          <iframe
            title="Mapa da localização da Academia Maestro em Sobradinho"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.986106128716!2d-47.8747074783203!3d-15.645034699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a407e75555555%3A0xfd983bc81e58783a!2sEscola%20de%20M%C3%BAsica%20Academia%20Maestro!5e0!3m2!1spt-BR!2sbr!4v1755189252685!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
        <MapButton href="https://api.whatsapp.com/send?phone=5561983171825&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6" target="_blank" rel="noopener noreferrer">
          Agendar Aula Experimental
        </MapButton>
      </MapCard>
    </MapsGrid>
  );
}