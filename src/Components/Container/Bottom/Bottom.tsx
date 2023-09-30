import TimeSet from "./TimeSet/TimeSet";
import Toggle from "./Toggle/Toggle";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const Bottom = () => {
  const appctx = useContext(ApplicationContext);

  return (
    <>
      <div className="flex h-1/2   justify-evenly items-end pb-[5rem] ">
        <div>
          <TimeSet
            timeAndLocationState={appctx.timeAndLocationState}
            worldTimeIsLoading={appctx.worldTimeIsLoading}
            worldTimeError={appctx.worldTimeError}
          />
        </div>

        <div>
          <Toggle
            showAdditionalInfo={appctx.showAddedInformation}
            changeBottomAndAddInfo={appctx.setShowAddedInformation}
          />
        </div>
      </div>
    </>
  );
};

export default Bottom;
