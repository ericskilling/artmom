// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rachelleymayskilling.com',
  integrations: [
    sitemap(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});