// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/home.json';


const siteUrl = process.env.SITE_URL || homeData.siteUrl || undefined;

// https://astro.build/config
export default defineConfig({
  //site: siteUrl,
  site: 'https://dimgrig.github.io',
  base: '/dimgrig',
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Какие форматы генерировать автоматически
    // (Astro создаст варианты для каждого размера srcset)
    formats: ['avif', 'webp'],
    // Качество по умолчанию
    quality: 80,
    // Разрешить удалённые изображения (если понадобится)
    // domains: [],
    // Разрешить локальные изображения по абсолютному пути из public/
    // remotePatterns: [],
  },
  integrations: [icon(), sitemap()]
});
