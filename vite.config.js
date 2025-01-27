import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://videos-streaming-backend.onrender.com/api/v1'
    }
  }
})
