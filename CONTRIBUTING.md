# Contributing to StarPath

This document contains information for developers who want to contribute to or run the StarPath project locally.

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/RocketMobster/starpath.git
cd starpath
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `src/app` - Next.js App Router pages
- `src/components/lcars` - LCARS UI components
- `src/components/destinations` - Destination-related components
- `src/data` - Data sources and utilities
- `src/types` - TypeScript type definitions
- `public` - Static assets

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
