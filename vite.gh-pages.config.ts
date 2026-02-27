import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// GitHub Pages 演示页面构建配置
// 注意：这是构建演示应用，不是构建库
export default defineConfig({
  plugins: [vue()],
  base: "/el-cron-picker/",
  // 不设置 build.lib，使用默认的应用模式构建
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
})