export function AdminPlaceholderPage({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-10 text-center">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-sm text-admin-muted">This section will match the Figma screen when wired to data.</p>
    </div>
  )
}
