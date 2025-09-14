import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { ConfigProvider } from '@/contexts/ConfigContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrackerStack - Premium Fireworks & Crackers',
  description: 'Discover the finest collection of fireworks and crackers for all occasions. Premium quality, competitive prices, and safe delivery.',
  keywords: ['fireworks', 'crackers', 'diwali', 'festival', 'celebration'],
  authors: [{ name: 'CrackerStack Team' }],
  openGraph: {
    title: 'CrackerStack - Premium Fireworks & Crackers',
    description: 'Discover the finest collection of fireworks and crackers for all occasions.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConfigProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
