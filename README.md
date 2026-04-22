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

### Step 1: Get TinaCMS Cloud Credentials

1. Sign up at https://app.tina.io
2. Create a project (select "Astro" as the framework)
3. Get your **Client ID** (from Overview tab)
4. Get your **Content Read-only Token** (from Tokens tab)

### Step 2: Add Environment Variables

Create a `.env` file in the project root:

```bash
PUBLIC_TINA_CLIENT_ID=your-client-id-from-tina-io
TINA_TOKEN=your-token-from-tina-io
```

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard

1. Log in to Cloudflare Dashboard at https://dash.cloudflare.com
2. Go to **Pages** → **Create a project** → **Connect to Git**
3. Select your GitHub repository (`artmom`)
4. Configure the build settings:

| Setting | Value |
|---------|-------|
| **Production branch** | `main` |
| **Build command** | `npm run build:prod` |
| **Build output directory** | `dist` |

5. Add environment variables:

| Variable | Value |
|----------|-------|
| `PUBLIC_TINA_CLIENT_ID` | Your TinaCMS Client ID |
| `TINA_TOKEN` | Your TinaCMS Token |
| `NODE_VERSION` | `22` |

6. Click **Save and Deploy**

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Authenticate
wrangler login

# Deploy
npx wrangler pages deploy dist --project-name=rachelle-portfolio
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
└── .env                 # Environment variables
```

## Accessing TinaCMS Admin

After deployment, access TinaCMS at:
- **Production:** `https://your-domain.com/admin/index.html`
- **Local:** `http://localhost:4321/admin/index.html`

## Troubleshooting

### Admin 404 Error
If you get a 404 at `/admin`, use `/admin/index.html` instead.

### Build Errors
Make sure you have the correct environment variables set for production builds.

### TinaCMS Cloud Connection Issues
1. Verify your project is initialized at https://app.tina.io
2. Check that the GitHub repository is connected
3. Ensure the main branch is indexed

## License

All content and artwork is copyright Rachelle Ymay Skilling.