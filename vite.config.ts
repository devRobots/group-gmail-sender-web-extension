import { resolve } from 'path';
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  define: {
    'process': {
      'env': {
        'NODE_ENV': 'development'
      }
    }
  },
  build: {
    lib: {
      entry: resolve('./src/content/content.js'),
      name: 'Content Scripts',
      fileName: 'content',
    },
    minify: false,
  }
}
