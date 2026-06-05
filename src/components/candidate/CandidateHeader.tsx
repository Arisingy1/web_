import { Calendar, Mic, User } from 'lucide-react';
import { getVerdictStyles } from '../../lib/verdictColors';
import type { CandidateReportData } from '../../types/candidateReport';

export function CandidateHeader({ data }: { data: CandidateReportData }) {
  const { header_summary, report_metadata } = data;
  const verdict = getVerdictStyles(header_summary.verdict_color);

  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Отчёт по кандидату
          </p>
          <h1 className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
            <User className="h-8 w-8 text-indigo-500" aria-hidden />
            {header_summary.candidate_name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">{report_metadata.position_profile}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              Интервью: {report_metadata.interview_date}
            </span>
            {report_metadata.input_artifacts.has_audio && (
              <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 dark:border-slate-600 dark:bg-slate-900/40">
                <Mic className="h-3.5 w-3.5" aria-hidden />
                Аудио + транскрипт
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
          <MatchGauge label="Мэтч по роли" value={header_summary.match_percentage} />
          <MatchGauge label="Культурный fit" value={header_summary.culture_match_percentage} />
          <div
            className={`flex min-w-[140px] flex-col items-center justify-center rounded-xl border px-5 py-4 ${verdict.border} ${verdict.bg}`}
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">Вердикт</p>
            <span className={`rounded-lg px-3 py-1 text-sm font-bold ${verdict.badge}`}>
              {header_summary.verdict_status}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function MatchGauge({ label, value }: { label: string; value: number }) {
  const color =
    value >= 75 ? 'text-emerald-600 dark:text-emerald-400' : value >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400';
  const ring =
    value >= 75 ? 'stroke-emerald-500' : value >= 50 ? 'stroke-amber-500' : 'stroke-red-500';

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-600 dark:bg-slate-900/40">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="relative h-20 w-20">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 88 88" aria-hidden>
          <circle cx="44" cy="44" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-200 dark:text-slate-700" />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            className={ring}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-xl font-bold tabular-nums ${color}`}>
          {value}%
        </span>
      </div>
    </div>
  );
}
