export interface Project {
  name: string
  description: string
  features: string[]
  technologies: string[]
  category?: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    name: 'Warehouse Management System (SwiftSuit)',
    description: 'Enterprise-level warehouse management system designed to streamline inventory operations, optimize supply chain processes, and provide real-time visibility into warehouse activities.',
    features: [
      'Real-time inventory tracking and management',
      'Order processing and fulfillment automation',
      'Advanced analytics and reporting dashboard',
      'Multi-warehouse support with location management',
      'Barcode scanning and label generation',
      'Integration with shipping carriers',
      'Automated reorder points and stock alerts'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma'],
    category: 'Enterprise',
    highlights: ['Scalable architecture', 'Real-time updates', 'Advanced analytics']
  },
  {
    name: 'HRMS (TeaOceans)',
    description: 'Comprehensive Human Resource Management System providing end-to-end HR solutions including employee lifecycle management, payroll processing, and performance analytics.',
    features: [
      'Complete employee database and profile management',
      'Attendance tracking with biometric integration',
      'Automated payroll processing and calculations',
      'Performance appraisal and review system',
      'Leave management with approval workflows',
      'Recruitment and onboarding modules',
      'Employee self-service portal',
      'Advanced reporting and analytics'
    ],
    technologies: ['React.js', 'Redux Toolkit', 'Ant Design', 'GraphQL', 'MongoDB', 'Node.js', 'Express'],
    category: 'Enterprise',
    highlights: ['Complete HR solution', 'Automated workflows', 'Performance analytics']
  },
  {
    name: 'Flash Funded',
    description: 'Modern financial platform for managing funding rounds, investments, and financial tracking with comprehensive analytics and investor relations management.',
    features: [
      'Investment portfolio tracking and management',
      'Funding round management and documentation',
      'Real-time financial analytics and charts',
      'Investor dashboard and reporting',
      'Document management and compliance tracking',
      'Multi-currency support',
      'Automated financial reporting',
      'Secure transaction processing'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Recharts', 'ApexCharts', 'REST APIs', 'Node.js'],
    category: 'Fintech',
    highlights: ['Financial analytics', 'Secure transactions', 'Real-time tracking']
  },
  {
    name: 'ERP System',
    description: 'Comprehensive Enterprise Resource Planning system integrating multiple business modules including finance, inventory, sales, procurement, and customer relationship management.',
    features: [
      'Integrated financial management and accounting',
      'Inventory and supply chain management',
      'Sales and purchase order management',
      'Customer relationship management (CRM)',
      'Multi-company and multi-currency support',
      'Customizable workflows and approval processes',
      'Business intelligence and reporting',
      'API integrations with third-party services'
    ],
    technologies: ['React.js', 'Zustand', 'Ant Design', 'Node.js', 'PostgreSQL', 'Prisma', 'GraphQL'],
    category: 'Enterprise',
    highlights: ['Full business integration', 'Customizable workflows', 'Business intelligence']
  },
  {
    name: 'LMS (EMS)',
    description: 'Advanced Learning Management System enabling educational institutions to manage courses, track student progress, conduct assessments, and provide comprehensive learning analytics.',
    features: [
      'Course creation and content management',
      'Student enrollment and progress tracking',
      'Interactive assignments and assessments',
      'Gradebook and performance analytics',
      'Discussion forums and collaboration tools',
      'Video conferencing integration',
      'Certificate generation',
      'Mobile-responsive learning interface'
    ],
    technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'ChartIQ', 'Recharts', 'GraphQL', 'Node.js'],
    category: 'Education',
    highlights: ['Interactive learning', 'Progress analytics', 'Mobile-friendly']
  },
  {
    name: 'E-commerce Platform (Tojjar)',
    description: 'Full-featured e-commerce platform with comprehensive product management, shopping cart, secure payment processing, and advanced admin dashboard for store management.',
    features: [
      'Product catalog with advanced filtering and search',
      'Shopping cart and checkout process',
      'Secure payment gateway integration (Stripe)',
      'Order management and tracking',
      'Inventory management with stock alerts',
      'Customer accounts and order history',
      'Admin dashboard with analytics',
      'Multi-vendor support (optional)'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Node.js', 'Express'],
    category: 'E-commerce',
    highlights: ['Secure payments', 'Advanced search', 'Admin analytics']
  },
  {
    name: 'Business Incorporation System (Firmsanad)',
    description: 'Platform for business registration and incorporation management with automated document processing, workflow management, and compliance tracking.',
    features: [
      'Business registration and incorporation workflows',
      'Document upload and processing system',
      'Automated form filling and validation',
      'Status tracking and notifications',
      'Payment processing for fees',
      'Compliance checking and validation',
      'Digital signature integration',
      'Certificate generation and download'
    ],
    technologies: ['React.js', 'Inertia.js', 'Laravel', 'PostgreSQL', 'Ant Design', 'PHP'],
    category: 'Business',
    highlights: ['Automated workflows', 'Document processing', 'Compliance tracking']
  },
  {
    name: 'Consultancy Platform (Uptikk)',
    description: 'Consultancy management platform connecting consultants with clients, featuring booking, scheduling, real-time communication, and project management tools.',
    features: [
      'Consultant and client matching system',
      'Booking and scheduling calendar',
      'Real-time messaging and video calls',
      'Project management and task tracking',
      'Payment processing and invoicing',
      'Rating and review system',
      'Document sharing and collaboration',
      'Analytics dashboard for consultants'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'WebSockets', 'MongoDB', 'Node.js', 'Socket.io'],
    category: 'SaaS',
    highlights: ['Real-time communication', 'Booking system', 'Project management']
  },
  {
    name: 'Hyper Terminal',
    description: 'Advanced terminal application with enhanced features, customization options, plugin support, and integration capabilities for developers.',
    features: [
      'Customizable themes and appearance',
      'Plugin system for extensibility',
      'Multiple tab and split pane support',
      'Command history and autocomplete',
      'SSH and remote connection support',
      'Integrated terminal multiplexer',
      'Custom shortcuts and keybindings',
      'Performance optimization'
    ],
    technologies: ['React.js', 'TypeScript', 'Electron', 'Node.js', 'WebSockets'],
    category: 'Desktop',
    highlights: ['Customizable', 'Plugin support', 'Performance optimized']
  },
  {
    name: 'KIU Portals (Knowledge International University)',
    description: 'University portal system providing comprehensive student services including enrollment, course registration, grade management, and administrative operations.',
    features: [
      'Student portal with personal dashboard',
      'Course registration and enrollment',
      'Grade viewing and transcript generation',
      'Fee payment and financial aid management',
      'Academic calendar and event management',
      'Library system integration',
      'Faculty portal for course management',
      'Administrative dashboard for university staff'
    ],
    technologies: ['React.js', 'Bootstrap', 'REST APIs', 'PostgreSQL', 'Node.js', 'Express'],
    category: 'Education',
    highlights: ['Student services', 'Academic management', 'Integrated system']
  }
]
