import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const version = process.argv[2];

if (!version) {
  console.error('Usage: node finalize-inostudio-page.mjs <v4>');
  process.exit(1);
}

const payloadPath = join(__dirname, `inostudio-${version}-payload.json`);
const outputPath = join(__dirname, '..', 'src', 'data', `inostudio-${version}.json`);

const data = JSON.parse(readFileSync(payloadPath, 'utf8'));

data.general_info = {
  company_name: `Inostudio ${version.toUpperCase()}`,
  industry: 'IT / Tech',
  tone_of_voice: 'Формальный / Регламентированный',
};
data.authenticity_index = 'High';
const boundsVersions = new Set(['v5']);
data.authenticity_reason = boundsVersions.has(version)
  ? 'Девять документов по холакратии, онбордингу и инженерным регламентам согласованы; разрывы и OCP-баллы подкреплены score_logic_bounds (почему не ниже / не выше).'
  : 'Девять документов по холакратии, онбордингу и инженерным регламентам согласованы; разрывы и OCP-баллы подкреплены цепочками downgrade-логики и score_logic_chain.';

writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(`Wrote ${outputPath}`);
