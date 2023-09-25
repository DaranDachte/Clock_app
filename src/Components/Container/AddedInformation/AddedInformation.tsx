import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const AddedInformation = () => {
  const appctx = useContext(ApplicationContext);
  const classes = [
    "flex h-1/2   justify-evenly ",
    appctx.showAddedInformation ? "" : "hidden",
  ];

  return (
    <div className={classes.join(" ")}>
      <div>
        <p> CURRENT TIMEZONE</p>
        <h3>{appctx.timeAndLocationState?.worldTime.timezone}</h3>
        <p>DAY OF THE YEAR</p>
        <h3>{appctx.timeAndLocationState?.worldTime.day_of_year}</h3>
      </div>
      <div></div>
      <div>
        <p>DAY OF THE WEEK</p>
        <h3>{appctx.timeAndLocationState?.worldTime.day_of_week}</h3>
        <p>WEEK NUMBER </p>
        <h3>{appctx.timeAndLocationState?.worldTime.week_number}</h3>
      </div>
    </div>
  );
};

export default AddedInformation;
