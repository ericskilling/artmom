# Astro + Sveltia CMS Configuration Reference

## Upgrade Notes (April 2026)

This doc documents the customizations made during Tina CMS → Sveltia CMS migration.

---

## astro.config.mjs

### Sveltia CMS Integration

```javascript
sveltia({
  config: {
    backend: {
      name: 'github',
      repo: 'ericskilling/artmom',
      branch: 'main',
    },
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
          { name: 'heroImagePath', widget: 'string', required: false },
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
          { name: 'artworkImage', widget: 'string', required: false },
          { name: 'dimensions', widget: 'string', required: false },
          { name: 'featured', widget: 'boolean', required: false },
          { name: 'description', widget: 'markdown', required: false },
        ],
      },
      {
        name: 'exhibitions',
        label: 'Exhibitions',
        folder: 'src/content/exhibitions',
        fields: [
          { name: 'title', widget: 'string', required: true },
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
          { name: 'title', widget: 'string', required: true },
          { name: 'organization', widget: 'string' },
          { name: 'location', widget: 'string' },
          { name: 'date', widget: 'string' },
          { name: 'time', widget: 'string', required: false },
          { name: 'registerUrl', widget: 'string', required: false },
          { name: 'past', widget: 'boolean', required: false },
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
          { name: 'comicImage', widget: 'string', required: false },
          { name: 'featured', widget: 'boolean', required: false },
          { name: 'description', widget: 'markdown', required: false },
        ],
      },
    ],
  },
})
```

### Full Export

```javascript
export default defineConfig({
  integrations: [react(), sveltia({ /* config above */ })],
  output: 'server',
  adapter: cloudflare(),
  build: {
    assets: '_assets',
  },
});
```

---

## src/content.config.ts

```typescript
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

export const collections = {
  artist,
  artworks,
  exhibitions,
  workshops,
  comics,
};
```

---

## Content Field Changes (from Tina CMS)

| Collection | Old Field | New Field | Reason |
|-----------|----------|-----------|--------|
| artist | heroImage | heroImagePath | Avoid Astro image collision |
| artworks | image | artworkImage | Avoid Astro image collision |
| comics | image | comicImage | Avoid Astro image collision |

---

## Dependencies

- `astro` - ^5.x.x
- `@astrojs/react` - latest
- `astro-loader-sveltia-cms` - latest
- `@astrojs/cloudflare` - latest

### Dev Dependencies

- `@tinacms/cli` - REMOVED
- `tinacms` - REMOVED

---

## Key Workarounds

### Why String Widget for Images?

When using `output: 'server'` with Astro content collections, fields named `image` trigger Astro's special image asset processing, which fails because we're using public images that aren't in src/.

**Solution:** Use `string` widget and store full paths (e.g., `/images/artwork-name.jpg`).

### Cloudflare Adapter Notes

- `build.assets: '_assets'` - Required for Cloudflare Pages
- Images binding enabled automatically
- Sessions require KV binding