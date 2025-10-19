// src/components/Footer.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

// ========================================================
// 1. DEFINIÇÃO DOS ESTILOS (CSS-in-JS)
// ========================================================

const StyledFooter = styled.footer`
  background-color: var(--dark-blue);
  padding: 60px 0 0;
  margin-top: auto;
  position: relative;
`;

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterCol = styled.div`
  min-width: 0;

  h4 {
    color: var(--secondary-color);
    font-size: 1.1rem;
    margin-bottom: 20px;
    font-weight: 600;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--primary-color);

      @media (max-width: 768px) {
        margin: 0 auto;
        right: 0; /* Para centralizar com margin auto */
      }
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.9);
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    position: relative;
    padding-bottom: 4px;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const FooterLogo = styled(Link)`
  display: inline-block;
  margin-bottom: 15px;
  img {
    filter: brightness(0) invert(1);
    height: 80px;
    width: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--secondary-color);
    border-radius: 50%;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;

  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
`;

const LegalLinks = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  
  a {
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: var(--secondary-color);
    }
  }

  span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

interface BackToTopButtonProps {
  $isVisible: boolean;
}

const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  transform: ${(props) => (props.$isVisible ? 'translateY(0)' : 'translateY(10px)')};
  transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.3s ease;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

// ========================================================
// 2. COMPONENTE REACT
// ========================================================

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar o botão "Voltar ao Topo"
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterMain>
          {/* Coluna 1: Sobre */}
          <FooterCol>
            <FooterLogo href="/">
              <Image src="/logo.png" alt="Logo Academia Maestro" width={80} height={80} />
            </FooterLogo>
            <p>Promovendo o ensino musical de forma simples e prática desde 1981.</p>
          </FooterCol>
          
          {/* Coluna 2: Navegação */}
          <FooterCol>
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/sobre">Sobre Nós</Link></li>
              <li><Link href="/instrumentos">Instrumentos</Link></li>
              <li><Link href="/manutencao">Manutenção</Link></li>
              <li><a href="https://go.hotmart.com/I101679958C" target="_blank" rel="noopener noreferrer">Curso Online</a></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </FooterCol>

          {/* Coluna 3: Unidades */}
          <FooterCol>
            <h4>Unidades</h4>
            <ul>
              <li>Ceilândia: (61) 3371-5434</li>
              <li>Sobradinho: (61) 3387-1834</li>
            </ul>
          </FooterCol>
          
          {/* Coluna 4: Redes Sociais */}
          <FooterCol>
            <h4>Conecte-se</h4>
            <SocialLinks>
              <a href="https://www.instagram.com/academiamaestroceilandia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </SocialLinks>
          </FooterCol>
        </FooterMain>
        
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Academia de Música Maestro. Todos os direitos reservados.</p>
          <LegalLinks>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <span>|</span>
            <Link href="/termos-de-uso">Termos de Uso</Link>
            <span>|</span>
            <Link href="/politica-de-cookies">Política de Cookies</Link>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>

      <BackToTopButton $isVisible={isVisible} onClick={scrollToTop} aria-label="Voltar ao topo">
        ↑
      </BackToTopButton>
    </StyledFooter>
  );
}