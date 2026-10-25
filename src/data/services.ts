export interface Service {
  title: string
  description: string
  deliverables: string[]
  outcome: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Next.js Landing & Marketing Sites',
    description: 'High-converting, SEO-optimized landing pages and marketing websites',
    deliverables: [
      'Next.js 15 with App Router (SSR/SSG)',
      'Tailwind CSS responsive design',
      'Performance optimization (90+ Lighthouse)',
      'SEO setup and meta tags',
      'Contact forms and analytics integration',
      'Dark/light mode support'
    ],
    outcome: 'Launch-ready marketing site that converts visitors into leads',
    icon: 'Rocket'
  },
  {
    title: 'React Admin Dashboards',
    description: 'Feature-rich admin panels and internal tools with real-time data',
    deliverables: [
      'React 18+ with TypeScript',
      'State management (Zustand/Redux Toolkit)',
      'REST/GraphQL API integration',
      'Charts and analytics (Recharts/ApexCharts)',
      'Data tables with filters, export',
      'Role-based access control',
      'Real-time updates (WebSocket/SignalR)'
    ],
    outcome: 'Production-ready dashboard your team can deploy immediately',
    icon: 'LayoutDashboard'
  },
  {
    title: 'Full-Stack MERN MVP',
    description: 'Complete product from database to deployment — ready to show investors or users',
    deliverables: [
      'React/Next.js frontend',
      'Node.js + Express/NestJS API',
      'PostgreSQL/MongoDB database',
      'Prisma ORM and migrations',
      'Authentication (JWT/OAuth)',
      'Payment integration (Stripe)',
      'Deployment on Vercel/Render',
      '2 rounds of iteration post-delivery'
    ],
    outcome: 'Fully functional MVP ready for beta users or investor demos',
    icon: 'Boxes'
  }
]

export const featuredProduct = {
  name: 'Mizan',
  tagline: 'Cloud ERP for SMEs',
  description: 'Multi-tenant cloud ERP for SMEs (Pakistan first, then Saudi/GCC) with POS, multi-branch inventory, accounting, VAT invoices with QR, HR/payroll, delivery GPS, and a built-in online store — English and Arabic.',
  features: [
    'Multi-tenant SaaS architecture',
    'Point of Sale (POS) system',
    'Multi-branch inventory management',
    'Accounting with VAT invoices + QR codes',
    'HR and payroll management',
    'Delivery tracking with GPS',
    'Built-in online store',
    'Bilingual (English & Arabic) with RTL support',
    'ZATCA-oriented for GCC compliance'
  ],
  tech: {
    frontend: 'React + Vite + Tailwind + TanStack Query + Zustand',
    backend: 'Fastify + Prisma + PostgreSQL',
    deployment: 'Neon + Render + Vercel'
  },
  links: {
    marketing: 'https://mizan-erp-site.vercel.app',
    marketingSA_EN: 'https://mizan-erp-site.vercel.app/sa/en',
    marketingSA_AR: 'https://mizan-erp-site.vercel.app/sa/ar',
    marketingPK_EN: 'https://mizan-erp-site.vercel.app/pk/en',
    demoWeb: 'https://erp-demo-web-sm.vercel.app/',
    demoStore: 'https://erp-demo-store.vercel.app/',
    demoDriver: 'https://erp-demo-driver.vercel.app/',
    githubMarketing: 'https://github.com/shahmir-minhas/erp-website-nextjs',
    githubApp: 'https://github.com/shahmir-minhas/erp-app'
  },
  status: 'Active Development',
  ctaText: 'Request a Demo'
}
