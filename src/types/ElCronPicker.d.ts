import { VNode } from "vue";
import type { langType } from "./lang";
/**
 * @description: el-cron-picker 组件类型定义 ElCronPickerType
 * @author: fuxishi
 * @date: 2025-11-04
 * dialog 弹窗
 * drawer 抽屉
 * popover 弹出层
 */
export type ElCronPickerType = "dialog" | "drawer" | "popover";
/**
 * @description: el-cron-picker 组件属性
 * @author: fuxishi
 * @date: 2025-11-04
 * @param { string } modelValue 绑定值
 * @param { ElCronPickerType } type 弹窗类型
 * @param { boolean } isVerify 是否给输入框开启校验
 * @param { VNode | string } icon 图标
 */
export interface ElCronPickerProps {
  modelValue: string; // 绑定值
  type?: ElCronPickerType;
  isVerify?: boolean; // 是否开启校验
  icon?: VNode | string; // 图标
  placeholder?: string; // 占位符
  width?: string; // 宽度 type表示的 popover dialog drawer的宽度
  language?: langType;
  closeOnClickModal?: boolean; // 是否允许点击模态框关闭弹窗/抽屉
}