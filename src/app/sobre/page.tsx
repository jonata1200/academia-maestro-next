import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nossa História - Desde 1981 | Academia Maestro",
  description: "Conheça a trajetória da Academia Maestro, uma referência no ensino musical em Brasília desde 1981, com mais de 15 mil alunos formados.",
  
  // ADICIONE ESTE BLOCO
  alternates: {
    canonical: '/sobre',
  },
};

export default function SobrePage() {
  return (
    <main>
      <section className="page-title-section">
        <div className="container">
          <h1>Nossa Trajetória</h1>
          <p>Conheça a história que transformou a Academia Maestro em uma referência na educação musical desde 1981.</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline">
            {/* Item 1: Fundação */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>★</span>
              </div>
              <div className="timeline-content">
                <h3>1981: O Sonho Começa</h3>
                <p>Fundada pelo jovem músico Rivaldo de Sousa Mendes, a academia nasce da paixão e da resiliência, superando desafios para realizar o sonho de ensinar música.</p>
              </div>
            </div>
            {/* Item 2: EME Editora */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>📖</span>
              </div>
              <div className="timeline-content">
                <h3>1987: Expansão com a EME Editora</h3>
                <p>Para alçar voos mais altos, a Maestro funda a EME Editora, focada em criar material didático de alta qualidade, hoje distribuído por todo o Brasil e exterior.</p>
              </div>
            </div>
            {/* Item 3: Legado */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <span>🎓</span>
              </div>
              <div className="timeline-content">
                <h3>Hoje: Mais de 15 Mil Vidas Transformadas</h3>
                <p>Com um corpo docente qualificado e uma administração eficaz, a academia já formou mais de 15 mil alunos, criando profissionais, apreciadores e realizando sonhos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values-section">
        <div className="container">
          <h2>Nossos Pilares</h2>
          <div className="values-grid">
            {/* Card 1: Missão */}
            <div className="value-card">
              <h4>Missão</h4>
              <p>Promover o ensino musical de forma simples e prática, superando as expectativas.</p>
            </div>
            {/* Card 2: Visão */}
            <div className="value-card">
              <h4>Visão</h4>
              <p>Conscientizar sobre a importância da música para a qualidade e o estilo de vida.</p>
            </div>
            {/* Card 3: Valores */}
            <div className="value-card">
              <h4>Valores</h4>
              <p>Empatia, humanidade e excelência no servir, respeitando a individualidade de cada aluno.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
