const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'public', 'assets');
const srcDir = path.join(__dirname, 'src');

console.log('Starting image optimization and reference updates (CommonJS)...');

// 1. Convert all images to WebP recursively
async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const newName = entry.name.slice(0, -ext.length) + '.webp';
        const newPath = path.join(directory, newName);

        try {
          console.log(`Converting: ${entry.name} -> ${newName}`);
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);

          // Delete the original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${entry.name}`);
        } catch (err) {
          console.error(`Error converting ${entry.name}:`, err);
        }
      }
    }
  }
}

// 2. Update references in source files recursively
function updateReferences(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and .git
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        updateReferences(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.ts', '.tsx', '.json', '.astro', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let updated = false;

        // Replace references (case insensitive match for extension)
        const newContent = content.replace(/\.(png|jpg|jpeg)\b/gi, (match) => {
          updated = true;
          return '.webp';
        });

        if (updated) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated references in: ${path.relative(__dirname, fullPath)}`);
        }
      }
    }
  }
}

async function main() {
  if (fs.existsSync(assetsDir)) {
    await processDirectory(assetsDir);
  }
  updateReferences(srcDir);
  console.log('Optimization and reference update process completed successfully!');
}

main().catch(console.error);
