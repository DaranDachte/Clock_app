import { WorldTimeAndLocation } from "../../../../../models/domain";

interface TimeProps {
  time: string | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
  timeAndLocationState: WorldTimeAndLocation | null;
}

const normalizeTime = (time: number) => {
  return time > 9 ? time.toString() : "0" + time;
};

const Time: React.FC<TimeProps> = ({
  time,
  worldTimeIsLoading,
  timeAndLocationState,
}) => {
  const showDate = time !== null ? new Date(time) : new Date();

  const hours = showDate.getHours();
  const minutes = showDate.getMinutes();

  const state =
    timeAndLocationState !== null
      ? timeAndLocationState
      : { location: { country: "" }, worldTime: { dst: false } }; // на случай null, нам нужно прописать условия
  // потому что из null  мы ничего не можем прочитать, это вызывает ошибку.

  const {
    location: { country },
    worldTime: { dst },
  } = state;

  return (
    <div>
      {worldTimeIsLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <span className=" leading-[12.5rem] text-[12.5rem] font-bold text-[#fff] tracking -[-0.3125rem]">
            {normalizeTime(hours)}:{normalizeTime(minutes)}
          </span>
          {!dst ? (
            <></>
          ) : country === "UK" ? (
            <span className=" ml-4 font-light text-[2.5rem] text-[#fff]">
              BST
            </span>
          ) : (
            <span className=" ml-4 font-light text-[2.5rem] text-[#fff]">
              DST
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Time;
