import { useCounter } from '../hooks';
import { STATS } from '../data/stats';
import { Section } from '../components';

const StatItem = ({ value, suffix, label }) => {
  const [count, ref] = useCounter(value);

  return (
    <div ref={ref} className="space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;