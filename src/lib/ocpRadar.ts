/** Семь агрегированных OCP-измерений для лепестковой диаграммы */
const OCP_RADAR_GROUPS: { subject: string; ids: number[] }[] = [
  { subject: 'Инновации', ids: [1, 2, 3, 4, 5, 6, 7] },
  { subject: 'Стабильность', ids: [8, 9, 10, 11, 12, 13] },
  { subject: 'Люди', ids: [14, 15, 16, 17, 18, 19, 20] },
  { subject: 'Результаты', ids: [21, 22, 23, 24, 25, 26] },
  { subject: 'Качество', ids: [27, 28, 29, 30, 31] },
  { subject: 'Команда', ids: [32, 33, 34, 35, 36] },
  { subject: 'Лидерство', ids: [39, 40, 41, 42, 45, 54] },
];

export function buildOcpRadarData(
  profile: Array<{ id: number; score: number }>
): { subject: string; score: number; fullMark: number }[] {
  const byId = new Map(profile.map((p) => [p.id, p.score]));

  return OCP_RADAR_GROUPS.map(({ subject, ids }) => {
    const scores = ids.map((id) => byId.get(id)).filter((s): s is number => s !== undefined);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return { subject, score: avg, fullMark: 100 };
  });
}
