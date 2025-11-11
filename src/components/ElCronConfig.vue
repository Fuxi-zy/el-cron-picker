<template>
  <!-- 配置区域 -->
  <div class="border-container">
    <el-tabs v-model="activeName">
      <!-- 秒 -->
      <el-tab-pane :label="language.timers.seconds" name="seconds">
        <el-radio-group v-model="config.seconds.type">
          <el-radio value="every"
            >{{ language.timers.seconds }},
            {{ language.ElCronConfig.AllowedWildcards }} [,-*/]</el-radio
          >
          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.seconds.period.start"
              :min="0"
              :max="59"
              size="small"
            />
            -
            <el-input-number
              v-model="config.seconds.period.end"
              :min="0"
              :max="59"
              size="small"
            />{{ language.timers.seconds }}
          </el-radio>

          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.seconds.start.from"
              :min="0"
              :max="59"
              size="small"
            />{{ language.ElCronConfig.secondStart }}
            <el-input-number
              v-model="config.seconds.start.interval"
              :min="1"
              :max="59"
              size="small"
            />{{ language.ElCronConfig.secondEnd }}
          </el-radio>

          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.seconds.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in 60"
                :key="item"
                :label="item - 1"
                :value="item - 1"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 分钟 -->
      <el-tab-pane :label="language.timers.minutes" name="minutes">
        <el-radio-group v-model="config.minutes.type">
          <el-radio value="every"
            >{{ language.timers.minutes }},
            {{ language.ElCronConfig.AllowedWildcards }} [,-*/]</el-radio
          >

          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.minutes.period.start"
              :min="0"
              :max="59"
              size="small"
            />
            -
            <el-input-number
              v-model="config.minutes.period.end"
              :min="0"
              :max="59"
              size="small"
            />{{ language.timers.minutes }}
          </el-radio>

          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.minutes.start.from"
              :min="0"
              :max="59"
              size="small"
            />{{ language.ElCronConfig.minutesStart }}
            <el-input-number
              v-model="config.minutes.start.interval"
              :min="1"
              :max="59"
              size="small"
            />{{ language.ElCronConfig.minutesEnd }}
          </el-radio>

          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.minutes.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in 60"
                :key="item"
                :label="item - 1"
                :value="item - 1"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 小时 -->
      <el-tab-pane :label="language.timers.hour" name="hour">
        <el-radio-group v-model="config.hours.type">
          <el-radio value="every"
            >{{ language.timers.hour }},
            {{ language.ElCronConfig.AllowedWildcards }} [,-*/]</el-radio
          >

          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.hours.period.start"
              :min="0"
              :max="23"
              size="small"
            />
            -
            <el-input-number
              v-model="config.hours.period.end"
              :min="0"
              :max="23"
              size="small"
            />{{ language.timers.hour }}
          </el-radio>

          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.hours.start.from"
              :min="0"
              :max="23"
              size="small"
            />{{ language.ElCronConfig.hourStart }}
            <el-input-number
              v-model="config.hours.start.interval"
              :min="1"
              :max="23"
              size="small"
            />{{ language.ElCronConfig.hourEnd }}
          </el-radio>

          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.hours.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in 24"
                :key="item"
                :label="item - 1"
                :value="item - 1"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 天 -->
      <el-tab-pane :label="language.timers.day" name="day">
        <el-radio-group v-model="config.day.type">
          <el-radio value="every"
            >{{ language.timers.day }},
            {{ language.ElCronConfig.AllowedWildcards }} [,-*/L M]</el-radio
          >
          <el-radio value="none">{{
            language.ElCronConfig.NotSpecified
          }}</el-radio>
          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.day.period.start"
              :min="1"
              :max="31"
              size="small"
            />
            -
            <el-input-number
              v-model="config.day.period.end"
              :min="1"
              :max="31"
              size="small"
            />{{ language.timers.day }}
          </el-radio>

          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.day.start.from"
              :min="1"
              :max="31"
              size="small"
            />{{ language.ElCronConfig.dayStart }}
            <el-input-number
              v-model="config.day.start.interval"
              :min="1"
              :max="31"
              size="small"
            />{{ language.ElCronConfig.dayEnd }}
          </el-radio>
          <el-radio value="lastWeekday">
            {{ language.ElCronConfig.EveryMonthStart }}
            <el-input-number
              v-model="config.day.start.from"
              :min="1"
              :max="31"
              size="small"
            />{{ language.ElCronConfig.EveryMonthEnd }}
          </el-radio>
          <el-radio value="lastDay">{{
            language.ElCronConfig.LastDayMonth
          }}</el-radio>
          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.day.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in 31"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 月 -->
      <el-tab-pane :label="language.timers.month" name="month">
        <el-radio-group v-model="config.month.type">
          <el-radio value="every"
            >{{ language.timers.minutes }},
            {{ language.ElCronConfig.AllowedWildcards }} [,-*/]</el-radio
          >
          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.month.period.start"
              :min="1"
              :max="12"
              size="small"
            />
            -
            <el-input-number
              v-model="config.month.period.end"
              :min="1"
              :max="12"
              size="small"
            />{{ language.timers.month }}
          </el-radio>

          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.month.start.from"
              :min="1"
              :max="12"
              size="small"
            />{{ language.ElCronConfig.monthStart }}
            <el-input-number
              v-model="config.month.start.interval"
              :min="1"
              :max="12"
              size="small"
            />{{ language.ElCronConfig.monthEnd }}
          </el-radio>

          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.month.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in 12"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 周 -->
      <el-tab-pane :label="language.timers.week" name="week">
        <el-radio-group v-model="config.week.type">
          <el-radio value="every"
            >{{ language.timers.week }},
            {{ language.ElCronConfig.AllowedWildcards }}[,-*/L #]</el-radio
          >
          <el-radio value="none">
            {{ language.ElCronConfig.NotSpecified }}
          </el-radio>
          <el-radio value="period">
            {{ language.ElCronConfig.cycle }} {{ language.ElCronConfig.week }}
            <el-input-number
              v-model="config.week.period.start"
              :min="1"
              :max="7"
              size="small"
            />
            -
            <el-input-number
              v-model="config.week.period.end"
              :min="1"
              :max="7"
              size="small"
            />
          </el-radio>

          <el-radio value="nthWeekday">
            {{ language.ElCronConfig.WeekStart }}
            <el-input-number
              v-model="config.week.nthWeekday.week"
              :min="1"
              :max="7"
              size="small"
            />{{ language.ElCronConfig.WeekCenter }}
            <el-input-number
              v-model="config.week.nthWeekday.weekday"
              :min="1"
              :max="5"
              size="small"
            />{{ language.ElCronConfig.WeekEnd }}
          </el-radio>
          <el-radio value="lastWeekday">
            {{ language.ElCronConfig.LastWeekOfMonth }}
            <el-input-number
              v-model="config.week.lastWeekday.weekday"
              :min="1"
              :max="7"
              size="small"
            />
          </el-radio>
          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.week.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in [mon, tue, wed, thu, fri, sat, sum]"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
      <!-- 年 -->
      <el-tab-pane :label="language.timers.year" name="year">
        <el-radio-group v-model="config.year.type">
          <el-radio value="none"
            >{{ language.NotFill }},
            {{ language.ElCronConfig.AllowedWildcards }}[,-*/]</el-radio
          >
          <el-radio value="every">{{
            language.ElCronConfig.EveryYear
          }}</el-radio>
          <el-radio value="period">
            {{ language.ElCronConfig.cycle }}
            <el-input-number
              v-model="config.year.period.start"
              :min="new Date().getFullYear()"
              :max="new Date().getFullYear() + 50"
              size="small"
            />
            -
            <el-input-number
              v-model="config.year.period.end"
              :min="new Date().getFullYear()"
              :max="new Date().getFullYear() + 50"
              size="small"
            />{{ language.timers.year }}
          </el-radio>
          <el-radio value="start">
            {{ language.ElCronConfig.Start }}
            <el-input-number
              v-model="config.year.start.from"
              :min="new Date().getFullYear()"
              :max="new Date().getFullYear() + 50"
              size="small"
            />{{ language.ElCronConfig.yearStart }}
            <el-input-number
              v-model="config.year.start.interval"
              :min="1"
              :max="10"
              size="small"
            />{{ language.ElCronConfig.yearEnd }}
          </el-radio>
          <el-radio value="specify">
            {{ language.ElCronConfig.Specified }}
            <el-select
              multiple
              v-model="config.year.specify.values"
              collapse-tags
              style="width: 140px"
              :placeholder="language.MultipleOptionsAvailable"
              clearable
              size="small"
            >
              <el-option
                v-for="item in Array(15)
                  .fill(0)
                  .map((_, i) => new Date().getFullYear() + i)"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-radio>
        </el-radio-group>
      </el-tab-pane>
    </el-tabs>
  </div>
  <!-- 表达式 -->
  <div class="border-container">
    <el-divider content-position="left">{{
      language.ElCronConfig.TimeExpression
    }}</el-divider>
    <el-descriptions size="small" :column="3" border>
      <el-descriptions-item :label="language.timers.seconds">{{
        cronExpressionParts[0]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.minutes">{{
        cronExpressionParts[1]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.hour">{{
        cronExpressionParts[2]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.day">{{
        cronExpressionParts[3]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.month">{{
        cronExpressionParts[4]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.week">{{
        cronExpressionParts[5]
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.timers.year">{{
        cronExpressionParts[6] || language.NotFill
      }}</el-descriptions-item>
      <el-descriptions-item :label="language.ElCronConfig.Expression">
        <el-tooltip :content="language.copy.ClickToCopy">
          <span @click="copyClipboard(cronExpression, false, true, language)">{{
            cronExpression
          }}</span>
        </el-tooltip>
      </el-descriptions-item>
    </el-descriptions>
  </div>

  <!-- 最近n次运行时间 -->
  <div class="border-container">
    {{ language.ElCronConfig.RunTimesStart }}
    <el-input-number v-model="numberCount" :min="1" size="small" />
    {{ language.ElCronConfig.RunTimesEnd }}
    <div style="max-height: 200px; overflow: auto; padding: 15px">
      <el-tag
        v-for="(time, index) in nextRunTimes"
        :key="index"
        size="small"
        class="time-tag"
      >
        {{ time }}
      </el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dayjs, ElMessage } from "element-plus";
