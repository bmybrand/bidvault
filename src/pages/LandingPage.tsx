import { type SyntheticEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=2000&q=80',
    title: 'Discover Rare Collectibles, Antiques & Liquidation Deals',
    subtitle:
      'Curated auctions from trusted sellers. Bid live or buy now on art, sports memorabilia, vintage pieces, and one-of-a-kind finds.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=80',
    title: 'Fine Art & Museum-Quality Pieces at Auction',
    subtitle:
      'Browse authenticated paintings, sculpture, and prints with detailed provenance and specialist support from bid to delivery.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=80',
    title: 'Sports Memorabilia & Signed Collectibles',
    subtitle:
      'Jerseys, cards, and game-used gear from verified consigners. Real-time bidding with transparent lot histories.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=2000&q=80',
    title: 'Antiques, Estates & Liquidation Events',
    subtitle:
      'Estate sales and business liquidations in one place. Discover furniture, decor, and hidden gems before they are gone.',
  },
] as const
const promoLeft =
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80'
const promoRight =
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80'

type FeaturedItem = {
  img: string
  title: string
  timer: string
  bid: string
}

const featured: FeaturedItem[] = [
  {
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',
    title: 'Lorem ipsum dolor sit amet consectetur',
    timer: '02h 04m 56s',
    bid: '$4,400',
  },
  {
    img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80',
    title: 'Lorem ipsum dolor sit amet consectetur',
    timer: '02h 04m 56s',
    bid: '$4,400',
  },
  {
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
    title: 'Lorem ipsum dolor sit amet consectetur',
    timer: '50m 45s',
    bid: '$4,400',
  },
  {
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
    title: 'Lorem ipsum dolor sit amet consectetur',
    timer: '02h 04m 56s',
    bid: '$4,400',
  },
]

const categories = [
  {
    label: 'Sports Collectibles',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Antiques & Vintage',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Electronics & Equipment',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Furniture & Home Goods',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
  },
]

const features = [
  {
    title: 'Verified Listings',
    body: 'Every item is reviewed so you bid with confidence on authentic collectibles.',
  },
  {
    title: 'Secure Bidding System',
    body: 'Encrypted payments and buyer protection for a safer auction experience.',
  },
  {
    title: 'Expert Support',
    body: 'Our team helps with appraisals, shipping, and questions at every step.',
  },
  {
    title: 'Real-time Bid Updates',
    body: 'Live notifications keep you ahead when competition heats up.',
  },
]

const sportTabs = [
  'General',
  "Men's Clothing",
  "Women's Clothing",
  'Accessories',
  'Footwear',
] as const

type SportTab = (typeof sportTabs)[number]

type SportsAuctionItem = {
  tab: Exclude<SportTab, 'General'>
  img: string
  live: boolean
  countdown: string
  bid: string
}

