// src/components/Header.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Garantir que o componente está montado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lógica para detectar o scroll da página
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Lógica para fechar o menu e controlar o scroll do body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determina se os estilos de topo da home/manutenção devem ser aplicados
  // Só aplica após montagem no cliente para evitar diferenças de hidratação
  const isHeroPageTop = mounted && (pathname === '/' || pathname === '/manutencao') && !isScrolled && !isMenuOpen;

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-[999] h-[100px] transition-all duration-300',
        isHeroPageTop
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
      )}
    >
      <div className="flex justify-between items-center h-full max-w-container mx-auto px-5">
        <Link
          href="/"
          className="relative z-[10001]"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.png"
            alt="Logo Academia Maestro"
            width={100}
            height={100}
            priority
            className={clsx(
              'h-20 w-auto block transition-all duration-300',
              isHeroPageTop
                ? 'brightness-0 invert'
                : ''
            )}
          />
        </Link>

        <nav
          className={clsx(
            'md:static md:left-auto md:w-auto md:max-w-none md:h-auto md:bg-transparent md:shadow-none md:p-0 md:z-auto',
            isMenuOpen
              ? 'fixed top-0 left-0 w-4/5 max-w-[300px] h-screen bg-white shadow-[5px_0_15px_rgba(0,0,0,0.1)] pt-[100px] transition-all duration-300 z-[10000]'
              : 'fixed top-0 -left-full w-4/5 max-w-[300px] h-screen bg-white shadow-[5px_0_15px_rgba(0,0,0,0.1)] pt-[100px] transition-all duration-300 z-[10000]',
            'md:block'
          )}
        >
          <ul className="list-none flex md:flex-row flex-col md:items-center items-start md:p-0 p-5 md:gap-8 gap-5">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={clsx(
                  'no-underline font-semibold text-base pb-2 relative transition-colors duration-300',
                  'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:transition-transform after:duration-300 after:scale-x-0',
                  'hover:after:scale-x-100 hover:text-primary',
                  isHeroPageTop && !isMenuOpen
                    ? 'text-white hover:text-white'
                    : 'text-text-color',
                  isMenuOpen && 'text-text-color text-xl'
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                onClick={handleLinkClick}
                className={clsx(
                  'no-underline font-semibold text-base pb-2 relative transition-colors duration-300',
                  'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:transition-transform after:duration-300 after:scale-x-0',
                  'hover:after:scale-x-100 hover:text-primary',
                  isHeroPageTop && !isMenuOpen
                    ? 'text-white hover:text-white'
                    : 'text-text-color',
                  isMenuOpen && 'text-text-color text-xl'
                )}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/instrumentos"
                onClick={handleLinkClick}
                className={clsx(
                  'no-underline font-semibold text-base pb-2 relative transition-colors duration-300',
                  'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:transition-transform after:duration-300 after:scale-x-0',
                  'hover:after:scale-x-100 hover:text-primary',
                  isHeroPageTop && !isMenuOpen
                    ? 'text-white hover:text-white'
                    : 'text-text-color',
                  isMenuOpen && 'text-text-color text-xl'
                )}
              >
                Instrumentos
              </Link>
            </li>
            <li>
              <Link
                href="/manutencao"
                onClick={handleLinkClick}
                className={clsx(
                  'no-underline font-semibold text-base pb-2 relative transition-colors duration-300',
                  'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:transition-transform after:duration-300 after:scale-x-0',
                  'hover:after:scale-x-100 hover:text-primary',
                  isHeroPageTop && !isMenuOpen
                    ? 'text-white hover:text-white'
                    : 'text-text-color',
                  isMenuOpen && 'text-text-color text-xl'
                )}
              >
                Manutenção
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                onClick={handleLinkClick}
                className={clsx(
                  'no-underline font-semibold text-base pb-2 relative transition-colors duration-300',
                  'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:transition-transform after:duration-300 after:scale-x-0',
                  'hover:after:scale-x-100 hover:text-primary',
                  isHeroPageTop && !isMenuOpen
                    ? 'text-white hover:text-white'
                    : 'text-text-color',
                  isMenuOpen && 'text-text-color text-xl'
                )}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={clsx(
            'md:hidden w-[30px] h-[25px] bg-transparent border-none cursor-pointer flex flex-col justify-between z-[10001] menu-toggle',
            isMenuOpen && 'open'
          )}
        >
          <span
            className={clsx(
              'menu-bar',
              isHeroPageTop && !isMenuOpen ? 'bg-white' : 'bg-dark-blue'
            )}
          ></span>
          <span
            className={clsx(
              'menu-bar',
              isHeroPageTop && !isMenuOpen ? 'bg-white' : 'bg-dark-blue'
            )}
          ></span>
          <span
            className={clsx(
              'menu-bar',
              isHeroPageTop && !isMenuOpen ? 'bg-white' : 'bg-dark-blue'
            )}
          ></span>
        </button>
      </div>
    </header>
  );
}
