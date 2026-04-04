/**
 * Central content for the portfolio. Edit text, links, tech list, and projects here.
 */
export const portfolioData = {
  site: {
    name: 'Alexander Lee',
    title: 'Front-End / Full-Stack Developer',
    email: 'ahlee1026@gmail.com',
    location: '',
    /** Short hero paragraph — UI, systems, user-centered engineering */
    heroSupporting:
      'I build interfaces that feel effortless—pairing polished UI with scalable front-end architecture and a focus on real users, performance, and maintainable systems.',
  },

  navLinks: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  /** Used for dynamic GitHub profile image in About */
  githubUsername: 'lobo89x',

  /** PDF in /public — header uses import.meta.env.BASE_URL + file */
  resume: {
    label: 'Resume',
    file: 'Alexander-Lee-Resume.pdf',
    downloadFileName: 'Alexander_Lee_Frontend_Resume.pdf',
  },

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
        'My take on a React FE for my Navidrome SubSonic server since I didn’t like how most of the others out there handled podcasts. This integrates the external API for MediaWiki and the ones Navidrome itself comes with.',
      tech: ['React', 'TypeScript', 'Navidrome API', 'MediaWiki API'],
      liveUrl: 'https://dynasty.leelabs756.com/',
      githubUrl: 'https://github.com/lobo89x/dynasty',
    },
    {
      id: 2,
      title: 'Labs Admin',
      description:
        'An Administrative dashboard for managing users from both my Navidrome and Jellyfin servers. It’s a little private but it does have full functionality, the tricky part was building the back end that would marry the two services together.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'SQL', 'Jellyfin API', 'Navidrome API'],
      liveUrl: 'https://admin.leelabs756.com/',
      githubUrl: 'https://github.com/lobo89x/labs-admin',
    },
    {
      id: 3,
      title: 'Weather Windows',
      description:
        'Mobile-first weather app built with Angular (standalone components) and Bootstrap 5. Features a seven-day “house windows” forecast, city search with favorites, browser geolocation, and OpenWeather One Call + Geocoding APIs with a shared response cache.',
      tech: ['Angular', 'Bootstrap', 'TypeScript', 'OpenWeather API'],
      liveUrl: 'https://weather.leelabs756.com/',
      githubUrl: 'https://github.com/lobo89x/weath-win-ang',
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
    'Some of my latest projects',

  aboutBlurb: `Hey there! I am Alexander Lee, a front-end and full-stack developer focused on clear UI, solid architecture, and shipping maintainable software. I love a challenge and surpassing expectations. If you have a problem I can find a solution.`,

  contactBlurb: `Interested in collaborating or hiring? Reach out by email or connect on LinkedIn.`,
};
