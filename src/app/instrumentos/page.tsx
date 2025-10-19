// src/app/instrumentos/page.tsx

import type { Metadata } from 'next';
import InstrumentosPageClient from './InstrumentosPageClient'; // Importa o novo componente

// ========================================================
// METADADOS (SEO)
// ========================================================
export const metadata: Metadata = {
  title: "Cursos de Instrumentos Musicais",
  description: "Aprenda violão, guitarra, piano, bateria, saxofone e mais. Cursos para todos os níveis em Ceilândia e Sobradinho. Comece sua jornada musical.",
  alternates: {
    canonical: '/instrumentos',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function InstrumentosPage() {
  return <InstrumentosPageClient />;
}