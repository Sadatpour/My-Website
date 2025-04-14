const sharp = require('sharp');
const path = require('path');

const sourceImage = path.join(__dirname, 'public', 'images', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'mstile-150x150.png');

sharp(sourceImage)
  .resize(150, 150)
  .toFile(outputPath)
  .then(() => {
    console.log('Created mstile-150x150.png');
  })
  .catch(err => {
    console.error('Error creating mstile-150x150.png:', err);
  }); 