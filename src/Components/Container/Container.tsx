import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import AddedInformation from "./AddedInformation/AddedInformation";

const Container = () => {
  return (
    <div className="w-screen  h-screen bg-gradient-to-r from-black/[.8] to-black/[.8]  bg-cover bg-center bg-[url('src/assets/img/bgImageDaytime.jpg')] ">
      <Top />
      <Bottom />
      <AddedInformation />
    </div>
  );
};

export default Container;
