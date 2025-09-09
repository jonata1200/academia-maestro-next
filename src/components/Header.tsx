"use client";

import { useEffect } from 'react';
import Link from 'next/link'; // <-- ESTA É A LINHA QUE FALTAVA

// Garantindo que a exportação seja 'default'
export default function Header() { 
  useEffect(() => {
    // A lógica do seu menu hambúrguer continua aqui, sem alterações...
    const menuToggle = document.getElementById('menu-toggle');
    const navDesktop = document.querySelector('.nav-desktop');
    
    if (menuToggle && navDesktop) {
      const handleMenuToggle = () => {
        menuToggle.classList.toggle('active');
        navDesktop.classList.toggle('active');
        
        if (navDesktop.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      };
      
      menuToggle.addEventListener('click', handleMenuToggle);
      
      const handleOverlayClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (navDesktop.classList.contains('active') && 
            !navDesktop.contains(target) && 
            !menuToggle.contains(target)) {
          menuToggle.classList.remove('active');
          navDesktop.classList.remove('active');
          document.body.style.overflow = '';
        }
      };
      
      document.addEventListener('click', handleOverlayClick);
      
      const menuLinks = navDesktop.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navDesktop.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
      
      return () => {
        menuToggle.removeEventListener('click', handleMenuToggle);
        document.removeEventListener('click', handleOverlayClick);
        menuLinks.forEach(link => {
          link.removeEventListener('click', handleMenuToggle);
        });
      };
    }
  }, []);

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Logo Academia Maestro" />
        </Link>
        
        <nav className="nav-desktop">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/instrumentos">Instrumentos</Link></li>
            <li><Link href="/manutencao">Manutenção</Link></li>
            <li>
              <a href="https://go.hotmart.com/I101679958C" target="_blank" rel="noopener noreferrer">
                Curso Online
              </a>
            </li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>

        <button id="menu-toggle" className="menu-toggle" aria-label="Abrir menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}