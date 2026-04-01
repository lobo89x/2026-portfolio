import { portfolioData } from '../data/portfolioData';

export function ContactSection() {
  const { email } = portfolioData.site;

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-amber-900/10 px-4 py-16 dark:border-cyan-400/10 sm:px-6 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-bold text-emerald-950 dark:text-white sm:text-4xl"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-emerald-900/75 dark:text-cyan-100/70">
          {portfolioData.contactBlurb}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${email}`}
            className="inline-flex w-fit items-center rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-[#faf6ec] transition hover:bg-emerald-900 dark:bg-cyan-500 dark:text-indigo-950 dark:hover:bg-cyan-400"
          >
            {email}
          </a>
          <div className="flex flex-wrap gap-2">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-emerald-800/25 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900/10 dark:border-cyan-400/35 dark:text-cyan-100 dark:hover:bg-cyan-400/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
