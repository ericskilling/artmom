# Image Path Convention

## Required Format

When adding images to content entries in Sveltia CMS, use **relative paths** from the content file location to the images directory:

```
../../assets/images/filename.jpg
```

## Examples

**Artworks** (`src/content/artworks/*.md`):
```yaml
artworkImage: ../../assets/images/my-artwork.jpg
```

**Comics** (`src/content/comics/*.md`):
```yaml
comicImage: ../../assets/images/my-comic.jpg
```

**Artist About** (`src/content/artist/about.md`):
```yaml
heroImagePath: ../../assets/images/hero.jpg
```

## How It Works

- Content files live in `src/content/<collection>/`
- Images live in `src/assets/images/`
- Relative path from `src/content/artworks/filename.md` → `src/assets/images/` = `../../assets/images/`

## Auto-Fix Script

A prebuild script (`scripts/fix-image-paths.js`) automatically corrects common path mistakes:

- `/assets/images/...` → `../../assets/images/...`
- `src/src/assets/images/...` → `../../assets/images/...`
- `src/assets/images/...` → `../../assets/images/...`

This runs automatically before `npm run build`.