import Sun from "../../../../../assets/img/Sun.svg";
import Moon from "../../../../../assets/img/Moon.svg";
interface GreetingProps {
  time: string | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const NIGHT = "night";

const Greeting: React.FC<GreetingProps> = ({
  time,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  const greetingDate = time !== null ? new Date(time) : new Date();

  const secInHour = 3600;
  const hours = greetingDate.getHours();

  const minutes = greetingDate.getMinutes();
  const seconds = greetingDate.getSeconds();

  const totalTimeInSeconds = hours * secInHour + minutes * 60 + seconds;

  const filterPeriod = (
    totalTime: number,
    period: { start: number; end: number }
  ) => {
    const { start, end } = period;
    return start < totalTime && end > totalTime;
  };

  const nigth1 = { name: NIGHT, start: 0, end: 6 * secInHour - 1 };

  const morning = {
    name: "morning",
    start: 6 * secInHour,
    end: 12 * secInHour - 1,
  };
  const day = { name: "day", start: 12 * secInHour, end: 17 * secInHour - 1 };

  const evening = {
    name: "evening",
    start: 17 * secInHour,
    end: 23 * secInHour - 1,
  };
  const nigth2 = {
    name: NIGHT,
    start: 23 * secInHour,
    end: 23 * secInHour + 3600 - 1,
  };
  const currentPeriodName = [nigth1, morning, day, evening, nigth2]

    .filter((period) => filterPeriod(totalTimeInSeconds, period))

    .map((period) => period.name)[0];

  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        {worldTimeIsLoading ? (
          <p>Loading...</p>
        ) : worldTimeError ? (
          <p>Sorry {worldTimeError}</p>
        ) : (
          <div className="text-[1.125rem] font-normal text-[#fff] tracking-[0.25rem]">
            <span>
              {currentPeriodName === NIGHT ? (
                <img className="inline mr-[1rem]" src={Moon} alt="Moon" />
              ) : (
                <img className="inline mr-[1rem]" src={Sun} alt="Sun" />
              )}
              Good {currentPeriodName}, it's currently:
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Greeting;
