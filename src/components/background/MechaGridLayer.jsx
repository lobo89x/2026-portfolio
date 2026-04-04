/**
 * Subtle technical scaffold — thin lines, slight perspective, not cyberpunk loud.
 */
export function MechaGridLayer() {
  return (
    <div
      className="animate-bg-grid-pulse absolute inset-0 overflow-hidden opacity-[0.28] motion-reduce:animate-none motion-reduce:opacity-[0.32] dark:opacity-[0.22]"
      aria-hidden
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] text-amber-900/[0.22] dark:text-cyan-300/[0.18]"
        style={{
          transform: 'translate(-50%, -50%) perspective(1200px) rotateX(64deg) rotateZ(-8deg)',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="app-mecha-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
          </pattern>
          <linearGradient id="app-mecha-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="18%" stopColor="white" stopOpacity="1" />
            <stop offset="82%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="app-mecha-vignette">
            <rect width="100%" height="100%" fill="url(#app-mecha-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#app-mecha-grid)" mask="url(#app-mecha-vignette)" />
      </svg>
      {/* Fine horizon accent */}
      <div className="absolute inset-x-[12%] top-[42%] h-px bg-gradient-to-r from-transparent via-amber-800/15 to-transparent dark:via-cyan-400/12" />
    </div>
  );
}
