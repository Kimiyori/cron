import { arrayToString } from "cron-converter";
import { TypeCron } from "../hooks/useCron";
import { getRange } from "./getRange";

const handleEmpty = (
  arr: number[],
  defaultRange: { min: number; max: number }
) => {
  return arr.length === 0 ? getRange(defaultRange.min, defaultRange.max) : arr;
};
export const handleCronString = (
  cronData: TypeCron,
  outputMonthNames: boolean = true,
  outputWeekdayNames: boolean = true
) => {
  return arrayToString(
    [
      handleEmpty(cronData.minute, { min: 0, max: 60 }),
      handleEmpty(cronData.hour, { min: 0, max: 24 }),
      handleEmpty(cronData.day, { min: 1, max: 32 }),
      handleEmpty(cronData.month, { min: 1, max: 13 }),
      handleEmpty(cronData.weekday, { min: 0, max: 7 }),
    ],
    {
      outputMonthNames: outputMonthNames,
      outputWeekdayNames: outputWeekdayNames,
    }
  );
};
