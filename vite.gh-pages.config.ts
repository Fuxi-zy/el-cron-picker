import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// GitHub Pages 演示页面构建配置
export default defineConfig({
  plugins: [vue()],
  base: "/el-cron-picker/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
})