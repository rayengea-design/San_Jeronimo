import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://autoescuelasanjeronimo.es',
      dynamicRoutes: [
        '/',
        '/permisos',
        '/centros',
        '/profesionales',
        '/recuperacion-puntos',
        '/empresa',
        '/contacto',
        '/aviso-legal',
        '/politica-privacidad',
        '/politica-cookies'
      ]
    })
  ],
  server: {
    port: 5174
  }
})
