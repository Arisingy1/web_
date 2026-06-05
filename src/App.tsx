import { useState } from 'react';
import CandidateReportDashboard from './CandidateReportDashboard';
import TalentMindDashboard from './TalentMindDashboard';
import { isCandidatePage, type CandidatePageId, type PageId } from './components/PageSwitcher';
import candidateAlexData from './data/candidate-alex.json';
import candidateMaximData from './data/candidate-maxim.json';
import candidateSergeyData from './data/candidate-sergey.json';
import inostudioV5Data from './data/inostudio-v5.json';
import type { CandidateReportData } from './types/candidateReport';
import type { CultureReportData } from './types/cultureReport';

const INOSTUDIO_DATA = inostudioV5Data as CultureReportData;

const CANDIDATE_DATASETS: Record<CandidatePageId, CandidateReportData> = {
  candidate_sergey: candidateSergeyData as CandidateReportData,
  candidate_maxim: candidateMaximData as CandidateReportData,
  candidate_alex: candidateAlexData as CandidateReportData,
};

function App() {
  const [page, setPage] = useState<PageId>('inostudio_v5');

  if (isCandidatePage(page)) {
    return (
      <CandidateReportDashboard
        key={page}
        data={CANDIDATE_DATASETS[page]}
        page={page}
        onPageChange={setPage}
      />
    );
  }

  return (
    <TalentMindDashboard
      key={page}
      data={INOSTUDIO_DATA}
      page={page}
      onPageChange={setPage}
    />
  );
}

export default App;