import { reactive, computed, watch, onMounted, ref } from "vue";
import { Cron } from "croner";
import type { ElCronConfigProps } from "../types/ElCronConfig";
import { copyClipboard } from "../utils/copyClipboard";
import { isCron } from "../utils/is";
import { zhCn } from "../lang/zh-cn";

const props = withDefaults(defineProps<ElCronConfigProps>(), {
  numberCount: 50,
  modelValue: "* * * * * ?",
  language: () => zhCn,
});
const emits = defineEmits([
  "update:modelValue",
  "update:numberCount",
  "executionError",
]);

const { mon, tue, wed, thu, fri, sat, sum } = props.language.weeks;
// 最近 n 次
const numberCount = computed({
  get() {
    return props.numberCount;
  },
  set(value: number) {
    emits("update:numberCount", value);
  },
});

// 独立配置状态模型
const config = reactive({
  seconds: {
    type: "every" as "every" | "period" | "start" | "specify",
    period: { start: 0, end: 0 },
    start: { from: 0, interval: 1 },
    specify: { values: [] as number[] },
  },
  minutes: {
    type: "every" as "every" | "period" | "start" | "specify",
    period: { start: 0, end: 0 },
    start: { from: 0, interval: 1 },
    specify: { values: [] as number[] },
  },
  hours: {
    type: "every" as "every" | "period" | "start" | "specify",
    period: { start: 0, end: 0 },
    start: { from: 0, interval: 1 },
    specify: { values: [] as number[] },
  },
  day: {
    type: "every" as
      | "every"
      | "none"
      | "period"
      | "start"
      | "lastWeekday"
      | "lastWeekdayOfMonth"
      | "lastDay"
      | "specify",
    period: { start: 1, end: 31 },
    start: { from: 1, interval: 1 },
    specify: { values: [] as number[] },
  },
  month: {
    type: "every" as "every" | "period" | "start" | "specify",
    period: { start: 1, end: 12 },
    start: { from: 1, interval: 1 },
    specify: { values: [] as number[] },
  },
  week: {
    type: "every" as
      | "every"
      | "none"
      | "period"
      | "nthWeekday"
      | "lastWeekday"
      | "specify",
    period: { start: 1, end: 7 },
    nthWeekday: { week: 1, weekday: 1 },
    lastWeekday: { weekday: 1 },
    specify: { values: [] as string[] },
  },
  year: {
    type: "none" as "none" | "every" | "period" | "start" | "specify",
    period: {
      start: new Date().getFullYear(),
      end: new Date().getFullYear() + 10,
    },
    start: { from: new Date().getFullYear(), interval: 1 },
    specify: { values: [] as number[] },
  },
});

