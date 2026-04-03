import { portfolioData } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const headerNav = portfolioData.navLinks.filter((l) => l.id === 'about' || l.id === 'contact');

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/[0.07] bg-[#faf6ec]/80 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#0c0f24]/82 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-[1.05rem] font-semibold tracking-tight text-emerald-900 dark:text-cyan-100"
        >
          {portfolioData.site.name}
        </a>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {headerNav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-emerald-900/85 transition hover:bg-amber-200/40 hover:text-emerald-950 dark:text-cyan-100/85 dark:hover:bg-indigo-800/50 dark:hover:text-cyan-50 sm:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {portfolioData.socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-2 text-sm font-medium text-emerald-900/85 transition hover:bg-amber-200/40 hover:text-emerald-950 dark:text-cyan-100/85 dark:hover:bg-indigo-800/50 dark:hover:text-cyan-50 sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pl-1">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
