import { useEffect, useRef } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Quote, X } from 'lucide-react';
import { getScoreColors } from '../../lib/scoreColors';
import type { ActiveSoftSkill } from '../../types/candidateReport';

const SIGNAL_LABELS: Record<string, string> = {
  tempo: 'Темп',
  pauses_hesitations: 'Паузы',
  intonation_variability: 'Интонация',
  voice_tension_breathing: 'Напряжение',
  latency_before_answer: 'Латентность',
};

const HIDDEN_SIGNALS = new Set(['dominance_interruptions']);

export function SoftSkillModal({ skill, onClose }: { skill: ActiveSoftSkill; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const colors = getScoreColors(skill.score);
  const { modal_content: content } = skill;

  const chartData = [
    { name: 'Кандидат', value: content.chart_data.candidate },
    { name: 'Benchmark', value: content.chart_data.benchmark },
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="soft-skill-title"
        tabIndex={-1}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-600 dark:bg-slate-800 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-slate-700">
          <div>
            <h2 id="soft-skill-title" className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {skill.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{skill.short_summary}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-bold tabular-nums ${colors.text}`}>{skill.score}</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          <p className="text-sm text-slate-600 dark:text-slate-300">{content.benchmark_text}</p>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{content.gap_analysis}</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
              <p className="mb-1 text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">Почему не выше</p>
              <p className="text-sm text-emerald-900 dark:text-emerald-100">{content.why_not_higher}</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="mb-1 text-xs font-bold uppercase text-amber-700 dark:text-amber-400">Почему не ниже</p>
              <p className="text-sm text-amber-900 dark:text-amber-100">{content.why_not_lower}</p>
            </div>
          </div>

          <div className="h-48 rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v) => [`${v ?? 0}`, 'Балл']} />
                <Legend />
                <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {content.evidence_quotes.map((quote, idx) => (
            <div key={idx} className="relative rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-900/60">
              <Quote className="absolute left-2 top-2 h-4 w-4 text-sky-300 dark:text-sky-600" aria-hidden />
              <p className="pl-5 text-sm italic text-slate-500 dark:text-slate-400">«{quote}»</p>
            </div>
          ))}

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
            <p className="mb-3 text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">Аудио-наблюдения</p>
            <p className="mb-3 text-sm text-indigo-900 dark:text-indigo-100">{content.audio_observations.summary}</p>
            {content.audio_observations.observations
              .filter((obs) => !HIDDEN_SIGNALS.has(obs.signal))
              .map((obs, idx) => (
              <div key={idx} className="mb-2 rounded-lg border border-indigo-100 bg-white/60 p-3 last:mb-0 dark:border-indigo-900 dark:bg-slate-800/60">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {SIGNAL_LABELS[obs.signal] ?? obs.signal}: {obs.value}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{obs.impact_on_skill}</p>
                {obs.supporting_quotes.map((q, qIdx) => (
                  <p key={qIdx} className="mt-1 text-xs italic text-slate-500">«{q}»</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
