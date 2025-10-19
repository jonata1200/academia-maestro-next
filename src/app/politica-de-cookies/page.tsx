// src/app/politica-de-cookies/page.tsx

import type { Metadata } from 'next';
import PoliticaDeCookiesPageClient from './PoliticaDeCookiesPageClient';

// ========================================================
// METADADOS (SEO)
// ========================================================
export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Informações sobre como e por que a Academia de Música Maestro utiliza cookies para otimizar sua experiência em nosso site.",
  alternates: {
    canonical: '/politica-de-cookies',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function PoliticaDeCookiesPage() {
  return <PoliticaDeCookiesPageClient />;
}