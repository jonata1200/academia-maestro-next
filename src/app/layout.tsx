// src/app/layout.tsx
import type { Metadata } from "next";
// NÃO PRECISA MAIS IMPORTAR O globals.css AQUI, POIS O style.css JÁ FAZ ISSO.
import '../styles/style.css'; // <-- USANDO O CAMINHO RELATIVO GARANTIDO

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Academia de Música Maestro",
  description: "Promovendo o ensino musical de forma simples e prática desde 1981. Aulas em Ceilândia e Sobradinho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}