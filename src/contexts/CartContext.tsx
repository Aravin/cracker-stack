'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Cart, CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  totalDiscount: number
  shippingCost: number
  tax: number
  finalTotal: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getItemQuantity: (productId: string) => number
  isInCart: (productId: string) => boolean
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload
      const existingItem = state.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        return calculateTotals({ ...state, items: updatedItems })
      } else {
        const newItem: CartItem = {
          product,
          quantity,
          selectedVariants: {}
        }
        return calculateTotals({
          ...state,
          items: [...state.items, newItem]
        })
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => item.product.id !== action.payload.productId
      )
      return calculateTotals({ ...state, items: updatedItems })
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId } })
      }
      
      const updatedItems = state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
      return calculateTotals({ ...state, items: updatedItems })
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
        totalDiscount: 0,
        shippingCost: 0,
        tax: 0,
        finalTotal: 0
      }
    
    case 'LOAD_CART':
      return action.payload
    
    default:
      return state
  }
}

const calculateTotals = (state: CartState): CartState => {
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  )
  const totalDiscount = state.items.reduce((sum, item) => {
    const discount = item.product.originalPrice 
      ? (item.product.originalPrice - item.product.price) * item.quantity
      : 0
    return sum + discount
  }, 0)
  
  const shippingCost = totalPrice > 1000 ? 0 : 50 // Free shipping above ₹1000
  const tax = Math.round(totalPrice * 0.18) // 18% GST
  const finalTotal = totalPrice + shippingCost + tax - totalDiscount
  
  return {
    ...state,
    totalItems,
    totalPrice,
    totalDiscount,
    shippingCost,
    tax,
    finalTotal
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  totalDiscount: 0,
  shippingCost: 0,
  tax: 0,
  finalTotal: 0
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cracker-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cracker-cart', JSON.stringify(state))
  }, [state])

  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (productId: string): number => {
    const item = state.items.find(item => item.product.id === productId)
    return item ? item.quantity : 0
  }

  const isInCart = (productId: string): boolean => {
    return state.items.some(item => item.product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
