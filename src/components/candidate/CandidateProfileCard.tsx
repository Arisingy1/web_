import { Briefcase, Building2, Coins, MapPin, Target } from 'lucide-react';
import type { CandidateProfileCard as ProfileData } from '../../types/candidateReport';

const FIELDS = [
  { key: 'experience_years' as const, label: 'Опыт', icon: Briefcase },
  { key: 'companies_type' as const, label: 'Тип компаний', icon: Building2 },
  { key: 'salary_request' as const, label: 'Зарплатные ожидания', icon: Coins },
  { key: 'work_format' as const, label: 'Формат работы', icon: MapPin },
  { key: 'expectations_from_future_job' as const, label: 'Ожидания от работы', icon: Target },
];

export function CandidateProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <h2 className="mb-4 text-lg font-bold text-slate-800 dark:text-slate-100">Профиль кандидата</h2>
      <dl className="space-y-4">
        {FIELDS.map(({ key, label, icon: Icon }) => (
          <div key={key} className="flex gap-3">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden />
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{profile[key]}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
