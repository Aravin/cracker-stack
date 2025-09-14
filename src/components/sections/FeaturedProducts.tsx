'use client'

import React from 'react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.isFeatured)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated fireworks and crackers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="btn-primary px-8 py-3 rounded-lg font-medium inline-block"
          >
            View All Fireworks
          </a>
        </div>
      </div>
    </section>
  )
}
