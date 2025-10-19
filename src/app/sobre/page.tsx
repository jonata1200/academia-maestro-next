// src/app/sobre/page.tsx

import type { Metadata } from 'next';
import SobrePageClient from './SobrePageClient'; // <-- Importa o novo componente

// ========================================================
// METADADOS (SEO) - Fica aqui, no Server Component
// ========================================================
export const metadata: Metadata = {
  title: "Nossa História - Desde 1981",
  description: "Conheça a trajetória da Academia Maestro, uma referência no ensino musical em Brasília desde 1981, com mais de 15 mil alunos formados.",
  alternates: {
    canonical: '/sobre',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function SobrePage() {
  return <SobrePageClient />;
}