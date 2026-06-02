import { ShieldCheck } from 'lucide-react';

const STYLES: Record<string, { box: string; text: string; icon: string }> = {
  High: {
    box: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-400',
    icon: 'text-emerald-500',
  },
  Medium: {
    box: 'bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800',
    text: 'text-amber-700 dark:text-amber-400',
    icon: 'text-amber-500',
  },
  Low: {
    box: 'bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-800',
    text: 'text-red-700 dark:text-red-400',
    icon: 'text-red-500',
  },
};

export function AuthenticityBadge({
  level,
  reason,
}: {
  level: string;
  reason: string;
}) {
  const style = STYLES[level] ?? STYLES.Medium;

  return (
    <div
      className={`group relative flex min-w-[120px] cursor-help flex-col items-center justify-center rounded-xl border p-4 ${style.box}`}
      tabIndex={0}
      aria-describedby="authenticity-tooltip"
    >
      <ShieldCheck className={`mb-2 h-8 w-8 ${style.icon}`} aria-hidden />
      <span className={`text-lg font-bold ${style.text}`}>{level}</span>
      <span className={`mt-1 text-xs font-medium ${style.text}`}>Authenticity</span>
      <div
        id="authenticity-tooltip"
        role="tooltip"
        className="pointer-events-none absolute top-full z-20 mt-2 w-52 rounded-lg bg-slate-800 p-2.5 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus:opacity-100 dark:bg-slate-700"
      >
        {reason}
      </div>
    </div>
  );
}
