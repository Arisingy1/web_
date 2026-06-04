import { ArrowRightLeft } from 'lucide-react';
import type { CultureGapItem } from '../../types/cultureReport';

export function CultureGapAnalysisSection({ items }: { items: CultureGapItem[] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:p-8">
      <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
        <ArrowRightLeft className="h-5 w-5 text-indigo-500" aria-hidden />
        Анализ культурных разрывов (Gap Analysis)
      </h2>
      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        Сопоставление декларативных ценностей и операциональной реальности
      </p>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20"
          >
            <h3 className="mb-4 text-lg font-bold text-indigo-800 dark:text-indigo-300">{item.dimension}</h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
                <p className="mb-2 text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">Декларация</p>
                <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-100">{item.declarative_value_source}</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                <p className="mb-2 text-xs font-bold uppercase text-amber-700 dark:text-amber-400">Операционная реальность</p>
                <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-100">{item.operational_reality_source}</p>
              </div>
            </div>
            <p className="mt-4 border-l-4 border-indigo-400 pl-4 text-sm leading-relaxed text-slate-700 dark:border-indigo-600 dark:text-slate-200">
              {item.gap_description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
