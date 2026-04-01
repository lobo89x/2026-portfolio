/**
 * Central content for the portfolio. Edit text, links, tech list, and projects here.
 */
export const portfolioData = {
  site: {
    name: 'Alexander Lee',
    title: 'Front-End / Full-Stack Developer',
    email: 'Ahlee1026@gmail.com',
    location: '',
    heroEyebrow: 'Portfolio',
  },

  navLinks: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexander-lee-3abb1546/',
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/lobo89x',
      external: true,
    },
  ],

  techStack: [
    'React',
    'Angular',
    'Tailwind',
    'Bootstrap',
    'JavaScript',
    'HTML',
    'SQL',
    'jQuery',
    'MongoDB',
    'C#',
    'ASP.NET',
    'Node.js',
    'Solimar',
    'PlanetPress',
  ],

  projects: [
    {
      id: 1,
      title: 'Dynasty',
      description:
        'Full-stack application with a focus on modern UI and scalable architecture.',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '',
      githubUrl: 'https://github.com/lobo89x/dynasty',
    },
    {
      id: 2,
      title: 'Labs Admin',
      description:
        'Administrative dashboard for managing systems, users, and workflows.',
      tech: ['React', 'Tailwind', 'SQL'],
      liveUrl: '',
      githubUrl: 'https://github.com/lobo89x/labs-admin',
    },
    {
      id: 3,
      title: 'Project Placeholder',
      description: 'Scaffold for future project expansion.',
      tech: ['React'],
      liveUrl: '',
      githubUrl: '',
    },
    {
      id: 4,
      title: 'NumberNumber Game',
      description:
        'Interactive browser-based game demonstrating JavaScript logic and UI design.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/lobo89x/numbernumbergame',
    },
  ],

  projectsIntro:
    'Selected work and placeholders—swap in real demos and descriptions when you are ready.',

  aboutBlurb: `I'm Alexander Lee, a front-end and full-stack developer focused on clear UI, solid architecture, and shipping maintainable software. This section is a placeholder—replace it with your story, values, and what you are looking for next.`,

  contactBlurb: `Interested in collaborating or hiring? Reach out by email or connect on LinkedIn. Replace the placeholder email and links in portfolioData.js with your real contact details.`,
};
