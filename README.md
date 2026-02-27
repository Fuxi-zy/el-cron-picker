# cron-picker

vue3 element-plus cron 表达式生成器

# 使用方式

## 注意

安装时必须安装 element-plus 依赖

## 安装

```ts
npm i @fuxishi/el-cron-picker
```

## 全局引入

```ts
import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// 全局引入
import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker"
import "@fuxishi/el-cron-picker/dist/el-cron-picker.css"

const app = createApp(App)
app.use(ElementPlus)
app.use(ElCronPicker)
app.mount("#app")
```

## 局部引入

```ts
import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker"
import "@fuxishi/el-cron-picker/dist/el-cron-picker.css"
```

## 示例

```html
<template>
  <!-- cron表达式生成器 -->
  <el-cron-picker v-model="cron" />
  <!-- cron表达式面板 -->
  <el-cron-config v-model="cron" v-model:numberCount="numberCount" />
</template>
<script setup lang="ts">
  import { ref } from "vue"
  import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker"
  import "@fuxishi/el-cron-picker/dist/el-cron-picker.css"
  const cron = ref("* * * * * ?")
  const numberCount = ref(50)
</script>
```

# 参数属性配置

## langType 类型

配置语言的时候可以引入
例如:

```ts
import { zh } from "@fuxishi/el-cron-picker"
```

也可自定义
例如:

```html
<template>
  <ElCronPicker v-model="cron" :language="lang" />
  <ElCronConfig v-model="cron" :language="lang" />
</template>
<script setup lang="ts">
  import { ref } from "vue"
  import { ElCronPicker,ElCronConfig } from "@fuxishi/el-cron-picker"
  const lang = {
    ......
  }
  const cron = ref("* * * * * ?")
</script>
```

## ElCronPickerType 类型

| 值      | 说明   |
| ------- | ------ |
| popover | 弹出框 |
| dialog  | 对话框 |
| drawer  | 抽屉   |

## ElCronPicker 配置项

| 属性                | 说明                                          | 类型                                               | 默认值    |
| ------------------- | --------------------------------------------- | -------------------------------------------------- | --------- |
| modelValue\/v-model | 绑定值                                        | string                                             | -         |
| type                | 类型                                          | [ElCronPickerType](./dist/types/ElCronPicker.d.ts) | 'popover' |
| isVerify            | 是否验证(对默认输入框生效)                    | boolean                                            | false     |
| icon                | 图标                                          | VNode \| string                                    | -         |
| placeholder         | 输入框占位符                                  | string                                             | -         |
| width               | 宽度 type 表示的 popover dialog drawer 的宽度 | string                                             | -         |
| language            | 语言包                                        | [langType](./dist/types/lang.d.ts)                 | -         |
| closeOnClickModal   | 是否允许点击模态框关闭弹窗/抽屉               | boolean                                            | true      |

## ElCronConfig 配置项

| 属性                             | 说明     | 类型                               | 默认值             |
| -------------------------------- | -------- | ---------------------------------- | ------------------ |
| modelValue\/v-model              | 绑定值   | string                             | '\* \* \* \* \* ?' |
| numberCount\/v-model:numberCount | 执行次数 | number                             | 50                 |
| language                         | 语言包   | [langType](./dist/types/lang.d.ts) | -                  |

## 事件

### ElCronPicker

| 事件名            | 参数        | 说明             |
| ----------------- | ----------- | ---------------- |
| update:modelValue | -           | 绑定值改变时触发 |
| executionError    | error:Error | 执行错误时触发   |

### ElCronConfig

| 事件名             | 参数        | 说明             |
| ------------------ | ----------- | ---------------- |
| update:modelValue  | -           | 绑定值改变时触发 |
| update:numberCount | -           | 值改变           |
| executionError     | error:Error | 执行错误时触发   |

## 功能说明

### Dialog/Drawer 输入框

当 `type` 为 `dialog` 或 `drawer` 时，弹窗/抽屉内会显示一个可编辑的输入框，可以直接输入 Cron 表达式。输入框的值会与 `v-model` 双向绑定同步更新。

```html
<template>
  <!-- 使用 dialog 类型，带输入框 -->
  <el-cron-picker v-model="cron" type="dialog" />
  
  <!-- 使用 drawer 类型，带输入框 -->
  <el-cron-picker v-model="cron" type="drawer" />
  
  <!-- 禁止点击模态框关闭 -->
  <el-cron-picker v-model="cron" type="drawer" :close-on-click-modal="false" />
</template>
```

## 示例图片

![示例图片 1](https://github.com/Fuxi-zy/el-cron-picker/blob/main/docs/image/cron.png?raw=true)
![示例图片 2](https://github.com/Fuxi-zy/el-cron-picker/blob/main/docs/image/quick.png?raw=true)

# 更新日志

| 版本号 | 更新内容                                                                                                                                                                                                                                    | 更新时间   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1.0.0  | 初始版本                                                                                                                                                                                                                                    | 2025-11-05 |
| 1.0.1  | 解决无 tooltip 问题                                                                                                                                                                                                                         | 2025-11-05 |
| 1.0.2  | 解决宽度问题                                                                                                                                                                                                                                | 2025-11-05 |
| 1.0.3  | 解决 cronConfig 组件无法实时更新数据问题                                                                                                                                                                                                    | 2025-11-05 |
| 1.0.4  | 解决 cronConfig 添加实时更新后数据错误问题                                                                                                                                                                                                  | 2025-11-06 |
| 1.0.5  | 组件添加在编辑器中鼠标悬浮组件时显示提示信息,完善 docs 文档 修复打包时将 public 打包进去的问题                                                                                                                                              | 2025-11-06 |
| 1.0.6  | 修复周期情况下如果出现例如"MON-FRI"变为"NAN-NAN"问题, 解决如果是已经输入到周的时候无法继续输入空格或删除最后方空格 解决月份如果是如的是类似 JAN 转换为 NAN 的问题 ,修复周部分的第 n 周的星期 n 转换错误问题, 解决年部分用"\/"分割报错的情况 | 2025-11-06 |
| 1.1.0  | 新增语言包配置                                                                                                                                                                                                                              | 2025-11-07 |
| 1.1.1  | ①. 新增 executionError 执行错误事件 ②. isCron 正则校验增强 解决日参数 W LW L 错误返回 false 问题 ③. 最近运行事件计算方式如果 cron 表达式不满足条件自动清空最近运行                                                                          | 2025-11-10 |
| 1.1.2  | ①. 修复 drawer 取消按钮无反应问题 ②. 新增 closeOnClickModal 参数控制是否允许点击模态框关闭弹窗/抽屉                                                                                                                                          | 2025-11-11 |
| 1.1.3  | ①. 在 dialog/drawer 中添加可输入的 Cron 表达式输入框，与 v-model 双向绑定 ②. 更新语言包类型定义                                                                                                                                            | 2025-11-11 |

# 如遇到错误或什么问题 可邮箱zhangzjx1422@163.com联系