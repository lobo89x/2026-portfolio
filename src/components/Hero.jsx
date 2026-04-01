import { portfolioData } from '../data/portfolioData';
import { TechTicker } from './TechTicker';

export function Hero() {
  const { name, title } = portfolioData.site;

  return (
    <section
      id="top"
      className="scroll-mt-20 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-amber-900/12 bg-gradient-to-br from-white/90 via-[#f3efe4] to-[#e8f0e4]/90 p-8 shadow-lg shadow-amber-900/5 dark:border-cyan-400/12 dark:from-indigo-950/90 dark:via-[#151832] dark:to-[#1a1030]/90 dark:shadow-cyan-500/5 sm:p-10 md:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-800/80 dark:text-cyan-300/80">
            {portfolioData.site.heroEyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-display text-4xl font-bold tracking-tight text-emerald-950 dark:text-white sm:text-5xl md:text-6xl"
          >
            {name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-900/80 dark:text-cyan-100/75 sm:text-xl">
            {title}
          </p>
          <div className="mt-8 max-w-3xl">
            <TechTicker />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-[#faf6ec] shadow-md transition hover:bg-emerald-900 dark:bg-cyan-500 dark:text-indigo-950 dark:hover:bg-cyan-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-800/25 bg-white/50 px-5 py-2.5 text-sm font-semibold text-emerald-900 transition hover:border-emerald-800/40 hover:bg-white/80 dark:border-cyan-400/30 dark:bg-indigo-950/50 dark:text-cyan-100 dark:hover:border-cyan-400/50 dark:hover:bg-indigo-900/50"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
