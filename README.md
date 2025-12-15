# Super Shield - Heat Free Sun

A modern, animated website for Super Shield automotive window films, vinyl wraps, and paint protection film services.

## Features

- 🎨 Modern dark theme with animated UI
- 📱 Fully responsive design
- ⚡ Built with Next.js 16, React 19, and TypeScript
- 🎭 Smooth animations using Framer Motion
- 🎯 Multi-page navigation (Home, About, Products, Technology, Warranty, Gallery, Contact)
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

📖 **Detailed Guide**: See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for step-by-step instructions.

### Quick Start (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New..." → "Project"**
3. **Import your repository**: Select `raghavsukhadia/super-shield`
4. **Click "Deploy"** - Vercel auto-detects Next.js settings
5. **Done!** Your site will be live in 2-3 minutes

### Alternative: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Automatic Deployments

- ✅ Every push to `main` branch = Automatic production deployment
- ✅ Pull requests = Preview deployments for testing
- ✅ Zero configuration needed!

## Project Structure

```
super-shield/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── BackgroundGlow.tsx
│   │   ├── CarImage.tsx
│   │   ├── Logo.tsx
│   │   ├── Pill.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── Stat.tsx
│   │   ├── ProductCard.tsx
│   │   └── Metric.tsx
│   ├── constants/           # Shared constants and data
│   │   └── index.ts         # Products, nav links, contact info, etc.
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared interfaces and types
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper functions
│   ├── about/               # About page
│   ├── products/            # Products page
│   ├── technology/          # Technology page
│   ├── warranty/            # Warranty page
│   ├── gallery/             # Gallery page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/                  # Static assets
│   ├── images/              # Image assets
│   │   ├── cars/            # Car images
│   │   └── products/        # Product images
│   └── logo/                # Logo files
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## Customization

### Update Contact Information

Edit `app/constants/index.ts` to update:
- Contact address (`CONTACT_INFO`)
- Company information (`COMPANY_INFO`)
- Navigation links (`NAV_LINKS`)

### Update Products

Edit `app/constants/index.ts` to modify:
- Product list (`PRODUCTS`)
- Product specifications, descriptions, and highlights

### Add Gallery Images

1. Add images to `public/images/cars/` or `public/images/products/`
2. Follow the naming conventions in the README files in those directories

### Update Brand Name

The brand name "SUPER SHIELD" is centralized in:
- `app/constants/index.ts` (`COMPANY_INFO`)
- `app/layout.tsx` (metadata)

### Code Organization

- **Types**: All TypeScript interfaces are in `app/types/index.ts`
- **Constants**: All shared data is in `app/constants/index.ts`
- **Utilities**: Helper functions are in `app/lib/utils.ts`
- **Components**: Reusable UI components are in `app/components/`

## Environment Variables

No environment variables are required for basic deployment. 

For future enhancements, you may want to add:
- Email service API keys (for contact form)
- WhatsApp API credentials (for WhatsApp integration)
- Analytics IDs (Google Analytics, etc.)

See `.env.example` for reference (create `.env.local` for local development).

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## License

© 2024 Super Shield. All rights reserved.
