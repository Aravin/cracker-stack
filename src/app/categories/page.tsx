'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { categories } from '@/data/products'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fireworks and crackers organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="card-hover group cursor-pointer h-full">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-t-lg flex items-center justify-center group-hover:from-red-200 group-hover:to-orange-200 transition-all duration-300">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-3xl font-bold">
                          {category.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                      Browse Products
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the perfect fireworks for your celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary px-6 py-3 rounded-lg font-medium">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="btn-secondary px-6 py-3 rounded-lg font-medium">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
