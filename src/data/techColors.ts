import type { CSSProperties } from 'react'

/** Real brand accent hexes. Soft tints are derived at render time. */
const BRAND_HEX: Record<string, string> = {
  react: '#58C4DC',
  mongodb: '#00ED64',
  next: '#000000',
  node: '#5FA04E',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  apollo: '#311C87',
  graphql: '#E10098',
  antdesign: '#1677FF',
  zustand: '#F59E0B',
  signalr: '#512BD4',
  apexcharts: '#ED6C02',
  googlemaps: '#34A853',
  tailwind: '#38BDF8',
  vercel: '#000000',
  vite: '#646CFF',
  tanstack: '#FF4154',
  reactquery: '#FF4154',
  redux: '#764ABC',
  electron: '#47848F',
  express: '#404D59',
  nestjs: '#E0234E',
  aspnet: '#512BD4',
  blazor: '#512BD4',
  razor: '#512BD4',
  laravel: '#FF2D20',
  php: '#777BB4',
  blade: '#FF2D20',
  postgresql: '#4169E1',
  prisma: '#2D3748',
  firebase: '#FFCA28',
  sql: '#CC2927',
  docker: '#2496ED',
  git: '#F05032',
  github: '#181717',
  bitbucket: '#0052CC',
  jira: '#0052CC',
  postman: '#FF6C37',
  vscode: '#007ACC',
  figma: '#F24E1E',
  adobexd: '#FF61F6',
  sass: '#CC6699',
  scss: '#CC6699',
  bootstrap: '#7952B3',
  html: '#E34F26',
  css: '#1572B6',
  recharts: '#22B8CF',
  chartiq: '#00AEEF',
  websocket: '#0A66C2',
  wordpress: '#21759B',
  grails: '#FEB571',
  ffmpeg: '#007808',
  ckeditor: '#0288D1',
  tiptap: '#AA87F5',
  pdfjs: '#F40F02',
  jspdf: '#D32F2F',
  inertia: '#9553E9',
  rest: '#6BA539',
  mvc: '#5C2D91',
}

function normalize(label: string): string {
  return label
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9+.]/g, '')
}

function resolveKey(label: string): string | null {
  const n = normalize(label)
  if (n.includes('mongodb') || n === 'mongo') return 'mongodb'
  if (n.includes('reactquery')) return 'reactquery'
  if (n.includes('tanstack')) return 'tanstack'
  if (n.includes('redux')) return 'redux'
  if (n.includes('react')) return 'react'
  if (n.includes('next')) return 'next'
  if (n.includes('nodejs') || n === 'node') return 'node'
  if (n.includes('typescript')) return 'typescript'
  if (n.includes('javascript') || n === 'js') return 'javascript'
  if (n.includes('apollo')) return 'apollo'
  if (n.includes('graphql')) return 'graphql'
  if (n.includes('antdesign') || n.startsWith('ant')) return 'antdesign'
  if (n.includes('zustand')) return 'zustand'
  if (n.includes('signalr')) return 'signalr'
  if (n.includes('apex')) return 'apexcharts'
  if (n.includes('googlemaps') || n.includes('mapsapi')) return 'googlemaps'
  if (n.includes('tailwind')) return 'tailwind'
  if (n.includes('vercel')) return 'vercel'
  if (n.includes('vite')) return 'vite'
  if (n.includes('electron')) return 'electron'
  if (n.includes('express')) return 'express'
  if (n.includes('nest')) return 'nestjs'
  if (n.includes('asp.net') || n.includes('aspnet')) return 'aspnet'
  if (n.includes('blazor')) return 'blazor'
  if (n.includes('razor')) return 'razor'
  if (n.includes('laravel')) return 'laravel'
  if (n.includes('blade')) return 'blade'
  if (n.includes('php')) return 'php'
  if (n.includes('postgres')) return 'postgresql'
  if (n.includes('prisma')) return 'prisma'
  if (n.includes('firebase')) return 'firebase'
  if (n === 'sql') return 'sql'
  if (n.includes('docker')) return 'docker'
  if (n.includes('github')) return 'github'
  if (n === 'git') return 'git'
  if (n.includes('bitbucket')) return 'bitbucket'
  if (n.includes('jira')) return 'jira'
  if (n.includes('postman')) return 'postman'
  if (n.includes('vscode')) return 'vscode'
  if (n.includes('figma')) return 'figma'
  if (n.includes('adobexd') || n.includes('xd')) return 'adobexd'
  if (n.includes('scss')) return 'scss'
  if (n.includes('sass')) return 'sass'
  if (n.includes('bootstrap')) return 'bootstrap'
  if (n.includes('html')) return 'html'
  if (n.includes('css')) return 'css'
  if (n.includes('recharts')) return 'recharts'
  if (n.includes('chartiq')) return 'chartiq'
  if (n.includes('websocket')) return 'websocket'
  if (n.includes('wordpress')) return 'wordpress'
  if (n.includes('grails')) return 'grails'
  if (n.includes('ffmpeg')) return 'ffmpeg'
  if (n.includes('ckeditor')) return 'ckeditor'
  if (n.includes('tiptap')) return 'tiptap'
  if (n.includes('pdf.js') || n.includes('pdfjs')) return 'pdfjs'
  if (n.includes('jspdf')) return 'jspdf'
  if (n.includes('inertia')) return 'inertia'
  if (n.includes('rest')) return 'rest'
  if (n.includes('mvc')) return 'mvc'
  return null
}

export function getTechHex(label: string): string {
  const key = resolveKey(label)
  return (key && BRAND_HEX[key]) || '#64748B'
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex)
  const lin = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]
}

export function getTechBadgeStyle(label: string, dark: boolean): CSSProperties {
  const hex = getTechHex(label)
  const { r, g, b } = hexToRgb(hex)
  const bright = relativeLuminance(hex) > 0.55

  if (dark) {
    return {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.18)`,
      borderColor: `rgba(${r}, ${g}, ${b}, 0.45)`,
      color: bright ? hex : `rgb(${Math.min(255, r + 70)}, ${Math.min(255, g + 70)}, ${Math.min(255, b + 70)})`,
    }
  }

  return {
    backgroundColor: `rgba(${r}, ${g}, ${b}, ${bright ? 0.28 : 0.14})`,
    borderColor: `rgba(${r}, ${g}, ${b}, ${bright ? 0.55 : 0.35})`,
    color: bright ? '#3f3f46' : hex,
  }
}
