import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/EenglessonWeb/', // Replace <repository-name> with your repository name
  plugins: [react()],
});
