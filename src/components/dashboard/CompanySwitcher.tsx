export type CompanyId = 'inostudio_kb' | 'inostudio_v2';

const COMPANIES: { id: CompanyId; label: string }[] = [
  { id: 'inostudio_kb', label: 'Inostudio' },
  { id: 'inostudio_v2', label: 'Inostudio V2' },
];

export function CompanySwitcher({
  active,
  onChange,
}: {
  active: CompanyId;
  onChange: (id: CompanyId) => void;
}) {
  return (
    <div
      className="inline-flex max-w-full flex-wrap rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-600 dark:bg-slate-800"
      role="tablist"
      aria-label="Выбор компании"
    >
      {COMPANIES.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-5 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
