'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-r from-red-500 to-orange-500">
        <div className="container">
          <div className="text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Thank You for Subscribing!</h2>
            <p className="text-xl opacity-90">
              You&apos;ll receive our latest offers and product updates via email.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-r from-red-500 to-orange-500">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Offers
            </h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter and be the first to know about new products, 
              special discounts, and exclusive deals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-gray-900"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">🎆</div>
              <h3 className="font-semibold mb-1">New Products</h3>
              <p className="text-sm opacity-90">Latest arrivals every week</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">💰</div>
              <h3 className="font-semibold mb-1">Exclusive Deals</h3>
              <p className="text-sm opacity-90">Special discounts for subscribers</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">📧</div>
              <h3 className="font-semibold mb-1">No Spam</h3>
              <p className="text-sm opacity-90">Unsubscribe anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
