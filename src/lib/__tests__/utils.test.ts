import {
  formatPrice,
  calculateDiscount,
  formatDate,
  generateSlug,
  validateEmail,
  validatePhone,
  getRandomId,
  capitalizeFirst,
  truncateText
} from '../utils'

describe('Utils', () => {
  describe('formatPrice', () => {
    it('formats price with default currency', () => {
      expect(formatPrice(1000)).toBe('₹1,000')
      expect(formatPrice(1234.56)).toBe('₹1,234.56')
    })

    it('formats price with custom currency', () => {
      expect(formatPrice(1000, '$')).toBe('$1,000')
      expect(formatPrice(1000, '€')).toBe('€1,000')
    })
  })

  describe('calculateDiscount', () => {
    it('calculates discount percentage correctly', () => {
      expect(calculateDiscount(1000, 800)).toBe(20)
      expect(calculateDiscount(500, 400)).toBe(20)
      expect(calculateDiscount(200, 150)).toBe(25)
    })

    it('handles zero discount', () => {
      expect(calculateDiscount(1000, 1000)).toBe(0)
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15')
      expect(formatDate(date)).toBe('15 January 2024')
    })
  })

  describe('generateSlug', () => {
    it('generates slug from text', () => {
      expect(generateSlug('Golden Sparklers')).toBe('golden-sparklers')
      expect(generateSlug('Rocket Launcher Deluxe!')).toBe('rocket-launcher-deluxe')
      expect(generateSlug('Test & Sample')).toBe('test-sample')
    })

    it('handles empty string', () => {
      expect(generateSlug('')).toBe('')
    })
  })

  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.in')).toBe(true)
      expect(validateEmail('test123@test.org')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('validatePhone', () => {
    it('validates correct phone numbers', () => {
      expect(validatePhone('9876543210')).toBe(true)
      expect(validatePhone('9123456789')).toBe(true)
      expect(validatePhone('98765 43210')).toBe(true)
    })

    it('rejects invalid phone numbers', () => {
      expect(validatePhone('1234567890')).toBe(false) // starts with 1
      expect(validatePhone('987654321')).toBe(false) // too short
      expect(validatePhone('98765432101')).toBe(false) // too long
      expect(validatePhone('')).toBe(false)
    })
  })

  describe('getRandomId', () => {
    it('generates random ID', () => {
      const id1 = getRandomId()
      const id2 = getRandomId()
      
      expect(id1).toBeDefined()
      expect(id2).toBeDefined()
      expect(id1).not.toBe(id2)
      expect(id1.length).toBe(9)
    })
  })

  describe('capitalizeFirst', () => {
    it('capitalizes first letter', () => {
      expect(capitalizeFirst('hello')).toBe('Hello')
      expect(capitalizeFirst('WORLD')).toBe('World')
      expect(capitalizeFirst('test')).toBe('Test')
    })
  })

  describe('truncateText', () => {
    it('truncates text correctly', () => {
      expect(truncateText('Hello world', 5)).toBe('Hello...')
      expect(truncateText('Short', 10)).toBe('Short')
      expect(truncateText('This is a long text', 15)).toBe('This is a long...')
    })
  })
})
