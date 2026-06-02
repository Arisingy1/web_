import { ExternalLink } from 'lucide-react';
import { BIG_NINE_LABELS } from '../../constants';
import { getScoreColors } from '../../lib/scoreColors';
import type { BigNineItem } from '../../types/cultureReport';

export function BigNineCard({
  dimensionKey,
  item,
  onOpen,
}: {
  dimensionKey: string;
  item: BigNineItem;
  onOpen: () => void;
}) {
  const colors = getScoreColors(item.score);
  const title = BIG_NINE_LABELS[dimensionKey] ?? dimensionKey;

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h3>
        <div
          className={`shrink-0 rounded-full border px-3 py-1 text-sm font-bold ${colors.bg} ${colors.text} ${colors.border}`}
        >
          {item.score} / 100
        </div>
      </div>
      <div className="mb-4 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-700">
        <div className={`h-1.5 rounded-full ${colors.bar}`} style={{ width: `${item.score}%` }} role="progressbar" aria-valuenow={item.score} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700"
      >
        Подробнее и обоснование
        <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden />
      </button>
    </article>
  );
}
