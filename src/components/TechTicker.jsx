import { portfolioData } from '../data/portfolioData';

/**
 * @param {{ variant?: 'default' | 'banner' }} props
 * `banner` — larger type, full-width strip for above/below hero (not inside a card).
 */
export function TechTicker({ variant = 'default' }) {
  const items = portfolioData.techStack;
  const loop = [...items, ...items];

  const isBanner = variant === 'banner';

  return (
    <div
      className={
        isBanner
          ? 'relative overflow-hidden border-y border-amber-900/[0.06] bg-white/35 py-3.5 dark:border-white/[0.06] dark:bg-indigo-950/25 sm:py-4'
          : 'relative overflow-hidden rounded-xl border border-amber-900/10 bg-white/40 py-3 dark:border-cyan-400/15 dark:bg-indigo-950/40'
      }
      role="presentation"
    >
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className={
              isBanner
                ? 'inline-flex shrink-0 items-center px-7 text-[0.95rem] font-semibold tracking-wide text-emerald-950 sm:px-9 sm:text-base dark:font-bold dark:text-white'
                : 'inline-flex shrink-0 items-center px-6 text-sm font-semibold text-emerald-950 dark:font-bold dark:text-white'
            }
          >
            <span className="whitespace-nowrap">{tech}</span>
            <span
              className={
                isBanner
                  ? 'ml-7 h-1 w-1 shrink-0 rounded-full bg-amber-800/40 sm:ml-9 dark:bg-white/45'
                  : 'ml-6 h-1 w-1 shrink-0 rounded-full bg-amber-800/45 dark:bg-white/45'
              }
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
