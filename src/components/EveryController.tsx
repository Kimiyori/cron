import { ChangeEvent, useContext } from "react";
import { CronContext } from "../features/cronContext";

export const everyOptions = ["year", "month", "weekday", "day", "hour", "minute"];
export const EveryController = () => {
  const { cronData, changeCronData} = useContext(CronContext);
  const everyChange = (event: ChangeEvent<HTMLSelectElement>) =>
    changeCronData({ every: event.target.value });
  return (
    <>
      <div className="btn-group d-flex align-items-center">
        <select
          className="form-selec"
          aria-label="select"
          onChange={everyChange}
          value={cronData.every}
        >
          {everyOptions.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
