import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Needed for GitHub Pages: repo is hassancode1/personal,
  // so the app will be served from /personal/
  base: "/personal/",
});
