# Image Configuration for GitHub Pages

## Overview
This project uses a custom utility function to handle image paths for GitHub Pages deployment.

## Configuration

### For GitHub Pages (Repository Site)
If deploying to `username.github.io/repository-name`:

1. Open `src/lib/utils.ts`
2. Update the `BASE_PATH` constant with your repository name:
```typescript
const BASE_PATH = '/your-repository-name'
```

### For Custom Domain
If using a custom domain (like `yourdomain.com`):

1. Open `src/lib/utils.ts`
2. Set `BASE_PATH` to an empty string:
```typescript
const BASE_PATH = ''
```

### For User/Organization Site
If deploying to `username.github.io` (not a project site):

1. Open `src/lib/utils.ts`
2. Set `BASE_PATH` to an empty string:
```typescript
const BASE_PATH = ''
```

## How It Works

The `getImagePath()` function automatically:
- **In Development**: Returns normal paths like `/assets/logo.png`
- **In Production**: Adds the base path like `/repository-name/assets/logo.png`

## Usage

All image paths in the codebase use this utility:

```typescript
import { getImagePath } from '@/lib/utils';

// In config files
avatar: getImagePath('/assets/logo.png')

// In components
<Image src={getImagePath("/assets/logo.png")} alt="Logo" />
```

## Troubleshooting

### Images not showing after deployment
1. Check that `BASE_PATH` in `src/lib/utils.ts` matches your repository name
2. Verify your GitHub Pages settings point to the correct branch
3. Ensure the `.nojekyll` file is present in the `out` directory (added automatically during build)

### Images not showing in development
1. Clear the Next.js cache: `rm -rf .next`
2. Restart the dev server: `npm run dev`
3. The `getImagePath` function should return normal paths in development mode
