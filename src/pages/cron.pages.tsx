import { useContext } from "react";
import { EveryController, everyOptions } from "../components/EveryController";
import { CronContext } from "../features/cronContext";
import { CronInput } from "../components/input";
import DropdownList from "../components/DropdownList";
import { monthNames, weekDays } from "../utils/const";
export const CronPage = () => {
  const { cronData } = useContext(CronContext);
  return (
    <>
      <section className="container d-flex flex-column align-items-start gap-3 m-5">
        <h1>Schedule</h1>
        <CronInput />
        <div className="d-flex flex-row gap-3">
          <EveryController />
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 6 && (
            <DropdownList
              type={"month"}
              range={{ min: 1, max: monthNames.length+1 }}
              representation={monthNames}
            />
          )}
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 5 && (
            <DropdownList type={"day"} range={{ min: 1, max: 32 }} />
          )}
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 4 && (
            <DropdownList
              type={"weekday"}
              range={{ min: 0, max: weekDays.length }}
              representation={weekDays}
            />
          )}
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 3 && (
            <DropdownList type={"hour"} range={{ min: 0, max: 24 }} />
          )}
          {everyOptions.indexOf(cronData.every) <= everyOptions.length - 2 && (
            <DropdownList type={"minute"} range={{ min: 0, max: 60 }} />
          )}
          
        </div>
      </section>
    </>
  );
};
