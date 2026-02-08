# Lounge Hair Studio by Chante

A modern, responsive website for Lounge Hair Studio - a luxury hair salon in Silverdale, Auckland.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with hamburger menu for mobile devices
- **Modern UI**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Service Showcase**: Comprehensive service listings with expandable categories
- **Gallery**: Professional image gallery showcasing salon work
- **Contact Information**: Location, phone, hours, and online booking integration
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📋 Project Structure

```
lounge-hair-studio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Static images (logo, hero, gallery)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd lounge-hair-studio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 📁 Key Files

### `app/page.tsx`
Main page component containing:
- Navigation bar with mobile hamburger menu
- Hero section with background image
- Services section with expandable categories
- Gallery section with image grid
- Contact section with location, phone, hours
- Footer with copyright

### `app/layout.tsx`
Root layout with:
- Metadata configuration (title, description, OG tags)
- Font imports
- Global providers

### `public/images/`
Static assets:
- `logo.png` - Company logo
- `hero.jpg` - Hero section background
- `gallery/` - Gallery images (img1.jpg through img9.jpg)

## 🎯 Design System

### Colors
- **Cream Background**: `#ECEBE0`
- **Charcoal Text**: `#2C2C2C`
- **Rose Gold Accent**: `#C9A876`
- **White**: `#FFFFFF`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lora (serif)
- **UI**: System fonts

### Responsive Breakpoints
- Mobile: < 768px (md: breakpoint)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📱 Mobile Features

- **Hamburger Menu**: Replaces "BOOK NOW" button on mobile
- **Navigation Drawer**: Displays Services, Gallery, Contact links
- **Responsive Images**: Optimized for all screen sizes
- **Touch-Friendly**: 44px+ touch targets

## 🔗 External Links

- **Booking System**: Timely integration for online appointments
- **Social Media**:
  - Facebook: [Lounge Hair Studio](https://www.facebook.com/people/Lounge-Hair-Studio/61580304054980/)
  - Instagram: [@_loungehairstudio_](https://www.instagram.com/_loungehairstudio_/)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"

3. **Custom Domain**:
   - In Vercel project settings, go to "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables

Create `.env.local` in the project root (not committed to git):

```bash
# Example - add any API keys or configuration needed
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

## 📝 Content Management

### Services
Edit services in `app/page.tsx` - `servicesData` array:
```typescript
const servicesData = [
  {
    category: 'Service Category',
    services: [
      { name: 'Service Name', price: '$XX' },
      // ...
    ],
  },
  // ...
]
```

### Gallery Images
Update gallery images in `app/page.tsx` - `galleryImages` array:
```typescript
const galleryImages = [
  '/images/gallery/img1.jpg',
  // ...
]
```

### Contact Information
Update contact details in the Contact section of `app/page.tsx`:
- Address
- Phone number
- Opening hours

## 🔧 Customization

### Colors
Update the `colors` object in `app/page.tsx`:
```typescript
const colors = {
  cream: '#ECEBE0',
  charcoal: '#2C2C2C',
  roseGold: '#C9A876',
  white: '#FFFFFF',
}
```

### Fonts
Fonts are configured in `app/layout.tsx`. To change:
1. Update font imports
2. Update Tailwind config if needed
3. Update CSS class names in components

### Logo & Images
Replace images in `/public/images/`:
- `logo.png` - Company logo
- `hero.jpg` - Hero background
- `gallery/img*.jpg` - Gallery images

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart dev server
npm run dev
```

### Images Not Loading
- Verify images exist in `/public/images/`
- Check file paths in code match actual filenames
- Ensure images are in supported formats (PNG, JPG, JPEG)

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
# Try building again
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is proprietary and confidential.

## 👤 Author

Built for Lounge Hair Studio by Chante

---

**Last Updated**: February 2026
**Version**: 1.0.0
