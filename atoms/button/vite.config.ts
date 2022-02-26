import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /**
   * for library mode
   * @see {https://vitejs-kr.github.io/guide/build.html#library-mode}
   * @see {https://vitejs.dev/guide/build.html#library-mode}
   */
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'buttons',
      fileName: (format) => `button.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
