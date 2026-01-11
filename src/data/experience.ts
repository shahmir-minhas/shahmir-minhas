export interface Experience {
  title: string
  company: string
  location: string
  period: string
  duration: string
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'JMM Technologies PVT LTD',
    location: 'Peshawar - Remote',
    period: 'Feb 2024 – Present',
    duration: 'Present',
    description: [
      'Developed and maintained React.js web applications for clients in various industries',
      'Developed & maintained various web products using Inertia.js (React), Ant design, Bootstrap',
      'Maintaining current systems (resolve bugs and UI issues, testing)',
      'Collaborated with cross-functional teams to deliver high-quality software products',
      'Transition to Next JS static site development to achieve better SEO & Performance'
    ],
    technologies: ['React.js', 'Next.js', 'Inertia.js', 'Ant Design', 'Bootstrap', 'TypeScript']
  },
  {
    title: 'Lead Frontend Developer',
    company: 'JMM Technologies PVT LTD',
    location: 'Peshawar - Remote',
    period: 'Jun 2023 – Jan 2024',
    duration: '7 mos',
    description: [
      'Lead the design and development of scalable, high-performance React.js apps',
      'Architect reusable components, state management solutions and Frameworks',
      'Collaborate with backend engineers to integrate REST/GraphQL APIs seamlessly',
      'Ensure pixel-perfect, responsive UI/UX across web and mobile devices',
      'Drive adoption of modern frontend tools (Redux Toolkit/Zustand, TailwindCSS, etc.)',
      'Coordinate with product managers, designers to deliver business requirements',
      'Enforce coding standards and cross-browser compatibility'
    ],
    technologies: ['React.js', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'GraphQL', 'TypeScript']
  },
  {
    title: 'ReactJs Developer',
    company: 'JMM Technologies PVT LTD',
    location: 'Abbottabad',
    period: 'Oct 2021 – Jun 2023',
    duration: '1 yr 9 mos',
    description: [
      'Develop and maintain user-facing features using React.js and modern JavaScript (ES6+)',
      'Work with REST/GraphQL APIs to fetch and display dynamic data',
      'Write clean, maintainable, and well-documented code',
      'Collaborate with senior developers to learn best practices in React, Git, and project workflows'
    ],
    technologies: ['React.js', 'JavaScript', 'REST APIs', 'GraphQL', 'Git']
  },
  {
    title: 'Web Application Developer',
    company: 'AizTek Technologies',
    location: 'Islamabad',
    period: 'January 2020 - September 2020',
    duration: '9 mos',
    description: [
      'Developed and maintained web applications using the Grails Web Framework, including an E-Commerce platform with product management, checkout flow, and payment integration',
      'Built and customized CRM solutions on WordPress, implementing plugins, custom themes, and workflows to improve client management and communication',
      'Applied MVC (Model-View-Controller) architecture principles to ensure scalable, maintainable, and modular web application development',
      'Integrated third-party APIs and services into Grails and WordPress applications for enhanced functionality',
      'Optimized application performance and ensured cross-browser/device compatibility'
    ],
    technologies: ['Grails', 'WordPress', 'PHP', 'MVC', 'JavaScript', 'HTML/CSS']
  }
]

