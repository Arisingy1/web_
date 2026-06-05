import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PageSwitcher, type PageId } from './components/PageSwitcher';
import { CandidateHeader } from './components/candidate/CandidateHeader';
import { CandidateProfileCard } from './components/candidate/CandidateProfileCard';
import { CultureFitSection } from './components/candidate/CultureFitSection';
import { DecisionBlock } from './components/candidate/DecisionBlock';
import { ManagementGuideSection } from './components/candidate/ManagementGuideSection';
import { PsycholinguisticsSection } from './components/candidate/PsycholinguisticsSection';
import { RiskStrengthSection } from './components/candidate/RiskStrengthSection';
import { SoftSkillsSection } from './components/candidate/SoftSkillsSection';
import { StarCasesSection } from './components/candidate/StarCasesSection';
import type { CandidateReportData } from './types/candidateReport';

export default function CandidateReportDashboard({
  data,
  page,
  onPageChange,
}: {
  data: CandidateReportData;
  page: PageId;
  onPageChange: (id: PageId) => void;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-100 md:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PageSwitcher active={page} onChange={onPageChange} />
            <button
              type="button"
              onClick={() => setDarkMode((d) => !d)}
              className="flex items-center justify-center gap-2 self-end rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 sm:self-auto"
              aria-pressed={darkMode}
              aria-label={darkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {darkMode ? 'Светлая' : 'Тёмная'}
            </button>
          </div>

          <CandidateHeader data={data} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <CandidateProfileCard profile={data.candidate_profile_card} />
            <DecisionBlock decision={data.decision_block} verdictColor={data.header_summary.verdict_color} />
          </div>

          <CultureFitSection assessment={data.culture_fit_assessment} />
          <RiskStrengthSection analysis={data.risk_analysis} />
          <PsycholinguisticsSection data={data.psycholinguistics} />
          <SoftSkillsSection skills={data.soft_skills_detailed} radarData={data.radar_chart_data} />
          <StarCasesSection cases={data.star_cases} />
          <ManagementGuideSection guide={data.management_guide} />
        </div>
      </div>
    </div>
  );
}
