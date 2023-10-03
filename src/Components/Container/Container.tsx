import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";

const Container = () => {
  return (
    <div className="w-screen  h-screen bg-[#EE82EE] ">
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
