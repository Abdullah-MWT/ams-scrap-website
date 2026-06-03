# AMS Scrap - Premium Website

A world-class, premium website for **AMS Scrap**, a metal recycling and scrap company operating in Dubai & Sharjah, UAE.

**GitHub Repo:** [Abdullah-MWT/ams-scrap-website](https://github.com/Abdullah-MWT/ams-scrap-website)

## 🎯 Project Overview

This is a production-ready, conversion-optimized website built with modern web technologies. It features:

- **Dark industrial aesthetic** with premium bronze and emerald accents
- **Premium typography** (Sora for headlines, Manrope for body text)
- **Advanced animations** with Framer Motion scroll reveals
- **Lead generation system** with quote form and file upload
- **Mobile-optimized** with sticky CTAs and WhatsApp integration
- **SEO-friendly** structure with semantic HTML and metadata
- **Responsive design** that works flawlessly on all devices

## 📊 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Sora + Manrope)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdullah-MWT/ams-scrap-website.git
   cd ams-scrap-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page auto-reloads as you edit files. Start by modifying `src/app/page.tsx`.

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header, Footer, CTAs)
│   ├── globals.css             # Design system (colors, typography)
│   ├── page.tsx                # Homepage (hero, services, testimonials, FAQ)
│   ├── about/
│   │   └── page.tsx            # About page (story, values, operations)
│   └── services/
│       └── page.tsx            # Services page (offerings, support)
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer section
│   ├── Container.tsx           # Layout wrapper
│   ├── SectionHeading.tsx      # Section heading component
│   ├── QuoteForm.tsx           # Lead capture form
│   ├── Reveal.tsx              # Scroll animation
│   ├── FloatingWhatsApp.tsx   # WhatsApp CTA
│   └── StickyMobileCTA.tsx    # Mobile CTA bar
└── lib/
    └── site.ts                 # Site configuration
```

## 🎨 Design System

### Colors
- **Primary:** Bronze (#c9924b) - Premium, trustworthy
- **Background:** Obsidian (#0b0f14) - Dark, professional
- **Secondary:** Emerald (#2b6f6a) - Sustainability
- **Accent:** Lime (#84cc16) - CTAs, highlights

### Typography
- **Headlines:** Sora - Technical, engineered feel
- **Body:** Manrope - High legibility, modern B2B

## 📄 Pages Included

1. **Home** (`/`) - Landing page with all conversion elements
2. **About** (`/about`) - Company story, values, operations
3. **Services** (`/services`) - Service portfolio and support
4. **Contact** - Embedded (WhatsApp, sticky CTA, quote form)

## 🔧 Key Features

### Lead Generation
- Multi-field quote form (name, company, email, phone, material type, quantity, location, images)
- File upload for scrap images
- FloatingWhatsApp button
- Sticky mobile CTA bar

### Advanced Animations
- Scroll-triggered reveals (Framer Motion)
- Smooth hover effects
- Staggered animations

### Performance & SEO
- Semantic HTML structure
- Meta tags and descriptions
- Image optimization ready
- Mobile-first responsive design

## ⚙️ Configuration

All business data in `src/lib/site.ts`:

```typescript
export const siteConfig = {
  name: "AMS Scrap",
  description: "Premium scrap and metal recycling in Dubai & Sharjah",
};

export const contactInfo = {
  phone: "+971 4 XXX XXXX",
  whatsapp: "+971 50 XXX XXXX",
  email: "info@amsscrap.ae",
};
```

**Update with AMS Scrap's actual contact information.**

## 🚢 Deployment to Vercel (Recommended)

### Easiest Way: Vercel GUI

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select the `ams-scrap-website` repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy" → Done! 🎉

Your site will be live at: `https://ams-scrap-website.vercel.app`

### Alternative: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# View live
vercel --prod
```

## 📝 Form Submission Setup

Quote form is currently client-side only. To enable submissions:

### Option 1: Formspree (Simplest)
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Update `src/components/QuoteForm.tsx` to submit to Formspree endpoint

### Option 2: SendGrid
1. Get API key from [SendGrid](https://sendgrid.com)
2. Create API route: `src/app/api/quote/route.ts`
3. Add `SENDGRID_API_KEY` to `.env.local`

### Option 3: Custom Backend
Build your own API and update form endpoint.

## 📧 Environment Variables

Create `.env.local`:

```env
# Form submission service
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/quote
SENDGRID_API_KEY=your_key_here

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXX
```

## 🎯 Next Steps

- [ ] Replace placeholder images with professional scrap/recycling imagery
- [ ] Update contact info in `src/lib/site.ts`
- [ ] Set up form submission backend
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Add Google Analytics
- [ ] Create additional pages (Material specs, Blog, Sustainability)
- [ ] Add JSON-LD schema markup
- [ ] Create sitemap.xml and robots.txt

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Best Practices](https://react.dev/learn)

## 📄 License

Proprietary - AMS Scrap. All rights reserved.

---

**Questions?** Create an issue on [GitHub](https://github.com/Abdullah-MWT/ams-scrap-website/issues)
