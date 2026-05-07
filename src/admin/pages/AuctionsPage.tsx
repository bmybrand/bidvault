import { AdminCard } from '../components/AdminCard'

const rows = [
  { id: 'A-2401', title: 'Fine art evening', seller: 'Gallery North', status: 'Live', ends: 'May 2, 6:00 PM', high: '$42,300' },
  { id: 'A-2402', title: 'Sports memorabilia', seller: 'ProVault LLC', status: 'Live', ends: 'May 3, 7:30 PM', high: '$18,950' },
  { id: 'A-2398', title: 'Estate jewelry', seller: 'Estate Co.', status: 'Scheduled', ends: 'May 8, 5:00 PM', high: '—' },
  { id: 'A-2395', title: 'Vintage watches', seller: 'Timepiece Inc', status: 'Ended', ends: 'Apr 28', high: '$96,200' },
  { id: 'A-2392', title: 'Liquidation — office', seller: 'ClearOut', status: 'Draft', ends: '—', high: '—' },
]

const statusStyles: Record<string, string> = {
  Live: 'bg-emerald-500/15 text-emerald-400',
  Scheduled: 'bg-sky-500/15 text-sky-400',
  Ended: 'bg-zinc-500/20 text-zinc-400',
  Draft: 'bg-amber-500/15 text-amber-400',
}

export function AuctionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Auctions</h1>
          <p className="mt-1 text-sm text-zinc-400">Create, schedule, and monitor auction events.</p>
        </div>
        <button
          type="button"
          className="rounded-lg bg-vault-gold px-4 py-2.5 text-sm font-semibold text-vault-bg transition hover:bg-vault-gold-hover"
        >
          + New auction
        </button>
      </div>

      <AdminCard>
        <div className="mb-4 flex flex-wrap gap-2">
          {['All', 'Live', 'Scheduled', 'Ended', 'Draft'].map((f) => (
            <button
              key={f}
              type="button"
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                f === 'All' ? 'bg-vault-gold text-vault-bg' : 'bg-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                <th className="pb-3 pr-3 font-medium">ID</th>
                <th className="pb-3 pr-3 font-medium">Event</th>
                <th className="pb-3 pr-3 font-medium">Seller</th>
                <th className="pb-3 pr-3 font-medium">Status</th>
                <th className="pb-3 pr-3 font-medium">Ends</th>
                <th className="pb-3 pr-3 font-medium">High bid</th>
                <th className="pb-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r) => (
                <tr key={r.id} className="text-zinc-300">
                  <td className="py-3 pr-3 font-mono text-xs text-zinc-500">{r.id}</td>
                  <td className="py-3 pr-3 font-medium text-white">{r.title}</td>
                  <td className="py-3 pr-3">{r.seller}</td>
                  <td className="py-3 pr-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 pr-3 text-zinc-500">{r.ends}</td>
                  <td className="py-3 pr-3 text-vault-gold">{r.high}</td>
                  <td className="py-3">
                    <button type="button" className="text-xs font-medium text-vault-gold hover:underline">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  )
}
