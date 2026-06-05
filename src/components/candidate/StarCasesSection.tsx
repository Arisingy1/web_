import { Star } from 'lucide-react';
import type { StarCase } from '../../types/candidateReport';

const SENTIMENT_STYLES: Record<string, string> = {
  positive: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200',
  negative: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200',
  neutral: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-300',
};

export function StarCasesSection({ cases }: { cases: StarCase[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
        <Star className="h-5 w-5 text-amber-500" aria-hidden />
        STAR-кейсы
      </h2>
      <div className="space-y-6">
        {cases.map((starCase, idx) => (
          <article key={idx} className="rounded-xl border border-slate-200 p-5 dark:border-slate-600">
            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">{starCase.title}</h3>
            <dl className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(
                [
                  ['S', starCase.situation],
                  ['T', starCase.task],
                  ['A', starCase.action],
                  ['R', starCase.result],
                ] as const
              ).map(([letter, text]) => (
                <div key={letter} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/40">
                  <dt className="mb-1 text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">{letter}</dt>
                  <dd className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{text}</dd>
                </div>
              ))}
            </dl>
            <div
              className={`rounded-lg border px-4 py-3 text-sm leading-relaxed ${
                SENTIMENT_STYLES[starCase.ai_assessment.sentiment] ?? SENTIMENT_STYLES.neutral
              }`}
            >
              <span className="mr-2 text-xs font-bold uppercase">AI-оценка:</span>
              {starCase.ai_assessment.text}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
