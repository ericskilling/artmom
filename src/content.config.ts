import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artistSchema = z.object({
  name: z.string(),
  tagline: z.string().optional(),
  bio: z.string().optional(),
  cv_bio: z.string().optional(),
  affiliations: z.array(z.string()).optional(),
  location: z.string().optional(),
  activeSince: z.string().optional(),
  heroImagePath: z.string().optional(),
});

const artworksSchema = z.object({
  title: z.string(),
  year: z.string(),
  medium: z.string().optional(),
  dimensions: z.string().optional(),
  size: z.string().optional(),
  artworkImage: z.string().optional(),
  description: z.string().optional(),
});

const comicsSchema = z.object({
  title: z.string(),
  year: z.string(),
  format: z.string().optional(),
  comicImage: z.string().optional(),
  featured: z.boolean().optional(),
  description: z.string().optional(),
});

const exhibitionsSchema = z.object({
  title: z.string(),
  venue: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  featured: z.boolean().optional(),
  exhibitionImage: z.string().optional(),
  description: z.string().optional(),
});

const facilitationsSchema = z.object({
  hero_title: z.string().optional(),
  hero_image: z.string().optional(),
  facilitator_statement: z.string().optional(),
  logistics: z.string().optional(),
  workshops: z.array(z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    audience: z.string().optional(),
    workshopImage: z.string().optional(),
    cta_label: z.string().optional(),
    cta_link: z.string().optional(),
  })).optional(),
  partners: z.array(z.string()).optional(),
  takeaway_heading: z.string().optional(),
  takeaway_description: z.string().optional(),
  takeaway_pdf: z.string().optional(),
  cta_button_text: z.string().optional(),
});

const classesSchema = z.object({
  title: z.string().optional(),
  status: z.string().optional(),
  hero_image: z.string().optional(),
  statement: z.string().optional(),
  class_details: z.string().optional(),
  logistics: z.string().optional(),
  preregistration_email: z.string().optional(),
  cta_button_text: z.string().optional(),
});

const facilitationWorkshopsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  audience: z.string().optional(),
  workshopImage: z.string().optional(),
  cta_label: z.string().optional(),
  cta_link: z.string().optional(),
});

const facilitationClassesSchema = z.object({
  title: z.string().optional(),
  image: z.string().optional(),
  what_youll_learn: z.array(z.string()).optional(),
  format: z.string().optional(),
  logistics: z.string().optional(),
});

const newsSchema = z.object({
  title: z.string(),
  publish_date: z.string().optional(),
  description: z.string().optional(),
  external_link: z.string().optional(),
});

const contactSchema = z.object({
  title: z.string().optional(),
  email: z.string().optional(),
  instagram_handle: z.string().optional(),
  instagram_url: z.string().optional(),
  inquiry_types: z.array(z.object({
    value: z.string(),
    label: z.string(),
  })).optional(),
  lead_in: z.array(z.string()).optional(),
});

const portfolioSchema = z.object({
  art_heading: z.string().optional(),
  art_intro: z.string().optional(),
  comics_heading: z.string().optional(),
  comics_intro: z.string().optional(),
  featured_publications_heading: z.string().optional(),
  featured_publications: z.array(z.string()).optional(),
  publications_heading: z.string().optional(),
  publications_intro: z.string().optional(),
  cta_text: z.string().optional(),
  cta_button_text: z.string().optional(),
});

const publicationsSchema = z.object({
  title: z.string(),
  year: z.string().optional(),
  publisher: z.string().optional(),
  location: z.string().optional(),
  url: z.string().optional(),
  description: z.string().optional(),
});

const workshopsSchema = z.object({
  title: z.string().optional(),
  organization: z.string().optional(),
  location: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  registerUrl: z.string().optional(),
  description: z.string().optional(),
});

export const collections = {
  artist: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/artist' }), schema: artistSchema }),
  artworks: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/artworks' }), schema: artworksSchema }),
  comics: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/comics' }), schema: comicsSchema }),
  exhibitions: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/exhibitions' }), schema: exhibitionsSchema }),
  facilitations: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/facilitations' }), schema: facilitationsSchema }),
  classes: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/classes' }), schema: classesSchema }),
  news: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/news' }), schema: newsSchema }),
  contact: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/contact' }), schema: contactSchema }),
  portfolio: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/portfolio' }), schema: portfolioSchema }),
  publications: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/publications' }), schema: publicationsSchema }),
  workshops: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/workshops' }), schema: workshopsSchema }),
  facilitationWorkshops: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/facilitation-workshops' }), schema: facilitationWorkshopsSchema }),
  facilitationClasses: defineCollection({ loader: glob({ pattern: '**/*.md', base: 'src/content/facilitation-classes' }), schema: facilitationClassesSchema }),
};
