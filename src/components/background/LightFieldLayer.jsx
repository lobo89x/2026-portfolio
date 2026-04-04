/**
 * Soft filtered light: radial glows + faint directional streaks; center stays calm.
 */
export function LightFieldLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary sun / instrument glow — offset from center */}
      <div
        className="animate-bg-light-a absolute -left-[8%] -top-[12%] h-[58%] w-[62%] rounded-full bg-[radial-gradient(circle,rgba(255,251,235,0.55)_0%,rgba(253,230,138,0.12)_35%,transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(165,243,252,0.14)_0%,rgba(99,102,241,0.08)_40%,transparent_70%)] motion-reduce:animate-none motion-reduce:opacity-40"
        aria-hidden
      />
      <div
        className="animate-bg-light-b absolute -right-[5%] top-[18%] h-[48%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(236,253,245,0.4)_0%,rgba(167,243,208,0.14)_38%,transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,rgba(56,189,248,0.06)_42%,transparent_68%)] motion-reduce:animate-none motion-reduce:opacity-35"
        aria-hidden
      />
      {/* Diagonal “sun through canopy” streaks */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
        aria-hidden
      >
        <div
          className="absolute -left-1/4 top-[12%] h-[120%] w-[45%] -rotate-[28deg] bg-gradient-to-b from-transparent via-amber-200/25 to-transparent blur-2xl dark:via-cyan-400/12"
          style={{ transformOrigin: 'center top' }}
        />
        <div
          className="absolute -right-[15%] top-[25%] h-[95%] w-[32%] rotate-[22deg] bg-gradient-to-b from-transparent via-emerald-200/20 to-transparent blur-2xl dark:via-indigo-400/10"
          style={{ transformOrigin: 'center top' }}
        />
      </div>
      {/* Center readability veil */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_42%,rgba(250,246,236,0.35)_0%,transparent_72%)] dark:bg-[radial-gradient(ellipse_62%_52%_at_50%_45%,rgba(12,15,36,0.4)_0%,transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}
