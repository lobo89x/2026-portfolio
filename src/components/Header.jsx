import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

const TOP_THRESHOLD_PX = 56;

export function Header() {
  const aboutContactNav = portfolioData.navLinks.filter((l) => l.id === 'about' || l.id === 'contact');
  const [pastHeroTop, setPastHeroTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHeroTop(window.scrollY > TOP_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/[0.07] bg-[#faf6ec]/80 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] backdrop-blur-xl dark:border-cyan-300/20 dark:bg-indigo-950/60 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] dark:backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div
          className={`min-w-0 shrink-0 transition-[max-width,opacity] duration-300 ease-out ${
            pastHeroTop ? 'max-w-[16rem] opacity-100' : 'max-w-0 overflow-hidden opacity-0'
          }`}
        >
          <a
            href="#top"
            className="font-display block whitespace-nowrap text-[1.05rem] font-semibold tracking-tight text-emerald-900 dark:text-cyan-100"
            tabIndex={pastHeroTop ? 0 : -1}
            aria-hidden={!pastHeroTop}
          >
            {portfolioData.site.name}
          </a>
        </div>

        <nav className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {pastHeroTop &&
              aboutContactNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="rounded-md px-2 py-2 text-sm font-medium text-emerald-900/85 transition hover:bg-amber-200/40 hover:text-emerald-950 dark:text-cyan-100/85 dark:hover:bg-indigo-900/70 dark:hover:text-cyan-50 sm:px-3"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            <li>
              <a
                href={`${import.meta.env.BASE_URL}${portfolioData.resume.file}`}
                download={portfolioData.resume.downloadFileName}
                className="rounded-md px-2 py-2 text-sm font-medium text-emerald-900/85 transition hover:bg-amber-200/40 hover:text-emerald-950 dark:text-cyan-100/85 dark:hover:bg-indigo-900/70 dark:hover:text-cyan-50 sm:px-3"
              >
                {portfolioData.resume.label}
              </a>
            </li>
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
