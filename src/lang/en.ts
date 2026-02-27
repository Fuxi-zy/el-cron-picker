import type { langType } from "../types/lang";

/**
 * @description 英文语言包
 */
export const en: langType = {
  copy: {
    InvalidCopiedContent: "Invalid copied content: must be a non-empty string",
    copySuccess: "Copy successful",
    TraditionalCopySuccess: "Traditional copy successful",
    TraditionalCopyFailed: "Traditional copy failed: ",
    ModernCopyFailed:
      "Modern clipboard API copy failed, trying traditional method: ",
    ClickToCopy: "Click to copy",
  },
  ElCronPicker: {
    close: "Close",
    cancel: "Cancel",
    CronExpression: "Cron expression",
    CronConfig: "Cron configuration",
    CronFormatError:
      "Cron expression format error, please reconfigure Cron expression",
    PleaseConfigureThroughPanel:
      "Please configure Cron expression through panel",
    CronExpressionPlaceholder: "Please enter cron expression",
  },
  timers: {
    seconds: "seconds",
    minutes: "minutes",
    hour: "hour",
    day: "day",
    month: "month",
    week: "week",
    year: "year",
  },
  weeks: {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sum: "Sunday",
  },
  ElCronConfig: {
    week: "Week",
    AllowedWildcards: "Allowed wildcards",
    cycle: "Cycle",
    Start: "Starting from",
    secondStart: " second, it is executed once every ",
    secondEnd: " seconds",
    minutesStart: " minute, it is executed once every ",
    minutesEnd: " minutes",
    hourStart: " o'clock, it is executed once every ",
    hourEnd: " hours",
    dayStart: " day, it is executed once every ",
    dayEnd: " days",
    monthStart: " it will be implemented once every ",
    monthEnd: " months",
    yearStart: ", it will be implemented once every ",
    yearEnd: " years",
    Specified: "Specified",
    NotSpecified: "Not specified",
    EveryMonthStart: "The nearest working day to the ",
    EveryMonthEnd: " day of each month",
    LastDayMonth: "The last day of this month.",
    WeekStart: "week ",
    WeekCenter: " of the ",
    WeekEnd: " week",
    LastWeekOfMonth: "The last week of this month, ",
    EveryYear: "Every year",
    TimeExpression: "Time expression",
    Expression: "Expression",
    RunTimesStart: "The last ",
    RunTimesEnd: " runing times:",
  },
  MultipleOptionsAvailable: "Multiple options available",
  NotFill: "Not fill",
  NotSupportedForNowW:
    "The situation where the daily parameter carries W is not supported for the time being",
};