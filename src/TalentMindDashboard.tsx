import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { BigNineGrid } from './components/dashboard/BigNineGrid';
import { BigNineModal } from './components/dashboard/BigNineModal';
import { ExecutiveSummary } from './components/dashboard/ExecutiveSummary';
import { HeaderSection } from './components/dashboard/HeaderSection';
import { CultureGapAnalysisSection } from './components/dashboard/CultureGapAnalysisSection';
import { EvaluationPrismSection } from './components/dashboard/EvaluationPrismSection';
import { OcpRisksSection } from './components/dashboard/OcpRisksSection';
import type { ActiveBigNine, CultureReportData } from './types/cultureReport';

export default function TalentMindDashboard({
  data,
}: {
  data: CultureReportData | null;
}) {
  const [activeBigNine, setActiveBigNine] = useState<ActiveBigNine | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  if (!data) {
    return (
      <div className="p-8 text-slate-500 dark:text-slate-400" role="status">
        Загрузка данных...
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-100 md:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setDarkMode((d) => !d)}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              aria-pressed={darkMode}
              aria-label={darkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {darkMode ? 'Светлая' : 'Тёмная'}
            </button>
          </div>

          <HeaderSection data={data} />
          <ExecutiveSummary summary={data.executive_summary} />
          {data.culture_gap_analysis && data.culture_gap_analysis.length > 0 && (
            <CultureGapAnalysisSection items={data.culture_gap_analysis} />
          )}
          <OcpRisksSection rawOcpProfile={data.raw_ocp_profile} risks={data.risks_and_weaknesses} />
          <BigNineGrid analysis={data.big_nine_detailed_analysis} onSelect={setActiveBigNine} />
          {data.talentmind_evaluation_prism && (
            <EvaluationPrismSection prism={data.talentmind_evaluation_prism} />
          )}
        </div>

        {activeBigNine && <BigNineModal active={activeBigNine} onClose={() => setActiveBigNine(null)} />}
      </div>
    </div>
  );
}
