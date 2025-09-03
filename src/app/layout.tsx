import type { Metadata } from "next";
import '../styles/style.css'; 

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // PASSO 1: IMPORTAR

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
        
        {/* PASSO 2: ADICIONAR O COMPONENTE AQUI */}
        <GoogleAnalytics /> 
      </body>
    </html>
  );
}