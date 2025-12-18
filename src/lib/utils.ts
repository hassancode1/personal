import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages deployment
// Change 'personal' to your actual repository name
// Set to '' if using custom domain
const BASE_PATH = '/personal'

export function getImagePath(path: string): string {
  // If it's already a full URL, return as is
  if (path.startsWith('http')) {
    return path
  }
  
  // For local images, add base path in production
  if (process.env.NODE_ENV === 'production') {
    return `${BASE_PATH}${path}`
  }
  
  return path
}