import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Dst from "./Dst/Dst";
import Location from "./Location/Location";
import { WorldTime, WorldTimeAndLocation } from "../../../../models/domain";

interface TimeSetProps {
  worldTime: WorldTimeAndLocation;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const TimeSet: React.FC<TimeSetProps> = ({
  worldTime,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <Greeting
          worldTime={
            (worldTime &&
              worldTime.worldTime &&
              worldTime.worldTime.datetime) ||
            null
          }
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
        <Time
          worldTime={
            (worldTime &&
              worldTime.worldTime &&
              worldTime.worldTime.datetime) ||
            null
          }
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
        <Location
          location={(worldTime && worldTime.location) || null}
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
      </div>

      <div className="flex flex-row">
        <Dst />
      </div>
    </>
  );
};

export default TimeSet;
