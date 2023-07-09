import { PropsWithChildren, createContext } from "react";
import { TypeCron, useCron } from "../hooks/useCron";
import { handleCronString } from "../utils/cronString";

type TypeCronContext = {
  cronData: TypeCron;
  cronString: string;
  changeCronData: (updatedString: Partial<TypeCron>) => void;
};

const defaultCronData = {
  minute: [],
  hour: [],
  day: [],
  month: [],
  weekday: [],
  every: "Minute",
};

const defaultCronContextValue = {
  cronData: defaultCronData,
  cronString: handleCronString(defaultCronData),
  changeCronData: () => undefined,
};

export const CronContext = createContext<TypeCronContext>(
  defaultCronContextValue
);
export const CronProvider = ({ children }: PropsWithChildren) => {
  const { cronData, cronString, changeCronData } = useCron();

  return (
    <CronContext.Provider value={{ cronData, cronString, changeCronData }}>
      {children}
    </CronContext.Provider>
  );
};
