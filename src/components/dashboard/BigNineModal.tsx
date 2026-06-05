import { useEffect, useRef } from 'react';
import { Quote, X } from 'lucide-react';
import { BIG_NINE_LABELS } from '../../constants';
import { getScoreColors } from '../../lib/scoreColors';
import type { ActiveBigNine, OcpParameter } from '../../types/cultureReport';
import { ScoreLogicBoundsBlock } from './ScoreLogicBoundsBlock';

function OcpParameterCard({ ocp }: { ocp: OcpParameter }) {
  const colors = getScoreColors(ocp.score);
  const hasEvidence =
    ocp.evidence_quote && !ocp.evidence_quote.includes('[Нет источника]');

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800">
      <div className="flex">
        <div className={`w-1.5 shrink-0 ${colors.bar}`} aria-hidden />
        <div className="min-w-0 flex-1 p-4">
          <div className="mb-1 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h4 className="font-bold text-slate-800 dark:text-slate-100">{ocp.name_ru}</h4>
              <p className="text-xs text-slate-400">{ocp.name_en}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold leading-tight ${
                  ocp.is_declarative
                    ? 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300'
                    : 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300'
                }`}
              >
                {ocp.is_declarative ? 'Декларативный' : 'Системный'}
              </span>
              <span className={`min-w-[2ch] text-right text-lg font-bold tabular-nums ${colors.text}`}>
                {ocp.score}
              </span>
            </div>
          </div>

          {ocp.micro_reason && (
            <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{ocp.micro_reason}</p>
          )}

          {ocp.score_logic_bounds && (
            <div className="mb-3">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Границы оценки
              </p>
              <ScoreLogicBoundsBlock text={ocp.score_logic_bounds} compact />
            </div>
          )}
          {!ocp.score_logic_bounds && ocp.score_logic_chain && (
            <div className="mb-3 rounded-lg border border-violet-100 bg-violet-50/60 px-3 py-2 dark:border-violet-900/50 dark:bg-violet-950/30">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                Score logic chain
              </p>
              <p className="font-mono text-xs leading-relaxed text-violet-800 dark:text-violet-200">
                {ocp.score_logic_chain}
              </p>
            </div>
          )}

          {hasEvidence ? (
            <div className="relative rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-900/60">
              <Quote
                className="absolute left-2 top-2 h-4 w-4 text-sky-300 dark:text-sky-600"
                aria-hidden
              />
              <p className="pl-5 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                {ocp.evidence_quote}
              </p>
            </div>
          ) : (
            <p className="text-xs italic text-slate-400">Цитата-подтверждение отсутствует</p>
          )}
        </div>
      </div>
    </article>
  );
}

export function BigNineModal({
  active,
  onClose,
}: {
  active: ActiveBigNine;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const colors = getScoreColors(active.score);
  const title = BIG_NINE_LABELS[active.key] ?? active.key;
  const parameters = active.modal_content.contributing_ocp_parameters;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="presentation">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="big-nine-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800"
      >
        <div className="shrink-0 border-b border-slate-100 bg-slate-50/80 px-6 py-5 dark:border-slate-700 dark:bg-slate-800/80">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 id="big-nine-modal-title" className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {title}
                </h2>
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-bold ${colors.bg} ${colors.text} ${colors.border}`}
                >
                  {active.score} / 100
                </span>
              </div>
              {active.summary && (
                <p className="max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {active.summary}
                </p>
              )}
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:overflow-hidden">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-6 lg:overflow-hidden">
            <section className="lg:overflow-y-auto lg:pr-2">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                Детальный анализ (Gap Analysis)
              </h3>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-900/50">
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  {active.modal_content.detailed_gap_analysis}
                </p>
              </div>
            </section>

            <section className="flex min-h-0 flex-col lg:max-h-[calc(92vh-11rem)]">
              <h3 className="mb-3 shrink-0 text-xs font-bold uppercase tracking-widest text-slate-400">
                Влияющие OCP-параметры
                <span className="ml-2 font-normal normal-case tracking-normal text-slate-300">
                  ({parameters.length})
                </span>
              </h3>
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 lg:max-h-full">
                {parameters.map((ocp) => (
                  <OcpParameterCard key={ocp.id} ocp={ocp} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
