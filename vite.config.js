import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { compression } from 'vite-plugin-compression2'

const today = new Date().toISOString().split('T')[0]

const seoRoutes = [
  { path: '/permisos',               priority: 0.9, changefreq: 'monthly' },
  { path: '/profesionales',          priority: 0.9, changefreq: 'monthly' },
  { path: '/recuperacion-puntos',    priority: 0.9, changefreq: 'monthly' },
  { path: '/centros',                priority: 0.8, changefreq: 'monthly' },
  { path: '/empresa',                priority: 0.6, changefreq: 'yearly' },
  { path: '/contacto',               priority: 0.7, changefreq: 'yearly' },
  { path: '/tablon',                 priority: 0.5, changefreq: 'monthly' },
  { path: '/aviso-legal',            priority: 0.2, changefreq: 'yearly' },
  { path: '/politica-privacidad',    priority: 0.2, changefreq: 'yearly' },
  { path: '/politica-cookies',       priority: 0.2, changefreq: 'yearly' },
]

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 78 },
      jpeg: { quality: 78 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeViewBox: false, cleanupIds: false } },
          },
        ],
      },
    }),
    compression({ algorithm: 'gzip', exclude: [/\.(br|gz)$/] }),
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br|gz)$/] }),
    Sitemap({
      hostname: 'https://autoescuelasanjeronimo.es',
      readable: true,
      lastmod: today,
      dynamicRoutes: seoRoutes.map(r => r.path),
      changefreq: {
        '/': 'weekly',
        ...Object.fromEntries(seoRoutes.map(r => [r.path, r.changefreq])),
      },
      priority: {
        '/': 1.0,
        ...Object.fromEntries(seoRoutes.map(r => [r.path, r.priority])),
      },
    }),
  ],
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
          leaflet: ['leaflet', 'react-leaflet'],
        },
      },
    },
  },
  server: {
    port: 5174
  }
})
