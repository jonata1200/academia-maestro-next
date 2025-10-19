// src/app/contato/page.tsx

import type { Metadata } from 'next';
import ContatoPageClient from './ContatoPageClient'; // Importa o novo componente

// ========================================================
// METADADOS (SEO) - Fica no Server Component
// ========================================================
export const metadata: Metadata = {
  title: "Contato e Endereços",
  description: "Encontre nossas unidades em Ceilândia e Sobradinho. Agende sua aula experimental de música pelo WhatsApp hoje mesmo!",
  alternates: {
    canonical: '/contato',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function ContatoPage() {
  return <ContatoPageClient />;
}