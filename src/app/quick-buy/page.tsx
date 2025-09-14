'use client'

import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Search, Plus, Minus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function QuickBuyPage() {
  const { addToCart, state } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())

  // Get unique brands and categories
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(products.map(p => p.specifications.brand)))
    return ['All Brands', ...uniqueBrands]
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category.name)))
    return ['All Categories', ...uniqueCategories]
  }, [])

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === 'All Brands' || product.specifications.brand === selectedBrand
      const matchesCategory = selectedCategory === 'All Categories' || product.category.name === selectedCategory
      
      return matchesSearch && matchesBrand && matchesCategory
    })
  }, [searchTerm, selectedBrand, selectedCategory])

  // Group products by category
  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: typeof products } = {}
    filteredProducts.forEach(product => {
      const categoryName = product.category.name
      if (!groups[categoryName]) {
        groups[categoryName] = []
      }
      groups[categoryName].push(product)
    })
    return groups
  }, [filteredProducts])

  const handleQuantityChange = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }))
  }

  const handleAddToCart = (product: typeof products[0]) => {
    const quantity = quantities[product.id] || 0
    if (quantity > 0) {
      addToCart(product, quantity)
      setQuantities(prev => ({ ...prev, [product.id]: 0 }))
      setSelectedProducts(prev => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }
  }

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  const handleSelectAll = () => {
    const allProductIds = filteredProducts.map(p => p.id)
    setSelectedProducts(new Set(allProductIds))
  }

  const handleAddAllToCart = () => {
    selectedProducts.forEach(productId => {
      const product = products.find(p => p.id === productId)
      const quantity = quantities[productId] || 0
      if (product && quantity > 0) {
        addToCart(product, quantity)
      }
    })
    setQuantities({})
    setSelectedProducts(new Set())
  }

  const getTotalSelectedAmount = () => {
    return Array.from(selectedProducts).reduce((total, productId) => {
      const quantity = quantities[productId] || 0
      const product = products.find(p => p.id === productId)
      return total + (product ? quantity * product.price : 0)
    }, 0)
  }

  const getTotalSelectedItems = () => {
    return Array.from(selectedProducts).reduce((total, productId) => {
      return total + (quantities[productId] || 0)
    }, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getDiscountPrice = (price: number, originalPrice: number) => {
    return originalPrice > price ? originalPrice : null
  }

  const getDiscountPercentage = (price: number, originalPrice: number) => {
    if (originalPrice <= price) return 0
    return Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Quick Buy</h1>
              <p className="text-gray-600">Add products to cart and proceed to checkout</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {state.totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {/* Search and Filters */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </Card>

        {/* Products Table */}
        <div className="space-y-6">
          {Object.entries(groupedProducts).map(([categoryName, categoryProducts]) => (
            <Card key={categoryName} className="overflow-hidden">
              <div className="bg-gray-100 px-6 py-3">
                <h3 className="text-lg font-semibold text-gray-900">{categoryName}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          checked={selectedProducts.size === filteredProducts.length && filteredProducts.length > 0}
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNO / CODE</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BRAND</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PACK / PIECES</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SELLING PRICE</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QTY</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {categoryProducts.map((product, index) => {
                      const quantity = quantities[product.id] || 0
                      const originalPrice = product.originalPrice || product.price
                      const discountPrice = getDiscountPrice(product.price, originalPrice)
                      const discountPercentage = getDiscountPercentage(product.price, originalPrice)
                      const amount = quantity * product.price

                      return (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedProducts.has(product.id)}
                              onChange={() => handleSelectProduct(product.id)}
                              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="font-medium">{index + 1}</div>
                            <div className="text-gray-500 text-xs">{product.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12">
                                <Image
                                  src={product.images[0]}
                                  alt={product.name}
                                  width={48}
                                  height={48}
                                  className="h-12 w-12 rounded object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.subcategory}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.specifications.brand}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="font-medium">1 Box</div>
                            <div className="text-gray-500 text-xs">1 piece</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {discountPrice && (
                              <div className="text-gray-500 line-through">
                                {formatPrice(discountPrice)}
                              </div>
                            )}
                            <div className="font-medium">{formatPrice(product.price)}</div>
                            {discountPercentage > 0 && (
                              <div className="text-green-600 text-xs">
                                {discountPercentage}% OFF
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleQuantityChange(product.id, -1)}
                                disabled={quantity <= 0}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">{quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleQuantityChange(product.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {formatPrice(amount)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                onClick={() => handleAddToCart(product)}
                                disabled={quantity <= 0}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Add to Cart
                              </Button>
                              {quantity > 0 && (
                                <span className="text-xs text-gray-500">
                                  {quantity} × {formatPrice(product.price)}
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>

        {/* Sticky Add to Cart Footer */}
        {(selectedProducts.size > 0 || state.totalItems > 0) && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">
                    {state.totalItems} items in cart
                    {selectedProducts.size > 0 && (
                      <span className="ml-2 text-red-600">
                        • {getTotalSelectedItems()} selected ({formatPrice(getTotalSelectedAmount())})
                      </span>
                    )}
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Total: {formatPrice(state.totalPrice)}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {selectedProducts.size > 0 && (
                  <Button
                    onClick={handleAddAllToCart}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Add Selected to Cart ({getTotalSelectedItems()})
                  </Button>
                )}
                <Link href="/cart">
                  <Button className="bg-red-600 hover:bg-red-700">
                    View Cart & Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}