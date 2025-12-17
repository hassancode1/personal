# Hassan Iliyasu - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my work as a Software Engineer specializing in full-stack development.

## About This Project

This portfolio is built using Next.js, a powerful React framework that enables server-side rendering, static site generation, and many other features out of the box. Next.js provides an excellent developer experience with features like:

- **App Router** - Modern routing system with layouts and nested routes
- **Server Components** - Improved performance with server-side rendering
- **Image Optimization** - Automatic image optimization and lazy loading
- **Built-in CSS Support** - Support for CSS Modules, Sass, and CSS-in-JS
- **TypeScript Support** - First-class TypeScript support
- **API Routes** - Full-stack capabilities with API endpoints

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Modern component library
- **MDX** - Markdown with JSX for blog posts
- **Vercel** - Deployment and hosting platform

## Why Next.js?

Next.js was chosen for this portfolio because it offers:

1. **Performance** - Automatic code splitting and optimization
2. **SEO-Friendly** - Server-side rendering for better search engine visibility
3. **Developer Experience** - Hot reloading, TypeScript support, and great tooling
4. **Scalability** - Easy to scale from simple sites to complex applications
5. **Deployment** - Seamless deployment with Vercel and other platforms

## Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/hassancode1/personal.git
   cd personal
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Next.js Features Used

- **App Router** - Modern file-based routing system
- **Server Components** - Improved performance with server-side rendering
- **Image Component** - Optimized image loading and performance
- **Metadata API** - SEO optimization with dynamic metadata
- **Static Generation** - Pre-rendered pages for better performance

## Configuration

The project uses configuration files in the `src/config` directory for easy customization:

- `About.tsx` - About section content
- `Contact.tsx` - Contact form settings
- `Experience.tsx` - Work experience details
- `Footer.tsx` - Footer links and content
- `Gears.tsx` - Setup/gear section
- `Hero.tsx` - Hero section content
- `Meta.tsx` - SEO and metadata
- `Navbar.tsx` - Navigation links
- `Projects.tsx` - Project showcase settings
- `Quote.ts` - Random quotes configuration
- `Resume.ts` - Resume section details
- `Setup.tsx` - Development setup information
- `cat.ts` - Enable disable the cat

## Adding New Technology Icons

1. Visit [Devicon](https://devicon.dev/) to find the icon you want to add
2. Create a new component in `src/components/technologies/`
3. Follow the existing component structure for consistency

Example:

```tsx
export const NewTechIcon = () => {
  return <svg>// SVG content from devicon</svg>;
};
```

## Adding Content

### Blog Posts

1. Create a new MDX file in `src/data/blog/`
2. Add metadata and content following existing post structure
3. Add blog thumbnail in `public/blog/`

### Projects

1. Create a new MDX file in `src/data/projects/`
2. Add metadata and content following existing project structure
3. Add project thumbnail in `public/project/`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
