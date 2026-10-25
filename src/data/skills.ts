export interface SkillCategory {
  title: string
  skills: string[]
  icon?: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'JavaScript (ES6+)',
      'React.js 17-19',
      'Next.js 13-15',
      'TypeScript',
      'Electron.js',
      'Vite',
      'Inertia.js'
    ]
  },
  {
    title: 'Styling & UI',
    skills: [
      'Tailwind CSS',
      'Ant Design',
      'Bootstrap',
      'Sass/SCSS',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'State & Data',
    skills: [
      'Redux Toolkit',
      'Zustand',
      'TanStack Query',
      'Apollo Client',
      'GraphQL',
      'REST APIs',
      'SignalR',
      'WebSockets'
    ]
  },
  {
    title: 'Backend (Intermediate)',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'ASP.NET Core',
      'Laravel (PHP)',
      'Blazor',
      'Grails'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Prisma ORM',
      'SQL',
      'Firebase'
    ]
  },
  {
    title: 'Rich Content',
    skills: [
      'Recharts',
      'ApexCharts',
      'ChartIQ',
      'CKEditor',
      'Tiptap',
      'PDF.js',
      'jsPDF'
    ]
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Bitbucket',
      'Jira',
      'Postman',
      'VS Code',
      'Docker',
      'Figma',
      'Adobe XD',
      'Vercel'
    ]
  }
]