const sportsAuctionItems: SportsAuctionItem[] = [
  {
    tab: "Men's Clothing",
    img: 'https://images.unsplash.com/photo-1526304760382-35937d3f416c?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '08h : 15m : 33s',
    bid: '$199.00',
  },
  {
    tab: "Men's Clothing",
    img: 'https://images.unsplash.com/photo-1517649763962-0c62306601b7?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '14h : 02m : 10s',
    bid: '$276.00',
  },
  {
    tab: "Men's Clothing",
    img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '03h : 40m : 55s',
    bid: '$353.00',
  },
  {
    tab: "Men's Clothing",
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '22h : 11m : 08s',
    bid: '$430.00',
  },
  {
    tab: "Women's Clothing",
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '06h : 50m : 21s',
    bid: '$188.00',
  },
  {
    tab: "Women's Clothing",
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '11h : 33m : 44s',
    bid: '$245.50',
  },
  {
    tab: "Women's Clothing",
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '01d : 04h : 12m',
    bid: '$512.00',
  },
  {
    tab: "Women's Clothing",
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '02h : 09m : 17s',
    bid: '$320.00',
  },
  {
    tab: 'Accessories',
    img: 'https://images.unsplash.com/photo-1523170335258-fcd848942b52?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '09h : 22m : 01s',
    bid: '$165.00',
  },
  {
    tab: 'Accessories',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '04h : 18m : 49s',
    bid: '$410.00',
  },
  {
    tab: 'Accessories',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '16h : 05m : 30s',
    bid: '$289.00',
  },
  {
    tab: 'Accessories',
    img: 'https://images.unsplash.com/photo-1611926627411-42cf779a1dac?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '20h : 44m : 12s',
    bid: '$95.00',
  },
  {
    tab: 'Footwear',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27b2?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '01h : 27m : 58s',
    bid: '$340.00',
  },
  {
    tab: 'Footwear',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '07h : 12m : 03s',
    bid: '$228.00',
  },
  {
    tab: 'Footwear',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80',
    live: false,
    countdown: '18h : 56m : 41s',
    bid: '$177.00',
  },
  {
    tab: 'Footwear',
    img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=80',
    live: true,
    countdown: '05h : 31m : 19s',
    bid: '$455.00',
  },
]

const howSteps = [
  {
    title: 'Create Your Account',
    body: 'Sign up in minutes and set your profile to start bidding.',
    icon: 'user',
  },
  {
    title: 'Browse Auctions & Items',
    body: 'Explore categories, filters, and live lots tailored to you.',
    icon: 'search',
  },
  {
    title: 'Place Your Bid or Buy Now',
    body: 'Bid in real time or secure instant purchases when available.',
    icon: 'gavel',
  },
  {
    title: 'Win, Pay, and Collect',
    body: 'Complete checkout and track delivery to your door.',
    icon: 'trophy',
  },
]

const events = [
  {
    img: 'https://images.unsplash.com/photo-1540747913346-19b32f3d9b30?auto=format&fit=crop&w=200&q=80',
    title: 'Vintage Sports Memorabilia Evening',
    date: 'May 12, 2026',
    time: '7:00 PM EST',
    live: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1513475382583-d06e58bcb0e0?auto=format&fit=crop&w=200&q=80',
    title: 'Fine Art & Sculpture Auction',
    date: 'May 18, 2026',
    time: '6:30 PM EST',
    live: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1452860606241-08dff4a87b00?auto=format&fit=crop&w=200&q=80',
    title: 'Luxury Watches Liquidation',
    date: 'May 22, 2026',
    time: '5:00 PM EST',
    live: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80',
    title: 'Estate Jewelry & Antiques',
    date: 'May 28, 2026',
    time: '8:00 PM EST',
    live: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80',
    title: "Men's Fashion Archive Sale",
    date: 'Jun 02, 2026',
    time: '4:00 PM EST',
    live: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=200&q=80',
    title: 'Sneakers & Streetwear Drop',
    date: 'Jun 08, 2026',
    time: '12:00 PM EST',
    live: true,
  },
]

const fallbackPalettes = [
  { a: '#1f2a44', b: '#111827', c: '#d4af37' },
  { a: '#1e3a5f', b: '#0f172a', c: '#f59e0b' },
  { a: '#3a2a1f', b: '#111827', c: '#fbbf24' },
  { a: '#2a1f3f', b: '#0b1220', c: '#eab308' },
] as const

