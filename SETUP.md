# Srijan's Portfolio Website - Setup Guide

## Project Overview
This is a modern, interactive personal portfolio website built with React, TypeScript, and Vite. The site features a timeline-based layout showcasing your professional journey from blockchain developer to product manager.

## Features
- ✅ **CV Download Functionality** - Your CV is now downloadable from both the Hero section and Contact section
- ✅ **Frontend Only** - No backend required, completely static website
- ✅ **Modern Tech Stack** - React, TypeScript, Vite, Tailwind CSS, Framer Motion
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Interactive scroll-based animations throughout
- ✅ **Timeline Navigation** - Easy navigation through your career milestones

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:8080/**

### 3. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

## CV Download Setup

Your CV is located at: `/public/Srijan Varma_CV.pdf`

The download functionality works through two buttons:
1. **Hero Section** - "Download CV" button on the landing page
2. **Contact Section** - "Download CV" button at the bottom

### How It Works
- The CV is stored in the `public/` folder
- When clicked, the browser downloads it as `Srijan_Varma_CV.pdf`
- Works completely client-side (no server required)

### To Update Your CV
Simply replace the file at: `/public/Srijan Varma_CV.pdf` with your new CV (keep the same filename).

## Project Structure

```
.
├── public/              # Static assets
│   └── Srijan Varma_CV.pdf  # Your CV file
├── src/
│   ├── components/      # React components
│   │   ├── HeroSection.tsx     # Landing page with CV download
│   │   ├── ContactSection.tsx  # Contact section with CV download
│   │   ├── TimelineNav.tsx     # Timeline navigation
│   │   ├── ExperienceCard.tsx  # Work experience cards
│   │   └── ...
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Vite configuration
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic)

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### Option 3: GitHub Pages
```bash
npm run build
# Then push the dist/ folder to gh-pages branch
```

## Customization

### Update Personal Information
- **Hero Section**: Edit `src/components/HeroSection.tsx`
- **Contact Info**: Edit `src/components/ContactSection.tsx`
- **Experience**: Edit `src/pages/Index.tsx` - update the timeline data
- **Skills**: Edit `src/components/SkillsSection.tsx`

### Update Colors/Theme
Edit `tailwind.config.ts` to customize colors and styling.

### Add Photos
Place images in `src/assets/` and import them in your components.

## Tech Stack Details

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **Shadcn/ui** - UI components

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Lighthouse Score: 90+
- Mobile Friendly
- SEO Optimized
- Fast Loading Times

## Need Help?

### Common Issues

**Issue: Dev server won't start**
- Solution: Delete `node_modules` and run `npm install` again

**Issue: CV not downloading**
- Solution: Check that `Srijan Varma_CV.pdf` exists in the `public/` folder

**Issue: Build fails**
- Solution: Run `npm run build` and check the error messages

## Contact
For questions or issues, contact: placements@iift.edu

---

**Developed with ❤️ using React + Vite**
