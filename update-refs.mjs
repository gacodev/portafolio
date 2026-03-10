import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceExtensions(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.next', '.git', 'public'].includes(file)) replaceExtensions(fullPath);
    } else {
      if (['.js', '.jsx'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const newContent = content.replace(/\.(png|jpg|jpeg)(?=['"`])/gi, '.webp');
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent);
          console.log('Updated references in ' + fullPath);
        }
      }
    }
  }
}

replaceExtensions(__dirname);
