// src/app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.academiademuiscamaestro.com.br'; // <-- MUITO IMPORTANTE: Substitua pelo seu domínio

  return {
    rules: [
      {
        userAgent: '*', // Aplica-se a todos os robôs
        allow: '/',      // Permite que eles acessem tudo
        // disallow: '/admin/', // Exemplo: Se você tivesse uma pasta 'admin' que não quisesse indexar
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Aponta para o mapa do site
  };
}