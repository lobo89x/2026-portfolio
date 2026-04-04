import { portfolioData } from '../data/portfolioData';
import { TechTicker } from './TechTicker';

function linkedInLink() {
  return portfolioData.socialLinks.find((l) => l.id === 'linkedin');
}

export function Hero() {
  const { name, title, heroSupporting } = portfolioData.site;
  const linkedIn = linkedInLink();
  const projectsLink = portfolioData.navLinks.find((l) => l.id === 'projects');

  return (
    <section
      id="top"
      className="relative isolate scroll-mt-20 px-0 pb-16 pt-10 sm:pb-20 sm:pt-14 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <TechTicker variant="banner" />

      <div className="mx-auto w-full max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14 md:py-16">
        <h1
          id="hero-heading"
          className="font-display text-[clamp(2.5rem,5.2vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.035em] text-emerald-950 dark:text-white"
        >
          {name}
        </h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800/70 dark:text-cyan-300/65 sm:text-sm">
          {title}
        </p>
        <p className="mx-auto mt-6 max-w-[34rem] text-base font-normal leading-relaxed text-emerald-900/75 dark:text-cyan-100/65 sm:text-lg sm:leading-relaxed">
          {heroSupporting}
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {projectsLink && (
              <a
                href={projectsLink.href}
                className="inline-flex min-h-[2.75rem] items-center justify-center rounded-md bg-emerald-900 px-7 text-sm font-semibold text-[#faf6ec] shadow-md shadow-emerald-900/15 transition duration-200 hover:-translate-y-px hover:bg-emerald-950 hover:shadow-lg hover:shadow-emerald-900/20 dark:bg-cyan-400 dark:text-slate-950 dark:shadow-cyan-400/15 dark:hover:bg-cyan-300 dark:hover:shadow-cyan-400/25"
              >
                {projectsLink.label}
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex min-h-[2.75rem] items-center justify-center rounded-md border border-emerald-900/15 bg-white/60 px-7 text-sm font-semibold text-emerald-900 backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-emerald-900/25 hover:bg-white/85 dark:border-cyan-400/20 dark:bg-indigo-950/35 dark:text-cyan-50 dark:hover:border-cyan-400/35 dark:hover:bg-indigo-900/45"
            >
              Contact me
            </a>
          {linkedIn && (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[2.75rem] items-center justify-center rounded-md border border-emerald-900/15 bg-white/60 px-7 text-sm font-semibold text-emerald-900 backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-emerald-900/25 hover:bg-white/85 dark:border-cyan-400/20 dark:bg-indigo-950/35 dark:text-cyan-50 dark:hover:border-cyan-400/35 dark:hover:bg-indigo-900/45"
            >
              {linkedIn.label}
            </a>
          )}
          </div>
        </div>
      </div>

      <TechTicker variant="banner" />
    </section>
  );
}
