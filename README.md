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
- TinaCMS admin: http://localhost:4321/admin/index.html

## TinaCMS Cloud Setup

For production, you'll need to set up TinaCMS Cloud to enable the editorial workflow and content storage.

### Step 1: Create a TinaCMS Project

1. Sign up at https://app.tina.io
2. Create a new project (select "Astro" as the framework)
3. Note your `Client ID` and `Token`

### Step 2: Add Environment Variables

Create a `.env` file in the project root:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and add your TinaCMS Cloud credentials:

```env
PUBLIC_TINA_CLIENT_ID=your-client-id-from-tina-io
TINA_TOKEN=your-token-from-tina-io
```

### Step 3: Update TinaCMS Config

The `tina/config.ts` is already configured to use environment variables. Make sure your `.env` file has the correct values.

### Step 4: Test Locally

```bash
# Test production build with TinaCMS
npm run build:prod
```

Then preview at `http://localhost:4321/admin/index.html`

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard

1. Log in to Cloudflare Dashboard at https://dash.cloudflare.com
2. Go to "Pages" > "Create a project" > "Connect to Git"
3. Select your GitHub repository (artmom)
4. Configure the build settings:

| Setting | Value |
|---------|-------|
| Production branch | main |
| Build command | `npm run build:prod` |
| Build output directory | `dist` |

5. Add environment variables in Cloudflare Pages settings:
   - `PUBLIC_TINA_CLIENT_ID` = your TinaCMS Client ID
   - `TINA_TOKEN` = your TinaCMS Token
   - `NODE_VERSION` = 22

6. Click "Save and Deploy"

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Authenticate
wrangler login

# Create the deployment
wrangler pages deploy dist --project-name=artmom
```

## Content Structure

- `src/content/artist/` - Artist biography and information
- `src/content/artworks/` - Artwork entries (markdown)
- `src/content/exhibitions/` - Exhibition history (markdown)

## Development Commands

```bash
npm run dev        # Start dev server with TinaCMS
npm run build      # Build for production (without TinaCMS)
npm run build:prod # Build for production with TinaCMS Cloud
npm run preview    # Preview production build
```

## Project Structure

```
artmom/
├── src/
│   ├── content/
│   │   ├── artist/       # Artist info
│   │   ├── artworks/     # Artwork collection
│   │   └── exhibitions/  # Exhibition history
│   └── pages/            # Astro pages
├── tina/
│   └── config.ts         # TinaCMS configuration
├── public/
│   └── admin/            # TinaCMS admin (generated)
├── astro.config.mjs
├── package.json
└── .env                 # Environment variables (create from .env.example)
```

## Troubleshooting

### Admin 404 Error
If you get a 404 at `/admin`, use `/admin/index.html` instead.

### Build Errors
Make sure you have the correct environment variables set for production builds.

## License

All content and artwork is copyright Rachelle Ymay Skilling.
