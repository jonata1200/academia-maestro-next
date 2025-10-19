// src/app/manutencao/page.tsx

import type { Metadata } from 'next';
import ManutencaoPageClient from './ManutencaoPageClient'; // Importa o novo componente

// ========================================================
// METADADOS (SEO)
// ========================================================
export const metadata: Metadata = {
  title: "Conserto e Manutenção de Instrumentos",
  description: "Serviços de luthieria profissional em Brasília. Regulagem, reparos elétricos e estruturais para guitarras, baixos e outros instrumentos.",
  alternates: {
    canonical: '/manutencao',
  },
};

// ========================================================
// COMPONENTE SERVIDOR (PÁGINA)
// ========================================================
export default function ManutencaoPage() {
  return <ManutencaoPageClient />;
}