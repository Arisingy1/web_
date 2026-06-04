import TalentMindDashboard from './TalentMindDashboard';
import inostudioKbData from './data/inostudio-kb.json';
import type { CultureReportData } from './types/cultureReport';

function App() {
  return <TalentMindDashboard data={inostudioKbData as CultureReportData} />;
}

export default App;
