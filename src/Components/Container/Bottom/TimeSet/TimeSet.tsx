import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Dst from "./Dst/Dst";
import Location from "./Location/Location";
import { WorldTimeAndLocation } from "../../../../models/domain";

interface TimeSetProps {
  timeAndLocationState: WorldTimeAndLocation | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const TimeSet: React.FC<TimeSetProps> = ({
  timeAndLocationState,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <Greeting
          time={
            (timeAndLocationState &&
              timeAndLocationState.worldTime &&
              timeAndLocationState.worldTime.datetime) ||
            null
          }
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
        <Time
          time={
            (timeAndLocationState &&
              timeAndLocationState.worldTime &&
              timeAndLocationState.worldTime.datetime) ||
            null
          }
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
        <Location
          location={
            (timeAndLocationState && timeAndLocationState.location) || null
          }
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
      </div>

      <div className="flex flex-row">
        <Dst timeAndLocationState={timeAndLocationState} />
      </div>
    </>
  );
};

export default TimeSet;
