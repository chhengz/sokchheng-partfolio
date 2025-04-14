import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500, // change to match backend port
    proxy: {
    '/api/v1': {
      target: 'http://localhost:5500', // replace with your backend URL
      changeOrigin: true,
      secure: false,
    },
  },
  //   host: true,
  //   strictPort: true,
  //   open: true,
    cors: true,
  },
})
