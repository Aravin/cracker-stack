'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  return (
    <Card className="card-hover group cursor-pointer">
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
            <Image
              src={product.images[0] || '/images/placeholder.jpg'}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                New
              </span>
            )}
            {product.isOnSale && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {product.discountPercentage}% OFF
              </span>
            )}
            {!product.inStock && (
              <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 rounded-full"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 rounded-full"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="text-sm">
              {product.inStock ? (
                <span className="text-green-600">
                  In Stock ({product.stockQuantity} available)
                </span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock || isInCart(product.id)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
          </Button>
          
          <Button variant="outline" className="w-full">
            Quick View
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
