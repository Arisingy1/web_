export function getVerdictStyles(color: string) {
  switch (color) {
    case 'green':
      return {
        bg: 'bg-emerald-50 dark:bg-emerald-950/40',
        border: 'border-emerald-200 dark:border-emerald-800',
        text: 'text-emerald-700 dark:text-emerald-300',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      };
    case 'red':
      return {
        bg: 'bg-red-50 dark:bg-red-950/40',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-700 dark:text-red-300',
        badge: 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200',
      };
    case 'yellow':
    default:
      return {
        bg: 'bg-amber-50 dark:bg-amber-950/40',
        border: 'border-amber-200 dark:border-amber-800',
        text: 'text-amber-700 dark:text-amber-300',
        badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      };
  }
}
