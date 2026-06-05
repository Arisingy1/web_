import { TrendingDown, TrendingUp } from 'lucide-react';
import { parseScoreLogicBounds } from '../../lib/parseScoreLogicBounds';

export function ScoreLogicBoundsBlock({
  text,
  compact = false,
}: {
  text: string;
  compact?: boolean;
}) {
  const { whyNotLower, whyNotHigher } = parseScoreLogicBounds(text);

  if (!whyNotLower && !whyNotHigher) {
    return (
      <p className={`leading-relaxed text-slate-600 dark:text-slate-300 ${compact ? 'text-xs' : 'text-sm'}`}>
        {text}
      </p>
    );
  }

  return (
    <div className={`grid gap-2 ${compact ? '' : 'sm:grid-cols-2'}`}>
      {whyNotLower && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-3 dark:border-emerald-800 dark:bg-emerald-950/30">
          <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden />
            Почему не ниже
          </p>
          <p className={`leading-relaxed text-emerald-900 dark:text-emerald-100 ${compact ? 'text-xs' : 'text-sm'}`}>
            {whyNotLower}
          </p>
        </div>
      )}
      {whyNotHigher && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-3 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400">
            <TrendingDown className="h-3.5 w-3.5" aria-hidden />
            Почему не выше
          </p>
          <p className={`leading-relaxed text-amber-900 dark:text-amber-100 ${compact ? 'text-xs' : 'text-sm'}`}>
            {whyNotHigher}
          </p>
        </div>
      )}
    </div>
  );
}
