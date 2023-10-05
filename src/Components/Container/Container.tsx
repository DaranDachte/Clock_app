import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";
import { useContext } from "react";
import { ApplicationContext } from "../../store/applicationContext";

const Container = () => {
  const appctx = useContext(ApplicationContext);
  const classes = `w-screen  h-screen  bg-background-image ${
    appctx.changeBg ? "theme-dark" : "theme-light"
  }`;
  return (
    <div className={classes}>
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
