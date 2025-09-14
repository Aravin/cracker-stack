'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Amazing quality fireworks! The Golden Sparklers were perfect for our Diwali celebration. Fast delivery and excellent customer service.',
    image: '/images/testimonials/rajesh.jpg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'The Rocket Launcher Deluxe was spectacular! My kids loved it and it was very safe to use. Highly recommended!',
    image: '/images/testimonials/priya.jpg'
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Great variety of products and competitive prices. The Rainbow Flower Pot added beautiful colors to our garden party.',
    image: '/images/testimonials/amit.jpg'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'Excellent customer support and fast delivery. The Fountain of Joy was perfect for our indoor celebration.',
    image: '/images/testimonials/sneha.jpg'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Premium quality products at reasonable prices. The Thunder Crackers were exactly what we needed for our festival.',
    image: '/images/testimonials/vikram.jpg'
  },
  {
    id: 6,
    name: 'Anita Desai',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Safe and reliable fireworks for the whole family. The Spinning Wheel Delight was a hit with everyone!',
    image: '/images/testimonials/anita.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300" />
                  <p className="text-gray-700 italic pl-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.8</div>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
