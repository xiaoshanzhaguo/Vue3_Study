import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import tsx from './plugin/index'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    // vueJsx(),
    tsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts' // 帮我们生成声明文件，不然直接使用找不到
    })
  ]
})
