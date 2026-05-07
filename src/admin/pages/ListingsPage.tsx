import { AdminCard } from '../components/AdminCard'

const queue = [
  {
    id: 'L-8891',
    title: '1969 Topps Mickey Mantle PSA 7',
    seller: 'cardvault',
    submitted: 'Apr 28, 9:12 AM',
    flags: ['High value', 'PSA'],
  },
  {
    id: 'L-8890',
    title: 'Persian runner 4×6 hand-knotted',
    seller: 'rugimports',
    submitted: 'Apr 28, 8:44 AM',
    flags: ['Images'],
  },
  {
    id: 'L-8887',
    title: 'MacBook Pro 16" M3 Max 64GB',
    seller: 'techcycle',
    submitted: 'Apr 27, 4:20 PM',
    flags: ['Electronics'],
  },
]

export function ListingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Listings</h1>
        <p className="mt-1 text-sm text-zinc-400">Moderation queue and catalog management.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <AdminCard title="Awaiting review">
          <p className="text-3xl font-bold text-vault-gold">23</p>
          <p className="text-xs text-zinc-500">SLA: review within 24h</p>
        </AdminCard>
        <AdminCard title="Published today">
          <p className="text-3xl font-bold text-white">14</p>
          <p className="text-xs text-zinc-500">Across all categories</p>
        </AdminCard>
        <AdminCard title="Rejected (7d)">
          <p className="text-3xl font-bold text-red-400">3</p>
          <p className="text-xs text-zinc-500">Policy violations</p>
        </AdminCard>
      </div>

      <AdminCard title="Review queue">
        <ul className="divide-y divide-white/5">
          {queue.map((item) => (
            <li key={item.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs text-zinc-500">{item.id}</p>
                <p className="mt-1 font-medium text-white">{item.title}</p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {item.seller} · {item.submitted}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.flags.map((f) => (
                    <span key={f} className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/5"
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-vault-gold px-3 py-2 text-xs font-semibold text-vault-bg hover:bg-vault-gold-hover"
                >
                  Approve
                </button>
              </div>
            </li>
          ))}
        </ul>
      </AdminCard>
    </div>
  )
}
