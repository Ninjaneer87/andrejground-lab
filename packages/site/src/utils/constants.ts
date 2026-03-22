type Position = {
  title: string;
  date: string;
  isActive?: boolean;
};

type WorkItem = {
  name: string;
  company: string;
  url: string;
  location: string;
  description: string;
  isActive?: boolean;
  positions: Position[];
  techStack: string[];
};

export const WORK_ITEMS: WorkItem[] = [
  {
    name: 'snyk',
    company: 'Snyk',
    url: 'https://snyk.io',
    location: 'United States',
    description: 'Developer-first security in action',
    isActive: true,
    positions: [
      {
        title: 'Senior software engineer - Full-time',
        date: 'Jan 2025 - Present',
        isActive: true,
      },
      { title: 'Frontend developer - Contract', date: 'Nov 2024 - Jan 2025' },
    ],
    techStack: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux Toolkit',
      'Redux',
      'Redux Saga',
      'Styled Components',
      'Cypress',
    ],
  },
  {
    name: 'probely',
    company: 'Probely',
    url: 'https://probely.com',
    location: 'Portugal',
    description: 'Cybersecurity DAST tool (Acquired by Snyk in Q4 2024)',
    isActive: false,
    positions: [
      {
        title: 'Frontend developer - Contract',
        date: 'Mar 2023 - Nov 2024',
        isActive: true,
      },
    ],
    techStack: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Redux Saga',
      'Styled Components',
      'Cypress',
      'Next JS',
    ],
  },
  {
    name: 'single-earth',
    company: 'Single Earth',
    url: 'https://www.single.earth',
    location: 'Estonia',
    description: 'Bridging nature and finance, climate and biodiversity',
    positions: [
      {
        title: 'Frontend developer - Contract',
        date: 'Oct 2021 - Oct 2022',
        isActive: true,
      },
    ],
    techStack: ['Angular', 'TypeScript', 'RxJS', 'Jest', 'Sass'],
  },
  {
    name: 'apaone',
    company: 'ApaOne',
    url: 'https://apaone.com',
    location: 'Serbia',
    description: 'Digital marketing agency and web solutions',
    positions: [
      {
        title: 'Frontend developer - Contract',
        date: 'Aug 2019 - Jul 2021',
        isActive: true,
      },
    ],
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Material UI',
      'Redux',
      'Redux Saga',
      'PHP',
      'MySQL',
    ],
  },
];
