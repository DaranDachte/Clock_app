import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const AddedInformation = () => {
  const appctx = useContext(ApplicationContext);
  const classes = [
    "flex h-1/2   justify-evenly  bg-white/[.75] backdrop-blur-[20.3px] pt-[4.62rem] ",
    appctx.showAddedInformation ? "" : "hidden",
  ];

  return (
    <div className={classes.join(" ")}>
      <div>
        <p className=" text-[0.9375rem] text-[#303030] not-italic font-normal tracking-[ 0.1875rem]">
          CURRENT TIMEZONE
        </p>
        <h3 className=" text-[3.5rem] text-[#303030] not-italic font-bold  tracking-[ 0.1875rem]">
          {appctx.timeAndLocationState?.worldTime.timezone}
        </h3>
        <p className=" text-[0.9375rem] text-[#303030] not-italic font-normal tracking-[ 0.1875rem]">
          DAY OF THE YEAR
        </p>
        <h3 className=" text-[3.5rem] text-[#303030] not-italic font-bold tracking-[ 0.1875rem]">
          {appctx.timeAndLocationState?.worldTime.day_of_year}
        </h3>
      </div>
      <div className="border-l-[1px] border-l-[#8b8b8b] max-h-[20rem]"> </div>
      <div>
        <p className=" text-[0.9375rem] text-[#303030] not-italic font-normal tracking-[ 0.1875rem]">
          DAY OF THE WEEK
        </p>
        <h3 className=" text-[3.5rem] text-[#303030] not-italic font-bold tracking-[ 0.1875rem]">
          {appctx.timeAndLocationState?.worldTime.day_of_week}
        </h3>
        <p className=" text-[0.9375rem] text-[#303030] not-italic font-normal tracking-[ 0.1875rem]">
          WEEK NUMBER
        </p>
        <h3 className=" text-[3.5rem] text-[#303030] not-italic font-bold tracking-[ 0.1875rem]">
          {appctx.timeAndLocationState?.worldTime.week_number}
        </h3>
      </div>
    </div>
  );
};

export default AddedInformation;
