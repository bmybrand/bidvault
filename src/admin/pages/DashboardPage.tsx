import { useState, type ReactNode } from 'react'
import {
  IconBox,
  IconBuilding,
  IconCredit,
  IconGavel,
  IconOrders,
  IconTimer,
  IconTruck,
  IconUsers,
} from '../adminNavIcons'

function KpiCard({
  label,
  value,
  sub,
  subTone = 'muted',
  icon,
}: {
  label: string
  value: string
  sub: string
  subTone?: 'muted' | 'success' | 'warning'
  icon: ReactNode
}) {
  const subClass =
    subTone === 'success'
      ? 'text-emerald-400'
      : subTone === 'warning'
        ? 'text-amber-400/90'
        : 'text-admin-muted'
  return (
    <div className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-admin-muted">{label}</p>
        <div className="text-admin-muted [&>svg]:opacity-80">{icon}</div>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-[28px]">{value}</p>
      <p className={`mt-1.5 text-xs sm:text-sm ${subClass}`}>{sub}</p>
    </div>
  )
}

const chartBars = [
  { h: 38, gold: false },
  { h: 52, gold: false },
  { h: 44, gold: false },
  { h: 68, gold: true },
  { h: 58, gold: false },
  { h: 48, gold: false },
]
const chartLabels = ['08:00', '12:00', '18:00', 'NOW', '20:00', '00:00']

const auctionRows = [
  {
    img: 'https://images.unsplash.com/photo-1523170335258-fcd848942b52?auto=format&fit=crop&w=80&q=80',
    item: 'Vintage Patek Philippe',
    category: 'Watches',
    bid: '$45,200',
    status: 'LIVE',
    statusClass: 'bg-emerald-500/15 text-emerald-400',
    ends: '2h 14m',
  },
  {
    img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=80&q=80',
    item: 'Abstract Horizon #04',
    category: 'Modern Art',
    bid: '$8,900',
    status: 'DRAFT',
    statusClass: 'bg-sky-500/15 text-sky-300',
    ends: 'Starts in 1d',
  },
  {
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=80&q=80',
    item: 'Pro Workstation Setup',
    category: 'Technology',
    bid: '$3,250',
    status: 'ENDED',
    statusClass: 'bg-zinc-600/25 text-zinc-400',
    ends: 'Sold',
  },
]

