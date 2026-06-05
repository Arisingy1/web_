export function ConfidenceGauge({ value }: { value: number }) {
  return (
    <div
      className="flex min-w-[120px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50"
      role="img"
      aria-label={`Индекс уверенности: ${value} из 100`}
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
          <path
            className="text-slate-200 dark:text-slate-600"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="text-indigo-600 dark:text-violet-400"
            strokeDasharray={`${value}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-lg font-bold text-slate-800 dark:text-slate-100">{value}</span>
      </div>
      <span className="mt-2 text-center text-xs font-medium leading-tight text-slate-500 dark:text-slate-400">
        Индекс
        <br />
        уверенности
      </span>
    </div>
  );
}
