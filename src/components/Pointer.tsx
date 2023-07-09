import { useContext } from "react";
import { CronContext } from "../features/cronContext";
import { everyOptions } from "./EveryController";

export const Pointer = ({
  popIndex,
  text,
  comparison,
}: {
  popIndex: number;
  text: string;
  comparison: string;
}) => {
  const { cronData } = useContext(CronContext);
  const bool =
    comparison === "==="
      ? everyOptions.indexOf(cronData.every) === everyOptions.length - popIndex
      : everyOptions.indexOf(cronData.every) < everyOptions.length - popIndex;
  return (
    <>
      {bool && <span>{text}</span>}
    </>
  );
};
