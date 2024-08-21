import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],
      manifest: {
        name: 'Daily Reports',
        short_name: 'DailyReports',
        description: 'Give students daily reports and easily send them onwards to parents',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'screenshot-wide.png',
            sizes: '2360x1640',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Daily Reports'
          },
          {
            src: 'screenshot-nrw.png',
            sizes: '1170x2522',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Daily Reports'
          }
        ]
      },
      registerType: 'autoUpdate'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
