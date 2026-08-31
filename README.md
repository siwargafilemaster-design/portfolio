# Edi Susilo — Developer Portfolio

My personal developer portfolio. **Live:** https://edisusilo-portfolio.vercel.app

Self-taught full-stack developer from Karanganyar, Central Java. This site showcases real, deployed applications I've built — used by real neighborhoods, a mosque, and a heritage craft business.

## Tech stack
- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity (embedded Studio at `/studio`) — content editable without touching code
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel

## Features
- Content-driven: projects, about, skills & contact managed in Sanity
- Video demos in a phone frame with a click-to-zoom player
- Smooth scroll & scroll-reveal animations
- Responsive, accessible, mobile-first

## Run locally
```bash
npm install
npm run dev
```
Create a `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

## Tests
```bash
npm test
```
