# CrackerStack - Dynamic Fireworks & Crackers E-commerce Website

A modern, dynamic, and configurable e-commerce website for fireworks and crackers built with Next.js, TypeScript, and Tailwind CSS. This platform specializes in premium fireworks, crackers, sparklers, and celebration products for festivals like Diwali, New Year, and other special occasions.

## 🎆 Project Context & AI Instructions

**IMPORTANT FOR AI ASSISTANTS:** This is a **fireworks and crackers e-commerce website** called "CrackerStack". When working on this project:

- **Context**: Fireworks, crackers, sparklers, celebration products for festivals
- **Target Audience**: Customers buying fireworks for Diwali, New Year, weddings, celebrations
- **Product Categories**: Sparklers, Rockets, Flower Pots, Ground Spinners, Fountains, Traditional Crackers
- **Language**: Use "fireworks", "crackers", "celebration products" - NOT generic "shop" or "store" terms
- **Safety Focus**: Emphasize safety, quality, and responsible use of fireworks
- **Cultural Context**: Indian festivals, family celebrations, traditional crackers
- **Future Development**: Always maintain this fireworks/crackers context in all features, components, and documentation

## 🚀 Features

### Core Features
- **Dynamic Product Management** - Easy to add, edit, and manage fireworks products
- **Shopping Cart** - Full cart functionality with local storage persistence for bulk orders
- **Responsive Design** - Mobile-first design that works on all devices
- **TypeScript Support** - Full type safety throughout the application
- **Testing** - Comprehensive test suite with Jest and React Testing Library

### Fireworks E-commerce Features
- **Fireworks & Crackers Catalog** - Comprehensive product listings with filtering and sorting
- **Category-based Organization** - Sparklers, Rockets, Flower Pots, Ground Spinners, Fountains, Traditional Crackers
- **Shopping Cart** - Full cart functionality with quantity management for bulk fireworks orders
- **Wishlist** - Save favorite fireworks for later purchase
- **Advanced Search** - Find specific fireworks by name, category, or features
- **User Reviews & Ratings** - Customer feedback system for fireworks quality assurance
- **Festival-specific Collections** - Diwali, New Year, and seasonal fireworks collections
- **Safety Information** - Product safety ratings and usage guidelines
- **Age-appropriate Filtering** - Filter fireworks by age group and safety level

### Customization Features
- **Theme Configuration** - Customizable colors, fonts, and styling to match brand
- **Site Configuration** - Easy to modify site name, description, and contact info
- **Feature Flags** - Enable/disable features as needed
- **Admin Panel** - Manage fireworks products, orders, and site settings
- **Festival Themes** - Seasonal theme switching for different celebrations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI
- **State Management**: React Context API
- **Testing**: Jest + React Testing Library
- **Package Manager**: Yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cracker-stack
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Fireworks products page
│   └── categories/        # Fireworks categories page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── products/         # Fireworks product components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── contexts/             # React contexts
│   ├── CartContext.tsx   # Shopping cart context
│   └── ConfigContext.tsx # Site configuration context
├── data/                 # Static data and mock data
│   └── products.ts       # Fireworks product data
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   └── __tests__/        # Utility tests
├── types/                # TypeScript type definitions
│   └── index.ts          # Main type definitions
└── hooks/                # Custom React hooks
```

## 🎨 Customization

### Theme Configuration
The website supports extensive customization through the configuration system:

```typescript
// Update theme colors for fireworks brand
const { updateTheme } = useConfig()
updateTheme({
  primaryColor: '#dc2626',    // Fireworks red
  secondaryColor: '#f59e0b',  // Celebration orange
  accentColor: '#ef4444',     // Bright red accent
  // ... other theme options
})
```

### Site Configuration
Modify site-wide settings for fireworks business:

```typescript
// Update site information
const { updateConfig } = useConfig()
updateConfig({
  siteName: 'CrackerStack',
  siteDescription: 'Premium Fireworks & Crackers for Every Celebration',
  contact: {
    email: 'info@crackerstack.com',
    phone: '+91 9876543210',
    address: {
      street: '123 Fireworks Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    }
  }
})
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+) - Easy fireworks browsing on phones
- Tablets (768px+) - Comfortable product viewing
- Desktop (1024px+) - Full-featured fireworks shopping
- Large screens (1440px+) - Premium display experience

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization for fireworks photos
- **Code Splitting**: Automatic code splitting for optimal loading

## 🔒 Security

- TypeScript for type safety
- Input validation and sanitization
- Secure cart management for fireworks orders
- XSS protection
- CSRF protection
- Age verification for restricted fireworks

## 🎆 Fireworks-Specific Features

### Product Categories
- **Sparklers** - Golden, silver, and colored sparklers
- **Rockets** - High-flying rockets with spectacular displays
- **Flower Pots** - Ground-based colorful displays
- **Ground Spinners** - Spinning ground fireworks
- **Fountains** - Cascading fountain displays
- **Traditional Crackers** - Classic firecrackers and thunder crackers

### Safety Features
- Age-appropriate product filtering
- Safety rating system
- Usage guidelines and warnings
- Responsible fireworks messaging

### Festival Integration
- Diwali collections
- New Year celebrations
- Wedding fireworks
- Seasonal promotions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-fireworks-feature`)
3. Commit your changes (`git commit -m 'Add amazing fireworks feature'`)
4. Push to the branch (`git push origin feature/amazing-fireworks-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for the accessible component primitives

## 📞 Support

For support, email info@crackerstack.com or join our Slack channel.

---

**Built with ❤️ by the CrackerStack Team**

*Lighting up celebrations, one firework at a time!* 🎆✨