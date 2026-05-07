import { useState, type ComponentType } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import {
  IconBox,
  IconBuilding,
  IconChart,
  IconCredit,
  IconDashboard,
  IconGavel,
  IconHammer,
  IconOrders,
  IconSettings,
  IconSpark,
  IconTruck,
  IconUsers,
} from './adminNavIcons'

type NavItem = {
  to: string
  label: string
  Icon: ComponentType<{ className?: string }>
  end?: boolean
}

const navItems: NavItem[] = [
  { to: '/admin', label: 'Dashboard', Icon: IconDashboard, end: true },
  { to: '/admin/auctions', label: 'Auctions', Icon: IconGavel },
  { to: '/admin/products', label: 'Products', Icon: IconBox },
  { to: '/admin/estate-sales', label: 'Estate Sales', Icon: IconBuilding },
  { to: '/admin/bids', label: 'Bids', Icon: IconHammer },
  { to: '/admin/orders', label: 'Orders', Icon: IconOrders },
  { to: '/admin/payments', label: 'Payments', Icon: IconCredit },
  { to: '/admin/users', label: 'Users', Icon: IconUsers },
  { to: '/admin/shipping', label: 'Shipping', Icon: IconTruck },
  { to: '/admin/ai-tools', label: 'AI Tools', Icon: IconSpark },
  { to: '/admin/analytics', label: 'Analytics', Icon: IconChart },
  { to: '/admin/settings', label: 'Settings', Icon: IconSettings },
]

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-admin-canvas text-white">
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[272px] flex-col border-r border-[color:var(--color-admin-border)] bg-admin-canvas transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-[color:var(--color-admin-border)] px-5 py-6">
          <Link to="/admin" className="inline-flex items-center">
            <img src="/images/logo.png" alt="BidVault" className="h-10 w-auto" />
          </Link>
          <div className="mt-4 rounded-lg border border-[color:var(--color-admin-border)] bg-admin-card px-3 py-3">
            <p className="text-sm font-semibold text-white">BidVault Admin</p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-admin-gold">
              The Digital Vault
            </p>
            <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--color-admin-border)] pt-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-xs text-admin-muted">System Status: Secure</span>
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-3" aria-label="Admin navigation">
          {navItems.map((item) => {
            const Icon = item.Icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 rounded-lg py-2.5 pl-3 pr-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-admin-gold/10 text-admin-gold before:absolute before:left-0 before:top-1/2 before:h-8 before:w-1 before:-translate-y-1/2 before:rounded-r before:bg-admin-gold'
                      : 'text-admin-muted hover:bg-white/[0.04] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={isActive ? 'shrink-0 text-admin-gold' : 'shrink-0 text-current'} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="border-t border-[color:var(--color-admin-border)] p-4">
          <Link
            to="/"
            className="block rounded-lg py-2.5 text-center text-sm font-medium text-admin-muted transition hover:bg-white/[0.04] hover:text-white"
          >
            ← View site
          </Link>
        </div>
      </aside>

      <div className="lg:pl-[272px]">
        <header className="sticky top-0 z-30 flex h-[60px] items-center gap-4 border-b border-[color:var(--color-admin-border)] bg-admin-canvas/95 px-4 backdrop-blur-md sm:px-6">
          <button
            type="button"
            className="shrink-0 rounded-lg p-2 text-admin-muted hover:bg-white/[0.04] hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>

          <div className="mx-auto hidden w-full max-w-xl md:block">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <input
                type="search"
                placeholder="Search auctions, users..."
                className="w-full rounded-full border border-[color:var(--color-admin-border)] bg-admin-card py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-admin-muted outline-none ring-admin-gold/30 focus:ring-2"
              />
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-admin-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </label>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-admin-gold text-lg font-light text-[#0b1015] transition hover:bg-admin-gold-hover sm:hidden"
              aria-label="Add auction"
            >
              +
            </button>
            <button
              type="button"
              className="hidden rounded-full bg-admin-gold px-4 py-2 text-sm font-semibold text-[#0b1015] transition hover:bg-admin-gold-hover sm:inline-flex"
            >
              Add Auction
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-admin-muted hover:bg-white/[0.04] hover:text-white"
              aria-label="Notifications"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[color:var(--color-admin-border)] bg-admin-card py-1 pl-1 pr-2 hover:bg-white/[0.04]"
              aria-label="Account menu"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-190b26717692?auto=format&fit=crop&w=80&q=80"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <svg className="h-4 w-4 text-admin-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
