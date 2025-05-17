import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5500, // change to match backend port
    proxy: {
    '/api/v1': {
      target: 'http://localhost:5500', // replace with your backend URL
      changeOrigin: true,
      secure: false,
    },
  },
  cors: true, // enable CORS for all routes
  //   host: true,
  //   strictPort: true,
  //   open: true,
  },
})
