import { useContext } from "react";
import { EveryController, everyOptions } from "../components/EveryController";
import { CronContext } from "../features/cronContext";
import { CronInput } from "../components/input";
import DropdownList from "../components/DropdownList";
import { monthNames, weekDays } from "../utils/const";
import { Pointer } from "../components/Pointer";
export const CronPage = () => {
  const { cronData } = useContext(CronContext);
  return (
    <>
      <section className="container d-flex flex-column align-items-start gap-3 m-5">
        <h1>Schedule</h1>
        <CronInput />
        <div className="d-flex flex-row gap-3 align-items-center">
          <span>Every</span>
          <EveryController />
          <Pointer text="in" popIndex={6} comparison="===" />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 6 && (
            <DropdownList
              type={"month"}
              range={{ min: 1, max: monthNames.length + 1 }}
              representation={monthNames}
            />
          )}
          <Pointer text="on" popIndex={5} comparison="<" />
          <Pointer text="on" popIndex={5} comparison="===" />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 5 && (
            <DropdownList type={"day"} range={{ min: 1, max: 32 }} />
          )}
          <Pointer text="and" popIndex={4} comparison="<" />
          <Pointer text="on" popIndex={4} comparison="===" />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 4 && (
            <DropdownList
              type={"weekday"}
              range={{ min: 0, max: weekDays.length }}
              representation={weekDays}
            />
          )}
          <Pointer text="at" popIndex={2} comparison="<" />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 3 && (
            <DropdownList type={"hour"} range={{ min: 0, max: 24 }} />
          )}
          <Pointer text=":" popIndex={2} comparison="<" />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 2 && (
            <DropdownList type={"minute"} range={{ min: 0, max: 60 }} />
          )}
          <Pointer text="minute(s)" popIndex={2} comparison="===" />
        </div>
      </section>
    </>
  );
};
