'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/contexts/CartContext'
import { useConfig } from '@/contexts/ConfigContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const categories = [
  { name: 'Sparklers', href: '/categories/sparklers' },
  { name: 'Rockets', href: '/categories/rockets' },
  { name: 'Flower Pots', href: '/categories/flower-pots' },
  { name: 'Ground Spinners', href: '/categories/ground-spinners' },
  { name: 'Fountains', href: '/categories/fountains' },
  { name: 'Crackers', href: '/categories/crackers' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state: cartState } = useCart()
  const { config } = useConfig()

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>📞 {config.contact.phone}</span>
            <span>✉️ {config.contact.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>🚚 Free shipping on orders above ₹1000</span>
            <div className="flex items-center space-x-2">
              <span>Follow us:</span>
              {config.social.facebook && (
                <a href={config.social.facebook} className="hover:text-primary">
                  📘
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} className="hover:text-primary">
                  📷
                </a>
              )}
              {config.social.whatsapp && (
                <a href={config.social.whatsapp} className="hover:text-primary">
                  💬
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold gradient-text">
              {config.siteName}
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for fireworks, crackers..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartState.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartState.totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for fireworks, crackers..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="text-sm text-gray-600 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
