import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInject from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInject()],
  /**
   * for library mode
   * @see https://vitejs-kr.github.io/guide/build.html#library-mode
   * @see https://vitejs.dev/guide/build.html#library-mode
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
  css: {
    /**
     * CSS Modules
     * @see https://vitejs-kr.github.io/config/#css-modules
     */
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'dashesOnly',
    },
  },
});