function hashString(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function buildFallbackImageSrc(seed: string) {
  const palette = fallbackPalettes[hashString(seed) % fallbackPalettes.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.a}" />
        <stop offset="100%" stop-color="${palette.b}" />
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="40" /></filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)" />
    <circle cx="180" cy="140" r="120" fill="${palette.c}" opacity="0.35" filter="url(#blur)" />
    <circle cx="620" cy="360" r="150" fill="${palette.c}" opacity="0.25" filter="url(#blur)" />
    <rect x="210" y="150" width="380" height="220" rx="18" fill="${palette.c}" opacity="0.14" />
    <rect x="250" y="190" width="120" height="110" rx="12" fill="${palette.c}" opacity="0.35" />
    <rect x="390" y="205" width="170" height="18" rx="9" fill="#e5e7eb" opacity="0.6" />
    <rect x="390" y="235" width="130" height="14" rx="7" fill="#e5e7eb" opacity="0.45" />
    <rect x="390" y="265" width="95" height="14" rx="7" fill="#e5e7eb" opacity="0.35" />
  </svg>`

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function SafeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget
    if (image.dataset.fallbackApplied === 'true') return
    image.dataset.fallbackApplied = 'true'
    image.src = buildFallbackImageSrc(src)
  }

  return <img src={src} alt={alt} className={className} onError={handleError} loading="lazy" decoding="async" />
}

function IconSearch(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

function IconUser(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconHeart(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function IconMenu(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  )
}

function IconPlay(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function IconChevron(props: { dir: 'left' | 'right'; className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      {props.dir === 'left' ? <path d="M15 18l-6-6 6-6" strokeLinecap="round" /> : <path d="M9 18l6-6-6-6" strokeLinecap="round" />}
    </svg>
  )
}

function StepIcon({ type }: { type: string }) {
  const cls = 'h-6 w-6 text-vault-bg'
  switch (type) {
    case 'user':
      return <IconUser className={cls} />
    case 'search':
      return <IconSearch className={cls} />
    case 'gavel':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M2 21h20v-2H2v2zM5.88 8.64L3.5 6.26 5.12 4.64l2.38 2.38L5.88 8.64zm7.24-1.76l-1.41-1.41-6.36 6.36 1.41 1.41 6.36-6.36zM20.59 3.41L18.17 1 7.59 11.59l2.41 2.41L20.59 3.41z" />
        </svg>
      )
    case 'trophy':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      )
    default:
      return null
  }
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 text-white">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-vault-gold text-vault-bg">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l6 3.75v7.14l-6 3.75-6-3.75V7.93l6-3.75zM11 10h2v5h-2v-5zm0-3h2v2h-2V7z" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">
        Bid<span className="text-vault-gold">Vault</span>
      </span>
    </a>
  )
}

function FeaturedItemCard({ item }: { item: FeaturedItem }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-gradient-to-b from-[#1c2534] via-[#182131] to-[#121a28] p-2.5 ring-1 ring-[#2a3446]">
      <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-[#2a3240]">
        <SafeImage src={item.img} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-black/28" />
        <span className="absolute left-1/2 top-2.5 -translate-x-1/2 rounded-full bg-[#3b4452]/95 px-2.5 py-0.5 text-[10px] font-semibold text-[#edf2fb]">
          {item.timer}
        </span>
        <button
          type="button"
          className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#303846]/90 text-[#97a3b7] ring-1 ring-white/10 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-[#262f3d] hover:text-vault-gold"
          aria-label="Add to favorites"
        >
          <IconHeart className="h-3.5 w-3.5" />
        </button>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
          <button type="button" className="min-w-24 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-vault-bg">
            Place Bid
          </button>
          <button type="button" className="min-w-24 rounded-lg bg-vault-gold px-3 py-1.5 text-xs font-bold text-vault-bg">
            Quick Bid $100
          </button>
        </div>
      </div>
      <div className="px-1 pb-1 pt-2.5">
        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-white sm:text-lg">{item.title}</h3>
        <p className="mt-1 text-[11px] text-[#9da8bc]">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eius</p>
        <div className="mt-2.5 flex items-center justify-between border-t border-[#2a3344] pt-2.5">
          <span className="text-xs text-[#737f95]">Current Bid</span>
          <span className="text-[30px] font-bold leading-none text-white">{item.bid}</span>
        </div>
      </div>
    </article>
  )
}

function AuctionCard({
  img,
  tag,
  title,
  live,
  countdown,
  bid,
  highlight,
}: {
  img: string
  tag: string
  title: string
  live: boolean
  countdown: string
  bid: string
  highlight?: boolean
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-vault-surface ring-1 ring-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage src={img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
          <span className="rounded-md bg-black/50 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">{tag}</span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            aria-label="Add to favorites"
          >
            <IconHeart className="h-4 w-4" />
          </button>
        </div>
        {highlight && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 p-4 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
            <button
              type="button"
              className="w-full max-w-[200px] rounded-lg bg-white py-2.5 text-sm font-semibold text-vault-bg shadow-lg"
            >
              Place Bid
            </button>
            <button
              type="button"
              className="w-full max-w-[200px] rounded-lg bg-vault-gold py-2.5 text-sm font-semibold text-vault-bg shadow-lg"
            >
              Enter Bid $300
            </button>
          </div>
        )}
        {live && (
          <span className="absolute bottom-3 left-3 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Live Now
          </span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-white">{title}</h3>
        <p className="text-xs text-zinc-400">{countdown}</p>
        <div className="flex items-baseline justify-between border-t border-white/10 pt-3">
          <span className="text-xs text-zinc-500">Current Bid</span>
          <span className="text-sm font-semibold text-vault-gold">{bid}</span>
        </div>
      </div>
    </article>
  )
}

export default function LandingPage() {
  const [heroIndex, setHeroIndex] = useState(0)
  const heroLen = heroSlides.length

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroLen)
    }, 7000)
    return () => window.clearInterval(id)
  }, [heroLen])

  const goHero = (dir: -1 | 1) => {
    setHeroIndex((i) => (i + dir + heroLen) % heroLen)
  }

  const slide = heroSlides[heroIndex]

  const [sportTab, setSportTab] = useState<SportTab>('General')
  const sportsFiltered =
    sportTab === 'General' ? sportsAuctionItems : sportsAuctionItems.filter((item) => item.tab === sportTab)

  return (
    <div className="min-h-screen bg-vault-bg text-white antialiased">
      <header className="sticky top-0 z-50">
        <div className="border-b border-white/5 bg-vault-bg/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
            <Logo />
            <div className="mx-auto hidden max-w-xl flex-1 lg:flex">
              <label className="relative w-full">
                <span className="sr-only">Search</span>
                <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <input
                  type="search"
                  placeholder="Search auctions, categories, sellers..."
                  className="w-full rounded-full border border-white/10 bg-vault-surface py-2.5 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-vault-gold/40 focus:ring-2"
                />
              </label>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button type="button" className="rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white" aria-label="Account">
                <IconUser className="h-5 w-5" />
              </button>
              <button type="button" className="rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white" aria-label="Wishlist">
                <IconHeart className="h-5 w-5" />
              </button>
              <div className="hidden items-center gap-1 border-l border-white/10 pl-3 md:flex">
                {['𝕏', '◎', 'f'].map((c) => (
                  <a
                    key={c}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs text-zinc-400 hover:bg-white/5 hover:text-vault-gold"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-vault-gold">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8" aria-label="Main">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wide text-vault-bg">
                {['Home', 'All Auctions', 'Categories', 'Blog', 'About', 'Contact'].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              <button type="button" className="rounded p-1 text-vault-bg md:hidden" aria-label="Open menu">
                <IconMenu className="h-6 w-6" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]"
        aria-roledescription="carousel"
        aria-label="Featured highlights"
      >
        <div className="absolute inset-0 bg-vault-bg" aria-hidden>
          {heroSlides.map((s, i) => (
            <div
              key={s.image}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === heroIndex ? 'z-0 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              <SafeImage src={s.image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

        <div className="relative z-[2] mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 lg:min-h-[520px] lg:px-8">
          <div key={heroIndex} className="hero-slide-text">
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">{slide.subtitle}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-lg bg-vault-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-vault-bg shadow-lg shadow-vault-gold/20 transition hover:bg-vault-gold-hover"
            >
              Explore Now
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              <IconPlay className="h-4 w-4" />
              Watch Video
            </button>
          </div>

          <div
            className="mt-10 flex items-center justify-center gap-2 sm:absolute sm:bottom-10 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2"
            role="tablist"
            aria-label="Slide indicators"
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === heroIndex}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setHeroIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === heroIndex ? 'w-8 bg-vault-gold' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[3] flex items-center justify-between px-3 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => goHero(-1)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
            aria-label="Previous slide"
          >
            <IconChevron dir="left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goHero(1)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
            aria-label="Next slide"
          >
            <IconChevron dir="right" className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-vault-elevated ring-1 ring-white/10">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-10">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">Discover Rare Finds Ready To Buy</h2>
                <p className="mt-3 text-sm text-zinc-400">Instant purchases on vetted lots — no waiting for the hammer.</p>
                <a
                  href="#"
                  className="mt-8 inline-flex w-fit items-center rounded-xl bg-vault-bg px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-vault-elevated"
                >
                  Explore Now
                </a>
              </div>
              <div className="relative min-h-[220px] md:min-h-0">
                <SafeImage src={promoLeft} alt="" className="h-full min-h-[220px] w-full object-cover md:absolute md:inset-0" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-vault-elevated ring-1 ring-white/10">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-10">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">Shop Collectibles, Antiques & Deals</h2>
                <p className="mt-3 text-sm text-zinc-400">New inventory weekly from estates, galleries, and collectors.</p>
                <a
                  href="#"
                  className="mt-8 inline-flex w-fit items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-vault-bg transition hover:bg-zinc-200"
                >
                  Explore
                </a>
              </div>
              <div className="relative order-1 min-h-[220px] md:order-2 md:min-h-0">
                <SafeImage src={promoRight} alt="" className="h-full min-h-[220px] w-full object-cover md:absolute md:inset-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold tracking-wide text-white sm:text-xl">Featured Item</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <FeaturedItemCard key={item.img + item.timer} item={item} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#7f8899]">
          <button type="button" aria-label="Previous featured items" className="text-vault-gold hover:text-vault-gold-hover">
            ←
          </button>
          <span className="text-vault-gold">+</span>
          <span className="text-vault-gold">+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <button type="button" aria-label="Next featured items" className="text-white hover:text-zinc-300">
            →
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold tracking-wide text-white sm:text-xl">Discover Product Categories</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a key={c.label} href="#" className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] bg-[#172132] ring-1 ring-[#2d3748]">
                <SafeImage src={c.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/25" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center rounded-xl bg-white px-5 py-2 text-sm font-bold text-[#121826] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  Explore
                </span>
              </div>
              <p className="mt-3 text-center text-base font-semibold leading-tight text-white sm:text-xl">{c.label}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-vault-bg py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold tracking-wide text-white sm:text-xl">
            Everything You Need For Smarter Bidding
          </h2>
          <div className="mx-auto mt-5 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-gradient-to-b from-[color:var(--color-vault-feature-card-top)] to-[color:var(--color-vault-feature-card-bottom)] px-5 pb-5 pt-4 text-center shadow-[0_12px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/5"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-vault-gold text-vault-bg">
                  <span className="text-xs font-black">✓</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight text-[color:var(--color-vault-feature-title)]">
                  {f.title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[17rem] text-sm leading-relaxed text-[color:var(--color-vault-feature-body)]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-label="Sports collectibles auction">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-lg font-semibold text-white sm:text-xl lg:max-w-md">Sports Collectibles Items Auction</h2>
          <div
            className="flex flex-wrap gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Auction categories"
          >
            {sportTabs.map((t, idx) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={sportTab === t}
                id={`sport-tab-${idx}`}
                onClick={() => setSportTab(t)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  sportTab === t
                    ? 'bg-vault-gold text-vault-bg'
                    : 'bg-vault-tab-idle text-[#d2d7e0] hover:bg-vault-tab-idle-hover'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="tabpanel"
          id={`sport-panel-${sportTabs.indexOf(sportTab)}`}
          aria-labelledby={`sport-tab-${sportTabs.indexOf(sportTab)}`}
        >
          {sportsFiltered.length === 0 ? (
            <p className="col-span-full text-center text-sm text-zinc-400">No lots in this category yet.</p>
          ) : (
            sportsFiltered.map((item) => (
              <AuctionCard
                key={`${sportTab}-${item.tab}-${item.img}-${item.bid}`}
                img={item.img}
                tag="Auction"
                title="Lorem ipsum dolor sit amet consectetur"
                live={item.live}
                countdown={item.countdown}
                bid={item.bid}
                highlight={false}
              />
            ))
          )}
        </div>
      </section>

      <section className="border-y border-white/5 bg-vault-bg py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-white sm:text-xl">How It Works</h2>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-center">
            {howSteps.map((step, i) => (
              <div key={step.title} className="contents lg:flex lg:items-start">
                <div className="flex flex-col items-center text-center lg:w-52 lg:shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-vault-gold shadow-lg shadow-vault-gold/25">
                    <StepIcon type={step.icon} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-zinc-400 lg:max-w-[13rem]">{step.body}</p>
                </div>
                {i < howSteps.length - 1 && (
                  <div
                    className="hidden h-0 shrink lg:mx-2 lg:mt-10 lg:block lg:min-w-[1.5rem] lg:flex-1 lg:border-t-2 lg:border-dotted lg:border-vault-gold/50"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-white sm:text-xl">Upcoming Events</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="flex gap-4 rounded-xl bg-vault-surface p-4 ring-1 ring-white/10 transition hover:ring-vault-gold/30"
            >
              <SafeImage src={e.img} alt="" className="h-24 w-24 shrink-0 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                {e.live && (
                  <span className="inline-block rounded bg-vault-gold px-2 py-0.5 text-[10px] font-bold uppercase text-vault-bg">
                    Live
                  </span>
                )}
                <h3 className="mt-1 font-semibold leading-snug text-white">{e.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                  <span>{e.date}</span>
                </p>
                <p className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                  <span>{e.time}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-vault-elevated">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                BidVault connects collectors with verified auctions worldwide. Bid smarter with transparent pricing and
                dedicated support.
              </p>
              <form className="mt-6 flex max-w-sm gap-2">
                <label className="sr-only" htmlFor="footer-email">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-vault-bg px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-vault-gold/50"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-vault-gold px-4 font-semibold text-vault-bg transition hover:bg-vault-gold-hover"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
              {[
                {
                  title: 'Quick Links',
                  links: ['Home', 'Auctions', 'Sell', 'Help Center'],
                },
                {
                  title: 'Categories',
                  links: ['Sports', 'Art', 'Jewelry', 'Electronics'],
                },
                {
                  title: 'Account',
                  links: ['Sign In', 'Register', 'Orders', 'Settings'],
                },
                {
                  title: 'Company',
                  links: ['About', 'Careers', 'Press', 'Contact'],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm text-zinc-400 transition hover:text-vault-gold">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} BidVault. All rights reserved.
              <span className="mx-2 text-zinc-600">·</span>
              <Link to="/admin" className="text-vault-gold hover:underline">
                Admin
              </Link>
            </p>
            <div className="flex items-center gap-3 text-zinc-400">
              {['𝕏', 'in', 'f'].map((s) => (
                <a key={s} href="#" className="text-sm hover:text-vault-gold">
                  {s}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 opacity-70">
              {['VISA', 'MC', 'AMEX', 'PP'].map((p) => (
                <span
                  key={p}
                  className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold tracking-wide text-zinc-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
