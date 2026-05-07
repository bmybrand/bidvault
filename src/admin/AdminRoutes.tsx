import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { DashboardPage } from './pages/DashboardPage'
import { AuctionsPage } from './pages/AuctionsPage'
import { ListingsPage } from './pages/ListingsPage'
import { OrdersPage } from './pages/OrdersPage'
import { UsersPage } from './pages/UsersPage'
import { SettingsPage } from './pages/SettingsPage'
import { AdminPlaceholderPage } from './pages/AdminPlaceholderPage'

export function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="auctions" element={<AuctionsPage />} />
        <Route path="products" element={<ListingsPage />} />
        <Route path="estate-sales" element={<ListingsPage />} />
        <Route path="bids" element={<AdminPlaceholderPage title="Bids" />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="payments" element={<AdminPlaceholderPage title="Payments" />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="shipping" element={<AdminPlaceholderPage title="Shipping" />} />
        <Route path="ai-tools" element={<AdminPlaceholderPage title="AI Tools" />} />
        <Route path="analytics" element={<AdminPlaceholderPage title="Analytics" />} />
        <Route path="listings" element={<ListingsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
