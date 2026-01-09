import type { Metadata } from "next";
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  // ADICIONE A LINHA ABAIXO
  metadataBase: new URL('https://www.academiademusicamaestro.com.br'),

  title: {
    default: "Academia de Música Maestro | Aulas em Ceilândia e Sobradinho",
    template: "%s | Academia Maestro",
  },
  description: "Promovendo o ensino musical de forma simples e prática desde 1981. Aulas em Ceilândia e Sobradinho.",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main> {/* O conteúdo da página fica aqui */}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
        
        {/* PASSO 2: COLE O SCRIPT DE DADOS ESTRUTURADOS AQUI */}
        <Script id="structured-data-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              "name": "Academia de Música Maestro",
              "url": "https://www.academiademusicamaestro.com.br", // <-- MUITO IMPORTANTE: Substitua pelo seu domínio real
              "logo": "https://www.academiademusicamaestro.com.br/logo.png", // <-- MUITO IMPORTANTE: Use a URL completa
              "description": "Escola de música com unidades em Ceilândia e Sobradinho. Aulas de violão, guitarra, piano, bateria, canto e mais desde 1981.",
              "telephone": "+5561996392573",
              "sameAs": [
                "https://www.instagram.com/academiamaestroceilandia/"
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "St. M CNM 1 Bloco G Sala 315",
                  "addressLocality": "Ceilândia",
                  "addressRegion": "DF",
                  "addressCountry": "BR",
                  "telephone": "+5561996392573"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Quadra 08 Bloco 1 Lote 5 Loja 1",
                  "addressLocality": "Sobradinho",
                  "addressRegion": "DF",
                  "addressCountry": "BR",
                  "telephone": "+5561983171825"
                }
              ],
              "founder": {
                "@type": "Person",
                "name": "Rivaldo de Sousa Mendes"
              },
              "foundingDate": "1981"
            }
          `}
        </Script>
      </body>
    </html>
  );
}