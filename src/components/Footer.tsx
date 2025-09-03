import Link from 'next/link'; // <-- PASSO 1: IMPORTAR O LINK

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          {/* Coluna 1: Sobre */}
          <div className="footer-col">
            <Link href="/" className="footer-logo">
              <img src="/logo.png" alt="Logo Academia Maestro" />
            </Link>
            <p>Promovendo o ensino musical de forma simples e prática desde 1981.</p>
          </div>
          {/* Coluna 2: Navegação */}
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              {/* CORRIGIDO: Links internos usam <Link> */}
              <li><Link href="/sobre">Sobre Nós</Link></li>
              <li><Link href="/instrumentos">Instrumentos</Link></li>
              {/* CORRIGIDO: Link externo usa <a> */}
              <li><a href="https://go.hotmart.com/I101679958C" target="_blank" rel="noopener noreferrer">Curso Online</a></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          {/* Coluna 3: Unidades */}
          <div className="footer-col">
            <h4>Unidades</h4>
            <ul>
              <li>Ceilândia: (61) 3371-5434</li>
              <li>Sobradinho: (61) 3387-1834</li>
            </ul>
          </div>
          {/* Coluna 4: Redes Sociais */}
          <div className="footer-col">
            <h4>Conecte-se</h4>
            <div className="social-links">
              {/* CORRIGIDO: Link externo usa <a> */}
              <a 
                href="https://www.instagram.com/academiamaestroceilandia/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Academia de Música Maestro. Todos os direitos reservados.</p>
        </div>
      </div>
      <button id="back-to-top" aria-label="Voltar ao topo">↑</button>
    </footer>
  );
}