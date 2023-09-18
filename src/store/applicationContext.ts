import { createContext } from "react";
import { Advice, WorldTime } from "../models/domain";

type CtxValue = {
  upDateAdvice: () => Promise<void>;
  getAdviceData: () => Promise<void>;
  getWorldtime: () => Promise<void>;
  advice: Advice | null;
  worldTime: WorldTime | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
};

export const ApplicationContext = createContext<CtxValue>({
  upDateAdvice: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getAdviceData: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },

  // getLocation: function (): void {
  // throw new Error("Function not implemented.");
  //},
  getWorldtime: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  // это не адвайс строка из объекта, это адвайс состояние, которое мы создаем с помощью useState
  advice: {
    id: 0,
    advice: "",
  },
  worldTime: {
    abbreviation: "",
    client_ip: "",
    datetime: "",
    day_of_week: 0,
    day_of_year: 0,
    dst: false,
    dst_from: "",
    dst_offset: 0,
    dst_until: "",
    raw_offset: 0,
    timezone: "",
    unixtime: 0,
    utc_datetime: "",
    utc_offset: "",
    week_number: 0,
  },
  worldTimeError: "",
  worldTimeIsLoading: false,
});
