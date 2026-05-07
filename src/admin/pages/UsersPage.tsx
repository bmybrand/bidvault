import { AdminCard } from '../components/AdminCard'

const users = [
  { name: 'Alex Morgan', email: 'alex@email.com', role: 'Buyer', joined: 'Jan 12, 2025', status: 'Active' },
  { name: 'Sam Kim', email: 'sam@studio.io', role: 'Seller', joined: 'Mar 3, 2025', status: 'Active' },
  { name: 'Jordan Price', email: 'jordan@mail.com', role: 'Buyer', joined: 'Apr 1, 2026', status: 'Suspended' },
  { name: 'Maria Lopez', email: 'maria@vault.co', role: 'Admin', joined: 'Nov 2, 2024', status: 'Active' },
]

export function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <p className="mt-1 text-sm text-zinc-400">Accounts, roles, and access control.</p>
        </div>
        <button
          type="button"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
        >
          Export users
        </button>
      </div>

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                <th className="pb-3 pr-4 font-medium">Name</th>
                <th className="pb-3 pr-4 font-medium">Email</th>
                <th className="pb-3 pr-4 font-medium">Role</th>
                <th className="pb-3 pr-4 font-medium">Joined</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((u) => (
                <tr key={u.email}>
                  <td className="py-3 pr-4 font-medium text-white">{u.name}</td>
                  <td className="py-3 pr-4 text-zinc-400">{u.email}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-300">{u.role}</span>
                  </td>
                  <td className="py-3 pr-4 text-zinc-500">{u.joined}</td>
                  <td className="py-3">
                    <span
                      className={`text-xs font-medium ${
                        u.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {u.status}
                    </span>
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
