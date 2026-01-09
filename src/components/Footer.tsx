// src/components/Footer.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Garantir que o componente está montado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lógica para mostrar o botão "Voltar ao Topo"
  useEffect(() => {
    if (!mounted) return;
    
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [mounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-blue pt-16 mt-auto relative">
      <div className="max-w-container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 md:text-left text-center">
          {/* Coluna 1: Sobre */}
          <div className="min-w-0">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Logo Academia Maestro" width={80} height={80} className="brightness-0 invert h-20 w-auto" />
            </Link>
            <p className="text-white/90 leading-relaxed">Promovendo o ensino musical de forma simples e prática desde 1981.</p>
          </div>
          
          {/* Coluna 2: Navegação */}
          <div className="min-w-0">
            <h4 className="text-white text-lg mb-5 font-semibold relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 md:after:left-0 after:right-0 md:after:right-auto after:w-8 after:h-0.5 after:bg-primary md:after:mx-auto">
              Navegação
            </h4>
            <ul className="list-none p-0">
              <li className="mb-3 text-white/90">
                <Link href="/sobre" className="no-underline text-white/90 transition-all duration-300 relative pb-1 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li className="mb-3 text-white/90">
                <Link href="/instrumentos" className="no-underline text-white/90 transition-all duration-300 relative pb-1 hover:text-white">
                  Instrumentos
                </Link>
              </li>
              <li className="mb-3 text-white/90">
                <Link href="/manutencao" className="no-underline text-white/90 transition-all duration-300 relative pb-1 hover:text-white">
                  Manutenção
                </Link>
              </li>
              <li className="mb-3 text-white/90">
                <a href="https://go.hotmart.com/I101679958C" target="_blank" rel="noopener noreferrer" className="no-underline text-white/90 transition-all duration-300 relative pb-1 hover:text-white">
                  Curso Online
                </a>
              </li>
              <li className="mb-3 text-white/90">
                <Link href="/contato" className="no-underline text-white/90 transition-all duration-300 relative pb-1 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Unidades */}
          <div className="min-w-0">
            <h4 className="text-white text-lg mb-5 font-semibold relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 md:after:left-0 after:right-0 md:after:right-auto after:w-8 after:h-0.5 after:bg-primary md:after:mx-auto">
              Unidades
            </h4>
            <ul className="list-none p-0">
              <li className="mb-3 text-white/90">Ceilândia: (61) 3371-5434</li>
              <li className="mb-3 text-white/90">Sobradinho: (61) 3387-1834</li>
            </ul>
          </div>
          
          {/* Coluna 4: Redes Sociais */}
          <div className="min-w-0">
            <h4 className="text-white text-lg mb-5 font-semibold relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 md:after:left-0 after:right-0 md:after:right-auto after:w-8 after:h-0.5 after:bg-primary md:after:mx-auto">
              Conecte-se
            </h4>
            <div className="flex gap-4 md:justify-start justify-center">
              <a
                href="https://www.instagram.com/academiamaestroceilandia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex justify-center items-center w-10 h-10 bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-primary hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-5 text-center text-sm">
          <p className="text-white/70 m-0">
            &copy; 2026 Academia de Música Maestro. Todos os direitos reservados.
          </p>
          <div className="mt-2.5 text-xs">
            <Link href="/politica-de-privacidade" className="mx-2.5 text-white/70 hover:text-white">
              Política de Privacidade
            </Link>
            <span className="text-white/50">|</span>
            <Link href="/termos-de-uso" className="mx-2.5 text-white/70 hover:text-white">
              Termos de Uso
            </Link>
            <span className="text-white/50">|</span>
            <Link href="/politica-de-cookies" className="mx-2.5 text-white/70 hover:text-white">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`absolute bottom-5 right-5 w-10 h-10 bg-primary text-secondary border-none rounded-full flex justify-center items-center cursor-pointer text-2xl transition-all duration-300 hover:scale-110 ${
          isVisible
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        }`}
      >
        ↑
      </button>
    </footer>
  );
}
