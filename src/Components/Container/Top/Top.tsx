import Citation from "./Citation/Citation";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const Top = () => {
  const appctx = useContext(ApplicationContext);
  const classes = [
    "flex h-1/2  justify-evenly ",
    appctx.showAddedInformation ? "hidden " : "",
  ];
  return (
    <>
      <div className={classes.join(" ")}>
        <Citation upDateAdvice={appctx.upDateAdvice} advice={appctx.advice} />
        <div>&nbsp;</div>
      </div>
    </>
  );
};

export default Top;
