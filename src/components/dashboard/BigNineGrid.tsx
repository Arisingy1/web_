import { BIG_NINE_ORDER } from '../../constants';
import type { ActiveBigNine, CultureReportData } from '../../types/cultureReport';
import { BigNineCard } from './BigNineCard';

export function BigNineGrid({
  analysis,
  onSelect,
}: {
  analysis: CultureReportData['big_nine_detailed_analysis'];
  onSelect: (item: ActiveBigNine) => void;
}) {
  const orderedKeys = BIG_NINE_ORDER.filter((k) => k in analysis);

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-slate-800 dark:text-slate-100">Анализ измерений</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {orderedKeys.map((key) => (
          <BigNineCard
            key={key}
            dimensionKey={key}
            item={analysis[key]}
            onOpen={() => onSelect({ key, ...analysis[key] })}
          />
        ))}
      </div>
    </section>
  );
}
