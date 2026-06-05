import { AlertCircle, CheckCircle2, ClipboardList, HelpCircle } from 'lucide-react';
import type { ManagementGuide } from '../../types/candidateReport';

export function ManagementGuideSection({ guide }: { guide: ManagementGuide }) {
  return (
    <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-slate-50 p-6 shadow-sm dark:border-indigo-900/50 dark:from-indigo-950/30 dark:to-slate-900 md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
        <ClipboardList className="h-5 w-5 text-indigo-500" aria-hidden />
        {guide.title}
      </h2>
      <div className="space-y-6">
        {guide.themes_to_clarify.map((theme, idx) => (
          <article key={idx} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-600 dark:bg-slate-800">
            <h3 className="mb-3 text-lg font-semibold text-slate-800 dark:text-slate-100">{theme.theme}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{theme.why}</p>

            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50/60 p-3 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-amber-700 dark:text-amber-400">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                Риск, если не проверить
              </p>
              <p className="text-sm text-amber-900 dark:text-amber-100">{theme.risk_if_unchecked}</p>
            </div>

            <div className="mb-4">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase text-slate-500">
                <HelpCircle className="h-3.5 w-3.5" aria-hidden />
                Вопросы
              </p>
              <ul className="space-y-2">
                {theme.questions.map((q, qIdx) => (
                  <li key={qIdx} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200">
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-800 dark:bg-emerald-950/30">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  Хороший ответ
                </p>
                <p className="text-sm text-emerald-900 dark:text-emerald-100">{theme.what_good_looks_like}</p>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50/60 p-3 dark:border-red-800 dark:bg-red-950/30">
                <p className="mb-1 text-xs font-bold uppercase text-red-700 dark:text-red-400">Red flags</p>
                <p className="text-sm text-red-900 dark:text-red-100">{theme.red_flags}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
