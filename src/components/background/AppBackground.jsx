import { AtmosphericGradientLayer } from './AtmosphericGradientLayer';
import { DepthBlobsLayer } from './DepthBlobsLayer';
import { LightFieldLayer } from './LightFieldLayer';
import { MechaGridLayer } from './MechaGridLayer';
import { NatureSilhouettesLayer } from './NatureSilhouettesLayer';

/**
 * Full-viewport ambient stack behind all content.
 * Future: add e.g. <PaintStreakLayer /> after NatureSilhouettesLayer (still inside this shell, z-0).
 */
export function AppBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <AtmosphericGradientLayer />
      <LightFieldLayer />
      <DepthBlobsLayer />
      <MechaGridLayer />
      <NatureSilhouettesLayer />
    </div>
  );
}
