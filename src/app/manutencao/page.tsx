import type { Metadata } from 'next';

// ADICIONE ESTE BLOCO DE CÓDIGO
export const metadata: Metadata = {
  title: "Conserto e Manutenção de Instrumentos | Luthieria Maestro",
  description: "Serviços de luthieria profissional em Brasília. Regulagem, reparos elétricos e estruturais para guitarras, baixos e outros instrumentos.",
};
// FIM DO BLOCO

export default function ManutencaoPage() {
  const mensagemWhatsapp = encodeURIComponent("Olá! Vi no site que vocês fazem conserto e manutenção de instrumentos e gostaria de um orçamento.");
  const whatsappLink = `https://wa.me/5561996392573?text=${mensagemWhatsapp}`;

  return (
    <main>
      {/* SEÇÃO 1: HERO BANNER VISUAL */}
      <section className="page-hero maintenance-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Conserto e Manutenção de Instrumentos</h1>
          <p>Cuidado profissional para que sua paixão pela música nunca pare.</p>
        </div>
      </section>

      {/* SEÇÃO 2: PONTOS FORTES / VANTAGENS */}
      <section className="why-choose-us home-section">
        <div className="container">
          <h2>Por que escolher a Maestro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><span>🛠️</span></div>
              <h3>Técnicos Especializados</h3>
              <p>Nossa equipe possui anos de experiência com todos os tipos de instrumentos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>⚙️</span></div>
              <h3>Peças de Qualidade</h3>
              <p>Utilizamos apenas componentes e peças de reposição de alta qualidade e confiança.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>✅</span></div>
              <h3>Serviço com Garantia</h3>
              <p>Todos os nossos reparos e manutenções possuem garantia, para sua total tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: GRID DE SERVIÇOS DETALHADOS */}
      <section className="service-details-section">
        <div className="container">
          <h2>Nossos Serviços Detalhados</h2>
          <div className="service-grid">
            <div className="service-card">
              <h4>Regulagem e Setup</h4>
              <ul>
                <li>Regulagem completa de guitarras e baixos</li>
                <li>Ajuste de altura de cordas e oitavas</li>
                <li>Troca e ajuste de pestana e rastilho</li>
                <li>Retífica e troca de trastes</li>
              </ul>
            </div>
            <div className="service-card">
              <h4>Elétrica e Captadores</h4>
              <ul>
                <li>Manutenção e troca de captadores</li>
                <li>Troca de potenciômetros, chaves e jacks</li>
                <li>Blindagem de cavidades elétricas</li>
                <li>Instalação de circuitos ativos e pré-amps</li>
              </ul>
            </div>
            <div className="service-card">
              <h4>Reparos Estruturais</h4>
              <ul>
                <li>Colagem de headstock e cavalete</li>
                <li>Reparos em rachaduras no tampo e corpo</li>
                <li>Revisão e hidratação da escala</li>
                <li>Limpeza e polimento geral do instrumento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEÇÃO 4: CHAMADA PARA AÇÃO (CTA) */}
      <section className="cta-section-maintenance">
        <div className="container">
          <h3>Pronto para dar vida nova ao seu instrumento?</h3>
          <p>Entre em contato pelo WhatsApp e solicite um orçamento sem compromisso.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button large">
            Falar com um Especialista
          </a>
        </div>
      </section>
    </main>
  );
}