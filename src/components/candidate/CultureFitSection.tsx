import { AlertTriangle, CheckCircle2, Heart, XCircle } from 'lucide-react';
import type { CultureFitAssessment } from '../../types/candidateReport';

export function CultureFitSection({ assessment }: { assessment: CultureFitAssessment }) {
  return (
    <section className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-indigo-50/50 p-6 shadow-sm dark:border-violet-900/50 dark:from-violet-950/30 dark:to-indigo-950/20 md:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
          <Heart className="h-5 w-5 text-violet-500" aria-hidden />
          Культурный fit
        </h2>
        <span className="rounded-lg bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
          {assessment.match_percentage}%
        </span>
      </div>

      <p className="mb-6 rounded-xl border border-indigo-200 bg-white/80 p-4 text-sm leading-relaxed text-slate-700 dark:border-indigo-800 dark:bg-slate-800/60 dark:text-slate-200">
        {assessment.overall_fit_summary}
      </p>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            Точки совпадения
          </h3>
          <div className="space-y-3">
            {assessment.alignment_points.map((point, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-emerald-200 bg-white p-4 dark:border-emerald-800 dark:bg-slate-800"
              >
                <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-100">{point.trait}</h4>
                <p className="mb-2 text-sm italic text-slate-500 dark:text-slate-400">«{point.evidence_from_interview}»</p>
                <p className="text-sm text-emerald-800 dark:text-emerald-200">{point.why_it_fits}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            <XCircle className="h-4 w-4" aria-hidden />
            Точки трения
          </h3>
          <div className="space-y-3">
            {assessment.friction_points.map((point, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-amber-200 bg-white p-4 dark:border-amber-800 dark:bg-slate-800"
              >
                <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-100">{point.trait}</h4>
                <p className="mb-2 text-sm italic text-slate-500 dark:text-slate-400">«{point.evidence_from_interview}»</p>
                <p className="text-sm text-amber-800 dark:text-amber-200">{point.why_it_clashes}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {assessment.triggered_red_flags.length > 0 && (
        <ul className="space-y-2">
          {assessment.triggered_red_flags.map((flag, idx) => (
            <li
              key={idx}
              className="flex gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
              {flag}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
