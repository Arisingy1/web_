import { AlertCircle, CheckCircle2, HelpCircle, Target, UserCheck } from 'lucide-react';
import type { TalentmindEvaluationPrism } from '../../types/cultureReport';
import { isStructuredRedFlag } from '../../types/cultureReport';

export function EvaluationPrismSection({ prism }: { prism: TalentmindEvaluationPrism }) {
  const hasQuestions = prism.diagnostic_questions && prism.diagnostic_questions.length > 0;
  const hasIndicators = prism.key_behavioral_indicators && prism.key_behavioral_indicators.length > 0;
  const redFlags = prism.red_flags ?? [];

  return (
    <section className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-indigo-50/50 p-6 shadow-sm dark:border-violet-900/50 dark:from-violet-950/30 dark:to-indigo-950/20 md:p-8">
      <h2 className="mb-6 text-xl font-bold text-slate-800 dark:text-slate-100">
        TalentMind Evaluation Prism
      </h2>

      <div className="mb-8 rounded-xl border border-indigo-200 bg-white/80 p-5 dark:border-indigo-800 dark:bg-slate-800/60">
        <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          <Target className="h-4 w-4" aria-hidden />
          Целевой культурный fit
        </div>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{prism.target_cultural_fit}</p>
      </div>

      {hasQuestions && (
        <>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <HelpCircle className="h-4 w-4" aria-hidden />
            Диагностические вопросы
          </h3>
          <div className="mb-8 space-y-4">
            {prism.diagnostic_questions!.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-600 dark:bg-slate-800"
              >
                <p className="mb-3 font-semibold text-slate-800 dark:text-slate-100">{item.question}</p>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-medium text-slate-500">Критерии: </span>
                  {item.eval_criteria}
                </p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-800 dark:bg-emerald-950/40">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                    <div>
                      <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">Целевой индикатор</p>
                      <p className="text-sm text-emerald-900 dark:text-emerald-100">{item.target_indicator}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950/40">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
                    <div>
                      <p className="text-xs font-bold uppercase text-red-700 dark:text-red-400">Red flag</p>
                      <p className="text-sm text-red-900 dark:text-red-100">{item.red_flag}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {hasIndicators && (
        <>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <UserCheck className="h-4 w-4" aria-hidden />
            Ключевые поведенческие индикаторы
          </h3>
          <div className="mb-8 space-y-4">
            {prism.key_behavioral_indicators!.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-600 dark:bg-slate-800"
              >
                <p className="mb-2 font-semibold text-slate-800 dark:text-slate-100">{item.indicator}</p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.how_it_manifests}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {redFlags.length > 0 && (
        <>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Red flags</h3>
          <ul className="space-y-3">
            {redFlags.map((flag, idx) =>
              isStructuredRedFlag(flag) ? (
                <li
                  key={idx}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/40"
                >
                  <div className="flex gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{flag.flag}</p>
                      <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">{flag.reason_for_friction}</p>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  key={idx}
                  className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
                  {flag}
                </li>
              )
            )}
          </ul>
        </>
      )}
    </section>
  );
}
