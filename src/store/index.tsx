import { ApplicationContext } from "./applicationContext";
import { Advice, Data, WorldTime, Location } from "../models/domain";
import { fetcher } from "../Helpers/fetcher";
import { useState, useEffect } from "react";

type ApplicationContextProviderProps = {
  children: React.ReactNode;
};

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderProps) {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [worldTime, setWorldTime] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getAdviceData();
    getWorldtime();
  }, []);

  const getAdviceData = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data: Data = await fetcher("https://api.adviceslip.com/advice");
      setAdvice(data.slip);
      setIsLoading(false);
    } catch (error) {
      setError("Something goes wrong!");
      setAdvice(null);
    }
  };

  const upDateAdvice = async () => {
    getAdviceData();
  };

  const getWorldtime = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data: WorldTime = await fetcher("http://worldtimeapi.org/api");
      setWorldTime(data);
      setIsLoading(false);
    } catch (error) {
      setError("Something goes wrong!");
      setWorldTime(null);
    }
  };
  const getLocation = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data: Location = await fetcher("http://worldtimeapi.org/api");
      setLocation(data);
      setIsLoading(false);
    } catch (error) {
      setError("Something goes wrong!");
      setLocation(null);
    }
  };

  const ctxValue = {
    getLocation,
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
