import { AlertTriangle, Quote, Sparkles } from 'lucide-react';
import type { RiskAnalysis } from '../../types/candidateReport';

export function RiskStrengthSection({ analysis }: { analysis: RiskAnalysis }) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100">
          <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden />
          Риски
        </h2>
        <div className="space-y-4">
          {analysis.risk_cards.map((risk, idx) => {
            const isCritical = risk.severity === 'Critical';
            const isHigh = risk.severity === 'High' || risk.severity === 'Alert';
            const cardClass = isCritical
              ? 'border-red-200 bg-red-50/60 dark:border-red-800 dark:bg-red-950/30'
              : isHigh
                ? 'border-amber-200 bg-amber-50/60 dark:border-amber-800 dark:bg-amber-950/30'
                : 'border-slate-200 bg-slate-50/60 dark:border-slate-600 dark:bg-slate-900/40';
            const badgeClass = isCritical
              ? 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200'
              : isHigh
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
            const titleClass = isCritical
              ? 'text-red-900 dark:text-red-100'
              : isHigh
                ? 'text-amber-900 dark:text-amber-100'
                : 'text-slate-800 dark:text-slate-100';
            const textClass = isCritical
              ? 'text-red-800 dark:text-red-200'
              : isHigh
                ? 'text-amber-800 dark:text-amber-200'
                : 'text-slate-600 dark:text-slate-300';

            return (
              <article key={idx} className={`rounded-xl border p-4 ${cardClass}`}>
                <div className="mb-2 flex items-center gap-2">
                  <span className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${badgeClass}`}>
                    {risk.severity}
                  </span>
                </div>
                <h3 className={`mb-1 font-semibold ${titleClass}`}>{risk.title}</h3>
                <p className={`text-sm leading-relaxed ${textClass}`}>{risk.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100">
          <Sparkles className="h-5 w-5 text-emerald-500" aria-hidden />
          Сильные стороны
        </h2>
        <div className="space-y-4">
          {analysis.strengths_cards.map((strength, idx) => (
            <article
              key={idx}
              className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/30"
            >
              <h3 className="mb-1 font-semibold text-emerald-900 dark:text-emerald-100">{strength.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-emerald-800 dark:text-emerald-200">{strength.description}</p>
              <div className="relative rounded-lg bg-white/80 px-4 py-3 dark:bg-slate-900/50">
                <Quote className="absolute left-2 top-2 h-4 w-4 text-emerald-300 dark:text-emerald-600" aria-hidden />
                <p className="pl-5 text-sm italic text-slate-600 dark:text-slate-400">«{strength.quote}»</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
