import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '../src/content');

const collections = ['artist', 'artworks', 'exhibitions', 'comics', 'workshops'];

function fixImagePaths() {
  let fixed = 0;

  for (const collection of collections) {
    const collectionPath = path.join(contentDir, collection);
    
    if (!fs.existsSync(collectionPath)) continue;

    for (const file of fs.readdirSync(collectionPath)) {
      if (!file.endsWith('.md')) continue;

      const filePath = path.join(collectionPath, file);
      let content = fs.readFileSync(filePath, 'utf8');

      const original = content;

      content = content.replace(
        /(artworkImage|comicImage|heroImagePath): \/assets\/images\/([^\n]+)$/gm,
        '$1: ../../assets/images/$2'
      );

      if (content !== original) {
        fs.writeFileSync(filePath, content);
        fixed++;
        console.log(`Fixed: ${collection}/${file}`);
      }
    }
  }

  console.log(`Fixed ${fixed} file(s)`);
}

fixImagePaths();