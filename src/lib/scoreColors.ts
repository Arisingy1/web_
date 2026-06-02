export function getScoreColors(score: number) {
  if (score <= 50) {
    return {
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/40',
      bar: 'bg-red-500',
      border: 'border-red-200 dark:border-red-800',
      ring: 'stroke-red-500',
    };
  }
  if (score <= 75) {
    return {
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      bar: 'bg-amber-500',
      border: 'border-amber-200 dark:border-amber-800',
      ring: 'stroke-amber-500',
    };
  }
  return {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    bar: 'bg-emerald-500',
    border: 'border-emerald-200 dark:border-emerald-800',
    ring: 'stroke-emerald-500',
  };
}
