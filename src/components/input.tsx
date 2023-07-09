import {
  ChangeEvent,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CronContext } from "../features/cronContext";
import { stringToArray } from "cron-converter";
import { cronKeys } from "../utils/const";

const changeColor = (element: HTMLElement, prev: string, next: string) => {
  element.classList.contains(prev) && element.classList.remove(prev);
  element.classList.add(next);
};

export const CronInput = () => {
  const { cronString, changeCronData } = useContext(CronContext);
  const [inputString, setInputString] = useState(cronString);
  const inputElement = useRef() as MutableRefObject<HTMLInputElement>;
  useEffect(() => setInputString(cronString), [cronString]);
  useEffect(() => {
    try {
      const newCronList = stringToArray(inputString);
      const newCronObj = {} as { [key: string]: number[] };
      for (let i = 0; i < newCronList.length; i++) {
        newCronObj[cronKeys[i]] = newCronList[i];
      }
      changeCronData(newCronObj);
      changeColor(inputElement.current, "bg-danger", "bg-white");
    } catch {
      changeColor(inputElement.current, "bg-white", "bg-danger");
    }
  }, [inputString]);
  return (
    <>
      <form className="w-50">
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInputString(event.target.value)
          }
          className="w-100"
          ref={inputElement}
          value={inputString}
        ></input>
      </form>
    </>
  );
};
