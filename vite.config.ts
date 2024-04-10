import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import unoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    unoCSS(),
    pages({
      extensions: ['vue', 'ts'],
      dirs: [
        { dir: 'src/views', baseRoute: '/' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
