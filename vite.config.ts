import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // отключить .map файлы
    minify: false,    // если нужно без минификации
    rollupOptions: {
      input: '/index.html', // точка входа
      output: {
        manualChunks: undefined, // отключить чанки
        entryFileNames: 'script.js', // итоговый JS-файл
        chunkFileNames: undefined,
        assetFileNames: 'style.css', // итоговый CSS-файл (если нужен)
      }
    }
  }
});
