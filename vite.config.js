import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      manifest: {
        name: 'Covid19 Tracker - Indonesia',
        short_name: 'Covid19 - Indonesia',
        description: 'A website that show cases covid 19 in Indonesia',
        theme_color: '#8068F4',
        icons: [
          {
            src: '/images/icon-pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icon-pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/images/icon-pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ]
})
