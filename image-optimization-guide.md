# Image Optimization Guide

## Step 1: Convert Images to WebP

### Using Online Tools:
1. Go to https://squoosh.app/
2. Upload each image from `src/assets/`
3. Select WebP format, quality 80-85
4. Download and save as `.webp` extension

### Using CLI (if you have Node.js):
```bash
npm install -g sharp-cli
sharp -i src/assets/cake-img-1.jpg -o src/assets/cake-img-1.webp --webp
```

### Batch convert all images:
```bash
# Install sharp
npm install sharp --save-dev

# Create conversion script
node scripts/convert-images.js
```

## Step 2: Create Responsive Image Sizes

For each hero image, create 3 sizes:
- Small: 640px width (mobile)
- Medium: 1024px width (tablet)
- Large: 1920px width (desktop)

## Expected Results:
- 60-80% file size reduction
- Faster FCP by 2-3 seconds
- Better mobile performance
