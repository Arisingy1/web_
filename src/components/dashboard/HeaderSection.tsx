import { Settings, Users } from 'lucide-react';
import type { CultureReportData } from '../../types/cultureReport';
import { ConfidenceGauge } from './ConfidenceGauge';

export function HeaderSection({ data }: { data: CultureReportData }) {
  const { artifact_metadata, general_info } = data;
  const industry = general_info?.industry ?? '—';
  const tone = general_info?.tone_of_voice ?? '—';

  return (
    <header className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
          Отчёт корпоративной культуры
          {general_info?.company_name && (
            <span className="mt-1 block text-lg font-semibold text-indigo-600 dark:text-violet-400 md:inline md:mt-0 md:ml-2 md:text-2xl">
              — {general_info.company_name}
            </span>
          )}
        </h1>
        <div className="flex flex-wrap gap-2">
          {artifact_metadata.analyzed_documents.map((doc, idx) => (
            <span
              key={idx}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
            >
              {doc.length > 48 ? `${doc.substring(0, 48)}…` : doc}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Settings className="h-4 w-4 text-indigo-500" aria-hidden />
            Индустрия: {industry}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-violet-500" aria-hidden />
            Tone of Voice: {tone}
          </span>
        </div>
      </div>
      <div className="flex shrink-0 items-stretch">
        <ConfidenceGauge value={artifact_metadata.confidence_score} />
      </div>
    </header>
  );
}
