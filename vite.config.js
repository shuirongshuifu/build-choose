import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

/**
 * vite 打包本地文件无法直接打开, file 类型 URL 引发跨域等问题探讨
 * https://blog.csdn.net/qq_34727886/article/details/136163494
 * */ 
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  define: {
    '__VUE_PROD_DEVTOOLS__': false,
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_HYDRATION__': true,
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false
  },
})
