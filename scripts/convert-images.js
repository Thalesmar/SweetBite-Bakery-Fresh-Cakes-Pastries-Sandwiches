// Image conversion script for WebP optimization
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const assetsDir = './src/assets';
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function convertImages() {
  const files = await readdir(assetsDir);
  
  for (const file of files) {
    const ext = file.substring(file.lastIndexOf('.'));
    if (imageExtensions.includes(ext.toLowerCase())) {
      const inputPath = join(assetsDir, file);
      const outputPath = join(assetsDir, file.replace(ext, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✓ Converted ${file} to WebP`);
    }
  }
}

convertImages().catch(console.error);
