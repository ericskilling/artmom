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
    heroImage: z.string().optional(),
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
    featured: z.boolean().optional(),
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
    featured: z.boolean().optional(),
    description: z.string().optional(),
  }),
});

const workshopsCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    location: z.string(),
    date: z.string(),
    time: z.string().optional(),
    registerUrl: z.string().optional(),
    description: z.string().optional(),
    past: z.boolean().optional(),
  }),
});

const comicsCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/comics' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    format: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'artist': artistCollection,
  'artworks': artworksCollection,
  'exhibitions': exhibitionsCollection,
  'workshops': workshopsCollection,
  'comics': comicsCollection,
};