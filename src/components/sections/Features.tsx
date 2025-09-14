'use client'

import React from 'react'
import { Shield, Truck, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '100% Safe & Tested',
    description: 'All our products undergo rigorous safety testing and meet international standards.'
  },
  {
    icon: Truck,
    title: 'Fast & Free Delivery',
    description: 'Free shipping on orders above ₹1000. Same-day delivery available in select areas.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We source only the finest materials and work with trusted manufacturers.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is always ready to help with any questions or concerns.'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CrackerStack?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing you with the best fireworks shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
