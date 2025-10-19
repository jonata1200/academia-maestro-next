// src/components/Header.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';

// ========================================================
// 1. DEFINIÇÃO DOS ESTILOS (CSS-in-JS)
// ========================================================

// Propriedades dinâmicas para o Header
interface HeaderProps {
  $isHomePageTop: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
  position: fixed; /* Mude para fixed para o efeito de scroll funcionar bem */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100px;
  background-color: var(--secondary-color);
  border-bottom: 1px solid #eee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: background-color 0.4s ease, border-color 0.4s ease;

  /* Aplica estilos de transparência dinamicamente baseados na prop $isHomePageTop */
  ${(props) =>
    props.$isHomePageTop &&
    css`
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    `}
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Propriedades dinâmicas para o Logo
interface LogoLinkProps {
  $isHomePageTop: boolean;
}

const LogoLink = styled(Link)<LogoLinkProps>`
  position: relative;
  z-index: 10001; /* Garante que o logo fique acima do menu mobile */
  img {
    height: 80px; /* Reduzido para melhor encaixe no header fixo */
    width: auto;
    display: block;
    filter: invert(15%) sepia(99%) saturate(6970%) hue-rotate(241deg) brightness(94%) contrast(143%);
    transition: filter 0.4s ease;

    /* Muda a cor do logo para branco se estiver no topo da home */
    ${(props) =>
      props.$isHomePageTop &&
      css`
        filter: brightness(0) invert(1);
      `}
  }
`;

// Propriedades dinâmicas para a Navegação
interface NavProps {
  $isOpen: boolean;
  $isHomePageTop: boolean;
}

const NavDesktop = styled.nav<NavProps>`
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    padding-bottom: 8px;
    position: relative;
    color: var(--text-color);
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.4s ease;
    }

    &:hover::after,
    &.active::after {
      transform: scaleX(1);
    }
    
    &:hover {
      color: var(--primary-color);
    }

    /* Muda a cor dos links para branco se estiver no topo da home */
    ${(props) =>
      props.$isHomePageTop &&
      css`
        color: var(--secondary-color);
        &:hover {
          color: var(--secondary-color);
        }
      `}
  }

  /* Media Query para o menu mobile */
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? '0' : '-100%')};
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--secondary-color);
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    padding-top: 100px;
    transition: left 0.4s ease;
    z-index: 10000;

    ul {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      gap: 20px;
    }

    a {
      font-size: 1.2rem;
      color: var(--text-color); /* Links sempre escuros dentro do menu aberto */
    }
  }
`;

// Propriedades dinâmicas para o botão Hambúrguer
interface MenuToggleProps {
  $isOpen: boolean;
  $isHomePageTop: boolean;
}

const MenuToggle = styled.button<MenuToggleProps>`
  display: none;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10001;

  .bar {
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--dark-blue);
    transition: all 0.3s ease-in-out;
    
    /* Cor da barra no topo da home */
    ${(props) =>
      props.$isHomePageTop &&
      css`
        background-color: var(--secondary-color);
      `}
  }
  
  /* Animação para o 'X' */
  ${(props) =>
    props.$isOpen &&
    css`
      .bar {
        background-color: var(--dark-blue); /* Garante que o 'X' seja escuro */
      }
      .bar:nth-child(1) {
        transform: rotate(45deg) translate(7px, 7px);
      }
      .bar:nth-child(2) {
        opacity: 0;
      }
      .bar:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    `}

  @media (max-width: 768px) {
    display: flex;
  }
`;


// ========================================================
// 2. COMPONENTE REACT
// ========================================================
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Lógica para detectar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para fechar o menu e controlar o scroll do body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determina se os estilos de topo da home devem ser aplicados
  const isHomePageTop = pathname === '/' && !isScrolled && !isMenuOpen;

  return (
    <StyledHeader $isHomePageTop={isHomePageTop}>
      <HeaderContainer>
        <LogoLink href="/" $isHomePageTop={isHomePageTop} onClick={handleLinkClick}>
          <Image src="/logo.png" alt="Logo Academia Maestro" width={100} height={100} priority />
        </LogoLink>

        <NavDesktop $isOpen={isMenuOpen} $isHomePageTop={isHomePageTop}>
          <ul>
            <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link href="/sobre" onClick={handleLinkClick}>Sobre Nós</Link></li>
            <li><Link href="/instrumentos" onClick={handleLinkClick}>Instrumentos</Link></li>
            <li><Link href="/manutencao" onClick={handleLinkClick}>Manutenção</Link></li>
            <li><a href="https://go.hotmart.com/I101679958C" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Curso Online</a></li>
            <li><Link href="/contato" onClick={handleLinkClick}>Contato</Link></li>
          </ul>
        </NavDesktop>

        <MenuToggle
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          $isOpen={isMenuOpen}
          $isHomePageTop={isHomePageTop}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </MenuToggle>
      </HeaderContainer>
    </StyledHeader>
  );
}