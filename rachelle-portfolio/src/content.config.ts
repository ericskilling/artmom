import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artistCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artist' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    bio: z.string(),
    location: z.string(),
    activeSince: z.string(),
  }),
});

const artworksCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artworks' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    medium: z.string(),
    dimensions: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

const exhibitionsCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/exhibitions' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'artist': artistCollection,
  'artworks': artworksCollection,
  'exhibitions': exhibitionsCollection,
};