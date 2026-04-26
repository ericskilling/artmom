import { defineCollection } from 'astro:content';
import { sveltiaLoader } from 'astro-loader-sveltia-cms/loader';

const artist = defineCollection({
  loader: sveltiaLoader('artist'),
});

const artworks = defineCollection({
  loader: sveltiaLoader('artworks'),
});

const exhibitions = defineCollection({
  loader: sveltiaLoader('exhibitions'),
});

const workshops = defineCollection({
  loader: sveltiaLoader('workshops'),
});

const comics = defineCollection({
  loader: sveltiaLoader('comics'),
});

const publications = defineCollection({
  loader: sveltiaLoader('publications'),
});

export const collections = {
  'artist': artist,
  'artworks': artworks,
  'exhibitions': exhibitions,
  'workshops': workshops,
  'comics': comics,
  'publications': publications,
};