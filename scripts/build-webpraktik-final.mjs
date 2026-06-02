import { readFileSync, writeFileSync } from 'fs';

const extracted = JSON.parse(
  readFileSync(new URL('./_webpraktik_extract.json', import.meta.url), 'utf8')
);

const data = {
  artifact_metadata: extracted.artifact_metadata,
  general_info: {
    industry: 'IT / Tech',
    tone_of_voice: 'Дружелюбно-формальный / Развивающий',
    company_name: 'Вебпрактик',
  },
  authenticity_index: 'High',
  authenticity_reason:
    'HR-процессы, манифест ценностей и отзывы сотрудников согласованы; декларации развития и наставничества подтверждены регламентами 1-to-1 и чек-листами.',
  executive_summary: extracted.executive_summary,
  big_nine_detailed_analysis: extracted.big_nine_detailed_analysis,
  raw_ocp_profile: extracted.raw_ocp_profile,
  risks_and_weaknesses: extracted.risks_and_weaknesses,
};

const outPath = new URL('../src/data/webpraktik.json', import.meta.url);
const json = JSON.stringify(data, null, 2);
JSON.parse(json);
writeFileSync(outPath, json + '\n', 'utf8');
const lineCount = json.split('\n').length + 1;
console.log(String(outPath.pathname).replace(/^\//, '').replace(/\//g, '\\'));
console.log('lines', lineCount);
