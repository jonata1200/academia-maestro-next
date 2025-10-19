import type { Metadata } from 'next';
import UnitsMap from '@/components/UnitsMap'; // <-- PASSO 1: Importe o componente

export const metadata: Metadata = {
  title: "Contato e Endereços | Academia Maestro",
  description: "Encontre nossas unidades em Ceilândia e Sobradinho. Agende sua aula experimental de música pelo WhatsApp hoje mesmo!",
  
  // ADICIONE ESTE BLOCO
  alternates: {
    canonical: '/contato',
  },
};

export default function ContatoPage() {
  return (
    <main className="generic-page-content">
      <div className="container">
        <h1>Nossas Unidades</h1>
        <p>Estamos prontos para receber você. Escolha a unidade mais próxima e agende sua aula experimental pelo WhatsApp!</p>

        {/* PASSO 2: Substitua todo o código duplicado pela tag do componente */}
        <UnitsMap />
        
      </div>
    </main>
  );
}