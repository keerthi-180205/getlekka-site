import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const enDir = path.join(outDir, 'en');

if (fs.existsSync(enDir)) {
  fs.cpSync(enDir, outDir, { recursive: true });
  console.log('✓ Successfully copied out/en to root out/ (English default at /)');
}

