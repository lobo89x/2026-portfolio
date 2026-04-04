/**
 * Deepest layer: soft solarpunk warmth (light) / lunar depth (dark).
 */
export function AtmosphericGradientLayer() {
  return (
    <div className="absolute inset-0">
      {/* Base wash */}
      <div
        className="absolute inset-0 bg-[#faf6ec] dark:bg-[#0c0f24]"
        aria-hidden
      />
      {/* Warm sky / cool night wash */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-100/[0.35] via-transparent to-emerald-100/[0.2] dark:from-indigo-950/[0.55] dark:via-transparent dark:to-cyan-950/[0.25]"
        aria-hidden
      />
      {/* Upper sunlight or moon haze */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_50%_-15%,rgba(253,230,138,0.28)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_100%_55%_at_50%_-10%,rgba(99,102,241,0.18)_0%,transparent_50%)]"
        aria-hidden
      />
      {/* Lower organic ground mist */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_108%,rgba(167,243,208,0.22)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_85%_40%_at_50%_105%,rgba(56,189,248,0.12)_0%,transparent_48%)]"
        aria-hidden
      />
      {/* Side warmth — keeps center relatively open */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_40%,rgba(254,243,199,0.2)_0%,transparent_45%)] dark:bg-[radial-gradient(ellipse_45%_70%_at_0%_45%,rgba(79,70,229,0.14)_0%,transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_75%_at_100%_55%,rgba(190,242,100,0.12)_0%,transparent_42%)] dark:bg-[radial-gradient(ellipse_40%_65%_at_100%_50%,rgba(167,139,250,0.12)_0%,transparent_40%)]"
        aria-hidden
      />
    </div>
  );
}