const activeName = ref("seconds");

// 生成Cron表达式
const cronExpression = computed(() => {
  const parts = [
    // 秒
    config.seconds.type === "every"
      ? "*"
      : config.seconds.type === "period"
      ? `${config.seconds.period.start}-${config.seconds.period.end}`
      : config.seconds.type === "start"
      ? `${config.seconds.start.from}/${config.seconds.start.interval}`
      : config.seconds.type === "specify" &&
        config.seconds.specify.values.length
      ? config.seconds.specify.values.join(",")
      : "*",

    // 分钟
    config.minutes.type === "every"
      ? "*"
      : config.minutes.type === "period"
      ? `${config.minutes.period.start}-${config.minutes.period.end}`
      : config.minutes.type === "start"
      ? `${config.minutes.start.from}/${config.minutes.start.interval}`
      : config.minutes.type === "specify" &&
        config.minutes.specify.values.length
      ? config.minutes.specify.values.join(",")
      : "*",

    // 小时
    config.hours.type === "every"
      ? "*"
      : config.hours.type === "period"
      ? `${config.hours.period.start}-${config.hours.period.end}`
      : config.hours.type === "start"
      ? `${config.hours.start.from}/${config.hours.start.interval}`
      : config.hours.type === "specify" && config.hours.specify.values.length
      ? config.hours.specify.values.join(",")
      : "*",

    // 日
    config.day.type === "none"
      ? "?"
      : config.day.type === "every"
      ? "*"
      : config.day.type === "period"
      ? `${config.day.period.start}-${config.day.period.end}`
      : config.day.type === "start"
      ? `${config.day.start.from}/${config.day.start.interval}`
      : config.day.type === "lastWeekdayOfMonth" // 新增处理
      ? "LW"
      : config.day.type === "lastWeekday"
      ? `${config.day.start.from}W`
      : config.day.type === "lastDay"
      ? "L"
      : config.day.type === "specify" && config.day.specify.values.length
      ? config.day.specify.values.join(",")
      : "*",

    // 月
    config.month.type === "every"
      ? "*"
      : config.month.type === "period"
      ? `${config.month.period.start}-${config.month.period.end}`
      : config.month.type === "start"
      ? `${config.month.start.from}/${config.month.start.interval}`
      : config.month.type === "specify" && config.month.specify.values.length
      ? config.month.specify.values.join(",")
      : "*",

    // 周
    config.week.type === "none"
      ? "?"
      : config.week.type === "every"
      ? "*"
      : config.week.type === "period"
      ? `${config.week.period.start}-${config.week.period.end}`
      : config.week.type === "nthWeekday"
      ? `${config.week.nthWeekday.week}#${config.week.nthWeekday.weekday}`
      : config.week.type === "lastWeekday"
      ? `${config.week.lastWeekday.weekday}L`
      : config.week.type === "specify" && config.week.specify.values.length
      ? config.week.specify.values
          .map(
            (w) =>
              ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][
                [mon, tue, wed, thu, fri, sat, sum].indexOf(w)
              ]
          )
          .join(",")
      : "*",

    // 年
    config.year.type === "none" || config.year.type === "every"
      ? ""
      : config.year.type === "period"
      ? `${config.year.period.start}-${config.year.period.end}`
      : config.year.type === "start"
      ? `${config.year.start.from}/${config.year.start.interval}`
      : config.year.type === "specify" && config.year.specify.values.length
      ? config.year.specify.values.join(",")
      : "",
  ];

  return parts.join(" ");
});

