export function ProjectCard({ project }) {
  const { title, description, tech, liveUrl, githubUrl } = project;

  const hasLiveUrl = typeof liveUrl === 'string' && liveUrl.trim() !== '';
  const hasGithubUrl = typeof githubUrl === 'string' && githubUrl.trim() !== '';
  const liveIsRemote = hasLiveUrl && /^https?:\/\//i.test(liveUrl.trim());
  const githubIsRemote = hasGithubUrl && /^https?:\/\//i.test(githubUrl.trim());

  return (
    <article className="flex flex-col rounded-2xl border border-amber-900/10 bg-white/70 p-6 shadow-md shadow-amber-900/5 transition duration-200 ease-out hover:scale-[1.01] hover:border-amber-800/20 hover:shadow-lg dark:border-cyan-400/10 dark:bg-indigo-950/50 dark:shadow-black/20 dark:hover:border-cyan-400/25 dark:hover:shadow-xl">
      <h3 className="font-display text-xl font-semibold text-emerald-950 dark:text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-emerald-900/75 dark:text-cyan-100/70">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((t, i) => (
          <li key={`${t}-${i}`}>
            <span className="inline-block rounded-full border border-amber-700/15 bg-amber-100/50 px-2.5 py-0.5 text-xs font-medium text-emerald-900 dark:border-cyan-400/20 dark:bg-indigo-900/60 dark:text-cyan-200/90">
              {t}
            </span>
          </li>
        ))}
      </ul>
      {(hasLiveUrl || hasGithubUrl) && (
        <div className="mt-6 flex flex-wrap gap-2">
          {hasLiveUrl && (
            <a
              href={liveUrl}
              {...(liveIsRemote ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex flex-1 min-w-[8rem] items-center justify-center rounded-lg bg-emerald-800 px-3 py-2 text-center text-sm font-semibold text-[#faf6ec] transition hover:bg-emerald-900 dark:bg-cyan-500 dark:text-indigo-950 dark:hover:bg-cyan-400 sm:flex-none"
            >
              Live demo
            </a>
          )}
          {hasGithubUrl && (
            <a
              href={githubUrl}
              {...(githubIsRemote ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex flex-1 min-w-[8rem] items-center justify-center rounded-lg border border-emerald-800/25 bg-transparent px-3 py-2 text-center text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900/10 dark:border-cyan-400/35 dark:text-cyan-100 dark:hover:bg-cyan-400/10 sm:flex-none"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
