import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Função para obter o diretório do arquivo atual
function getCurrentDirname() {
  const filePath = new URL(import.meta.url).pathname;
  return path.dirname(filePath);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(getCurrentDirname(), 'src/')
    }
  }
});
