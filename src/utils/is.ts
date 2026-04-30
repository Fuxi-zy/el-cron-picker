import { Cron } from "croner";

const toString = Object.prototype.toString;

/**
 * @description is 检查给定的值是否为指定的类型
 * @param {unknown} val - 要检查的值
 * @param {string} type - 期望的类型名称（例如 'Object', 'String'）
 * @returns {boolean} 如果值的类型与指定的类型匹配，则返回 true，否则返回 false
 * @example
 * is('aaa', 'string') // true
 * is(111, 'String') // false
 */
export const is = (val: unknown, type: string) => {
  return toString.call(val) === `[object ${type}]`;
};

export const isCron = (str: string): boolean => {
  try {
    new Cron(str.trim());
    return true;
  } catch {
    return false;
  }
};
export function isSvg(val: string): boolean {
  return (
    (val.startsWith("<svg") && val.endsWith("</svg>")) ||
    (val.startsWith("<?xml") && val.endsWith("</svg>"))
  );
}
/**
 * @description isObject 检查给定的值是否为对象
 * @param {unknown} val - 要检查的值
 * @returns {boolean} 如果值为对象，则返回 true，否则返回 false
 * @example
 * const a = {}
 * isObject(a) // true
 * const b = 111
 * isObject(b) // false
 */
export const isObject = (val: unknown): val is Record<PropertyKey, unknown> => {
  return (
    val !== null &&
    is(val, "Object") &&
    Object.prototype.toString.call(val) === "[object Object]"
  );
};
/**
 * @description isArray 检查给定的值是否为数组
 * @param {unknown} val - 要检查的值
 * @returns {boolean} 如果值为数组，则返回 true，否则返回 false
 * @example
 * isArray([1, 2, 3]) // true
 * isArray({}) // false
 * isArray(123) // false
 */
export const isArray = (val: unknown): val is Array<unknown> => {
  return typeof val === "object" && val !== null && Array.isArray(val);
};
/**
 * @description isString 检查给定的值是否为字符串
 * @param {unknown} val - 要检查的值
 * @returns {boolean} 如果值为字符串，则返回 true，否则返回 false
 * @example
 * isString('aaa') // true
 * isString(111) // false
 */
export const isString = (val: unknown): val is string => {
  return is(val, "String");
};

/**
 * @description isEmpty 检查给定的值是否为空
 * @param {unknown} val - 要检查的值
 * @returns {boolean} 如果值为空，则返回 true，否则返回 false
 * @example
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty('') // true
 * isEmpty(undefined) // true
 * isEmpty(null) // true
 * isEmpty(false) // false
 * isEmpty(1) // false
 * isEmpty([1]) // false
 * isEmpty({ a: 1 }) // false
 */
export const isEmpty = (val: unknown): boolean => {
  if (val === null || val === undefined || val === undefined) {
    return true;
  }
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
};
