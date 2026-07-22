import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Custom plugin to copy js folder to dist/js
function copyJsPlugin() {
  return {
    name: 'copy-js-plugin',
    closeBundle() {
      const srcDir = resolve(__dirname, 'js');
      const destDir = resolve(__dirname, 'dist/js');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('Successfully copied js/ directory to dist/js/');
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyJsPlugin()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aiInsights: resolve(__dirname, 'ai-insights.html'),
        alerts: resolve(__dirname, 'alerts.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        financial: resolve(__dirname, 'financial.html'),
        forecast: resolve(__dirname, 'forecast.html'),
        loading: resolve(__dirname, 'loading.html'),
        logout: resolve(__dirname, 'logout.html'),
        manufacturing: resolve(__dirname, 'manufacturing.html'),
        procurement: resolve(__dirname, 'procurement.html'),
        reports: resolve(__dirname, 'reports.html'),
        suppliers: resolve(__dirname, 'suppliers.html'),
        warehouse: resolve(__dirname, 'warehouse.html'),
      }
    }
  }
})
