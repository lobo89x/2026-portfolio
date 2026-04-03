import { portfolioData } from '../data/portfolioData';

/**
 * @param {{ variant?: 'default' | 'hero' }} props
 */
export function TechTicker({ variant = 'default' }) {
  const items = portfolioData.techStack;
  const loop = [...items, ...items];

  const isHero = variant === 'hero';

  return (
    <div
      className={
        isHero
          ? 'relative overflow-hidden rounded-xl border border-amber-900/[0.06] bg-gradient-to-b from-white/50 to-white/25 py-2.5 dark:border-white/[0.05] dark:from-indigo-950/35 dark:to-indigo-950/15'
          : 'relative overflow-hidden rounded-xl border border-amber-900/10 bg-white/40 py-3 dark:border-cyan-400/15 dark:bg-indigo-950/40'
      }
      role="presentation"
    >
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className={
              isHero
                ? 'inline-flex shrink-0 items-center px-5 text-[13px] font-medium tracking-wide text-emerald-900/68 sm:px-6 dark:text-cyan-100/58'
                : 'inline-flex shrink-0 items-center px-6 text-sm font-medium text-emerald-900/75 dark:text-cyan-100/75'
            }
          >
            <span className="whitespace-nowrap">{tech}</span>
            <span
              className={
                isHero
                  ? 'ml-5 h-[3px] w-[3px] shrink-0 rounded-full bg-amber-700/30 dark:bg-cyan-400/35'
                  : 'ml-6 h-1 w-1 shrink-0 rounded-full bg-amber-600/50 dark:bg-cyan-400/50'
              }
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
