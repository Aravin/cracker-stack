import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../products/ProductCard'
import { CartProvider } from '../../contexts/CartContext'
import { ConfigProvider } from '../../contexts/ConfigContext'
import { products } from '../../data/products'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockedImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockedLink({ children, href, ...props }: any) {
    return <a href={href} {...props}>{children}</a>
  }
})

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </ConfigProvider>
)

describe('ProductCard', () => {
  const mockProduct = products[0]

  it('renders product information correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument()
    expect(screen.getByText('₹299')).toBeInTheDocument()
    expect(screen.getByText('₹399')).toBeInTheDocument()
  })

  it('displays sale badge when product is on sale', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    expect(screen.getByText('25% OFF')).toBeInTheDocument()
  })

  it('displays new badge when product is new', () => {
    const newProduct = { ...mockProduct, isNew: true }
    render(
      <TestWrapper>
        <ProductCard product={newProduct} />
      </TestWrapper>
    )

    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('shows out of stock when product is not in stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false }
    render(
      <TestWrapper>
        <ProductCard product={outOfStockProduct} />
      </TestWrapper>
    )

    expect(screen.getAllByText('Out of Stock')).toHaveLength(2)
  })

  it('disables add to cart button when out of stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false }
    render(
      <TestWrapper>
        <ProductCard product={outOfStockProduct} />
      </TestWrapper>
    )

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    expect(addToCartButton).toBeDisabled()
  })

  it('calls addToCart when add to cart button is clicked', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(addToCartButton)

    // The button text should change to "Added to Cart"
    expect(screen.getByText('Added to Cart')).toBeInTheDocument()
  })

  it('displays rating stars correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    // Check that rating count is displayed
    expect(screen.getByText('(124)')).toBeInTheDocument()
  })

  it('shows stock quantity when in stock', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    expect(screen.getByText('In Stock (50 available)')).toBeInTheDocument()
  })
})
