<template>
  <!-- 有 popover 无icon 默认input popover -->
  <el-popover
    :visible="popoverVisible"
    placement="bottom-start"
    :width
    trigger="click"
    v-if="type === 'popover' && !icon"
  >
    <template #reference>
      <el-input
        v-model="modelValue"
        :placeholder="placeholder"
        readonly
        @click="
          () => {
            type === 'popover' && !icon ? ConfigHandleClick() : '';
          }
        "
      />
    </template>
    <template #default>
      <el-cron-config
        v-model="modelValue"
        v-model:number-count="numberCount"
        :language
        @execution-error="executionError"
      />
      <div style="display: flex; justify-content: end">
        <el-button
          type="primary"
          size="small"
          @click="popoverVisible = false"
          round
          >{{ language.ElCronPicker.close }}</el-button
        >
      </div>
    </template>
  </el-popover>
  <!-- 有icon -->
  <el-input
    v-model="modelValue"
    :placeholder="placeholder"
    readonly
    v-else
    @click="
      () => {
        type !== 'popover' && !icon ? ConfigHandleClick() : '';
      }
    "
  >
    <template #append v-if="icon">
      <!-- 有icon  有popover 默认icon popover -->
      <el-popover
        :visible="popoverVisible"
        placement="bottom-end"
        trigger="click"
        :width
        v-if="type === 'popover'"
      >
        <template #reference>
          <div style="display: inline-block">
            <el-tooltip :content="language.ElCronPicker.CronExpression">
              <el-button @click="ConfigHandleClick">
                <component v-if="isVNode(icon)" :is="icon" />
                <span
                  v-else-if="isSvg(icon!)"
                  v-html="icon"
                  class="icon-span"
                  aria-hidden="true"
                />
                <span v-else>{{ icon }}</span>
              </el-button>
            </el-tooltip>
          </div>
        </template>
        <template #default>
          <el-cron-config
            v-model="modelValue"
            v-model:number-count="numberCount"
            :language
            @execution-error="executionError"
          />
          <div style="display: flex; justify-content: end">
            <el-button
              type="primary"
              size="small"
              @click="popoverVisible = false"
              round
              >{{ language.ElCronPicker.close }}</el-button
            >
          </div>
        </template>
      </el-popover>
      <div v-if="type !== 'popover'">
        <el-tooltip :content="language.ElCronPicker.CronExpression">
          <el-button @click="ConfigHandleClick">
            <component v-if="isVNode(icon)" :is="icon" />
            <span
              v-else-if="isSvg(icon!)"
              v-html="icon"
              class="icon-span"
              aria-hidden="true"
            />
            <span v-else>{{ icon }}</span>
          </el-button>
        </el-tooltip>
      </div>
    </template>
  </el-input>
  <div>
    <el-text type="danger" v-if="isVerify && verify" size="small">
      {{ language.ElCronPicker.CronFormatError }}
    </el-text>
  </div>

  <el-dialog
    v-model="dialogVisible"
    :title="language.ElCronPicker.CronConfig"
    :width
    v-if="type === 'dialog'"
    align-center
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <template #default>
      <el-cron-config
        v-model="modelValue"
        v-model:number-count="numberCount"
        :language
        @execution-error="executionError"
      />
    </template>
    <template #footer>
      <el-button
        type="primary"
        @click="dialogVisible = false"
        size="small"
        round
        >{{ language.ElCronPicker.cancel }}</el-button
      >
    </template>
  </el-dialog>

  <el-drawer
    v-model="drawerVisible"
    :title="language.ElCronPicker.CronConfig"
    v-if="type === 'drawer'"
    align-center
    :size="width"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    header-class="el-drawer-header-custom"
  >
    <template #default>
      <el-cron-config
        v-model="modelValue"
        v-model:number-count="numberCount"
        :language
        @execution-error="executionError"
      />
    </template>
    <template #footer>
      <el-button
        type="primary"
        @click="dialogVisible = false"
        size="small"
        round
        >{{ language.ElCronPicker.cancel }}</el-button
      >
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { computed, isVNode, ref } from "vue";
import { isCron, isEmpty, isObject, isSvg } from "../utils/is";
import { type ElCronPickerProps } from "../types/ElCronPicker";
import ElCronConfig from "./ElCronConfig.vue";
import { zhCn } from "../lang/zh-cn";

const props = withDefaults(defineProps<ElCronPickerProps>(), {
  modelValue: "",
  type: "popover",
  isVerify: false,
  placeholder: "",
  width: "800px",
  language: () => zhCn,
});
const emits = defineEmits(["update:modelValue", "executionError"]);
const numberCount = ref(100);
// 验证
const verify = ref(false);
const placeholder = computed(() => {
  if (props.placeholder) {
    return props.placeholder;
  } else if (isObject(props.language) && !isEmpty(props.language)) {
    return props.language.ElCronPicker.PleaseConfigureThroughPanel;
  } else {
    return props.placeholder;
  }
});
const modelValue = computed({
  get() {
    if (!isCron(props.modelValue)) {
      verify.value = true;
    } else {
      verify.value = false;
    }
    return props.modelValue;
  },
  set(val) {
    if (!isCron(val)) {
      verify.value = true;
    } else {
      verify.value = false;
    }
    emits("update:modelValue", val);
  },
});

// popover
const popoverVisible = ref(false);
// dialog
const dialogVisible = ref(false);
// drawer
const drawerVisible = ref(false);

function ConfigHandleClick() {
  if (props.type === "popover") {
    popoverVisible.value = true;
  }
  if (props.type === "dialog") {
    dialogVisible.value = true;
  }
  if (props.type === "drawer") {
    drawerVisible.value = true;
  }
}

function executionError(error: Error) {
  emits("executionError", error);
}
</script>

<style scoped lang="scss">
.icon-span {
  width: 16px;
  height: 16px;
  :deep(svg) {
    width: 16px;
    height: 16px;
  }
}
</style>
<style>
.el-drawer-header-custom {
  margin: 0 !important;
}
</style>
