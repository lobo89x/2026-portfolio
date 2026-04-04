import { portfolioData } from '../data/portfolioData';

function githubAvatarUrl(username) {
  return `https://github.com/${username}.png`;
}

export function AboutSection() {
  const { githubUsername, aboutBlurb, site } = portfolioData;
  const avatarSrc = githubAvatarUrl(githubUsername);

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
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <img
            src={avatarSrc}
            alt={site.name}
            width={160}
            height={160}
            className="mx-auto h-36 w-36 shrink-0 rounded-2xl object-cover shadow-md shadow-amber-900/10 ring-1 ring-amber-900/10 dark:shadow-black/30 dark:ring-white/10 sm:mx-0 sm:h-40 sm:w-40"
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-base leading-relaxed text-emerald-900/85 dark:text-cyan-100/80 sm:text-left sm:text-lg sm:leading-relaxed">
            {aboutBlurb}
          </p>
        </div>
      </div>
    </section>
  );
}
