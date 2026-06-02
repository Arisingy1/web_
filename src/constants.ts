/** Порядок отображения 3×3 сетки Big Nine */
export const BIG_NINE_ORDER = [
  'agility',
  'collaboration',
  'customer',
  'diversity',
  'execution',
  'innovation',
  'integrity',
  'performance',
  'respect',
] as const;

export const BIG_NINE_LABELS: Record<string, string> = {
  agility: 'Гибкость (Agility)',
  collaboration: 'Коллаборация',
  customer: 'Клиентоцентричность',
  diversity: 'Разнообразие',
  execution: 'Исполнение',
  innovation: 'Инновации',
  integrity: 'Честность',
  performance: 'Результативность',
  respect: 'Уважение',
};
