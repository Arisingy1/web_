import { useEffect, useRef } from 'react';
import { Quote, X } from 'lucide-react';
import { BIG_NINE_LABELS } from '../../constants';
import { getScoreColors } from '../../lib/scoreColors';
import type { ActiveBigNine } from '../../types/cultureReport';

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
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800"
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/80">
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
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Детальный анализ (Gap Analysis)
              </h3>
              <p className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-base leading-relaxed text-slate-700 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200">
                {active.modal_content.detailed_gap_analysis}
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Влияющие OCP-параметры
              </h3>
              <div className="space-y-4">
                {active.modal_content.contributing_ocp_parameters.map((ocp) => {
                  const paramColors = getScoreColors(ocp.score);
                  return (
                    <div
                      key={ocp.id}
                      className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-600 dark:bg-slate-800"
                    >
                      <div className={`absolute bottom-0 left-0 top-0 w-1 ${paramColors.bar}`} aria-hidden />
                      <div className="mb-2 flex flex-wrap justify-between gap-2 pl-2">
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-slate-100">{ocp.name_ru}</h4>
                          <span className="text-xs text-slate-400">{ocp.name_en}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded border px-2 py-1 text-xs font-semibold ${
                              ocp.is_declarative
                                ? 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300'
                                : 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300'
                            }`}
                          >
                            {ocp.is_declarative ? 'Декларативный' : 'Системный'}
                          </span>
                          <span className={`text-sm font-bold ${paramColors.text}`}>{ocp.score}</span>
                        </div>
                      </div>
                      <p className="pl-2 text-sm text-slate-600 dark:text-slate-300">{ocp.micro_reason}</p>
                      {ocp.evidence_quote && (
                        <div className="relative mt-3 border-l-2 border-indigo-200 pl-4 dark:border-indigo-700">
                          <Quote className="absolute -left-2 top-0 h-4 w-4 bg-white text-indigo-300 dark:bg-slate-800 dark:text-indigo-500" aria-hidden />
                          <p className="text-sm italic text-slate-500 dark:text-slate-400">
                            &ldquo;{ocp.evidence_quote}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
