const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images');
const availableImages = new Set(fs.readdirSync(publicImagesDir));

let errors = 0;

function checkImagesInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  // Look for strings like "/images/filename.jpg"
  const regex = /\/images\/([^"'\s]+)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const filename = match[1];
    if (!availableImages.has(filename)) {
      console.error(`❌ Missing image: ${filename} (referenced in ${path.basename(filePath)})`);
      errors++;
    }
  }
}

checkImagesInFile(path.join(__dirname, '../src/data/content.ts'));
checkImagesInFile(path.join(__dirname, '../src/data/menu.ts'));

if (errors > 0) {
  console.error(`\nFailed: Found ${errors} missing image(s).`);
  process.exit(1);
} else {
  console.log('✅ All referenced images exist in /public/images.');
}