// 分解表达式用于展示
const cronExpressionParts = computed(() => cronExpression.value.split(" "));

// 计算最近运行时间
const nextRunTimes = computed(() => {
  if (!isCron(props.modelValue)) {
    return [];
  } else {
    if (!cronExpression.value) return [];
    try {
      const job = new Cron(cronExpression.value.toString().trim(), {
        legacyMode: false,
      });
      const times = job
        .nextRuns(props.numberCount)
        .map((time) => dayjs(time).format("YYYY-MM-DD HH:mm:ss dddd"));
      return times;
    } catch (e) {
      console.error("Invalid cron expression:", e);
      emits("executionError", e);
      if ((e as { message: string }).message.includes("W)")) {
        ElMessage.error(
          `${props.language.NotSupportedForNowW}, ${
            (e as { message: string }).message
          }`
        );
      }
      return [];
    }
  }
});

// 周映射表
const weekMapToChinese = {
  MON: mon,
  TUE: tue,
  WED: wed,
  THU: thu,
  FRI: fri,
  SAT: sat,
  SUN: sum,
};

// 解析传入的Cron表达式
const parseCron = (expression: string) => {
  const parts = expression.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 5) return;

  // 确保有7个部分（秒到年）
  const normalized = [...parts, ...Array(7 - parts.length).fill("")];

  // 解析秒
  if (normalized[0] === "*") {
    config.seconds.type = "every";
  } else if (normalized[0].includes("-")) {
    config.seconds.type = "period";
    const [start, end] = normalized[0].split("-");
    config.seconds.period.start = parseInt(start);
    config.seconds.period.end = parseInt(end);
  } else if (normalized[0].includes("/")) {
    config.seconds.type = "start";
    const [from, interval] = normalized[0].split("/");
    config.seconds.start.from = parseInt(from);
    config.seconds.start.interval = parseInt(interval);
  } else {
    config.seconds.type = "specify";
    config.seconds.specify.values = normalized[0].split(",").map(Number);
  }

  // 解析分钟
  if (normalized[1] === "*") {
    config.minutes.type = "every";
  } else if (normalized[1].includes("-")) {
    config.minutes.type = "period";
    const [start, end] = normalized[1].split("-");
    config.minutes.period.start = parseInt(start);
    config.minutes.period.end = parseInt(end);
  } else if (normalized[1].includes("/")) {
    config.minutes.type = "start";
    const [from, interval] = normalized[1].split("/");
    config.minutes.start.from = parseInt(from);
    config.minutes.start.interval = parseInt(interval);
  } else {
    config.minutes.type = "specify";
    config.minutes.specify.values = normalized[1].split(",").map(Number);
  }

  // 解析小时
  if (normalized[2] === "*") {
    config.hours.type = "every";
  } else if (normalized[2].includes("-")) {
    config.hours.type = "period";
    const [start, end] = normalized[2].split("-");
    config.hours.period.start = parseInt(start);
    config.hours.period.end = parseInt(end);
  } else if (normalized[2].includes("/")) {
    config.hours.type = "start";
    const [from, interval] = normalized[2].split("/");
    config.hours.start.from = parseInt(from);
    config.hours.start.interval = parseInt(interval);
  } else {
    config.hours.type = "specify";
    config.hours.specify.values = normalized[2].split(",").map(Number);
  }

  // 解析日
  if (normalized[3] === "?") {
    config.day.type = "none";
  } else if (normalized[3] === "*") {
    config.day.type = "every";
  } else if (normalized[3].includes("-")) {
    config.day.type = "period";
    const [start, end] = normalized[3].split("-");
    config.day.period.start = parseInt(start);
    config.day.period.end = parseInt(end);
  } else if (normalized[3].includes("/")) {
    config.day.type = "start";
    const [from, interval] = normalized[3].split("/");
    config.day.start.from = parseInt(from);
    config.day.start.interval = parseInt(interval);
  } else if (normalized[3] === "LW") {
    // 新增 LW 识别
    config.day.type = "lastWeekdayOfMonth";
  } else if (normalized[3].endsWith("W")) {
    config.day.type = "lastWeekday";
    config.day.start.from = parseInt(normalized[3].slice(0, -1));
  } else if (normalized[3] === "L") {
    config.day.type = "lastDay";
  } else {
    config.day.type = "specify";
    config.day.specify.values = normalized[3].split(",").map(Number);
  }

  // 解析月
  if (normalized[4] === "*") {
    config.month.type = "every";
  } else if (normalized[4].includes("-")) {
    config.month.type = "period";
    const [start, end] = normalized[4].split("-");
    // 添加对月份名称的处理
    const monthMapToNumber = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12,
    };
    config.month.period.start = isNaN(parseInt(start))
      ? monthMapToNumber[start as keyof typeof monthMapToNumber] || 1
      : parseInt(start);
    config.month.period.end = isNaN(parseInt(end))
      ? monthMapToNumber[end as keyof typeof monthMapToNumber] || 12
      : parseInt(end);
  } else if (normalized[4].includes("/")) {
    config.month.type = "start";
    const [from, interval] = normalized[4].split("/");
    // 添加对月份名称的处理
    const monthMapToNumber = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12,
    };
    config.month.start.from = isNaN(parseInt(from))
      ? monthMapToNumber[from as keyof typeof monthMapToNumber] || 1
      : parseInt(from);
    config.month.start.interval = parseInt(interval);
  } else {
    config.month.type = "specify";
    // 添加对月份名称的处理
    const monthMapToNumber = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12,
    };
    config.month.specify.values = normalized[4].split(",").map((m: string) => {
      // 修复月份名称转换问题
      if (isNaN(parseInt(m))) {
        return monthMapToNumber[m as keyof typeof monthMapToNumber] || 1;
      }
      return parseInt(m);
    });
  }

  // 解析周
  if (normalized[5] === "?") {
    config.week.type = "none";
  } else if (normalized[5] === "*") {
    config.week.type = "every";
  } else if (normalized[5].includes("-")) {
    config.week.type = "period";
    const [start, end] = normalized[5].split("-");
    // 支持MON-FRI这样的表达式
    const weekMapToNumber = {
      MON: 1,
      TUE: 2,
      WED: 3,
      THU: 4,
      FRI: 5,
      SAT: 6,
      SUN: 7,
    };
    config.week.period.start = isNaN(parseInt(start))
      ? weekMapToNumber[start as keyof typeof weekMapToNumber] || 1
      : parseInt(start);
    config.week.period.end = isNaN(parseInt(end))
      ? weekMapToNumber[end as keyof typeof weekMapToNumber] || 5
      : parseInt(end);
  } else if (normalized[5].includes("#")) {
    config.week.type = "nthWeekday";
    const [week, weekday] = normalized[5].split("#");
    // 修复：当week超过7时，限制为7
    config.week.nthWeekday.week = Math.min(parseInt(week), 7);
    // 修复：当weekday超过7时，限制为7
    config.week.nthWeekday.weekday = Math.min(parseInt(weekday), 7);
  } else if (normalized[5].includes("L")) {
    config.week.type = "lastWeekday";
    const weekday = normalized[5].replace("L", "");
    config.week.lastWeekday.weekday = parseInt(weekday);
  } else {
    config.week.type = "specify";
    config.week.specify.values = normalized[5]
      .split(",")
      .map(
        (w: string) => weekMapToChinese[w as keyof typeof weekMapToChinese] || w
      );
  }

  // 解析年
  if (!normalized[6]) {
    config.year.type = "none";
  } else if (normalized[6] === "*") {
    config.year.type = "every";
  } else if (normalized[6].includes("-")) {
    config.year.type = "period";
    const [start, end] = normalized[6].split("-");
    config.year.period.start = parseInt(start);
    config.year.period.end = parseInt(end);
  } else if (normalized[6].includes("/")) {
    config.year.type = "start";
    const [from, interval] = normalized[6].split("/");
    config.year.start.from = parseInt(from);
    config.year.start.interval = parseInt(interval);
  } else {
    config.year.type = "specify";
    config.year.specify.values = normalized[6].split(",").map(Number);
  }
};

// 初始化
onMounted(() => {
  if (props.modelValue) {
    parseCron(props.modelValue);
  }
});

// 新增监听 modelValue 变化
watch(
  () => props.modelValue,
  (newVal) => {
    if (isCron(newVal)) {
      parseCron(newVal);
    }
  }
);

// 处理日和周的互斥冲突
watch(
  () => config.day.type,
  (newVal) => {
    if (newVal !== "none" && newVal !== "every") {
      config.week.type = "none";
    }
  }
);
watch(
  () => config.week.type,
  (newVal) => {
    if (newVal !== "none" && newVal !== "every") {
      config.day.type = "none";
    }
  }
);

// 监听配置变化
watch(
  config,
  () => {
    emits("update:modelValue", cronExpression.value);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.border-container {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.el-radio-group {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .el-radio {
    margin: 0 0 8px;
  }
}
.time-tag {
  margin-right: 5px;
  margin-top: 5px;
}
</style>
