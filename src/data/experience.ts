export interface Experience {
  title: string
  company: string
  location: string
  period: string
  duration: string
  progression?: string
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'JMM Technologies (Pvt) Ltd',
    location: 'Abbottabad / Remote',
    period: 'Oct 2021 – Present',
    duration: '3+ years',
    progression: 'React.js Developer (Oct 2021–Jun 2023) → Lead Frontend Developer (Jun 2023–Jan 2024) → Full-Stack Developer (Feb 2024–Present)',
    description: [
      'Develop and maintain React.js and Inertia.js (React) client web applications using Ant Design and Bootstrap',
      'Transitioned projects to Next.js static site development to improve SEO and page performance',
      'Led the design and development of scalable, high-performance React.js applications as Lead Frontend Developer',
      'Architected reusable components, state management solutions and internal frontend frameworks; drove adoption of Redux Toolkit, Zustand and Tailwind CSS',
      'Integrated REST and GraphQL APIs with backend engineers to deliver data-driven features',
      'Delivered pixel-perfect, responsive UI/UX across web and mobile devices with cross-browser compatibility',
      'Enforced coding standards and clean, maintainable, well-documented code across the frontend codebase',
      'Maintain production systems by resolving bugs and UI issues and testing releases',
      'Partnered with product managers, designers and cross-functional teams to deliver business requirements'
    ],
    technologies: ['React.js', 'Next.js', 'Redux Toolkit', 'Zustand', 'GraphQL', 'Ant Design', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: 'Web Application Developer',
    company: 'AizTek Technologies',
    location: 'Islamabad, Pakistan',
    period: 'Jan 2020 – Sep 2020',
    duration: '9 months',
    description: [
      'Developed and maintained web applications using the Grails framework, including an e-commerce platform with product management, checkout flow and payment integration',
      'Built and customized WordPress-based CRM solutions with plugins, custom themes and workflows to improve client management and communication',
      'Applied MVC architecture principles to deliver scalable, maintainable and modular applications',
      'Integrated third-party APIs and services into Grails and WordPress applications',
      'Optimized application performance and ensured cross-browser and cross-device compatibility'
    ],
    technologies: ['Grails', 'WordPress', 'PHP', 'MVC', 'JavaScript', 'HTML/CSS']
  }
]

