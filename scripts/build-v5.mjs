import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const v4 = JSON.parse(readFileSync(join(root, 'src/data/inostudio-v4.json'), 'utf8'));
const top = JSON.parse(readFileSync(join(root, 'scripts/v5-top.json'), 'utf8'));
const bigNine = JSON.parse(readFileSync(join(root, 'scripts/v5-bignine.json'), 'utf8'));
const rawOcp = JSON.parse(readFileSync(join(root, 'scripts/v5-raw-ocp.json'), 'utf8'));

const data = {
  artifact_metadata: v4.artifact_metadata,
  ...top,
  big_nine_detailed_analysis: bigNine,
  raw_ocp_profile: rawOcp,
  general_info: {
    company_name: 'Inostudio V5',
    industry: 'IT / Tech',
    tone_of_voice: 'Формальный / Регламентированный',
  },
  authenticity_index: 'High',
  authenticity_reason:
    'Девять документов по холакратии, онбордингу и инженерным регламентам согласованы; разрывы и OCP-баллы подкреплены score_logic_bounds (почему не ниже / не выше).',
};

writeFileSync(join(root, 'src/data/inostudio-v5.json'), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log('Wrote inostudio-v5.json');
