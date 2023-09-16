import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";

const Container = () => {
  return (
    <div className="w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
