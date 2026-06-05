import { Brain, MessageSquareQuote, Mic2 } from 'lucide-react';
import type { Psycholinguistics } from '../../types/candidateReport';

const MARKER_LABELS: Record<string, string> = {
  tempo: 'Темп речи',
  pauses_hesitations: 'Паузы и хезитации',
  intonation_variability: 'Вариативность интонации',
  voice_tension_breathing: 'Напряжение / дыхание',
  dominance_interruptions: 'Доминирование / перебивания',
  latency_before_answer: 'Латентность ответа',
};

export function PsycholinguisticsSection({ data }: { data: Psycholinguistics }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:p-8">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
        <Brain className="h-5 w-5 text-indigo-500" aria-hidden />
        Психолингвистика
      </h2>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-900/40">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Эго-слайдер</p>
          <div className="mb-2 flex justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
            <span>{data.ego_label_left}</span>
            <span>{data.ego_label_right}</span>
          </div>
          <div className="relative mb-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white bg-indigo-500 shadow-md dark:border-slate-800"
              style={{ left: `calc(${data.ego_slider_value}% - 10px)` }}
              aria-hidden
            />
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 opacity-40"
              style={{ width: `${data.ego_slider_value}%` }}
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{data.ego_description}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-900/40">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Локус контроля</p>
          <p className="mb-2 text-lg font-semibold capitalize text-indigo-600 dark:text-indigo-400">{data.locus_of_control}</p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{data.locus_description}</p>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-600">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Тон (текст)</p>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{data.tone.tone_textual}</p>
        </div>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            <Mic2 className="h-3.5 w-3.5" aria-hidden />
            Тон (аудио)
          </p>
          <p className="text-sm leading-relaxed text-indigo-900 dark:text-indigo-100">{data.tone.tone_audio.overall_impression}</p>
        </div>
      </div>

      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">Аудио-маркеры</h3>
      <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
        {data.tone.tone_audio.audio_markers.map((marker, idx) => (
          <article key={idx} className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 dark:bg-slate-900/30">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {MARKER_LABELS[marker.marker] ?? marker.marker}
              </span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                {marker.value}
              </span>
            </div>
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">{marker.impact}</p>
            {marker.evidence_quotes.map((q, qIdx) => (
              <p key={qIdx} className="text-xs italic text-slate-500 dark:text-slate-400">
                «{q}»
              </p>
            ))}
          </article>
        ))}
      </div>

      <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
        <MessageSquareQuote className="h-4 w-4" aria-hidden />
        Ключевые цитаты
      </h3>
      <div className="space-y-3">
        {data.key_quotes.map((quote, idx) => (
          <blockquote
            key={idx}
            className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm italic leading-relaxed text-slate-600 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-300"
          >
            «{quote}»
          </blockquote>
        ))}
      </div>
    </section>
  );
}
