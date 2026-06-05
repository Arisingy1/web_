import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const main = JSON.parse(readFileSync(join(root, 'src/data/inostudio-v4.json'), 'utf8'));
const sections = JSON.parse(readFileSync(join(root, 'scripts/v4-sections.json'), 'utf8'));

Object.assign(main, sections);
writeFileSync(join(root, 'src/data/inostudio-v4.json'), `${JSON.stringify(main, null, 2)}\n`, 'utf8');
console.log('Merged v4 sections');
