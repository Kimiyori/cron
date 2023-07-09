import { useEffect, useState } from "react";
import { handleCronString } from "../utils/cronString";
export type TypeCron = {
  minute: number[];
  hour: number[];
  day: number[];
  month: number[];
  weekday: number[];
  every: string;
};

export const useCron = () => {
  const [cronData, setCronData] = useState<TypeCron>({
    minute: [],
    hour: [],
    day: [],
    month: [],
    weekday: [],
    every: "minute",
  });
  const [cronString, setCronString] = useState(handleCronString(cronData));
  const changeCronData = (updatedString: Partial<TypeCron>) => {
    setCronData({ ...cronData, ...updatedString });
  };
  useEffect(() => setCronString(handleCronString(cronData,false,false)), [cronData]);
  return { cronData, cronString, changeCronData };
};
