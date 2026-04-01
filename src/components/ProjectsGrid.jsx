import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-amber-900/10 px-4 py-16 dark:border-cyan-400/10 sm:px-6 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="projects-heading"
          className="font-display text-3xl font-bold text-emerald-950 dark:text-white sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-emerald-900/75 dark:text-cyan-100/70">
          {portfolioData.projectsIntro}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
