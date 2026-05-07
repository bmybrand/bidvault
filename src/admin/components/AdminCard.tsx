import type { ReactNode } from 'react'

export function AdminCard({
  title,
  children,
  className = '',
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={`rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5 shadow-sm ${className}`}
    >
      {title && <h2 className="mb-4 text-sm font-semibold text-admin-muted">{title}</h2>}
      {children}
    </section>
  )
}

export function StatCard({
  label,
  value,
  hint,
  trend,
}: {
  label: string
  value: string
  hint?: string
  trend?: { positive: boolean; text: string }
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-admin-muted">{label}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-admin-muted">{hint}</p>}
      {trend && (
        <p className={`mt-2 text-xs font-medium ${trend.positive ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend.text}
        </p>
      )}
    </div>
  )
}
