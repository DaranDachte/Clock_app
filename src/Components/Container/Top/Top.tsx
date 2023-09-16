import Citation from "./Citation/Citation";
import { useContext } from "react";
import { ApplicationContext } from "../../../store/applicationContext";

const Top = () => {
  const appctx = useContext(ApplicationContext);

  return (
    <>
      <div className="flex h-1/2 flex-col ">
        <Citation upDateAdvice={appctx.upDateAdvice} advice={appctx.advice} />
      </div>
    </>
  );
};

export default Top;
