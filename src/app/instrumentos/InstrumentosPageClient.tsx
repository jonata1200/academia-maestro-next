// src/app/instrumentos/InstrumentosPageClient.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

// Imports de CSS do Swiper (essenciais para o funcionamento base)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ========================================================
// ESTILOS
// ========================================================

const PageWrapper = styled.div`
  padding: 180px 0 80px;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 15px;
`;

const PageSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  font-size: 1.2rem;
`;

const CarouselWrapper = styled.div`
  padding: 20px 0 50px;
  margin: 40px 0;

  .swiper-pagination {
    bottom: 10px !important;
  }
  .swiper-pagination-bullet {
    background-color: rgba(0, 0, 255, 0.3) !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary-color) !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color) !important;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 44px !important;
    height: 44px !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      background-color: var(--primary-color);
      color: var(--secondary-color) !important;
    }

    &::after {
      font-size: 18px !important;
      font-weight: bold;
    }
  }
`;

const CategoryCard = styled.div`
  background-color: var(--secondary-color);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
`;

const CategoryCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const CategoryCardContent = styled.div`
  padding: 25px;
  flex-grow: 1;

  h3 { color: var(--primary-color); font-size: 1.5rem; margin: 0 0 15px 0; }
  ul { list-style: none; padding: 0; }
  ul.multi-column { columns: 2; gap: 20px; }
  li {
    margin-bottom: 8px;
    color: var(--text-light);
    &::before {
      content: '•';
      color: var(--primary-color);
      margin-right: 8px;
      font-weight: bold;
    }
  }
  .category-description {
    color: var(--text-light);
    line-height: 1.7;
  }
`;

const CtaWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CtaButton = styled(Link)`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 15px 35px;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    background-color: #0000cc;
  }
`;

// ========================================================
// COMPONENTE
// ========================================================
export default function InstrumentosPageClient() { 
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Nossos Cursos de Instrumentos</PageTitle>
        <PageSubtitle>Do clássico ao popular, do acústico ao elétrico. Deslize para explorar nossas categorias e comece sua jornada musical.</PageSubtitle>

        <CarouselWrapper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            <SwiperSlide>
              <CategoryCard>
                <CategoryCardImage>
                  <Image src="/toque-violao.jpg" alt="Pessoa tocando violão" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </CategoryCardImage>
                <CategoryCardContent>
                  <h3>Cordas</h3>
                  <ul className="multi-column">
                    <li>Violão</li> <li>Viola</li> <li>Guitarra</li> <li>Contrabaixo</li> <li>Cavaquinho</li> <li>Ukulelê</li> <li>Violino</li>
                  </ul>
                </CategoryCardContent>
              </CategoryCard>
            </SwiperSlide>
            
            <SwiperSlide>
              <CategoryCard>
                <CategoryCardImage>
                  <Image src="/toque-piano.webp" alt="Mãos tocando piano" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </CategoryCardImage>
                <CategoryCardContent>
                  <h3>Teclas</h3>
                  <ul>
                    <li>Teclado</li> <li>Piano Popular</li> <li>Piano Clássico</li> <li>Acordeon</li>
                  </ul>
                </CategoryCardContent>
              </CategoryCard>
            </SwiperSlide>

             <SwiperSlide>
              <CategoryCard>
                <CategoryCardImage>
                  <Image src="/toque-bateria.jpg" alt="Pessoa tocando bateria" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </CategoryCardImage>
                <CategoryCardContent>
                  <h3>Percussão</h3>
                  <ul>
                    <li>Bateria</li> <li>Cajón</li> <li>Pandeiro</li>
                  </ul>
                </CategoryCardContent>
              </CategoryCard>
            </SwiperSlide>

             <SwiperSlide>
              <CategoryCard>
                <CategoryCardImage>
                  <Image src="/toque-saxofone.jpg" alt="Pessoa tocando saxofone" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </CategoryCardImage>
                <CategoryCardContent>
                  <h3>Sopro</h3>
                  <ul>
                    <li>Flauta Transversal</li> <li>Saxofone</li> <li>Clarinete</li>
                  </ul>
                </CategoryCardContent>
              </CategoryCard>
            </SwiperSlide>

             <SwiperSlide>
              <CategoryCard>
                <CategoryCardImage>
                  <Image src="/musicalizacao-infantil.png" alt="Criança em aula de musicalização infantil" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </CategoryCardImage>
                <CategoryCardContent>
                  <h3>Musicalização Infantil</h3>
                  <p className="category-description">
                    Um programa especial para crianças de 2 a 6 anos, incluindo crianças e adolescentes atípicos.
                  </p>
                </CategoryCardContent>
              </CategoryCard>
            </SwiperSlide>

          </Swiper>
        </CarouselWrapper>
        
        <CtaWrapper>
          <CtaButton href="/contato">Agendar Aula Experimental</CtaButton>
        </CtaWrapper>
      </div>
    </PageWrapper>
  );
}