'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { SiteConfig, ThemeConfig } from '@/types'

const defaultConfig: SiteConfig = {
  siteName: 'CrackerStack',
  siteDescription: 'Premium Fireworks & Crackers for Every Celebration',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
  theme: {
    primaryColor: '#dc2626',
    secondaryColor: '#f59e0b',
    accentColor: '#ef4444',
    backgroundColor: '#ffffff',
    textColor: '#111827',
    fontFamily: 'Inter',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  contact: {
    email: 'info@crackerstack.com',
    phone: '+91 9876543210',
    address: {
      street: '123 Fireworks Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    workingHours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
  },
  social: {
    facebook: 'https://facebook.com/crackerstack',
    instagram: 'https://instagram.com/crackerstack',
    twitter: 'https://twitter.com/crackerstack',
    youtube: 'https://youtube.com/crackerstack',
    whatsapp: 'https://wa.me/919876543210'
  },
  seo: {
    title: 'CrackerStack - Premium Fireworks & Crackers',
    description: 'Discover the finest collection of fireworks and crackers for all occasions. Premium quality, competitive prices, and safe delivery.',
    keywords: ['fireworks', 'crackers', 'diwali', 'festival', 'celebration', 'premium'],
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image'
  },
  features: {
    enableReviews: true,
    enableWishlist: true,
    enableCompare: true,
    enableQuickView: true,
    enableLiveChat: true,
    enableNewsletter: true,
    enableSocialLogin: true
  }
}

interface ConfigContextType {
  config: SiteConfig
  updateConfig: (updates: Partial<SiteConfig>) => void
  updateTheme: (theme: Partial<ThemeConfig>) => void
  resetConfig: () => void
}

const ConfigContext = createContext<ConfigContextType | null>(null)

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig)

  // Load config from localStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('cracker-config')
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig)
        setConfig({ ...defaultConfig, ...parsedConfig })
      } catch (error) {
        console.error('Error loading config from localStorage:', error)
      }
    }
  }, [])

  // Save config to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cracker-config', JSON.stringify(config))
  }, [config])

  const updateConfig = (updates: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }

  const updateTheme = (theme: Partial<ThemeConfig>) => {
    setConfig(prev => ({
      ...prev,
      theme: { ...prev.theme, ...theme }
    }))
  }

  const resetConfig = () => {
    setConfig(defaultConfig)
  }

  return (
    <ConfigContext.Provider
      value={{
        config,
        updateConfig,
        updateTheme,
        resetConfig
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return context
}
