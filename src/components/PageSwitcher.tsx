export type CulturePageId = 'inostudio_v5';
export type CandidatePageId = 'candidate_sergey' | 'candidate_maxim' | 'candidate_alex';
export type PageId = CulturePageId | CandidatePageId;

const PAGES: { id: PageId; label: string }[] = [
  { id: 'inostudio_v5', label: 'Inostudio' },
  { id: 'candidate_sergey', label: 'Кандидат: Сергей' },
  { id: 'candidate_maxim', label: 'Кандидат: Максим' },
  { id: 'candidate_alex', label: 'Кандидат: Алекс' },
];

export function isCandidatePage(page: PageId): page is CandidatePageId {
  return page === 'candidate_sergey' || page === 'candidate_maxim' || page === 'candidate_alex';
}

export function PageSwitcher({
  active,
  onChange,
}: {
  active: PageId;
  onChange: (id: PageId) => void;
}) {
  return (
    <div
      className="inline-flex max-w-full flex-wrap rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-600 dark:bg-slate-800"
      role="tablist"
      aria-label="Выбор страницы"
    >
      {PAGES.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
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
