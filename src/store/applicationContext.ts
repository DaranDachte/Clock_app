import { createContext } from "react";
import { Advice, WorldTimeAndLocation } from "../models/domain";

type CtxValue = {
  upDateAdvice: () => Promise<void>;
  getAdviceData: () => Promise<void>;
  getWorldtime: () => Promise<void>;
  advice: Advice | null;
  timeAndLocationState: WorldTimeAndLocation | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
  showAddedInformation: boolean;
  setShowAddedInformation: () => void;
  changeBg: boolean;
  setChangeBg: (x: boolean) => void;
};

export const ApplicationContext = createContext<CtxValue>({
  upDateAdvice: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getAdviceData: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },

  getWorldtime: async function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  // это не адвайс строка из объекта, это адвайс состояние, которое мы создаем с помощью useState
  advice: {
    id: 0,
    advice: "",
  },
  timeAndLocationState: {
    worldTime: {
      worldTime: "",
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
    location: {
      timezone: "",
      city: "",
      country: "",
    },
  },
  worldTimeError: "",
  worldTimeIsLoading: false,
  showAddedInformation: false,
  setShowAddedInformation: function (): void {
    throw new Error("Function not implemented.");
  },
  changeBg: false,

  setChangeBg: function (x: boolean): void {
    throw new Error("Function not implemented.".concat(x.toString()));
  },
});
