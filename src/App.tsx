import { useState } from 'react';
import TalentMindDashboard from './TalentMindDashboard';
import inostudioV2Data from './data/inostudio-v2.json';
import inostudioKbData from './data/inostudio-kb.json';
import type { CompanyId } from './components/dashboard/CompanySwitcher';
import type { CultureReportData } from './types/cultureReport';

const DATASETS: Record<CompanyId, CultureReportData> = {
  inostudio_kb: inostudioKbData as CultureReportData,
  inostudio_v2: inostudioV2Data as CultureReportData,
};

function App() {
  const [company, setCompany] = useState<CompanyId>('inostudio_kb');

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
