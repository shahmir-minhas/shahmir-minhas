export interface SkillCategory {
  title: string
  skills: string[]
  icon?: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Frameworks',
    skills: ['React.js', 'Next.js 13', 'TypeScript', 'JavaScript (ES6+)']
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Ant Design', 'Bootstrap', 'CSS3', 'HTML5']
  },
  {
    title: 'State Management',
    skills: ['Redux Toolkit', 'Zustand', 'React Query', 'Apollo Client']
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Databases & ORM',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'SQL']
  },
  {
    title: 'Charts & Data',
    skills: ['Recharts', 'ApexCharts', 'ChartIQ', 'React Query']
  },
  {
    title: 'Additional Frameworks',
    skills: ['ASP.NET Core', 'Blazor', 'MVC', 'WordPress', 'PHP (Blade)', 'Inertia.js']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Postman', 'Firebase', 'Docker', 'Adobe XD', 'Figma']
  }
]

