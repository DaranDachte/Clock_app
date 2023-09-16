import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Dst from "./Dst/Dst";
import Location from "./Location/Location";
import { WorldTime } from "../../../../models/domain";

interface TimeSetProps {
  worldTime: WorldTime | null;
}

const TimeSet: React.FC<TimeSetProps> = ({ worldTime }) => {
  return (
    <>
      <div className="flex flex-col">
        <Greeting dateTime={(worldTime && worldTime.datetime) || null} />
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
