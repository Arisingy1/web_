import { AlertTriangle, Info } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from 'recharts';
import { buildOcpRadarData } from '../../lib/ocpRadar';
import type { CultureReportData } from '../../types/cultureReport';

export function OcpRisksSection({
  rawOcpProfile,
  risks,
}: {
  rawOcpProfile: CultureReportData['raw_ocp_profile'];
  risks: CultureReportData['risks_and_weaknesses'];
}) {
  const radarData = buildOcpRadarData(rawOcpProfile);

  return (
    <section className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-5">
      <div className="flex flex-col lg:col-span-3">
        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-100">
          Профиль организационной культуры (OCP)
        </h3>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Агрегированные баллы по 7 основным OCP-измерениям
        </p>
        <div className="min-h-[300px] w-full flex-1 rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/40">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#cbd5e1" className="dark:opacity-30" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
              <RechartsTooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`${value ?? 0}`, 'Балл']}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#4f46e5"
                fill="#8b5cf6"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col lg:col-span-2">
        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-100">Риски и уязвимости</h3>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Выявленные на основе анализа документов</p>
        <div className="flex flex-1 flex-col gap-4">
          {risks.map((risk, idx) => {
            const isCritical = risk.severity === 'Critical';
            const isHigh = risk.severity === 'High';
            const isSevere = isCritical || isHigh;
            return (
              <div
                key={idx}
                className={`rounded-xl border p-4 ${
                  isCritical
                    ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40'
                    : isHigh
                      ? 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40'
                      : 'border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-900/40'
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {isSevere ? (
                    <AlertTriangle
                      className={`h-5 w-5 ${isCritical ? 'text-red-500' : 'text-amber-500'}`}
                      aria-hidden
                    />
                  ) : (
                    <Info className="h-5 w-5 text-slate-500" aria-hidden />
                  )}
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${
                      isCritical
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-300'
                        : isHigh
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                          : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {risk.severity}
                  </span>
                </div>
                <h4
                  className={`mb-1 text-sm font-bold ${
                    isCritical
                      ? 'text-red-900 dark:text-red-200'
                      : isHigh
                        ? 'text-amber-900 dark:text-amber-100'
                        : 'text-slate-800 dark:text-slate-100'
                  }`}
                >
                  {risk.risk_title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isCritical
                      ? 'text-red-800 dark:text-red-300'
                      : isHigh
                        ? 'text-amber-900 dark:text-amber-200'
                        : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {risk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
