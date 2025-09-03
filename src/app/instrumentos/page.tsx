"use client"; // NECESSÁRIO para a interatividade do Swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link'; // IMPORTADO para o botão de CTA

// Imports de CSS do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// CORRIGIDO: usa 'export default'
export default function InstrumentosPage() { 
  return (
    <main className="generic-page-content">
      <div className="container">
        <h1>Nossos Cursos de Instrumentos</h1>
        <p>Do clássico ao popular, do acústico ao elétrico. Deslize para explorar nossas categorias e comece sua jornada musical.</p>

        {/* Carrossel com Swiper React */}
        <div className="instrument-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {/* Slide 1: Cordas */}
            <SwiperSlide>
              <div className="category-card">
                <div className="category-card-image">
                  {/* CORRIGIDO: caminho da imagem */}
                  <img src="/toque-violao.jpg" alt="Pessoa tocando violão" />
                </div>
                <div className="category-card-content">
                  <h3>Cordas</h3>
                  <ul className="multi-column">
                    <li>Violão</li>
                    <li>Viola</li>
                    <li>Guitarra</li>
                    <li>Contrabaixo</li>
                    <li>Cavaquinho</li>
                    <li>Ukulelê</li>
                    <li>Violino</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 2: Teclas */}
            <SwiperSlide>
              <div className="category-card">
                <div className="category-card-image">
                  {/* CORRIGIDO: caminho da imagem */}
                  <img src="/toque-piano.webp" alt="Mãos tocando piano" />
                </div>
                <div className="category-card-content">
                  <h3>Teclas</h3>
                  <ul>
                    <li>Teclado</li>
                    <li>Piano Popular</li>
                    <li>Piano Clássico</li>
                    <li>Acordeon</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 3: Percussão */}
            <SwiperSlide>
              <div className="category-card">
                <div className="category-card-image">
                  {/* CORRIGIDO: caminho da imagem */}
                  <img src="/toque-bateria.jpg" alt="Pessoa tocando bateria" />
                </div>
                <div className="category-card-content">
                  <h3>Percussão</h3>
                  <ul>
                    <li>Bateria</li>
                    <li>Cajón</li>
                    <li>Pandeiro</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 4: Sopro */}
            <SwiperSlide>
              <div className="category-card">
                <div className="category-card-image">
                  {/* CORRIGIDO: caminho da imagem */}
                  <img src="/toque-saxofone.jpg" alt="Pessoa tocando saxofone" />
                </div>
                <div className="category-card-content">
                  <h3>Sopro</h3>
                  <ul>
                    <li>Flauta Transversal</li>
                    <li>Saxofone</li>
                    <li>Clarinete</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 5: Musicalização Infantil */}
            <SwiperSlide>
              <div className="category-card">
                <div className="category-card-image">
                  {/* CORRIGIDO: caminho da imagem */}
                  <img src="/musicalizacao-infantil.png" alt="Criança em aula de musicalização infantil" />
                </div>
                <div className="category-card-content">
                  <h3>Musicalização Infantil</h3>
                  <p className="category-description">
                    Um programa especial para crianças de 2 a 6 anos, incluindo crianças e adolescentes atípicos.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        {/* Botão CTA */}
        <div className="instrument-page-cta">
          {/* CORRIGIDO: usa <Link> para navegação interna */}
          <Link href="/contato" className="cta-button large">Agende Aula Experimental</Link>
        </div>
      </div>
    </main>
  );
}