import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
    }),
    // 打包压缩，主要是本地gzip，如果服务器配置压缩也可以
    // viteCompression(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/index.scss";`,
      }
    }
  },
  build: {
    sourcemap: false,
    cssCodeSplit: false, // 禁用 CSS 代码拆分,将整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    brotliSize: false, // 关闭打包计算
    target: 'esnext',
    minify: 'terser', // 混淆器，terser构建后文件体积更小 ,esbuild
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          // 拆分代码，这个就是分包
          vue: ['vue'],
          vueRouter: ['vue-router'],
          vuex: ['vuex'],
          axios: ['axios'],
        },
      }
    },
    // 压缩配置
    terserOptions: {
      compress: {
        drop_console: false, // 生产环境移除console
        drop_debugger: true // 生产环境移除debugger
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    }
  }
})
