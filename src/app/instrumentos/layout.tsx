import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Cursos de Instrumentos Musicais | Academia Maestro",
  description: "Aprenda violão, guitarra, piano, bateria, saxofone e mais. Cursos para todos os níveis em Ceilândia e Sobradinho. Comece sua jornada musical.",
  
  // ADICIONE ESTE BLOCO
  alternates: {
    canonical: '/instrumentos',
  },
};

export default function InstrumentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script id="courses-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Course",
                "name": "Curso de Cordas",
                "description": "Aulas de Violão, Viola, Guitarra, Contrabaixo, Cavaquinho, Ukulelê e Violino.",
                "provider": {
                  "@type": "MusicSchool",
                  "name": "Academia de Música Maestro",
                  "sameAs": "https://www.academimaestro.com.br" // <-- Substitua pelo seu domínio
                }
              },
              {
                "@type": "Course",
                "name": "Curso de Teclas",
                "description": "Aulas de Teclado, Piano Popular, Piano Clássico e Acordeon.",
                "provider": {
                  "@type": "MusicSchool",
                  "name": "Academia de Música Maestro",
                  "sameAs": "https://www.academimaestro.com.br" // <-- Substitua pelo seu domínio
                }
              },
              {
                "@type": "Course",
                "name": "Curso de Percussão",
                "description": "Aulas de Bateria, Cajón e Pandeiro.",
                "provider": {
                  "@type": "MusicSchool",
                  "name": "Academia de Música Maestro",
                  "sameAs": "https://www.academimaestro.com.br" // <-- Substitua pelo seu domínio
                }
              }
            ]
          }
        `}
      </Script>
    </>
  );
}