import { ApplicationContext } from "./applicationContext";
import {
  Advice,
  Data,
  WorldTime,
  Location,
  WorldTimeAndLocation,
} from "../models/domain";
import { fetcher } from "../Helpers/fetcher";
import { useState, useEffect } from "react";
import { getIp } from "../services/ip.service";

type ApplicationContextProviderProps = {
  children: React.ReactNode;
};

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderProps) {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [adviceError, setAdviceError] = useState("");
  const [adviceIsLoading, setAdviceIsLoading] = useState(true);

  const [worldTime, setWorldTime] = useState<WorldTimeAndLocation | null>(null);
  const [worldTimeError, setWorldTimeError] = useState("");
  const [worldTimeIsLoading, setWorldTimeIsLoading] = useState(true);

  useEffect(() => {
    getAdviceData();
    getWorldtime();
  }, []);

  const getAdviceData = async () => {
    if (!adviceIsLoading) setAdviceIsLoading(true);
    try {
      const data: Data = await fetcher("https://api.adviceslip.com/advice");
      setAdvice(data.slip);
      setAdviceIsLoading(false);
    } catch (error) {
      setAdviceError("Something goes wrong!");
      setAdvice(null);
    }
  };

  const upDateAdvice = async () => {
    getAdviceData();
  };

  const getWorldtime = async () => {
    if (!worldTimeIsLoading) setWorldTimeIsLoading(true);
    try {
      // Функция getLocation нужна нам только для того, чтобы через нее вызвать метод ipBase.info() и узнать
      //адрес человека, зашедшего на сайт. После этого, мы берем этот метод и вставляем в функцию   getWorldtime.
      // Это нам нужно для того, чтобы определить порядок срабатывания функций. То есть вначале приложение будет узнавать
      //локацию, а потом исходя из этой локации присылать нам объект, где будут находиться свойства этого конкретного пользователя.
      // Теперь мы можем удалить функцию getLocation(), потому что мы импортировали import Ipbase from "@everapi/ipbase-js" и воспользовались/
      //методом   ipBase.info(), с помощью которого мы можем узнавать локацию.
      const locdata: Location = await getIp();

      const data: WorldTime = await fetcher(
        `http://worldtimeapi.org/api/timezone/${locdata.timezone}`
      );
      const worldTimeAndLocation: WorldTimeAndLocation = {
        worldTime: data,
        location: locdata,
      };
      setWorldTime(worldTimeAndLocation);
      setWorldTimeIsLoading(false);
    } catch (error) {
      setWorldTimeError("Something goes wrong!");
      setWorldTime(null);
    }
  };

  const ctxValue = {
    worldTimeIsLoading,
    worldTimeError,
    advice,
    worldTime,
    getWorldtime,
    getAdviceData,
    upDateAdvice,
  };

  return (
    <ApplicationContext.Provider value={ctxValue}>
      {children}
    </ApplicationContext.Provider>
  );
}
