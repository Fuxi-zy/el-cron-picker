import { langType } from "./lang";
/**
 * @description: el-cron-config 面板
 * @author: fuxishi
 * @date: 2025-11-06
 * @param {string} modelValue 绑定值
 * @param {number} numberCount 执行次数
 */
export interface ElCronConfigProps {
  modelValue?: string;
  numberCount?: number;
  language?: langType;
}
