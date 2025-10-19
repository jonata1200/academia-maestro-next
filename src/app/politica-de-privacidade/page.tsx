// src/app/politica-de-privacidade/page.tsx

import type { Metadata } from 'next';
import PoliticaDePrivacidadePageClient from './PoliticaDePrivacidadePageClient';

// ========================================================
// METADADOS (SEO)
// ========================================================
export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda como a Academia de Música Maestro coleta, utiliza, armazena e protege seus dados pessoais de acordo com a LGPD.",
  alternates: {
    canonical: '/politica-de-privacidade',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function PoliticaDePrivacidadePage() {
  return <PoliticaDePrivacidadePageClient />;
}