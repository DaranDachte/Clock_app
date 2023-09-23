import TimeSet from "./TimeSet/TimeSet";
import Toggle from "./Toggle/Toggle";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const Bottom = () => {
  const appctx = useContext(ApplicationContext);

  return (
    <>
      <div className="flex ">
        <div className="w-1/2">
          <TimeSet
            timeAndLocationState={appctx.timeAndLocationState}
            worldTimeIsLoading={appctx.worldTimeIsLoading}
            worldTimeError={appctx.worldTimeError}
          />
        </div>

        <div className="w-1/2">
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
