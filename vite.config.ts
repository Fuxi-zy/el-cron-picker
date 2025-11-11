import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      exclude: [
        "**/*.test.*",
        "node_modules/**/*",
        "src/main.ts",
        "src/App.vue",
      ],
      entryRoot: "src",
      tsconfigPath: "./tsconfig.app.json",
      include: ["src/index.ts", "src/components/**/*.vue", "src/types/**/*.ts"],
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ElCronPicker",
      fileName: (format) => `el-cron-picker.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "element-plus"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
