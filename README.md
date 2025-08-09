# Rodium - Where AI Meets Talent

A premium, dark-themed marketing website for Rodium — an AI-powered freelancer–client matchmaking platform under Xenophormic Corp.

## 🚀 Features

- **Dark Theme Design**: Premium dark mode with glassmorphism accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Glassmorphic UI**: Modern glassmorphism design with backdrop blur effects
- **SEO Optimized**: Meta tags and structured content for search engines
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
rodium-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with main CTA
│   ├── HowItWorks.tsx       # 3-step process explanation
│   ├── ForClients.tsx       # Benefits for clients
│   ├── ForFreelancers.tsx   # Benefits for freelancers
│   ├── CaseStudies.tsx      # Success stories showcase
│   ├── About.tsx            # About Rodium section
│   ├── FinalCTA.tsx         # Final call-to-action section
│   └── Footer.tsx           # Footer with links and contact
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rodium-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Accent**: Teal (#06b6d4 to #0891b2)
- **Dark**: Rich dark palette (#0f172a to #020617)
- **Glass**: Semi-transparent whites with backdrop blur

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)
- **Accent Text**: Gradient text effects

### Components
- **Glass Cards**: Semi-transparent backgrounds with blur effects
- **Hover Animations**: Scale, color, and shadow transitions
- **Scroll Animations**: Fade-in and slide-up effects
- **Responsive Grid**: Flexible layouts for all screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: { /* Blue variants */ },
  accent: { /* Teal variants */ },
  dark: { /* Dark theme variants */ }
}
```

### Animations
Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'float': 'float 6s ease-in-out infinite'
}
```

### Content
Update content in individual component files:
- Hero section: `components/Hero.tsx`
- Benefits: `components/ForClients.tsx` and `components/ForFreelancers.tsx`
- Case studies: `components/CaseStudies.tsx`
- About section: `components/About.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure build settings

### Static Hosting
1. Build: `npm run build`
2. Upload `out` folder to your hosting provider

## 📄 License

This project is proprietary software owned by Xenophormic Corp.

## 🤝 Support

For questions or support, contact:
- Email: hello@rodium.ai
- Instagram: [@rodium.ai](https://instagram.com/rodium.ai)
- LinkedIn: [Rodium AI](https://linkedin.com/company/rodium-ai)

---

**An Xenophormic Corp. Non-Creation**
