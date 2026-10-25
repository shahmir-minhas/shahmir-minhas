export interface Project {
  name: string
  role: string
  description: string
  problem?: string
  approach?: string
  outcome?: string
  features: string[]
  technologies: string[]
  category?: string
  period?: string
  featured?: boolean
  demoUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Sergha General Transport',
    role: 'Full-Stack Developer',
    description: 'Corporate website for heavy transport and equipment company in UAE',
    featured: true,
    problem: 'Client needed a professional online presence to showcase their heavy transport services and equipment fleet to UAE market.',
    approach: 'Built a modern, responsive marketing website with service showcases, equipment listings, and contact forms.',
    outcome: 'Live production website serving as the company primary digital presence in the UAE transport sector.',
    features: [
      'Responsive design for all devices',
      'Service portfolio and fleet showcase',
      'Contact and inquiry forms',
      'SEO optimized for UAE market',
      'Fast page load performance'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    category: 'Client Website',
    demoUrl: 'https://sergha-general-transport.vercel.app/'
  },
  {
    name: 'CoreInfor',
    role: 'Full-Stack Developer',
    description: 'Corporate website for digital solutions and IT services company',
    featured: true,
    problem: 'Digital solutions firm needed a modern website to present their consulting, development, and managed services offerings.',
    approach: 'Developed a professional corporate website highlighting their service portfolio and industry expertise.',
    outcome: 'Production website serving as the company main marketing platform for their digital solutions services.',
    features: [
      'Professional service presentation',
      'Responsive corporate design',
      'Service portfolio sections',
      'Contact and consultation forms',
      'Modern UI/UX'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    category: 'Client Website',
    demoUrl: 'https://www.coreinfor.com/'
  },
  {
    name: 'Hysabat',
    role: 'Lead Frontend Developer',
    description: 'Multi-product ERP/HRM/POS suite for enterprise clients',
    period: '2022–Present',
    featured: true,
    problem: 'JMM Technologies needed a comprehensive, maintainable frontend architecture for their flagship ERP suite serving multiple business verticals.',
    approach: 'Owned the entire frontend end-to-end: architected reusable components, implemented modern state management (Zustand, TanStack Query), real-time GraphQL subscriptions, and migrated apps across major React and library upgrades.',
    outcome: 'Delivered production-ready web ERP, tenant portal, POS system, offline desktop app (Blazor), and a multilingual Next.js 15 marketing website with Arabic/English i18n and RTL support.',
    features: [
      'Real-time GraphQL subscriptions for live updates',
      'JWT/OTP authentication with role-based access',
      'QR codes, barcodes, printable invoices, PDF export',
      'Arabic/English i18n with RTL layout support',
      'Recharts dashboards with business analytics',
      'Offline desktop app and POS (Blazor/Razor Pages)',
      'Multi-product architecture: ERP, HRM, POS, tenant portal'
    ],
    technologies: ['React 17-19', 'Next.js 15', 'Vite', 'Apollo GraphQL', 'TanStack Query', 'Zustand', 'Ant Design', 'Tailwind CSS', 'ASP.NET Core', 'Blazor', 'Razor Pages'],
    category: 'Enterprise ERP',
    demoUrl: 'https://hysabat.com/en'
  },
  {
    name: 'Sadeef',
    role: 'Sole Frontend Developer',
    description: 'Capital call management platform for investment firms',
    featured: true,
    problem: 'Investment firms needed a robust platform to manage capital calls, track investor commitments, and generate compliance reports.',
    approach: 'Single-handedly architected and delivered the entire frontend, implementing a rich-text editor (Tiptap), real-time updates (SignalR), and custom Excel/PDF export with complex table styling.',
    outcome: 'Production platform handling multi-million dollar capital calls with real-time notifications, styled reports, and comprehensive dashboards.',
    features: [
      'Tiptap rich-text editor with tables, images, links, formatting',
      'SignalR real-time updates for collaborative editing',
      'Recharts dashboards with investment analytics',
      'Styled Excel export (xlsx-js-style)',
      'PDF reports with complex tables (jsPDF, jspdf-autotable)',
      'Document version control and audit trails'
    ],
    technologies: ['React 19', 'Vite', 'TanStack Query', 'Zustand', 'Ant Design 6', 'SignalR', 'Tiptap', 'Recharts'],
    category: 'FinTech'
  },
  {
    name: 'SwiftSuit',
    role: 'Frontend Developer',
    description: 'Warehouse management system with real-time inventory tracking',
    featured: true,
    problem: 'Warehouse operations needed real-time visibility into inventory movements, stock levels, and automated reordering workflows.',
    approach: 'Built comprehensive WMS frontend with SignalR live updates, Google Maps integration for location tracking, and drag-and-drop workflows for efficient operations.',
    outcome: 'Deployed system managing thousands of SKUs across multiple warehouses with real-time accuracy and automated workflows.',
    features: [
      'SignalR real-time inventory updates',
      'ApexCharts dashboards with stock analytics',
      'Google Maps integration for warehouse locations',
      'Excel/CSV import/export for bulk operations',
      'Barcode generation and printing',
      'Drag-and-drop workflow builder',
      'Multi-language support (i18n)'
    ],
    technologies: ['React 18', 'Apollo GraphQL', 'Ant Design', 'Zustand', 'SignalR', 'ApexCharts', 'Google Maps API'],
    category: 'Enterprise'
  },
  {
    name: 'TeaOceans',
    role: 'Frontend Developer',
    description: 'Human Resource Management System with media capabilities',
    featured: true,
    problem: 'HR departments needed a comprehensive HRMS with multimedia recording for interviews, training, and performance reviews.',
    approach: 'Implemented GraphQL subscriptions for live updates, ApexCharts dashboards, and browser-based media features using FFmpeg for video/audio processing.',
    outcome: 'Full-featured HRMS with real-time collaboration, multimedia capabilities, and dual-calendar support (Gregorian/Hijri).',
    features: [
      'GraphQL subscriptions for real-time updates',
      'Video/audio recording, playback, in-browser FFmpeg processing',
      'ApexCharts dashboards with HR analytics',
      'In-app PDF viewing and export (jsPDF, html2canvas)',
      'Rich-text editing with CKEditor',
      'Gregorian and Hijri calendar support',
      'Multi-language i18n and responsive layouts'
    ],
    technologies: ['React 18', 'Apollo GraphQL', 'Ant Design', 'Zustand', 'ApexCharts', 'FFmpeg', 'CKEditor'],
    category: 'Enterprise HRMS'
  },
  {
    name: 'Cash Comment',
    role: 'Frontend Developer',
    description: 'Crypto trading desktop and web app',
    features: [
      'Electron desktop app with live crypto market data streaming',
      'Active/inactive trade tracking and portfolio management',
      'ChartIQ advanced charting with technical indicators',
      'Companion React web app with ApexCharts dashboards',
      'CKEditor for trade notes and analysis',
      'Infinite scroll for trade history'
    ],
    technologies: ['Electron.js', 'React 18', 'React Query', 'Ant Design', 'ChartIQ', 'ApexCharts', 'WebSockets'],
    category: 'FinTech'
  },
  {
    name: 'Hyper Terminal',
    role: 'Frontend Developer',
    description: 'Crypto trading terminal (desktop)',
    features: [
      'Electron trading terminal with WebSocket live data',
      'Redux Toolkit state management',
      'Tailwind CSS + Ant Design UI',
      'Live price ticker with real-time updates',
      'Multi-exchange support'
    ],
    technologies: ['Electron.js', 'React 18', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'WebSockets'],
    category: 'FinTech'
  },
  {
    name: 'Tojjar',
    role: 'Senior Frontend Developer',
    description: 'E-commerce platform',
    features: [
      'Next.js SSR and CSR for SEO and performance',
      'One of two senior frontend developers',
      'Laravel backend: Blade templates, API endpoints',
      'Product catalog, checkout, payment integration'
    ],
    technologies: ['Next.js', 'React', 'Laravel (PHP)', 'Blade'],
    category: 'E-commerce'
  },
  {
    name: 'ALSN',
    role: 'Frontend Developer & Team Lead',
    description: 'Certified translation system',
    features: [
      'Led 2 junior developers',
      'SignalR real-time collaboration features',
      'Moyasar payment integration',
      'Multi-language i18n support',
      'Phone input with country codes',
      'Responsive Sass UI'
    ],
    technologies: ['React 18', 'Vite', 'React Query', 'Ant Design', 'Zustand', 'SignalR', 'Sass'],
    category: 'Enterprise'
  },
  {
    name: 'Firmsanad',
    role: 'Frontend Developer & Team Lead',
    description: 'Business incorporation system',
    features: [
      'Led team of 2 junior developers',
      'Document processing workflows',
      'Form automation and validation',
      'Task assignment and code review'
    ],
    technologies: ['React'],
    category: 'Business'
  },
  {
    name: 'Uptikk',
    role: 'Frontend Developer',
    description: 'Consultancy platform',
    features: [
      'Next.js frontend under tech lead',
      'Worked with backend and design teams',
      'User flows and API integration',
      'Booking and scheduling features'
    ],
    technologies: ['Next.js', 'React'],
    category: 'SaaS'
  },
  {
    name: 'Kortana',
    role: 'Lead Frontend Developer',
    description: 'Side project',
    features: [
      'Built user web app and admin dashboard',
      'Designed UI and flows with backend partner',
      'Recharts analytics dashboards',
      'Maps integration, date-range filters',
      'Password-strength validation',
      'Mentored junior developer'
    ],
    technologies: ['React 18', 'Vite', 'React Query', 'Ant Design', 'Zustand', 'Recharts'],
    category: 'SaaS'
  },
  {
    name: 'Flash Funded',
    role: 'Lead Frontend Developer',
    description: 'Side project',
    features: [
      'Designed and built frontend with backend partner',
      'UI/UX design and user flows',
      'Mentored junior developer'
    ],
    technologies: ['React 18', 'Vite', 'React Query', 'Ant Design', 'Zustand', 'Recharts'],
    category: 'FinTech'
  },
  {
    name: 'KIU Portals',
    role: 'Junior Frontend Developer',
    description: 'Knowledge International University',
    features: [
      'Built and maintained multiple university portals',
      'Worked under senior developer',
      'Student and faculty management'
    ],
    technologies: ['React (CRA)', 'Redux Toolkit', 'SCSS'],
    category: 'Education'
  },
  {
    name: 'Kalarity',
    role: 'Frontend Developer',
    description: 'Document management tool',
    features: [
      'In-browser PDF viewing, editing and search',
      'Document data management',
      'User flow optimization'
    ],
    technologies: ['React', 'PDF.js', 'jsPDF'],
    category: 'Enterprise'
  }
]
