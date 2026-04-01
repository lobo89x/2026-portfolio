import { portfolioData } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-amber-900/10 px-4 py-16 dark:border-cyan-400/10 sm:px-6 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="about-heading"
          className="font-display text-3xl font-bold text-emerald-950 dark:text-white sm:text-4xl"
        >
          About
        </h2>
        <div className="mt-6 max-w-3xl rounded-2xl border border-amber-900/10 bg-white/60 p-6 shadow-sm dark:border-cyan-400/10 dark:bg-indigo-950/40 sm:p-8">
          <p className="text-base leading-relaxed text-emerald-900/85 dark:text-cyan-100/80">
            {portfolioData.aboutBlurb}
          </p>
        </div>
      </div>
    </section>
  );
}
