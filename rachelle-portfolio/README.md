# Rachelle Ymay Skilling - Artist Portfolio

Astro-based portfolio website with TinaCMS for content management.

## Quick Start

```bash
# Install dependencies
npm install

# Start local development with TinaCMS
npm run dev
```

The site will be available at:
- Main site: http://localhost:4321
- TinaCMS admin: http://localhost:4321/admin

## TinaCMS Cloud Setup

To enable TinaCMS Cloud (for production):

1. Sign up at https://tina.io
2. Create a new project
3. Get your `clientId` and `token` from the project settings
4. Update `tina/config.ts`:

```typescript
export default defineConfig({
  branch: "main",
  clientId: "your-client-id-here",
  token: "your-token-here",
  // ... rest of config
});
```

## Content Structure

- `src/content/artist/` - Artist biography and information
- `src/content/artworks/` - Artwork entries (markdown)
- `src/content/exhibitions/` - Exhibition history (markdown)

## Development Commands

```bash
npm run dev        # Start dev server with TinaCMS
npm run build      # Build for production
npm run preview   # Preview production build
```

## Deployment to Cloudflare Pages

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## Project Structure

```
rachelle-portfolio/
├── src/
│   ├── content/
│   │   ├── artist/     # Artist info
│   │   ├── artworks/   # Artwork collection
│   │   └── exhibitions/ # Exhibition history
│   └── pages/          # Astro pages
├── tina/
│   └── config.ts        # TinaCMS configuration
├── astro.config.mjs
└── package.json
```

## License

All content and artwork is copyright Rachelle Ymay Skilling.
