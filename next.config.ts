// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração do Next.js
  output: 'standalone', // Otimiza a build para Docker
};

export default nextConfig;