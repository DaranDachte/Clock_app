import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";
import bgImageDaytime from "../../assets/img/bgImageDaytime.jpg";

const Container = () => {
  return (
    <div className="w-screen h-screen bg-opacity-40 bg-cover bg-center bg-[url('src/assets/img/bgImageDaytime.jpg')]  ">
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
