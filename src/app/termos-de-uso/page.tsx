// src/app/termos-de-uso/page.tsx

import type { Metadata } from 'next';
import TermosDeUsoPageClient from './TermosDeUsoPageClient'; // Importa o novo componente

// ========================================================
// METADADOS (SEO)
// ========================================================
export const metadata: Metadata = {
  title: "Termos e Condições de Uso",
  description: "Consulte os termos e condições que regem o uso do site e dos serviços oferecidos pela Academia de Música Maestro.",
  alternates: {
    canonical: '/termos-de-uso',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function TermosDeUsoPage() {
  return <TermosDeUsoPageClient />;
}