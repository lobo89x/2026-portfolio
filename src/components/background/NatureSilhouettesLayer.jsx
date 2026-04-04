/**
 * Edge-framing organic silhouettes — low contrast, atmospheric.
 */
export function NatureSilhouettesLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden text-emerald-900 opacity-[0.14] blur-[0.5px] dark:text-cyan-100 dark:opacity-[0.12] dark:blur-[1px]"
      aria-hidden
    >
      {/* Top-left branch */}
      <svg
        className="absolute -left-[2%] -top-[4%] h-[min(38vh,320px)] w-[min(42vw,280px)]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-10 180 C40 140 20 80 60 50 C90 28 100 10 130 -5 M50 95 C75 88 95 70 115 55 M35 130 C60 118 85 100 108 88 M70 160 C95 148 118 128 145 118"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <path
          d="M25 75 C45 65 55 45 72 32 M15 115 C38 102 52 88 68 78"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      {/* Top-right vine */}
      <svg
        className="absolute -right-[4%] top-[2%] h-[min(36vh,300px)] w-[min(38vw,260px)]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M210 -10 C170 25 185 70 160 105 C140 135 125 165 100 195 M175 40 C155 58 148 85 135 108 M188 72 C168 92 155 118 138 142"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        />
        <ellipse cx="168" cy="48" rx="5" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-25 168 48)" />
        <ellipse cx="152" cy="92" rx="4" ry="7" fill="currentColor" opacity="0.15" transform="rotate(-15 152 92)" />
      </svg>
      {/* Bottom-left leaves */}
      <svg
        className="absolute -bottom-[6%] -left-[6%] h-[min(32vh,260px)] w-[min(48vw,320px)]"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity="0.9"
      >
        <path
          d="M0 195 C35 170 55 130 80 95 C100 68 118 45 145 28 M30 175 C55 155 72 125 92 98 M12 188 C48 165 70 130 95 100"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M55 155 Q72 148 88 158 Q70 168 55 155Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M88 118 Q102 108 118 118 Q100 128 88 118Z"
          fill="currentColor"
          opacity="0.1"
        />
      </svg>
      {/* Bottom-right soft fronds */}
      <svg
        className="absolute -bottom-[4%] -right-[3%] h-[min(34vh,280px)] w-[min(44vw,300px)]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity="0.85"
      >
        <path
          d="M205 210 C175 175 195 130 175 95 C158 65 168 35 185 5 M190 165 C172 140 178 110 168 85 M175 130 C160 112 165 88 155 68"
          stroke="currentColor"
          strokeWidth="0.95"
          strokeLinecap="round"
        />
        <path
          d="M160 175 C175 168 188 175 198 188"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
