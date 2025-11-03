import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // 使用绝对路径，适配 GitHub Pages 根目录部署
  // 如果部署在子目录（如 /repo-name/），改为 base: "/repo-name/"
  base: "/",
  plugins: [
    vue(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    mode === "analyze" &&
      visualizer({
        filename: "dist/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
          // 分离大型组件
          components: [
            "./src/components/UXWorkContainer.vue",
            "./src/components/PlaygroundContainer.vue",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 为GitHub Pages生成404.html
    copyPublicDir: true,
  },
  server: {
    port: 5173,
    host: true,
  },
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
  assetsInclude: ["**/*.mp4", "**/*.webm"],
}));
