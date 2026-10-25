import { useEffect, useState } from 'react'
import { getTechBadgeStyle } from '../data/techColors'

interface TechBadgeProps {
  label: string
  size?: 'sm' | 'md'
}

function useIsDark() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setDark(root.classList.contains('dark'))
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return dark
}

function TechBadge({ label, size = 'md' }: TechBadgeProps) {
  const dark = useIsDark()
  const compact = size === 'sm'
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${
        compact ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1.5 text-xs'
      }`}
      style={getTechBadgeStyle(label, dark)}
    >
      {label}
    </span>
  )
}

export default TechBadge
