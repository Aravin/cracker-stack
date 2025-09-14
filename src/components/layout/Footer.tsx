'use client'

import React from 'react'
import Link from 'next/link'
import { useConfig } from '@/contexts/ConfigContext'

const footerLinks = {
  products: [
    { name: 'Sparklers', href: '/categories/sparklers' },
    { name: 'Rockets', href: '/categories/rockets' },
    { name: 'Flower Pots', href: '/categories/flower-pots' },
    { name: 'Ground Spinners', href: '/categories/ground-spinners' },
    { name: 'Fountains', href: '/categories/fountains' },
    { name: 'Crackers', href: '/categories/crackers' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

export default function Footer() {
  const { config } = useConfig()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">
                {config.siteName}
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {config.siteDescription}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 {config.contact.phone}</p>
              <p>✉️ {config.contact.email}</p>
              <p>📍 {config.contact.address.street}, {config.contact.address.city}</p>
              <p>🕒 {config.contact.workingHours}</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest offers and new product launches
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {config.social.facebook && (
                <a
                  href={config.social.facebook}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  📘 Facebook
                </a>
              )}
              {config.social.instagram && (
                <a
                  href={config.social.instagram}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  📷 Instagram
                </a>
              )}
              {config.social.twitter && (
                <a
                  href={config.social.twitter}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  🐦 Twitter
                </a>
              )}
              {config.social.youtube && (
                <a
                  href={config.social.youtube}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  📺 YouTube
                </a>
              )}
              {config.social.whatsapp && (
                <a
                  href={config.social.whatsapp}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  💬 WhatsApp
                </a>
              )}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 {config.siteName}. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-4 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-400">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