export function DashboardPage() {
  const [chartRange, setChartRange] = useState<'daily' | 'weekly'>('daily')

  return (
    <div className="relative pb-24">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-admin-muted">Monitor auctions, sales, and operations in real-time</p>
      </div>

      {/* KPI grid 2×4 */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        <KpiCard
          label="Active Auctions"
          value="1,284"
          sub="+ 12% from last week"
          subTone="success"
          icon={<IconGavel className="h-5 w-5" />}
        />
        <KpiCard
          label="Total Products"
          value="8,432"
          sub="Inventory Value: $4.2M"
          icon={<IconBox className="h-5 w-5" />}
        />
        <KpiCard
          label="Sales Revenue"
          value="$142,590"
          sub="+ 24% boost today"
          subTone="success"
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
          }
        />
        <KpiCard
          label="Total Users"
          value="45,102"
          sub="245 active now"
          icon={<IconUsers className="h-5 w-5" />}
        />
        <KpiCard
          label="Open Orders"
          value="112"
          sub="45 priority shipping"
          icon={<IconOrders className="h-5 w-5" />}
        />
        <KpiCard
          label="Ending Today"
          value="34"
          sub="Avg. bid velocity: High"
          icon={<IconTimer className="h-5 w-5" />}
        />
        <KpiCard
          label="Pending Payments"
          value="21"
          sub="Requires attention"
          icon={<IconCredit className="h-5 w-5" />}
        />
        <KpiCard
          label="Freight Listings"
          value="8"
          sub="In transit: 5"
          icon={<IconTruck className="h-5 w-5" />}
        />
      </div>

      {/* Middle row */}
      <div className="mt-6 grid gap-4 lg:mt-8 lg:grid-cols-12 lg:gap-6">
        <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5 lg:col-span-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-white">Bids & Revenue Performance</h2>
              <p className="mt-0.5 text-xs text-admin-muted">Real-time bidding volume vs conversion rate</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setChartRange('daily')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  chartRange === 'daily'
                    ? 'bg-admin-gold text-[#0b1015]'
                    : 'border border-[color:var(--color-admin-border)] text-admin-muted hover:bg-white/[0.04]'
                }`}
              >
                Daily
              </button>
              <button
                type="button"
                onClick={() => setChartRange('weekly')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  chartRange === 'weekly'
                    ? 'bg-admin-gold text-[#0b1015]'
                    : 'border border-[color:var(--color-admin-border)] text-admin-muted hover:bg-white/[0.04]'
                }`}
              >
                Weekly
              </button>
            </div>
          </div>

          <div className="relative mt-8 h-52 sm:h-56">
            <svg className="h-full w-full" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden>
              {/* Bars */}
              {chartBars.map((b, i) => {
                const x = 28 + i * 58
                const barH = (b.h / 100) * 110
                const y = 130 - barH
                const w = 28
                return (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width={w}
                    height={barH}
                    rx={4}
                    fill={b.gold ? 'var(--color-admin-gold)' : '#3d4550'}
                    opacity={b.gold ? 0.9 : 0.55}
                  />
                )
              })}
              {/* Line */}
              <polyline
                fill="none"
                stroke="var(--color-admin-gold)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="44,95 102,78 160,88 218,42 276,62 334,52"
              />
              <polyline
                fill="url(#chartFill)"
                stroke="none"
                points="44,95 102,78 160,88 218,42 276,62 334,52 334,130 44,130"
                opacity="0.12"
              />
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-admin-gold)" />
                  <stop offset="100%" stopColor="var(--color-admin-gold)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[10px] text-admin-muted sm:text-xs">
              {chartLabels.map((lab) => (
                <span
                  key={lab}
                  className={lab === 'NOW' ? 'font-semibold text-admin-gold' : ''}
                >
                  {lab}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-4 lg:col-span-4">
          <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5">
            <h2 className="text-base font-semibold text-white">Quick Operations</h2>
            <ul className="mt-4 space-y-2">
              {[
                { t: 'Add New Auction', icon: IconGavel },
                { t: 'Add Buy Now Product', icon: IconBox },
                { t: 'Create Estate Sale', icon: IconBuilding },
                { t: 'View All Orders', icon: IconOrders },
              ].map(({ t, icon: Ic }) => (
                <li key={t}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg border border-transparent bg-[#141a22] px-3 py-2.5 text-left text-sm text-admin-muted transition hover:border-[color:var(--color-admin-border)] hover:bg-[#1c232d] hover:text-white"
                  >
                    <Ic className="h-4 w-4 shrink-0 opacity-70" />
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5">
            <h2 className="text-base font-semibold text-white">Top Categories</h2>
            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="relative h-36 w-36 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="36" fill="none" stroke="#4a5568" strokeWidth="14" />
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="none"
                    stroke="#c4a574"
                    strokeWidth="14"
                    strokeDasharray={`${0.35 * 226} 226`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="none"
                    stroke="var(--color-admin-gold)"
                    strokeWidth="14"
                    strokeDasharray={`${0.4 * 226} 226`}
                    strokeDashoffset={`${-0.35 * 226}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-white">90%</span>
                  <span className="text-[9px] uppercase tracking-wide text-admin-muted">conv.</span>
                </div>
              </div>
              <ul className="min-w-0 space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-admin-gold" />
                  <span className="text-admin-muted">Luxury Watches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c4a574]" />
                  <span className="text-admin-muted">Modern Art</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#4a5568]" />
                  <span className="text-admin-muted">Real Estate</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-6 grid gap-4 lg:mt-8 lg:grid-cols-12 lg:gap-6">
        <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5 lg:col-span-8">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-white">Auctions Overview</h2>
            <button type="button" className="text-xs font-semibold text-admin-gold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-admin-border)] text-xs font-medium uppercase tracking-wide text-admin-muted">
                  <th className="pb-3 pr-3">Item</th>
                  <th className="pb-3 pr-3">Category</th>
                  <th className="pb-3 pr-3">Current Bid</th>
                  <th className="pb-3 pr-3">Status</th>
                  <th className="pb-3">Ends</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-admin-border)]">
                {auctionRows.map((r) => (
                  <tr key={r.item}>
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-3">
                        <img src={r.img} alt="" className="h-10 w-10 rounded-lg object-cover" />
                        <span className="font-medium text-white">{r.item}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-admin-muted">{r.category}</td>
                    <td className="py-3 pr-3 font-semibold text-admin-gold">{r.bid}</td>
                    <td className="py-3 pr-3">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${r.statusClass}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 text-admin-muted">{r.ends}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid gap-4 lg:col-span-4">
          <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5">
            <h2 className="text-base font-semibold text-white">Recent Activity</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-admin-gold/15 text-admin-gold">
                  <IconGavel className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-white">New bid placed</p>
                  <p className="text-xs text-admin-gold">$12,400</p>
                  <p className="mt-0.5 text-[10px] text-admin-muted">2 min ago</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
                  <IconUsers className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-white">User registration</p>
                  <p className="text-xs text-admin-muted">Alex Thompson</p>
                  <p className="mt-0.5 text-[10px] text-admin-muted">18 min ago</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <IconCredit className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-white">Payment received</p>
                  <p className="text-xs text-admin-muted">#ORD-4492</p>
                  <p className="mt-0.5 text-[10px] text-admin-muted">42 min ago</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-[color:var(--color-admin-border)] bg-admin-card p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">Urgent Tasks</h2>
              <span className="rounded-full bg-red-500/90 px-2 py-0.5 text-[10px] font-bold text-white">3</span>
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 rounded-lg bg-red-950/40 px-3 py-3 ring-1 ring-red-500/20">
                <span className="mt-0.5 text-red-400">ⓘ</span>
                <div>
                  <p className="text-sm font-medium text-white">Pending Payments</p>
                  <p className="mt-0.5 text-xs text-admin-muted">Review failed captures and retries</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-amber-950/35 px-3 py-3 ring-1 ring-amber-500/20">
                <span className="mt-0.5 text-amber-400">↻</span>
                <div>
                  <p className="text-sm font-medium text-white">Awaiting Fulfillment</p>
                  <p className="mt-0.5 text-xs text-admin-muted">Orders past SLA need carrier updates</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* FAB */}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-admin-gold text-2xl font-light text-[#0b1015] shadow-lg shadow-black/40 transition hover:bg-admin-gold-hover"
        aria-label="Quick add"
      >
        +
      </button>
    </div>
  )
}
