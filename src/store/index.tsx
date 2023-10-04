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

  const [timeAndLocationState, setTimeAndLocationState] =
    useState<WorldTimeAndLocation | null>(null);
  const [worldTimeError, setWorldTimeError] = useState("");
  const [worldTimeIsLoading, setWorldTimeIsLoading] = useState(true);

  const [showAddedInformation, setShowAddedInformation] = useState(false);

  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    getAdviceData();
    getWorldtime();
    document.body.setAttribute("theme", changeBg ? "Dark" : "Light");
    const interval = setInterval(updateTimeSilently, 10000);
    return () => clearInterval(interval);
  }, [changeBg]);

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
      const locdata: Location = await getIp(); // запрос данных геолокации, из отдельного сервиса.

      const data: WorldTime = await fetcher(
        `http://worldtimeapi.org/api/timezone/${locdata.timezone}`
      );
      const worldTimeAndLocation: WorldTimeAndLocation = {
        location: locdata,
        worldTime: data,
      };
      setTimeAndLocationState(worldTimeAndLocation);
      setWorldTimeIsLoading(false);
    } catch (error) {
      setWorldTimeError("Something goes wrong!");
      setTimeAndLocationState(null);
    }
  };

  const updateTimeSilently = async () => {
    try {
      const locdata: Location = await getIp(); // запрос данных геолокации, из отдельного сервиса.
      const data: WorldTime = await fetcher(
        `http://worldtimeapi.org/api/timezone/${locdata.timezone}`
      );
      const worldTimeAndLocation: WorldTimeAndLocation = {
        location: locdata,
        worldTime: data,
      };
      setTimeAndLocationState(worldTimeAndLocation);
    } catch (error) {
      setWorldTimeError("Something goes wrong!");
      setTimeAndLocationState(null);
    }
  };

  const сhangeBackgroundTheme = () => {
    const timeString = timeAndLocationState?.worldTime.datetime;
    const timeParts = timeString.split(":"); // Разбиваем строку по двоеточию ["23", "00", "00"]

    const hours = parseInt(timeParts[0]); // Преобразуем часы в число
    const minutes = parseInt(timeParts[1]); // Преобразуем минуты в число
    const seconds = parseInt(timeParts[2]); // Преобразуем секунды в число

    // Вычисляем общее время в часах с плавающей точкой
    const totalTime = hours + minutes / 60 + seconds / 3600;

    totalTime > 23 && totalTime < 6
      ? setChangeBg((prevVal) => !prevVal)
      : changeBg;
  };

  const ctxValue = {
    worldTimeIsLoading,
    worldTimeError,
    advice,
    timeAndLocationState,
    getWorldtime,
    getAdviceData,
    upDateAdvice,
    showAddedInformation,
    setShowAddedInformation,
    changeBg,
    сhangeBackgroundTheme,
  };

  return (
    <ApplicationContext.Provider value={ctxValue}>
      {children}
    </ApplicationContext.Provider>
  );
}
