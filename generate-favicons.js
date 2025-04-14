const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the source image exists
const sourceImage = path.join(__dirname, 'public', 'images', 'logo.png');
if (!fs.existsSync(sourceImage)) {
  console.error('Source image not found:', sourceImage);
  process.exit(1);
}

// Create the favicon sizes
const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

// Process each size
Object.entries(sizes).forEach(([filename, size]) => {
  const outputPath = path.join(__dirname, 'public', filename);
  
  sharp(sourceImage)
    .resize(size, size)
    .toFile(outputPath)
    .then(() => {
      console.log(`Created ${filename}`);
    })
    .catch(err => {
      console.error(`Error creating ${filename}:`, err);
    });
});

// Also create ICO file for favicon.ico (using 16x16, 32x32, and 48x48)
console.log('Note: favicon.ico needs to be created separately with an ICO converter tool.');
console.log('For now, copying the 32x32 PNG as favicon.ico.');

// For this example, we'll use the 32x32 PNG as the favicon.ico
sharp(sourceImage)
  .resize(32, 32)
  .toFile(path.join(__dirname, 'public', 'favicon.ico'))
  .then(() => {
    console.log('Created favicon.ico (simplified version)');
  })
  .catch(err => {
    console.error('Error creating favicon.ico:', err);
  });

console.log('Favicon generation initiated. Check the public folder for the output files.'); 