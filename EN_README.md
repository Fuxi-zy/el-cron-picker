# el-cron-picker

vue3 + element-plus cron Expression generator

# Usage method

## Attention

The [element-plus](https://element-plus.org/en-US/component/input)([github](https://github.com/element-plus/element-plus)) dependency must be installed during installation

## Installation

```ts
npm i @fuxishi/el-cron-picker
```

## Global import

```ts
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Global import
import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker";
import "@fuxishi/el-cron-picker/dist/el-cron-picker.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(ElCronPicker);
app.mount("#app");
```

## Local introduction

```ts
import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker";
import "@fuxishi/el-cron-picker/dist/el-cron-picker.css";
```

## Example

```html
<template>
  <!-- cron expression generator -->
  <el-cron-picker v-model="cron" />
  <!-- cron expression panel -->
  <el-cron-config v-model="cron" v-model:numberCount="numberCount" />
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { ElCronPicker, ElCronConfig } from "@fuxishi/el-cron-picker";
  import "@fuxishi/el-cron-picker/dist/el-cron-picker.css";
  const cron = ref("* * * * * ?");
  const numberCount = ref(50);
</script>
```

# Parameter attribute configuration

## langType

It can be introduced when configuring the language
For example:

```ts
import { zh } from "@fuxishi/el-cron-picker";
```

It can also be customized
For example:

```html
<template>
  <ElCronPicker v-model="cron" :language="lang" />
  <ElCronConfig v-model="cron" :language="lang" />
</template>
<script setup lang="ts">
  "bugs": {
  	"url": "https://github.com/kelektiv/node-cron/issues"
  },
   import { ref } from "vue"
   import { ElCronPicker,ElCronConfig } from "@fuxishi/el-cron-picker"
   const lang = {
     ......
   }
   const cron = ref("* * * * * ?")
</script>
```

## ElCronPickerType

| 值      | 说明   |
| ------- | ------ |
| popover | 弹出框 |
| dialog  | 对话框 |
| drawer  | 抽屉   |

## ElCronPicker configuration item

| Attribute           | Explanation                                                      | Type                                               | Default value |
| ------------------- | ---------------------------------------------------------------- | -------------------------------------------------- | ------------- |
| modelValue\/v-model | Binding value                                                    | string                                             | -             |
| type                | type                                                             | [ElCronPickerType](./dist/types/ElCronPicker.d.ts) | 'popover'     |
| isVerify            | Whether to verify (effective for default input boxes)            | boolean                                            | false         |
| icon                | icon                                                             | VNode \| string                                    | -             |
| placeholder         | Input box placeholder                                            | string                                             | -             |
| width               | The width type represents the width of the popover dialog drawer | string                                             | -             |
| language            | Language pack                                                    | [langType](./dist/types/lang.d.ts)                 | -             |

## ElCronConfig configuration item

| Attribute                        | Explanation          | Type                               | Default value      |
| -------------------------------- | -------------------- | ---------------------------------- | ------------------ |
| modelValue\/v-model              | Binding value        | string                             | '\* \* \* \* \* ?' |
| numberCount\/v-model:numberCount | Number of executions | number                             | 50                 |
| language                         | Language pack        | [langType](./dist/types/lang.d.ts) | -                  |

## Event

### ElCronPicker

| Event Name        | Parameter   | Explanation                              |
| ----------------- | ----------- | ---------------------------------------- |
| update:modelValue | -           | Triggered when the binding value changes |
| executionError    | error:Error | Triggered when an execution error occurs |

### ElCronConfig

| Event Name         | Parameter   | Explanation                              |
| ------------------ | ----------- | ---------------------------------------- |
| update:modelValue  | -           | Triggered when the binding value changes |
| update:numberCount | -           | Subnumerical change                      |
| executionError     | error:Error | Triggered when an execution error occurs |

## Sample picture

![Sample picture 1](https://github.com/Fuxi-zy/el-cron-picker/blob/main/docs/image/cron.png?raw=true)
![Sample picture 2](https://github.com/Fuxi-zy/el-cron-picker/blob/main/docs/image/quick.png?raw=true)

# Update log

| Version number | Updated content                                                                                                                                                                                                                                                                                                                                                                                                                             | Updated time |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1.0.0          | Initial version                                                                                                                                                                                                                                                                                                                                                                                                                             | 2025-11-05   |
| 1.0.1          | Solve the problem of no tooltip                                                                                                                                                                                                                                                                                                                                                                                                             | 2025-11-05   |
| 1.0.2          | Solve the width problem                                                                                                                                                                                                                                                                                                                                                                                                                     | 2025-11-05   |
| 1.0.3          | Solve the problem that the cronConfig component cannot update data in real time                                                                                                                                                                                                                                                                                                                                                             | 2025-11-05   |
| 1.0.4          | Solve the problem of data errors after adding real-time updates to cronConfig                                                                                                                                                                                                                                                                                                                                                               | 2025-11-06   |
| 1.0.5          | When a component is added to the editor and the mouse hovers over it, a prompt message is displayed. This has improved the docs document and fixed the issue where public was included during packaging                                                                                                                                                                                                                                     | 2025-11-06   |
| 1.0.6          | In the case of the repair cycle, if problems such as "MON-FRI" changing to "NAN-NAN" occur, Fixed the issue of being unable to continue inputting Spaces or deleting the last space when the week has already been entered. Resolved the problem of converting JAN to NAN when the month is similar. Fixed the error of converting the NTH week of the week in the week section. Resolved the error of splitting the year section with "\/" | 2025-11-06   |
| 1.1.0          | New language pack configuration added                                                                                                                                                                                                                                                                                                                                                                                                       | 2025-11-07   |
| 1.1.1          | ①. A new executionError execution error event has been added. ②. The isCron regular check has been enhanced to solve the problem of the daily parameter W LW L error returning false. ③ The calculation method for the most recent run event is to automatically clear the most recent run if the cron expression does not meet the conditions                                                                                              | 2025-11-10   |

# If you encounter any errors or problems, please contact us at zhangzjx1422@163.com or issues
