// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,                    // ← very important: allows external connections (Cloudflare Tunnel needs this)
    allowedHosts: ['all']          // ← quick & safe fix for the "host not allowed" error you saw earlier
    // If you prefer more security (recommended for long-term):
    // allowedHosts: ['localhost', '127.0.0.1', '.trycloudflare.com', 'carterbhorton.com']
  }
})