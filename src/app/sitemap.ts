// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { glob } from 'glob'; // Importa a biblioteca glob

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.academiademusicamaestro.com.br'; // <-- Confirme seu domínio

  // 1. Encontra todos os arquivos page.tsx dentro da pasta app
  // O padrão 'src/app/**/page.tsx' busca recursivamente
  const pages = glob.sync('src/app/**/page.tsx');

  // 2. Mapeia os caminhos dos arquivos para URLs públicas
  const urls = pages
    .map((page) => {
      // Remove 'src/app' e '/page.tsx' para obter o caminho da rota
      // Ex: 'src/app/sobre/page.tsx' vira '/sobre'
      // Ex: 'src/app/page.tsx' vira ''
      let path = page.replace('src/app', '').replace('/page.tsx', '');

      // Trata o caso especial da página inicial, que vira uma string vazia
      if (path === '') {
        path = '/';
      }
      return path;
    })
    .filter((path) => {
      // 3. Filtra rotas que não queremos no sitemap (ex: rotas de API, se existirem)
      // Neste projeto não há, mas é uma boa prática manter
      return !path.startsWith('/api');
    })
    .map((path) => {
      // 4. Constrói o objeto final do sitemap para cada URL
      
      // Lógica para definir prioridade e frequência de forma customizada
      let priority = 0.8;
      let changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly';

      if (path === '/') {
        priority = 1.0;
        changeFrequency = 'weekly';
      }
      if (path === '/contato') {
        priority = 0.9;
      }
      if (path.includes('politica') || path.includes('termos')) {
        priority = 0.3;
        changeFrequency = 'yearly';
      }

      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority,
      };
    });

  return urls;
}