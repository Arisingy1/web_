import { CheckCircle2, Scale, XCircle } from 'lucide-react';
import { getVerdictStyles } from '../../lib/verdictColors';
import type { DecisionBlock as DecisionData } from '../../types/candidateReport';

export function DecisionBlock({ decision, verdictColor }: { decision: DecisionData; verdictColor: string }) {
  const verdict = getVerdictStyles(verdictColor);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-5 flex items-center gap-3">
        <Scale className="h-5 w-5 text-indigo-500" aria-hidden />
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Решение</h2>
        <span className={`ml-auto rounded-lg px-3 py-1 text-sm font-bold ${verdict.badge}`}>
          {decision.final_decision}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            За
          </h3>
          <ul className="space-y-2">
            {decision.arguments_pros.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50/60 p-4 dark:border-red-800 dark:bg-red-950/30">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
            <XCircle className="h-4 w-4" aria-hidden />
            Против
          </h3>
          <ul className="space-y-2">
            {decision.arguments_cons.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-red-900 dark:text-red-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
