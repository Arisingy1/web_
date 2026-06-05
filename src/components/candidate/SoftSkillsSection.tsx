import { useState } from 'react';
import { ChevronRight, TrendingDown } from 'lucide-react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { getScoreColors } from '../../lib/scoreColors';
import type { ActiveSoftSkill, RadarChartData, SoftSkill } from '../../types/candidateReport';
import { SoftSkillModal } from './SoftSkillModal';

export function SoftSkillsSection({
  skills,
  radarData,
}: {
  skills: SoftSkill[];
  radarData: RadarChartData;
}) {
  const [activeSkill, setActiveSkill] = useState<ActiveSoftSkill | null>(null);

  const chartSkills = skills.map((s) => ({
    subject: s.name.length > 18 ? `${s.name.slice(0, 16)}…` : s.name,
    fullName: s.name,
    score: s.score,
  }));

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-slate-800 dark:text-slate-100">Soft skills</h2>

      <div className="mb-8 grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Профиль по 10 компетенциям. Ближайший матч:{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{radarData.closest_match_text}</span>
          </p>
          <div className="min-h-[320px] rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/40">
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart cx="50%" cy="50%" outerRadius="68%" data={chartSkills}>
                <PolarGrid stroke="#cbd5e1" className="dark:opacity-30" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 9 }} />
                <Tooltip formatter={(value, _name, props) => [(props?.payload as { fullName?: string })?.fullName ? `${value}` : `${value ?? 0}`, 'Балл']} />
                <Radar name="Score" dataKey="score" stroke="#6366f1" fill="#8b5cf6" fillOpacity={0.25} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            Средний gap: <span className="text-red-600 dark:text-red-400">{radarData.average_gap}%</span>
          </p>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <TrendingDown className="h-4 w-4" aria-hidden />
            Топ-риски
          </h3>
          <div className="space-y-3">
            {radarData.top_risks_list.map((risk, idx) => (
              <div key={idx} className="rounded-xl border border-red-100 bg-red-50/50 p-3 dark:border-red-900 dark:bg-red-950/30">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{risk.skill}</span>
                  <span className="text-sm font-bold tabular-nums text-red-600 dark:text-red-400">{risk.gap_percent}%</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{risk.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map((skill) => {
          const colors = getScoreColors(skill.score);
          return (
            <button
              key={skill.id}
              type="button"
              onClick={() => setActiveSkill(skill)}
              className={`group rounded-xl border p-4 text-left shadow-sm transition hover:shadow-md ${colors.border} bg-white dark:bg-slate-800`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold leading-tight text-slate-800 dark:text-slate-100">{skill.name}</h3>
                <span className={`text-lg font-bold tabular-nums ${colors.text}`}>{skill.score}</span>
              </div>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{skill.short_summary}</p>
              <span className="flex items-center gap-1 text-xs font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100 dark:text-indigo-400">
                Подробнее <ChevronRight className="h-3 w-3" />
              </span>
            </button>
          );
        })}
      </div>

      {activeSkill && <SoftSkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />}
    </section>
  );
}
