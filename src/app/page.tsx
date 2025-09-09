import Link from 'next/link'; // <-- PASSO 1: IMPORTAR O LINK

export default function HomePage() {
  return (
    <main>
      {/* SEÇÃO HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>A Música Transforma Vidas. Comece a Sua Transformação.</h1>
          <p>Ensino musical de forma simples e prática, desde 1981.</p>
        </div>
      </section>

      {/* SEÇÃO 'POR QUE ESCOLHER A MAESTRO?' */}
      <section className="why-choose-us home-section">
        <div className="container">
          <h2>Por que escolher a Maestro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/experiencia.png" alt="Ícone de Experiência" />
              </div>
              <h3>Tradição e Experiência</h3>
              <p>Desde 1981 no mercado, com mais de 15 mil alunos formados e uma metodologia comprovada.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/professor.png" alt="Ícone de Professor Qualificado" />
              </div>
              <h3>Professores Qualificados</h3>
              <p>Nossa equipe é formada por músicos profissionais e apaixonados pelo ensino.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/niveis.png" alt="Ícone de Todos os Níveis" />
              </div>
              <h3>Para Todos os Níveis</h3>
              <p>Do iniciante que nunca tocou ao músico que busca aperfeiçoamento profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INSTRUMENTOS */}
      <section className="instruments-preview">
        <div className="container">
          <h2>Escolha um Instrumento para Aprender</h2>
          <div className="instrument-scroller" data-animated="true">
            <div className="scroller-inner">
              {/* CORRIGIDO: Links internos usam <Link> */}
              <Link href="/instrumentos" className="instrument-item-card"><img src="/violao.jpg" alt="Violão" /><div className="card-overlay"></div><h3>Violão</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/guitarra.webp" alt="Guitarra" /><div className="card-overlay"></div><h3>Guitarra</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/bateria.webp" alt="Bateria" /><div className="card-overlay"></div><h3>Bateria</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/teclado.webp" alt="Teclado" /><div className="card-overlay"></div><h3>Teclado</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/violino.jpg" alt="Violino" /><div className="card-overlay"></div><h3>Violino</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/violao.jpg" alt="Violão" /><div className="card-overlay"></div><h3>Violão</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/guitarra.webp" alt="Guitarra" /><div className="card-overlay"></div><h3>Guitarra</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/bateria.webp" alt="Bateria" /><div className="card-overlay"></div><h3>Bateria</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/teclado.webp" alt="Teclado" /><div className="card-overlay"></div><h3>Teclado</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><img src="/violino.jpg" alt="Violino" /><div className="card-overlay"></div><h3>Violino</h3></Link>
            </div>
          </div>
          <Link href="/instrumentos" className="cta-button">Ver todos os instrumentos</Link>
        </div>
      </section>
      
      {/* SEÇÃO VIOLÃO PURO E SIMPLES */}
      <section className="trial-lesson-section">
        {/* Este link cobrirá toda a seção, funcionando como uma camada clicável */}
        <a
          href="https://go.hotmart.com/I101679958C"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-link"
          aria-label="Saiba mais sobre o curso Violão Puro e Simples" 
        ></a>
      </section>

      {/* SEÇÃO MAPAS DAS UNIDADES */}
      <section className="locations-section home-section">
        <div className="container">
          <h2>Encontre a Maestro mais perto de você</h2>
          <div className="maps-grid">
            <div className="map-card">
              <h3>Maestro Ceilândia</h3>
              <p>St. M CNM 1 Bloco G Sala 315</p>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61417.86053077997!2d-48.14103086556073!3d-15.824174320945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccebc2a19a29%3A0x8ec89d8de25bf9c2!2sAcademia%20de%20M%C3%BAsica%20Maestro%20Ceil%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1755189029158!5m2!1spt-BR!2sbr" width="400" height="300" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* CORRIGIDO: Link externo usa <a> */}
              <a href="https://api.whatsapp.com/send?phone=5561996392573&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6" target="_blank" rel="noopener noreferrer" className="map-button">Agendar Aula Experimental</a>
            </div>
            <div className="map-card">
              <h3>Maestro Sobradinho</h3>
              <p>Quadra 08 Bloco 1 Lote 5 Loja 1</p>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.986106128716!2d-47.8747074783203!3d-15.645034699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a407e75555555%3A0xfd983bc81e58783a!2sEscola%20de%20M%C3%BAsica%20Academia%20Maestro!5e0!3m2!1spt-BR!2sbr!4v1755189252685!5m2!1spt-BR!2sbr" width="400" height="300" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                        
              </div>
              {/* CORRIGIDO: Link externo usa <a> */}
              <a href="https://api.whatsapp.com/send?phone=5561983171825&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%F0%9F%8E%B6" target="_blank" rel="noopener noreferrer" className="map-button">Agendar Aula Experimental</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}