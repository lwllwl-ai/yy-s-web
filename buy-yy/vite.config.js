import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle:'sass'})],
    }),
    vue(),
    vueDevTools(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css:{
    preprocessorOptions: {
    scss: {
      // 2. 自动导入定制化样式文件进行样式覆盖
      additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/element/var.scss" as *;
      `,
        
    }
   }
  },
  esbuild: {
    loader: {
      '.js': 'jsx'
    }
  }
})
