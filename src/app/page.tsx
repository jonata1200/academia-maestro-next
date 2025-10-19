// src/app/page.tsx

import type { Metadata } from 'next';
import HomePageClient from './HomePageClient'; // <-- PASSO 1: Importe o novo componente

// ========================================================
// METADADOS (SEO)
// Agora eles estão em um Server Component, como o Next.js exige.
// ========================================================
export const metadata: Metadata = {
  title: "Academia de Música Maestro | Aulas em Ceilândia e Sobradinho",
  description: "Transforme sua vida com a música. Aulas de violão, teclado, bateria e mais para todos os níveis. Desde 1981 formando músicos.",
  alternates: {
    canonical: '/',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function HomePage() {
  // PASSO 2: Simplesmente retorne o componente de cliente
  return <HomePageClient />;
}