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
            <SwiperSlide>
              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-[200px]">
                  <Image src="/toque-violao.jpg" alt="Pessoa tocando violão" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-primary text-2xl m-0 mb-4 font-bold">Cordas</h3>
                  <ul className="list-none p-0 columns-2 gap-5">
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Violão</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Viola</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Guitarra</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Contrabaixo</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Cavaquinho</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Ukulelê</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Violino</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-[200px]">
                  <Image src="/toque-piano.webp" alt="Mãos tocando piano" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-primary text-2xl m-0 mb-4 font-bold">Teclas</h3>
                  <ul className="list-none p-0">
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Teclado</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Piano Popular</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Piano Clássico</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Acordeon</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-[200px]">
                  <Image src="/toque-bateria.jpg" alt="Pessoa tocando bateria" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-primary text-2xl m-0 mb-4 font-bold">Percussão</h3>
                  <ul className="list-none p-0">
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Bateria</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Cajón</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Pandeiro</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-[200px]">
                  <Image src="/toque-saxofone.jpg" alt="Pessoa tocando saxofone" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-primary text-2xl m-0 mb-4 font-bold">Sopro</h3>
                  <ul className="list-none p-0">
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Flauta Transversal</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Saxofone</li>
                    <li className="mb-2 text-text-light before:content-['•'] before:text-primary before:mr-2 before:font-bold">Clarinete</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-[200px]">
                  <Image src="/musicalizacao-infantil.png" alt="Criança em aula de musicalização infantil" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-primary text-2xl m-0 mb-4 font-bold">Musicalização Infantil</h3>
                  <p className="text-text-light leading-relaxed">
                    Um programa especial para crianças de 2 a 6 anos, incluindo crianças e adolescentes atípicos.
                  </p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        
        <div className="text-center mt-5">
          <Button href="/contato" variant="primary" size="lg" className="shadow-[0_4px_15px_rgba(0,0,255,0.2)] hover:-translate-y-1">
            Agendar Aula Experimental
          </Button>
        </div>
      </Container>
    </div>
  );
}
