export interface Project {
  name: string
  description: string
  technologies: string[]
  category?: string
}

export const projects: Project[] = [
  {
    name: 'Warehouse Management System (SwiftSuit)',
    description: 'Enterprise-level warehouse management system with inventory tracking, order management, and analytics dashboard.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    category: 'Enterprise'
  },
  {
    name: 'HRMS (TeaOceans)',
    description: 'Human Resource Management System with employee management, attendance tracking, payroll, and performance analytics.',
    technologies: ['React.js', 'Redux Toolkit', 'Ant Design', 'GraphQL', 'MongoDB'],
    category: 'Enterprise'
  },
  {
    name: 'Flash Funded',
    description: 'Financial platform for managing funding, investments, and financial tracking with real-time analytics.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Recharts', 'REST APIs'],
    category: 'Fintech'
  },
  {
    name: 'ERP System',
    description: 'Comprehensive Enterprise Resource Planning system integrating multiple business modules and workflows.',
    technologies: ['React.js', 'Zustand', 'Ant Design', 'Node.js', 'PostgreSQL', 'Prisma'],
    category: 'Enterprise'
  },
  {
    name: 'LMS (EMS)',
    description: 'Learning Management System with course management, student tracking, assessments, and progress analytics.',
    technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'ChartIQ', 'GraphQL'],
    category: 'Education'
  },
  {
    name: 'E-commerce Platform (Tojjar)',
    description: 'Full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Node.js'],
    category: 'E-commerce'
  },
  {
    name: 'Business Incorporation System (Firmsanad)',
    description: 'Platform for business registration and incorporation management with document processing and workflow automation.',
    technologies: ['React.js', 'Inertia.js', 'Laravel', 'PostgreSQL', 'Ant Design'],
    category: 'Business'
  },
  {
    name: 'Consultancy Platform (Uptikk)',
    description: 'Consultancy management platform connecting consultants with clients, including booking, scheduling, and communication tools.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'WebSockets', 'MongoDB'],
    category: 'SaaS'
  },
  {
    name: 'Hyper Terminal',
    description: 'Advanced terminal application with enhanced features, customization options, and integration capabilities.',
    technologies: ['React.js', 'TypeScript', 'Electron', 'Node.js'],
    category: 'Desktop'
  },
  {
    name: 'KIU Portals (Knowledge International University)',
    description: 'University portal system with student management, course registration, grades, and administrative features.',
    technologies: ['React.js', 'Bootstrap', 'REST APIs', 'PostgreSQL', 'Node.js'],
    category: 'Education'
  }
]

