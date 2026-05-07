import type { ReactNode } from 'react'

type IconProps = { className?: string }

function IconBase({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function IconDashboard({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </IconBase>
  )
}

export function IconGavel({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M14 13l-8 8M4 9l8-8M9 4h.01M15 10h.01M19 14l-2 2M11 11l2 2M3 21l5-5" />
    </IconBase>
  )
}

export function IconBox({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </IconBase>
  )
}

export function IconOrders({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </IconBase>
  )
}

export function IconUsers({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  )
}

export function IconTruck({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M10 17h4V5H2v12h3M14 17h2a2 2 0 0 0 2-2v-3.5L17.5 8H14M6 17h.01M18 17h.01" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </IconBase>
  )
}

export function IconCredit({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </IconBase>
  )
}

export function IconChart({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 6-6" />
    </IconBase>
  )
}

export function IconSpark({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </IconBase>
  )
}

export function IconSettings({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </IconBase>
  )
}

export function IconHammer({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9M11 5l4 4M19 3l-2 2M3 21l5-5" />
    </IconBase>
  )
}

export function IconTimer({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </IconBase>
  )
}

export function IconBuilding({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12h12M10 12v10M14 12v10" />
    </IconBase>
  )
}

