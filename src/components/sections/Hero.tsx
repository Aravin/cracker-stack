'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Shield, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Light Up Your
                <span className="gradient-text block">Celebrations</span>
                with Premium Fireworks
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our exclusive collection of high-quality fireworks and crackers. 
                Safe, reliable, and spectacular for Diwali, New Year, and every celebration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Fireworks
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Categories
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Safe & Tested</h3>
                  <p className="text-sm text-gray-600">Quality assured</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Same day available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                  <p className="text-sm text-gray-600">Best materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 animate-pulse" />
                  <h2 className="text-3xl font-bold mb-2">Premium Fireworks</h2>
                  <p className="text-xl opacity-90">Light up the sky</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-10"></div>
      </div>
    </section>
  )
}
