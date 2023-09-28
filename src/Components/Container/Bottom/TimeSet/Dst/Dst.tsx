import type { WorldTimeAndLocation } from "../../../../../models/domain";

interface DstProps {
  timeAndLocationState: WorldTimeAndLocation | null;
}
const Dst: React.FC<DstProps> = ({ timeAndLocationState }) => {
  const state =
    timeAndLocationState !== null
      ? timeAndLocationState
      : { location: { country: "" }, worldTime: { dst: false } }; // на случай null, нам нужно прописать условия
  // потому что из null  мы ничего не можем прочитать, это вызывает ошибку.

  const {
    location: { country },
    worldTime: { dst },
  } = state;

  return (
    <div>
      {!dst ? (
        <></>
      ) : country === "UK" ? (
        <p className=" font-light text-[2.5rem] text-[#fff]">BST</p>
      ) : (
        <p className=" font-light text-[2.5rem] text-[#fff]">DST</p>
      )}
    </div>
  );
};

export default Dst;
