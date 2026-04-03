import { portfolioData } from '../data/portfolioData';
import { TechTicker } from './TechTicker';

function linkedInLink() {
  return portfolioData.socialLinks.find((l) => l.id === 'linkedin');
}

export function Hero() {
  const { name, title, heroSupporting } = portfolioData.site;
  const linkedIn = linkedInLink();

  return (
    <section
      id="top"
      className="relative isolate scroll-mt-20 overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 md:pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Subtle ambient depth — no interactive paint */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10%] h-[min(28rem,70vw)] w-[min(48rem,120%)] max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/25 via-amber-100/10 to-transparent blur-3xl dark:from-indigo-500/15 dark:via-cyan-500/8 dark:to-transparent" />
        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-emerald-400/12 blur-3xl dark:bg-violet-600/12" />
        <div className="absolute bottom-1/4 left-[-15%] h-64 w-64 rounded-full bg-[#A7F3D0]/20 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-900/[0.07] bg-white/[0.78] shadow-[0_1px_0_0_rgba(255,255,255,0.65)_inset,0_32px_64px_-24px_rgba(25,60,45,0.14)] backdrop-blur-xl dark:border-white/[0.06] dark:bg-slate-950/[0.42] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_32px_80px_-28px_rgba(0,0,0,0.55)] sm:rounded-[2rem]">
          <div
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent dark:via-cyan-400/20 sm:inset-x-12"
            aria-hidden="true"
          />
          <div className="relative px-8 py-11 sm:px-12 sm:py-14 md:px-16 md:py-[4.25rem]">
            <div className="mx-auto max-w-3xl md:mx-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-800/65 dark:text-cyan-300/60 sm:text-xs sm:tracking-[0.22em]">
                {title}
              </p>
              <h1
                id="hero-heading"
                className="mt-5 font-display text-[clamp(2.625rem,5.5vw,4.125rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-emerald-950 dark:text-white"
              >
                {name}
              </h1>
              <p className="mt-6 max-w-[34rem] text-base font-normal leading-[1.65] text-emerald-900/72 dark:text-cyan-100/62 sm:text-lg sm:leading-relaxed">
                {heroSupporting}
              </p>
            </div>

            <div className="mt-10 md:mt-12">
              <TechTicker variant="hero" />
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-emerald-900 px-7 text-sm font-semibold text-[#faf6ec] shadow-md shadow-emerald-900/15 transition duration-200 hover:-translate-y-px hover:bg-emerald-950 hover:shadow-lg hover:shadow-emerald-900/20 dark:bg-cyan-400 dark:text-slate-950 dark:shadow-cyan-400/15 dark:hover:bg-cyan-300 dark:hover:shadow-cyan-400/25"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-emerald-900/15 bg-white/60 px-7 text-sm font-semibold text-emerald-900 backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-emerald-900/25 hover:bg-white/85 dark:border-cyan-400/20 dark:bg-indigo-950/35 dark:text-cyan-50 dark:hover:border-cyan-400/35 dark:hover:bg-indigo-900/45"
                >
                  Contact me
                </a>
              </div>
              {linkedIn && (
                <a
                  href={linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-emerald-800/75 underline-offset-[5px] transition hover:text-emerald-950 hover:underline dark:text-cyan-200/70 dark:hover:text-cyan-100"
                >
                  {linkedIn.label} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
