import { useState } from 'react';
import TalentMindDashboard from './TalentMindDashboard';
import inostudioData from './data/inostudio.json';
import webpraktikData from './data/webpraktik.json';
import type { CompanyId } from './components/dashboard/CompanySwitcher';
import type { CultureReportData } from './types/cultureReport';

const DATASETS: Record<CompanyId, CultureReportData> = {
  inostudio: inostudioData as CultureReportData,
  webpraktik: webpraktikData as CultureReportData,
};

function App() {
  const [company, setCompany] = useState<CompanyId>('inostudio');

  return (
    <TalentMindDashboard
      key={company}
      data={DATASETS[company]}
      company={company}
      onCompanyChange={setCompany}
    />
  );
}

export default App;
