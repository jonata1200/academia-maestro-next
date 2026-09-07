// src/app/robots.ts

import { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

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