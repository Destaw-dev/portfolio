# Portfolio Website

A modern, professional developer portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with SaaS-style aesthetics
- 🌓 Dark and light mode support
- 📱 Fully responsive (mobile-first design)
- ⚡ Optimized performance with Next.js App Router
- 🎭 Smooth animations and hover effects
- ♿ Accessible UI components
- 🔍 SEO-friendly metadata

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name and headline
2. **About Section**: Edit `components/About.tsx` to update your bio
3. **Projects**: Edit the `projects` array in `components/Projects.tsx`
4. **Contact Links**: Update social links in `components/Contact.tsx`
5. **Tech Stack**: Modify `techCategories` in `components/TechStack.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in each component

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

The site will be live at `your-project.vercel.app`

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   └── ThemeProvider.tsx
├── public/
└── ...config files
```

## License

See LICENSE file for details.
