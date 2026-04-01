import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-900/10 px-4 py-10 dark:border-cyan-400/10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-center text-sm text-emerald-900/65 dark:text-cyan-100/60 sm:text-left">
          © {year} {portfolioData.site.name}. Built with React & Tailwind.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {portfolioData.socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-emerald-800/90 underline-offset-4 transition hover:text-emerald-950 hover:underline dark:text-cyan-300/90 dark:hover:text-cyan-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
