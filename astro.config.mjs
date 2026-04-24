// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sveltia from 'astro-loader-sveltia-cms';
import cloudflare from '@astrojs/cloudflare';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sveltia({
      config: {
        backend: isProd ? {
          name: 'github',
          repo: 'ericskilling/artmom',
          branch: 'main',
          base_url: 'https://artmom.pages.dev',
          auth_endpoint: 'api/auth',
        } : {
          name: 'local',
        },
        display_url: 'https://artmom.pages.dev',
        media_folder: 'public/images',
        public_folder: '/images',
        collections: [
          {
            name: 'artist',
            label: 'Artist Information',
            folder: 'src/content/artist',
            fields: [
              { name: 'name', widget: 'string', required: true },
              { name: 'tagline', widget: 'string' },
              { name: 'bio', widget: 'markdown' },
              { name: 'location', widget: 'string' },
              { name: 'activeSince', widget: 'string' },
              { name: 'heroImage', widget: 'image', required: false, label: 'Hero Image' },
            ],
          },
          {
            name: 'artworks',
            label: 'Artworks',
            folder: 'src/content/artworks',
            fields: [
              { name: 'title', widget: 'string', required: true },
              { name: 'year', widget: 'string' },
              { name: 'medium', widget: 'string' },
              { name: 'image', widget: 'image', required: false, label: 'Image' },
              { name: 'dimensions', widget: 'string', required: false },
              { name: 'featured', widget: 'boolean', required: false, label: 'Featured on Home' },
              { name: 'description', widget: 'markdown', required: false },
            ],
          },
          {
            name: 'exhibitions',
            label: 'Exhibitions',
            folder: 'src/content/exhibitions',
            fields: [
              { name: 'title', widget: 'string', required: true, label: 'Exhibition Title' },
              { name: 'venue', widget: 'string' },
              { name: 'location', widget: 'string' },
              { name: 'startDate', widget: 'string' },
              { name: 'endDate', widget: 'string' },
              { name: 'featured', widget: 'boolean', required: false },
              { name: 'description', widget: 'markdown', required: false },
            ],
          },
          {
            name: 'workshops',
            label: 'Workshops',
            folder: 'src/content/workshops',
            fields: [
              { name: 'title', widget: 'string', required: true, label: 'Workshop Title' },
              { name: 'organization', widget: 'string' },
              { name: 'location', widget: 'string' },
              { name: 'date', widget: 'string' },
              { name: 'time', widget: 'string', required: false },
              { name: 'registerUrl', widget: 'string', required: false, label: 'Registration URL' },
              { name: 'past', widget: 'boolean', required: false, label: 'Past Workshop' },
              { name: 'description', widget: 'markdown', required: false },
            ],
          },
          {
            name: 'comics',
            label: 'Comics',
            folder: 'src/content/comics',
            fields: [
              { name: 'title', widget: 'string', required: true },
              { name: 'year', widget: 'string' },
              { name: 'format', widget: 'string' },
              { name: 'image', widget: 'image', required: false, label: 'Image' },
              { name: 'featured', widget: 'boolean', required: false },
              { name: 'description', widget: 'markdown', required: false },
            ],
          },
        ],
      },
    }),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});