import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";

import { ApplicationContext } from "../../store/applicationContext";

import { useContext } from "react";

const Container = () => {
  const appCtx = useContext(ApplicationContext);

  return (
    <div>
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
