import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { CultureReportData } from '../../types/cultureReport';

export function ExecutiveSummary({ summary }: { summary: CultureReportData['executive_summary'] }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-slate-50 p-6 shadow-sm dark:border-indigo-900/50 dark:from-indigo-950/30 dark:to-slate-900 md:p-8">
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Уникальное ценностное предложение (UVP)
          </h2>
          <p className="text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100 md:text-2xl">
            {summary.culture_uniqueness}
          </p>
          {summary.cultural_contradictions && summary.cultural_contradictions.length > 0 && (
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-100 p-4 dark:border-amber-800 dark:bg-amber-950/50">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
              <div>
                <h4 className="mb-1 text-sm font-bold text-amber-800 dark:text-amber-200">
                  Культурные противоречия
                </h4>
                <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-100">
                  {summary.cultural_contradictions[0]}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Тип культуры</h3>
            <div className="inline-block rounded-lg border border-indigo-200 bg-white px-4 py-2 font-semibold text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-slate-800 dark:text-indigo-300">
              {summary.culture_type}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              Доминирующие ценности
            </h3>
            <div className="flex flex-col gap-2">
              {summary.dominant_values.map((value, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-slate-600 dark:bg-slate-800"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
