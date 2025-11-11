import { ElMessage } from "element-plus";
import { zhCn } from "../lang/zh-cn";
import type { langType } from "../types/lang";

/**
 * @description 剪贴板复制（支持现代API与回退方案）
 * @param {string} text 需要复制的文本内容
 * @param {boolean} [forceLegacy=false] 强制使用传统方案（用于兼容旧浏览器）
 * @param {boolean} [isMsg=true] 是否显示消息提示
 * @param {langType} [lang=zhCn.copy] 语言包
 * @returns {Promise<boolean>} 复制操作结果
 * @throws {Error} 当复制操作被用户拒绝时抛出异常
 * @example
 * copyClipboard('hello').then(() => console.log('复制成功'))
 * @example
 * copyClipboard('secret', true).catch(err => console.error('复制失败:', err))
 */
export async function copyClipboard(
  text: string,
  forceLegacy = false,
  isMsg = true,
  lang: langType = zhCn
): Promise<boolean> {
  const {
    InvalidCopiedContent,
    copySuccess,
    TraditionalCopySuccess,
    TraditionalCopyFailed,
    ModernCopyFailed,
  } = lang.copy;
  // 参数验证
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error(InvalidCopiedContent);
  }
  // 现代API方案
  if (!forceLegacy && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      if (isMsg) {
        ElMessage.success(copySuccess);
      }
      return true;
    } catch (err) {
      console.warn(ModernCopyFailed, err);
      // await message.warn('现代剪贴板API复制失败, 正在尝试传统方案中...');
      // 回退到传统方案
      return await copyClipboard(text, true, isMsg);
    }
  }
  // 传统方案（兼容旧浏览器）
  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    try {
      textarea.select();
      document.execCommand("copy");

      if (isMsg) {
        ElMessage.success(TraditionalCopySuccess);
      }
      resolve(true);
    } catch (err) {
      reject(
        new Error(
          `${TraditionalCopyFailed}${
            err instanceof Error ? err.message : String(err)
          }`
        )
      );
    } finally {
      document.body.removeChild(textarea);
    }
  });
}
