import { AdminCard } from '../components/AdminCard'

export function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-sm text-zinc-400">Platform configuration and integrations.</p>
      </div>

      <AdminCard title="General">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400" htmlFor="site-name">
              Site name
            </label>
            <input
              id="site-name"
              type="text"
              defaultValue="BidVault"
              className="mt-1 w-full rounded-lg border border-white/10 bg-vault-bg px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-vault-gold/40"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400" htmlFor="support-email">
              Support email
            </label>
            <input
              id="support-email"
              type="email"
              defaultValue="support@bidvault.com"
              className="mt-1 w-full rounded-lg border border-white/10 bg-vault-bg px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-vault-gold/40"
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard title="Auction defaults">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-zinc-400" htmlFor="buyer-premium">
              Buyer premium (%)
            </label>
            <input
              id="buyer-premium"
              type="number"
              defaultValue={12}
              className="mt-1 w-full rounded-lg border border-white/10 bg-vault-bg px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-vault-gold/40"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400" htmlFor="min-increment">
              Min bid increment ($)
            </label>
            <input
              id="min-increment"
              type="number"
              defaultValue={5}
              className="mt-1 w-full rounded-lg border border-white/10 bg-vault-bg px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-vault-gold/40"
            />
          </div>
        </div>
      </AdminCard>

      <AdminCard title="API & webhooks">
        <p className="mb-3 text-xs text-zinc-500">Use for shipping, tax, and payment provider callbacks.</p>
        <div className="flex items-center gap-2 rounded-lg border border-dashed border-white/15 bg-vault-bg px-3 py-3">
          <code className="flex-1 truncate font-mono text-xs text-zinc-400">https://api.bidvault.com/v1/hooks/••••••••</code>
          <button type="button" className="text-xs font-medium text-vault-gold hover:underline">
            Rotate
          </button>
        </div>
      </AdminCard>

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-lg bg-vault-gold px-5 py-2.5 text-sm font-semibold text-vault-bg hover:bg-vault-gold-hover"
        >
          Save changes
        </button>
      </div>
    </div>
  )
}
