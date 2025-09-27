import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import UnitsMap from '@/components/UnitsMap';

// ADICIONE ESTE BLOCO DE CÓDIGO
export const metadata: Metadata = {
  title: "Academia de Música Maestro | Aulas em Ceilândia e Sobradinho",
  description: "Transforme sua vida com a música. Aulas de violão, teclado, bateria e mais para todos os níveis. Desde 1981 formando músicos.",
};
// FIM DO BLOCO

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
                <Image src="/experiencia.png" alt="Ícone de Experiência" width={40} height={40} />
              </div>
              <h3>Tradição e Experiência</h3>
              <p>Desde 1981 no mercado, com mais de 15 mil alunos formados e uma metodologia comprovada.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/professor.png" alt="Ícone de Professor Qualificado" width={40} height={40} />
              </div>
              <h3>Professores Qualificados</h3>
              <p>Nossa equipe é formada por músicos profissionais e apaixonados pelo ensino.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/niveis.png" alt="Ícone de Todos os Níveis" width={40} height={40} />
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
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/violao.jpg" alt="Violão" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Violão</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/guitarra.webp" alt="Guitarra" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Guitarra</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/bateria.webp" alt="Bateria" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Bateria</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/teclado.webp" alt="Teclado" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Teclado</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/violino.jpg" alt="Violino" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Violino</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/violao.jpg" alt="Violão" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Violão</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/guitarra.webp" alt="Guitarra" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Guitarra</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/bateria.webp" alt="Bateria" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Bateria</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/teclado.webp" alt="Teclado" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Teclado</h3></Link>
              <Link href="/instrumentos" className="instrument-item-card"><Image src="/violino.jpg" alt="Violino" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" /><div className="card-overlay"></div><h3>Violino</h3></Link>
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
          
          {/* PASSO 2: Substitua o grid de mapas pelo componente */}
          <UnitsMap />

        </div>
      </section>
    </main>
  );
}