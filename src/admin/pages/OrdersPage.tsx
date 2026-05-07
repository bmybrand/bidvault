import { AdminCard } from '../components/AdminCard'

const orders = [
  { id: 'ORD-10492', buyer: 'alex_m', total: '$4,312.00', status: 'Paid', date: 'Apr 28, 2026' },
  { id: 'ORD-10488', buyer: 'sam_k', total: '$890.00', status: 'Awaiting payment', date: 'Apr 28, 2026' },
  { id: 'ORD-10480', buyer: 'maria_l', total: '$12,100.00', status: 'Shipped', date: 'Apr 27, 2026' },
  { id: 'ORD-10471', buyer: 'jordan_p', total: '$199.00', status: 'Refunded', date: 'Apr 26, 2026' },
]

const statusClass: Record<string, string> = {
  Paid: 'text-emerald-400',
  Shipped: 'text-sky-400',
  'Awaiting payment': 'text-amber-400',
  Refunded: 'text-zinc-500',
}

export function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Orders</h1>
        <p className="mt-1 text-sm text-zinc-400">Buy-now checkouts and winning-bid settlements.</p>
      </div>

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                <th className="pb-3 pr-4 font-medium">Order</th>
                <th className="pb-3 pr-4 font-medium">Buyer</th>
                <th className="pb-3 pr-4 font-medium">Total</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="py-3 pr-4 font-mono text-xs text-vault-gold">{o.id}</td>
                  <td className="py-3 pr-4 text-zinc-300">{o.buyer}</td>
                  <td className="py-3 pr-4 font-medium text-white">{o.total}</td>
                  <td className={`py-3 pr-4 text-xs font-medium ${statusClass[o.status]}`}>{o.status}</td>
                  <td className="py-3 text-zinc-500">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  )
}
