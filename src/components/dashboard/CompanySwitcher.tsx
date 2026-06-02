export type CompanyId = 'inostudio' | 'webpraktik';

const COMPANIES: { id: CompanyId; label: string }[] = [
  { id: 'inostudio', label: 'Inostudio' },
  { id: 'webpraktik', label: 'Вебпрактик' },
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
      className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-600 dark:bg-slate-800"
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
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${
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
