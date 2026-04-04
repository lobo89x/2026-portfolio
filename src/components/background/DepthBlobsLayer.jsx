/**
 * Large blurred masses for depth; biased to periphery, organic placement.
 */
export function DepthBlobsLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="animate-bg-blob-a absolute -left-[18%] top-[8%] h-[min(52vw,420px)] w-[min(48vw,380px)] rounded-[55%_45%_52%_48%] bg-gradient-to-br from-amber-200/25 via-lime-100/15 to-transparent blur-[80px] dark:from-indigo-600/18 dark:via-cyan-600/10 dark:to-transparent motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="animate-bg-blob-b absolute -right-[12%] top-[38%] h-[min(46vw,360px)] w-[min(44vw,340px)] rounded-[48%_52%_46%_54%] bg-gradient-to-bl from-emerald-200/20 via-teal-100/12 to-transparent blur-[88px] dark:from-violet-600/14 dark:via-indigo-800/12 dark:to-transparent motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="animate-bg-blob-c absolute -bottom-[8%] left-[12%] h-[min(42vw,320px)] w-[min(50vw,400px)] rounded-[52%_48%_50%_50%] bg-gradient-to-tr from-sky-100/18 via-amber-50/14 to-transparent blur-[76px] dark:from-sky-900/25 dark:via-indigo-900/15 dark:to-transparent motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="animate-bg-blob-d absolute bottom-[18%] -right-[8%] h-[min(38vw,300px)] w-[min(40vw,280px)] rounded-[46%_54%_55%_45%] bg-gradient-to-tl from-green-100/16 via-emerald-50/10 to-transparent blur-[90px] dark:from-fuchsia-900/12 dark:via-indigo-800/10 dark:to-transparent motion-reduce:animate-none"
        aria-hidden
      />
    </div>
  );
}
