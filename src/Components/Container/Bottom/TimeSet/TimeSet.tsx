import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Dst from "./Dst/Dst";
import Location from "./Location/Location";
import { WorldTime } from "../../../../models/domain";

interface TimeSetProps {
  worldTime: WorldTime | null;
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
          worldTime={(worldTime && worldTime.datetime) || null}
          worldTimeError={worldTimeError}
          worldTimeIsLoading={worldTimeIsLoading}
        />
        <Time />
        <Location />
      </div>

      <div className="flex flex-row">
        <Dst />
      </div>
    </>
  );
};

export default TimeSet;
