// src/app/layout.tsx

import type { Metadata } from "next";
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL, UNITS } from '@/lib/site';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const SITE_TITLE = "Academia de Música Maestro | Aulas em Ceilândia e Sobradinho";
const SITE_DESCRIPTION = "Promovendo o ensino musical de forma simples e prática desde 1981. Aulas em Ceilândia e Sobradinho.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Academia Maestro",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Academia de Música Maestro',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/logo.png',
        alt: 'Logo Academia de Música Maestro',
      },
    ],
  },
};

// Dados estruturados (Schema.org) montados a partir da configuração central do site
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  "name": "Academia de Música Maestro",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": "Escola de música com unidades em Ceilândia e Sobradinho. Aulas de violão, guitarra, piano, bateria, canto e mais desde 1981.",
  "telephone": UNITS[0].phone,
  "sameAs": [
    "https://www.instagram.com/academiamaestroceilandia/"
  ],
  "address": UNITS.map((unit) => ({
    "@type": "PostalAddress",
    "streetAddress": unit.address,
    "addressLocality": unit.city,
    "addressRegion": "DF",
    "addressCountry": "BR",
    "telephone": unit.phone,
  })),
  "founder": {
    "@type": "Person",
    "name": "Rivaldo de Sousa Mendes"
  },
  "foundingDate": "1981",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={poppins.variable}>
      <body suppressHydrationWarning className={poppins.className}>
        <Header />
        <main>{children}</main> {/* O conteúdo da página fica aqui */}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />

        {/* Dados estruturados para SEO (Schema.org MusicSchool) */}
        <Script
          id="structured-data-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}