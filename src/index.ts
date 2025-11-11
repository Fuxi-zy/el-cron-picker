import ElCronPicker from "./components/ElCronPicker.vue"
import ElCronConfig from "./components/ElCronConfig.vue"
import { en } from "./lang/en"
import { zhCn } from "./lang/zh-cn"
const langs = { en, zhCn }
export {
  /**
   * @description cron表达式生成器
   * @example
   * <el-cron-picker v-model="cron" />
   */
  ElCronPicker,
  /**
   * @description cron表达式配置面板
   * @example
   * <el-cron-config v-model="cron" v-mode:number-count="5" />
   */
  ElCronConfig,
  langs,
}
export type { ElCronPickerProps } from "./types/ElCronPicker"
export type { ElCronConfigProps } from "./types/ElCronConfig"
