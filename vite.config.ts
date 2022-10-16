import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    vue(),
    pages({
      extensions: ['vue', 'ts'],
      dirs: [
        { dir: 'src/views', baseRoute: '/' },
        // { dir: 'src/views/index', baseRoute: 'index' },
        // { dir: 'src/views/use', baseRoute: 'use' },
        // { dir: 'src/views/star', baseRoute: 'star' },
      ],
    }),
  ],
})
