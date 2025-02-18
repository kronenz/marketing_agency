import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartMenu from './components/CartMenu'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Shop = React.lazy(() => import('./pages/Shop'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))
const Checkout = React.lazy(() => import('./pages/Checkout'))
const CheckoutSuccess = React.lazy(() => import('./pages/CheckoutSuccess'))
const OrderHistory = React.lazy(() => import('./pages/OrderHistory'))
const Wishlist = React.lazy(() => import('./pages/Wishlist'))

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </Suspense>
          <CartMenu />
          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
