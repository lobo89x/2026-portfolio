import { portfolioData } from '../data/portfolioData';

export function TechTicker() {
  const items = portfolioData.techStack;
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-amber-900/10 bg-white/40 py-3 dark:border-cyan-400/15 dark:bg-indigo-950/40"
      role="presentation"
    >
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex shrink-0 items-center px-6 text-sm font-medium text-emerald-900/75 dark:text-cyan-100/75"
          >
            <span className="whitespace-nowrap">{tech}</span>
            <span
              className="ml-6 h-1 w-1 shrink-0 rounded-full bg-amber-600/50 dark:bg-cyan-400/50"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
