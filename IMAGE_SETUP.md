# Image Setup Guide

## Quick Start - Adding Your Car Images

I've set up the website to display your car images. Here's how to add them:

### Step 1: Save Your Images

Save your car images to this folder:
```
public/images/cars/
```

### Step 2: Name Your Images

Name your images exactly as follows:

1. **hero-car-1.jpg** - Your red sports car (will appear on homepage hero section)
2. **car-2.jpg** - Black Porsche Panamera (will appear in gallery)
3. **car-3.jpg** - Lamborghini Aventador (will appear in gallery)
4. **car-4.jpg** - Red sports car on coastal road (will appear in gallery)
5. **car-5.jpg** - Premium vehicle with Super Shield window film (will appear in gallery)
6. **car-6.jpg** - Luxury car with paint protection film (will appear in gallery)

### Step 3: Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended size**: 1920x1080px or larger
- **File size**: Try to keep under 500KB for faster loading (you can compress them)
- **Aspect ratio**: 4:3 or 16:9 works best

### Step 4: Test

1. Save your images to `public/images/cars/` with the correct names
2. Refresh your browser at `http://localhost:3000`
3. You should see:
   - Car image on the homepage hero section
   - All 4 car images in the Gallery page

### Adding More Images

To add more images to the gallery:

1. Add your image to `public/images/cars/` (e.g., `car-5.jpg`)
2. Open `app/gallery/page.tsx`
3. Add a new entry to the `galleryItems` array:
   ```typescript
   { src: "/images/cars/car-5.jpg", alt: "Your car description" },
   ```

### Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- For best results, use JPG for photos
- Keep hero image under 300KB for fast loading

---

**Note**: If images don't appear, check:
- File names match exactly (case-sensitive)
- Images are in `public/images/cars/` folder
- File extensions are correct (.jpg, .png, etc.)

