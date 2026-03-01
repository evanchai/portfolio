import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          // Rewrite /thoughts to /thoughts.html (mimics Vercel cleanUrls)
          if (req.url && req.url.split('?')[0] === '/thoughts') {
            req.url = '/thoughts.html'
          }
          next()
        })
      }
    }
  ],
})
