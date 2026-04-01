import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readStoredTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {
    /* ignore */
  }
  return null;
}

function applyDomTheme(mode) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState(() => {
    const stored = readStoredTheme();
    if (stored) return stored;
    return getSystemDark() ? 'dark' : 'light';
  });

  useEffect(() => {
    applyDomTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (readStoredTheme()) return;
      const next = mq.matches ? 'dark' : 'light';
      setThemeState(next);
      applyDomTheme(next);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyDomTheme(next);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-900/15 bg-white/60 text-amber-900/80 shadow-sm backdrop-blur-sm transition hover:bg-white/90 dark:border-cyan-300/20 dark:bg-indigo-950/60 dark:text-cyan-100/90 dark:hover:bg-indigo-900/70"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <span className="text-lg" aria-hidden="true">
          ☀️
        </span>
      ) : (
        <span className="text-lg" aria-hidden="true">
          🌙
        </span>
      )}
    </button>
  );
}
