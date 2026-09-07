// src/app/instrumentos/InstrumentosPageClient.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Container, Button } from '@/design-system/components';

// Imports de CSS do Swiper (essenciais para o funcionamento base)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type InstrumentCategory = {
  title: string;
  image: string;
  imageAlt: string;
  /** Lista de instrumentos da categoria (cards com bullets) */
  items?: string[];
  /** Texto descritivo (cards sem lista, ex.: Musicalização Infantil) */
  description?: string;
  /** Renderiza a lista em duas colunas (categorias longas) */
  twoColumns?: boolean;
};

const categories: InstrumentCategory[] = [
  {
    title: 'Cordas',
    image: '/toque-violao.jpg',
    imageAlt: 'Pessoa tocando violão',
    items: ['Violão', 'Viola', 'Guitarra', 'Contrabaixo', 'Cavaquinho', 'Ukulelê', 'Violino'],
    twoColumns: true,
  },
  {
    title: 'Teclas',
    image: '/toque-piano.webp',
    imageAlt: 'Mãos tocando piano',
    items: ['Teclado', 'Piano Popular', 'Piano Clássico', 'Acordeon'],
  },
  {
    title: 'Percussão',
    image: '/toque-bateria.jpg',
    imageAlt: 'Pessoa tocando bateria',
    items: ['Bateria', 'Cajón', 'Pandeiro'],
  },
  {
    title: 'Sopro',
    image: '/toque-saxofone.jpg',
    imageAlt: 'Pessoa tocando saxofone',
    items: ['Flauta Transversal', 'Saxofone', 'Clarinete'],
  },
  {
    title: 'Musicalização Infantil',
    image: '/musicalizacao-infantil.png',
    imageAlt: 'Criança em aula de musicalização infantil',
    description:
      'Um programa especial para crianças de 2 a 6 anos, incluindo crianças e adolescentes atípicos.',
  },
];

export default function InstrumentosPageClient() {
  return (
    <div className="pt-[180px] pb-20">
      <Container>
        <h1 className="text-center text-[2.8rem] mb-4 font-bold">Instrumentos Ensinados</h1>
        <p className="text-center max-w-[700px] mx-auto mb-16 text-xl">
          Do clássico ao popular, do acústico ao elétrico. Deslize para explorar nossas categorias e comece sua jornada musical.
        </p>

        <div className="py-5 my-10">
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
            {categories.map((category) => (
              <SwiperSlide key={category.title}>
                <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-primary text-2xl m-0 mb-4 font-bold">{category.title}</h3>
                    {category.description && (
                      <p className="text-text-light leading-relaxed">{category.description}</p>
                    )}
                    {category.items && (
                      <ul className={`list-none p-0 ${category.twoColumns ? 'columns-2 gap-5' : ''}`}>
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-5">
          <Button href="/contato" variant="primary" size="lg">
            Agendar Aula Experimental
          </Button>
        </div>
      </Container>
    </div>
  );
}