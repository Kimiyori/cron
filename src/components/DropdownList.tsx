import { ChangeEvent, useContext } from "react";
import { CronContext } from "../features/cronContext";
import { getRange } from "../utils/getRange";
import { TypeCron } from "../hooks/useCron";

type TDropdownList = {
  type: keyof TypeCron;
  range: { min: number; max: number };
  representation?: string[];
};

const DropdownList = ({ type, range, representation }: TDropdownList) => {
  const { cronData, changeCronData } = useContext(CronContext);
  const updateCron = (event: ChangeEvent<HTMLSelectElement>) => {
    const arr = Object.values(event.target.selectedOptions).map((opt) =>
      Number(opt.value)
    );

    changeCronData({ [type]: arr });
  };
  return (
    <>
      <div className="btn-group">
        <button
          className=" dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          {cronData[type].length >= range.max - 1 || cronData[type].length === 0
            ? `Every ${type}`
            : (cronData[type] as number[]).join(",")}
        </button>

        <select
          className=" form-selec dropdown-menu"
          multiple
          aria-label="multiple select example"
          onChange={updateCron}
        >
          {getRange(range.min, range.max).map((option, i) => (
            <option value={option} key={i}>
              {representation ? representation[i] : option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default DropdownList;
